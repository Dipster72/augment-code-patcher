/**
 * Augment Code Extension 完整拦截器
 * 
 * ✅ 40+数据点身份配置文件系统
 * ✅ 智能网络策略（分层决策）
 * ✅ 完整SystemInformation库拦截
 * ✅ 硬件配置模板系统
 * ✅ 文件系统拦截
 * ✅ 性能监控
 * 
 */

(function() {
    'use strict';

    // 临时使用console.log，因为logger还未初始化
    console.log('🚀 正在加载 Augment Code Extension 完整拦截器 ...');

    // ==================== 1. 统一日志系统 ====================

    /**
     * 极简日志管理器 - 专注核心拦截监控功能
     */
    class AugmentLogger {
        constructor() {
            this.enabled = true;
        }

        // 简洁格式：emoji + [类别] + 操作 + 详情
        _formatMessage(emoji, category, action, details = '') {
            return `${emoji} [${category}] ${action}${details ? ' - ' + details : ''}`;
        }

        // 核心拦截日志方法
        intercept(category, action, details = '') {
            if (this.enabled) {
                console.log(this._formatMessage('🚫', category, action, details));
            }
        }

        allow(category, action, details = '') {
            if (this.enabled) {
                console.log(this._formatMessage('✅', category, action, details));
            }
        }

        replace(category, action, details = '') {
            if (this.enabled) {
                console.log(this._formatMessage('🔄', category, action, details));
            }
        }

        query(category, action, details = '') {
            if (this.enabled) {
                console.log(this._formatMessage('🔍', category, action, details));
            }
        }

        fileOp(category, action, details = '') {
            if (this.enabled) {
                console.log(this._formatMessage('📁', category, action, details));
            }
        }

        protect(category, action, details = '') {
            if (this.enabled) {
                console.log(this._formatMessage('🛡️', category, action, details));
            }
        }

        // 基本系统消息方法
        info(module, message, data = null) {
            if (this.enabled) {
                const formatted = `ℹ️ [${module}] ${message}${data ? ' - ' + data : ''}`;
                console.log(formatted);
            }
        }

        warn(module, message, data = null) {
            if (this.enabled) {
                const formatted = `⚠️ [${module}] ${message}${data ? ' - ' + data : ''}`;
                console.warn(formatted);
            }
        }

        error(module, message, data = null) {
            if (this.enabled) {
                const formatted = `❌ [${module}] ${message}${data ? ' - ' + data : ''}`;
                console.error(formatted);
            }
        }

        // 简单开关控制
        enable() {
            this.enabled = true;
        }

        disable() {
            this.enabled = false;
        }
    }

    // 创建全局日志实例
    const logger = new AugmentLogger();

    // ==================== 2. 硬件配置模板 ====================

    const HARDWARE_TEMPLATES = {
        intel_desktop: {
            cpu: {
                manufacturer: 'Intel',
                brand: 'Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz',
                family: '6', model: '165', stepping: '5',
                voltage: '1.2', speed: 3.8, speedMin: 0.8, speedMax: 5.1,
                cores: 8, physicalCores: 8, processors: 1, socket: 'LGA1200',
                flags: 'fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush dts acpi mmx fxsr sse sse2 ss ht tm pbe syscall nx pdpe1gb rdtscp lm constant_tsc art arch_perfmon pebs bts rep_good nopl xtopology nonstop_tsc cpuid aperfmperf pni pclmulqdq dtes64 monitor ds_cpl vmx smx est tm2 ssse3 sdbg fma cx16 xtpr pdcm pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand lahf_lm abm 3dnowprefetch cpuid_fault epb invpcid_single ssbd ibrs ibpb stibp ibrs_enhanced tpr_shadow vnmi flexpriority ept vpid ept_ad fsgsbase tsc_adjust bmi1 avx2 smep bmi2 erms invpcid mpx rdseed adx smap clflushopt intel_pt xsaveopt xsavec xgetbv1 xsaves dtherm ida arat pln pts hwp hwp_notify hwp_act_window hwp_epp md_clear flush_l1d arch_capabilities'
            },
            bios: {
                vendor: 'American Megatrends Inc.',
                version: '2.70',
                releaseDate: '2021-04-14',
                revision: '5.17'
            },
            baseboard: {
                manufacturer: 'ASUSTeK COMPUTER INC.',
                model: 'PRIME Z490-A',
                version: 'Rev 1.xx',
                assetTag: 'Default string'
            },
            chassis: {
                manufacturer: 'Default string',
                model: 'Default string',
                type: 'Desktop',
                version: 'Default string',
                assetTag: 'Default string'
            },
            memory: {
                total: 17179869184, // 16GB
                modules: [
                    { size: 8589934592, type: 'DDR4', clockSpeed: 3200, manufacturer: 'Corsair' },
                    { size: 8589934592, type: 'DDR4', clockSpeed: 3200, manufacturer: 'Corsair' }
                ]
            }
        },
        amd_desktop: {
            cpu: {
                manufacturer: 'AMD',
                brand: 'AMD Ryzen 7 5800X 8-Core Processor',
                family: '25', model: '33', stepping: '0',
                voltage: '1.35', speed: 3.8, speedMin: 2.2, speedMax: 4.7,
                cores: 8, physicalCores: 8, processors: 1, socket: 'AM4',
                flags: 'fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl xtopology nonstop_tsc cpuid extd_apicid aperfmperf rapl pni pclmulqdq monitor ssse3 fma cx16 sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand lahf_lm cmp_legacy svm extapic cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw ibs skinit wdt tce topoext perfctr_core perfctr_nb bpext perfctr_llc mwaitx cpb cat_l3 cdp_l3 hw_pstate ssbd mba ibrs ibpb stibp vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid cqm rdt_a rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves cqm_llc cqm_occup_llc cqm_mbm_total cqm_mbm_local clzero irperf xsaveerptr rdpru wbnoinvd arat npt lbrv svm_lock nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold avic v_vmsave_vmload vgif v_spec_ctrl umip pku ospke vaes vpclmulqdq rdpid overflow_recov succor smca fsrm'
            },
            bios: {
                vendor: 'American Megatrends Inc.',
                version: '4.40',
                releaseDate: '2022-03-15',
                revision: '5.19'
            },
            baseboard: {
                manufacturer: 'ASUSTeK COMPUTER INC.',
                model: 'ROG STRIX B550-F GAMING',
                version: 'Rev 1.xx',
                assetTag: 'Default string'
            },
            chassis: {
                manufacturer: 'Default string',
                model: 'Default string',
                type: 'Desktop',
                version: 'Default string',
                assetTag: 'Default string'
            },
            memory: {
                total: 34359738368, // 32GB
                modules: [
                    { size: 17179869184, type: 'DDR4', clockSpeed: 3600, manufacturer: 'G.Skill' },
                    { size: 17179869184, type: 'DDR4', clockSpeed: 3600, manufacturer: 'G.Skill' }
                ]
            }
        },
        intel_laptop: {
            cpu: {
                manufacturer: 'Intel',
                brand: 'Intel(R) Core(TM) i7-1165G7 @ 2.80GHz',
                family: '6', model: '140', stepping: '1',
                voltage: '0.9', speed: 2.8, speedMin: 0.4, speedMax: 4.7,
                cores: 4, physicalCores: 4, processors: 1, socket: 'BGA1449',
                flags: 'fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush dts acpi mmx fxsr sse sse2 ss ht tm pbe syscall nx pdpe1gb rdtscp lm constant_tsc art arch_perfmon pebs bts rep_good nopl xtopology nonstop_tsc cpuid aperfmperf tsc_known_freq pni pclmulqdq dtes64 monitor ds_cpl vmx est tm2 ssse3 sdbg fma cx16 xtpr pdcm pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand lahf_lm abm 3dnowprefetch cpuid_fault epb cat_l2 invpcid_single cdp_l2 ssbd ibrs ibpb stibp ibrs_enhanced tpr_shadow vnmi flexpriority ept vpid ept_ad fsgsbase tsc_adjust bmi1 avx2 smep bmi2 erms invpcid rdt_a avx512f avx512dq rdseed adx smap avx512ifma clflushopt intel_pt avx512cd sha_ni avx512bw avx512vl xsaveopt xsavec xgetbv1 xsaves split_lock_detect dtherm ida arat pln pts hwp hwp_notify hwp_act_window hwp_epp hwp_pkg_req avx512vbmi umip pku ospke avx512_vbmi2 gfni vaes vpclmulqdq avx512_vnni avx512_bitalg avx512_vpopcntdq rdpid movdiri movdir64b fsrm avx512_vp2intersect md_clear ibt flush_l1d arch_capabilities'
            },
            bios: {
                vendor: 'LENOVO',
                version: '1.45',
                releaseDate: '2022-08-10',
                revision: '1.45'
            },
            baseboard: {
                manufacturer: 'LENOVO',
                model: '20U7CTO1WW',
                version: 'SDK0J40697 WIN',
                assetTag: 'Not Available'
            },
            chassis: {
                manufacturer: 'LENOVO',
                model: '20U7CTO1WW',
                type: 'Notebook',
                version: 'ThinkPad X1 Carbon Gen 9',
                assetTag: 'Not Available'
            },
            memory: {
                total: 17179869184, // 16GB
                modules: [
                    { size: 17179869184, type: 'LPDDR4X', clockSpeed: 4266, manufacturer: 'Samsung' }
                ]
            }
        }
    };

    // ==================== 2. 身份配置文件管理器 ====================

    class IdentityProfileManager {
        constructor() {
            this.currentProfile = null;

            // 配置文件路径
            const os = require('os');
            const path = require('path');
            this.configDir = path.join(os.homedir(), '.augment-interceptor');
            this.configFile = path.join(this.configDir, 'identity-profile.json');

            this.loadOrCreateProfile();
        }

        generateConsistentUUID(seed) {
            let hash = 0;
            for (let i = 0; i < seed.length; i++) {
                const char = seed.charCodeAt(i);
                hash = ((hash << 5) - hash) + char;
                hash = hash & hash;
            }
            const hex = Math.abs(hash).toString(16).padStart(8, '0');
            return `${hex.substr(0,8)}-${hex.substr(0,4)}-4${hex.substr(1,3)}-8${hex.substr(4,3)}-${hex}${hex.substr(0,4)}`;
        }

        generateProfile() {
            const profileSeed = 'augment-user-' + Date.now().toString(36);
            
            return {
                // 基础标识符 (8个)
                identifiers: {
                    machineId: this.generateConsistentUUID(profileSeed + '-machine'),
                    telemetryDevDeviceId: this.generateConsistentUUID(profileSeed + '-telemetry'),
                    osMachineId: this.generateConsistentUUID(profileSeed + '-os'),
                    userDataMachineId: this.generateConsistentUUID(profileSeed + '-userdata'),
                    sessionId: this.generateConsistentUUID(profileSeed + '-session'),
                    requestId: this.generateConsistentUUID(profileSeed + '-request'),
                    randomHash: this.generateConsistentUUID(profileSeed + '-hash'),
                    systemDataDirectoryUuid: this.generateConsistentUUID(profileSeed + '-systemdir')
                },
                
                // 系统信息 (8个)
                system: {
                    platform: process.platform || 'win32',
                    arch: process.arch || 'x64',
                    hostname: 'DESKTOP-' + this.generateConsistentUUID(profileSeed + '-host').substr(0, 8),
                    username: 'user-' + this.generateConsistentUUID(profileSeed + '-user').substr(0, 8),
                    osRelease: this.getOSRelease(),
                    kernelVersion: this.getKernelVersion(),
                    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                    locale: 'en-US'
                },
                
                // 文件系统信息 (4个)
                filesystem: {
                    homeDirectoryIno: Math.floor(Math.random() * 10000000),
                    projectRootIno: Math.floor(Math.random() * 10000000),
                    userDataPathIno: Math.floor(Math.random() * 10000000),
                    systemDataDirectoryIno: Math.floor(Math.random() * 10000000)
                },
                
                // 硬件信息 (20+个)
                hardware: {
                    biosInfo: {
                        vendor: 'American Megatrends Inc.',
                        version: '2.' + Math.floor(Math.random() * 100),
                        serial: this.generateConsistentUUID(profileSeed + '-bios').replace(/-/g, '').substr(0, 12)
                    },
                    baseboardInfo: {
                        manufacturer: 'ASUSTeK COMPUTER INC.',
                        model: 'PRIME-' + this.generateConsistentUUID(profileSeed + '-board').substr(0, 6),
                        serial: this.generateConsistentUUID(profileSeed + '-baseboard').replace(/-/g, '').substr(0, 12)
                    },
                    macAddresses: [
                        this.generateMacAddress(profileSeed + '-mac1'),
                        this.generateMacAddress(profileSeed + '-mac2')
                    ],
                    memoryModuleSerials: [
                        this.generateConsistentUUID(profileSeed + '-mem1').replace(/-/g, '').substr(0, 12),
                        this.generateConsistentUUID(profileSeed + '-mem2').replace(/-/g, '').substr(0, 12)
                    ],
                    usbDeviceIds: [
                        this.generateConsistentUUID(profileSeed + '-usb1').replace(/-/g, '').substr(0, 8),
                        this.generateConsistentUUID(profileSeed + '-usb2').replace(/-/g, '').substr(0, 8)
                    ],
                    audioDeviceIds: [
                        this.generateConsistentUUID(profileSeed + '-audio').replace(/-/g, '').substr(0, 8)
                    ],
                    diskSerials: [
                        this.generateConsistentUUID(profileSeed + '-disk').replace(/-/g, '').substr(0, 12)
                    ],
                    gpuInfo: {
                        vendor: 'NVIDIA Corporation',
                        model: 'GeForce RTX 3070',
                        deviceId: this.generateConsistentUUID(profileSeed + '-gpu').replace(/-/g, '').substr(0, 8)
                    }
                },
                
                // 软件环境 (6个)
                software: {
                    vscode: '1.85.2',
                    node: process.version || 'v18.17.0',
                    npm: '9.6.7',
                    systemBootTime: Date.now() - Math.floor(Math.random() * 86400000),
                    processStartTime: Date.now() - Math.floor(Math.random() * 3600000),
                    extensionVersion: '0.525.0'
                },

                // Git配置信息
                git: {
                    userEmail: 'user-' + this.generateConsistentUUID(profileSeed + '-user').substr(0, 8) + this.getRandomEmailSuffix(profileSeed),
                    userName: 'user-' + this.generateConsistentUUID(profileSeed + '-user').substr(0, 8),
                    defaultRemoteUrl: this.generateRandomGitRepo(profileSeed),
                    configGlobalUserName: 'user-' + this.generateConsistentUUID(profileSeed + '-user').substr(0, 8),
                    configGlobalUserEmail: 'user-' + this.generateConsistentUUID(profileSeed + '-user').substr(0, 8) + this.getRandomEmailSuffix(profileSeed)
                },

                // SSH配置信息
                ssh: {
                    privateKey: this.generateFakeSSHPrivateKey(profileSeed),
                    publicKey: this.generateFakeSSHPublicKey(profileSeed),
                    knownHosts: this.generateFakeKnownHosts(profileSeed),
                    config: this.generateFakeSSHConfig(profileSeed)
                }
            };
        }

        generateMacAddress(seed) {
            let hash = 0;
            for (let i = 0; i < seed.length; i++) {
                hash = ((hash << 5) - hash) + seed.charCodeAt(i);
                hash = hash & hash;
            }
            const hex = Math.abs(hash).toString(16).padStart(12, '0');
            return hex.match(/.{2}/g).join(':').toUpperCase();
        }

        generateFakeSSHPrivateKey(seed) {
            const keyId = this.generateConsistentUUID(seed + '-ssh-private').replace(/-/g, '');
            return `-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAlwAAAAdzc2gtcn
NhAAAAAwEAAQAAAIEA${keyId.substr(0, 32)}AAAB${keyId.substr(32, 16)}
${keyId.substr(48, 32)}AAAB${keyId.substr(16, 32)}
-----END OPENSSH PRIVATE KEY-----`;
        }

        generateFakeSSHPublicKey(seed) {
            const keyId = this.generateConsistentUUID(seed + '-ssh-public').replace(/-/g, '');
            const username = 'user-' + this.generateConsistentUUID(seed + '-user').substr(0, 8);
            const hostname = 'DESKTOP-' + this.generateConsistentUUID(seed + '-host').substr(0, 8);
            return `ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQ${keyId.substr(0, 32)}${keyId.substr(32, 32)} ${username}@${hostname}`;
        }

        generateFakeKnownHosts(seed) {
            const hostKey = this.generateConsistentUUID(seed + '-known-hosts').replace(/-/g, '');
            return `github.com ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQ${hostKey.substr(0, 32)}${hostKey.substr(32, 32)}
gitlab.com ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQ${hostKey.substr(16, 32)}${hostKey.substr(48, 16)}`;
        }

        generateFakeSSHConfig(seed) {
            const username = 'user-' + this.generateConsistentUUID(seed + '-user').substr(0, 8);
            return `Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_rsa

Host gitlab.com
    HostName gitlab.com
    User git
    IdentityFile ~/.ssh/id_rsa

Host *
    User ${username}
    ServerAliveInterval 60
    ServerAliveCountMax 3`;
        }

        getRandomEmailSuffix(seed) {
            const emailProviders = [
                '@gmail.com',
                '@outlook.com',
                '@hotmail.com',
                '@yahoo.com',
                '@icloud.com',
                '@protonmail.com',
                '@live.com'
            ];

            let hash = 0;
            for (let i = 0; i < seed.length; i++) {
                hash = ((hash << 5) - hash) + seed.charCodeAt(i);
                hash = hash & hash;
            }
            const index = Math.abs(hash) % emailProviders.length;
            return emailProviders[index];
        }

        generateRandomGitRepo(seed) {
            const username = 'user-' + this.generateConsistentUUID(seed + '-user').substr(0, 8);
            const repoName = this.generateRandomRepoName(seed);
            return `https://github.com/${username}/${repoName}.git`;
        }

        generateRandomRepoName(seed) {
            const repoWords = [
                'project', 'app', 'tool', 'lib', 'framework', 'service', 'api', 'client',
                'server', 'web', 'mobile', 'desktop', 'game', 'bot', 'script', 'utils',
                'helper', 'manager', 'handler', 'processor', 'generator', 'parser',
                'analyzer', 'monitor', 'tracker', 'logger', 'config', 'setup'
            ];

            const adjectives = [
                'awesome', 'simple', 'smart', 'fast', 'easy', 'cool', 'new', 'modern',
                'clean', 'light', 'dark', 'blue', 'green', 'red', 'mini', 'micro',
                'super', 'ultra', 'pro', 'plus', 'max', 'core', 'base', 'main'
            ];

            let hash1 = 0;
            let hash2 = 0;
            for (let i = 0; i < seed.length; i++) {
                hash1 = ((hash1 << 5) - hash1) + seed.charCodeAt(i);
                hash2 = ((hash2 << 3) - hash2) + seed.charCodeAt(i);
                hash1 = hash1 & hash1;
                hash2 = hash2 & hash2;
            }

            const adjIndex = Math.abs(hash1) % adjectives.length;
            const wordIndex = Math.abs(hash2) % repoWords.length;

            return `${adjectives[adjIndex]}-${repoWords[wordIndex]}`;
        }

        getOSRelease() {
            const platform = process.platform;
            if (platform === 'win32') return '10.0.19045';
            if (platform === 'darwin') return '22.6.0';
            if (platform === 'linux') return '5.15.0-91-generic';
            return '10.0.19045';
        }

        getKernelVersion() {
            const platform = process.platform;
            if (platform === 'win32') return '10.0.19045.3693';
            if (platform === 'darwin') return 'Darwin Kernel Version 22.6.0';
            if (platform === 'linux') return '5.15.0-91-generic #101-Ubuntu';
            return '10.0.19045.3693';
        }

        loadOrCreateProfile() {
            const fs = require('fs');

            try {
                // 检查配置文件是否存在
                if (fs.existsSync(this.configFile)) {
                    // 文件存在，加载现有身份
                    const stored = fs.readFileSync(this.configFile, 'utf8');
                    this.currentProfile = JSON.parse(stored);
                    logger.protect('身份管理', '已加载现有身份配置文件',
                        `ID: ${this.currentProfile.identifiers.machineId.substr(0, 8)}... | ${this.currentProfile.system.hostname}`);
                    return;
                }
            } catch (e) {
                logger.warn('Identity', '加载配置失败，将生成新身份', e.message);
            }

            // 文件不存在，生成新身份
            logger.protect('身份管理', '正在生成新身份配置文件');
            this.currentProfile = this.generateProfile();
            this.saveProfile();
            logger.protect('身份管理', '已生成新的身份配置文件',
                `ID: ${this.currentProfile.identifiers.machineId.substr(0, 8)}... | ${this.currentProfile.system.hostname}`);
        }

        saveProfile() {
            try {
                const fs = require('fs');

                // 确保配置目录存在
                if (!fs.existsSync(this.configDir)) {
                    fs.mkdirSync(this.configDir, { recursive: true });
                }

                // 保存配置文件
                fs.writeFileSync(this.configFile, JSON.stringify(this.currentProfile, null, 2));
                logger.protect('身份管理', '配置已保存');
            } catch (e) {
                logger.error('Identity', '保存配置失败', e.message);
            }
        }

        getProfile() {
            return this.currentProfile;
        }

        resetProfile() {
            logger.protect('身份管理', '正在重置身份');
            this.currentProfile = this.generateProfile();
            this.saveProfile();
            logger.protect('身份管理', '身份已重置',
                `新ID: ${this.currentProfile.identifiers.machineId.substr(0, 8)}... | ${this.currentProfile.system.hostname}`);
            return this.currentProfile;
        }
    }

    // ==================== 3. 智能网络策略 ====================

    class SmartNetworkStrategy {
        constructor(identityProfile) {
            this.profile = identityProfile;
        }

        getRequestStrategy(url, data) {
            // 1. 保留功能：优先允许必要功能端点
            if (this.isEssentialFunction(url)) {
                return 'ALLOW';
            }

            // 2. 身份验证：替换为伪造身份信息
            if (this.isIdentityVerification(url, data)) {
                return 'REPLACE_IDENTITY';
            }

            // 3. 保护隐私：拦截真实个人信息
            if (this.containsRealPersonalInfo(data)) {
                return 'REPLACE_IDENTITY';
            }

            // 4. 默认策略：检查是否为遥测数据
            if (this.isTelemetryData(url, data)) {
                return 'INTERCEPT';
            }

            return 'ALLOW';
        }

        isEssentialFunction(url) {
            const essentialPatterns = [
                'augmentcode.com',
                '/api/completion',
                '/api/chat',
                '/api/search',
                '/api/index',
                'vscode-webview',
                'localhost'
            ];
            return essentialPatterns.some(pattern => url.includes(pattern));
        }

        isIdentityVerification(url, data) {
            const identityPatterns = [
                '/api/auth',
                '/api/verify',
                '/api/login',
                '/api/register',
                '/api/user',
                '/api/device'
            ];
            return identityPatterns.some(pattern => url.includes(pattern));
        }

        isTelemetryData(url, data) {
            const telemetryPatterns = [
                'segment.io',
                'analytics',
                'telemetry',
                'mixpanel',
                'amplitude',
                'google-analytics',
                'facebook.com/tr',
                'doubleclick.net'
            ];
            return telemetryPatterns.some(pattern => url.includes(pattern));
        }

        containsRealPersonalInfo(data) {
            if (!data) return false;
            const dataStr = typeof data === 'string' ? data : JSON.stringify(data);
            const personalInfoKeywords = [
                'machineId', 'hostname', 'username', 'userInfo',
                'telemetryDevDeviceId', 'osMachineId', 'deviceId',
                'homeDirectory', 'userDataPath'
            ];
            return personalInfoKeywords.some(keyword =>
                dataStr.toLowerCase().includes(keyword.toLowerCase())
            );
        }

        replaceWithFakeIdentity(data) {
            if (!data) return data;

            let fakeData;
            if (typeof data === 'string') {
                fakeData = data;
            } else {
                fakeData = JSON.stringify(data);
            }

            // 替换各种身份标识符
            const os = require('os');
            const replacements = {
                [os.hostname()]: this.profile.system.hostname,
                [os.userInfo().username]: this.profile.system.username,
                [process.env.USERNAME || '']: this.profile.system.username,
                [process.env.USER || '']: this.profile.system.username
            };

            let replacementCount = 0;
            const replacementDetails = [];

            // 执行替换
            Object.entries(replacements).forEach(([real, fake]) => {
                if (real && fake && fakeData.includes(real)) {
                    fakeData = fakeData.replace(new RegExp(real, 'g'), fake);
                    replacementCount++;
                    replacementDetails.push(`${this.getReplacementType(real)}: ${real.substr(0, 8)}... → ${fake.substr(0, 8)}...`);
                }
            });

            // 只在有替换时记录日志
            if (replacementCount > 0) {
                logger.replace('身份替换', `${replacementCount}项身份信息已替换`, replacementDetails.join(', '));
            }

            return typeof data === 'object' ? JSON.parse(fakeData) : fakeData;
        }

        getReplacementType(realValue) {
            const os = require('os');
            if (realValue === os.hostname()) return 'hostname';
            if (realValue === os.userInfo().username) return 'username';
            if (realValue === process.env.USERNAME) return 'env_username';
            if (realValue === process.env.USER) return 'env_user';
            return 'unknown';
        }
    }

    // ==================== 4. 硬件配置生成器 ====================

    class HardwareConfigGenerator {
        constructor(identityProfile) {
            this.profile = identityProfile;
            this.selectedTemplate = this.selectTemplate();
            logger.protect('硬件伪造', '硬件配置生成器初始化完成',
                `模板: ${this.getTemplateName()}`);
        }

        selectTemplate() {
            const templates = Object.keys(HARDWARE_TEMPLATES);
            const seed = this.profile.identifiers.machineId;
            let hash = 0;
            for (let i = 0; i < seed.length; i++) {
                hash = ((hash << 5) - hash) + seed.charCodeAt(i);
                hash = hash & hash;
            }
            const index = Math.abs(hash) % templates.length;
            const selectedTemplateName = templates[index];

            logger.protect('硬件伪造', '硬件模板选择', selectedTemplateName);

            return HARDWARE_TEMPLATES[selectedTemplateName];
        }

        getTemplateName() {
            return Object.keys(HARDWARE_TEMPLATES).find(key =>
                HARDWARE_TEMPLATES[key] === this.selectedTemplate) || 'unknown';
        }

        generateSystemInfo() {
            const template = this.selectedTemplate;
            const systemInfo = {
                manufacturer: template.baseboard.manufacturer,
                model: template.baseboard.model,
                version: template.baseboard.version,
                serial: this.profile.hardware.baseboardInfo.serial,
                uuid: this.profile.identifiers.machineId,
                sku: 'SKU-' + this.profile.identifiers.machineId.substr(0, 8),
                family: template.chassis.type,
                virtual: false,
                virtualHost: ''
            };

            logger.query('系统信息', 'system() 调用', `${systemInfo.manufacturer} ${systemInfo.model}`);

            return systemInfo;
        }

        generateBiosInfo() {
            const template = this.selectedTemplate;
            const biosInfo = {
                vendor: template.bios.vendor,
                version: template.bios.version,
                releaseDate: template.bios.releaseDate,
                revision: template.bios.revision,
                serial: this.profile.hardware.biosInfo.serial
            };

            logger.query('系统信息', 'bios() 调用', `${biosInfo.vendor} ${biosInfo.version}`);

            return biosInfo;
        }

        generateBaseboardInfo() {
            const template = this.selectedTemplate;
            return {
                manufacturer: template.baseboard.manufacturer,
                model: template.baseboard.model,
                version: template.baseboard.version,
                serial: this.profile.hardware.baseboardInfo.serial,
                assetTag: template.baseboard.assetTag
            };
        }

        generateChassisInfo() {
            const template = this.selectedTemplate;
            return {
                manufacturer: template.chassis.manufacturer,
                model: template.chassis.model,
                type: template.chassis.type,
                version: template.chassis.version,
                serial: this.generateConsistentSerial('chassis'),
                assetTag: template.chassis.assetTag
            };
        }

        generateCpuInfo() {
            const template = this.selectedTemplate.cpu;
            const cpuInfo = {
                manufacturer: template.manufacturer,
                brand: template.brand,
                vendor: template.manufacturer,
                family: template.family,
                model: template.model,
                stepping: template.stepping,
                revision: template.revision,
                voltage: template.voltage,
                speed: template.speed,
                speedMin: template.speedMin,
                speedMax: template.speedMax,
                governor: 'performance',
                cores: template.cores,
                physicalCores: template.physicalCores,
                processors: template.processors,
                socket: template.socket,
                flags: template.flags,
                virtualization: true,
                cache: {
                    l1d: 32768,
                    l1i: 32768,
                    l2: 262144,
                    l3: 16777216
                }
            };

            logger.query('系统信息', 'cpu() 调用', `${cpuInfo.manufacturer} ${cpuInfo.cores}核 ${cpuInfo.speed}GHz`);

            return cpuInfo;
        }

        generateCpuFlags() {
            const flags = this.selectedTemplate.cpu.flags;
            logger.query('系统信息', 'cpuFlags() 调用', `${flags.split(' ').length}个CPU标志`);
            return flags;
        }

        generateMemoryInfo() {
            const template = this.selectedTemplate.memory;
            const used = Math.floor(template.total * (0.3 + Math.random() * 0.4));
            const memoryInfo = {
                total: template.total,
                free: template.total - used,
                used: used,
                active: used,
                available: template.total - used,
                buffers: Math.floor(used * 0.1),
                cached: Math.floor(used * 0.2),
                slab: Math.floor(used * 0.05),
                buffcache: Math.floor(used * 0.3),
                swaptotal: template.total,
                swapused: 0,
                swapfree: template.total
            };

            const totalGB = Math.round(memoryInfo.total / 1024 / 1024 / 1024);
            const usagePercent = Math.round((memoryInfo.used / memoryInfo.total) * 100);
            logger.query('系统信息', 'mem() 调用', `${totalGB}GB内存 ${usagePercent}%使用`);

            return memoryInfo;
        }

        generateMemoryLayout() {
            const template = this.selectedTemplate.memory;
            return template.modules.map((module, index) => ({
                size: module.size,
                bank: `BANK ${index}`,
                type: module.type,
                clockSpeed: module.clockSpeed,
                formFactor: 'DIMM',
                manufacturer: module.manufacturer,
                partNum: `${module.manufacturer}-${this.generateConsistentSerial('mem' + index)}`,
                serialNum: this.profile.hardware.memoryModuleSerials[index] || this.generateConsistentSerial('mem' + index),
                voltageConfigured: 1.2,
                voltageMin: 1.2,
                voltageMax: 1.2
            }));
        }

        generateDiskLayout() {
            return [
                {
                    device: '/dev/sda',
                    type: 'SSD',
                    name: 'Samsung SSD 980 PRO 1TB',
                    vendor: 'Samsung',
                    size: 1000204886016,
                    bytesPerSector: 512,
                    totalCylinders: 121601,
                    totalHeads: 255,
                    totalSectors: 1953525168,
                    totalTracks: 31008255,
                    tracksPerCylinder: 255,
                    sectorsPerTrack: 63,
                    firmwareRevision: '5B2QGXA7',
                    serialNum: this.profile.hardware.diskSerials[0],
                    interfaceType: 'NVMe',
                    smartStatus: 'Ok',
                    temperature: 35 + Math.floor(Math.random() * 20)
                }
            ];
        }

        generateConsistentSerial(type) {
            const seed = this.profile.identifiers.machineId + type;
            let hash = 0;
            for (let i = 0; i < seed.length; i++) {
                hash = ((hash << 5) - hash) + seed.charCodeAt(i);
                hash = hash & hash;
            }
            return Math.abs(hash).toString(16).toUpperCase().padStart(12, '0');
        }
    }

    // ==================== 5. SystemInformation 库拦截器 ====================

    class SystemInformationInterceptor {
        constructor(identityProfile, hardwareGenerator) {
            this.profile = identityProfile;
            this.hardware = hardwareGenerator;
            this.setupInterceptor();
        }

        setupInterceptor() {
            try {
                const Module = require('module');
                const originalRequire = Module.prototype.require;
                const self = this;

                Module.prototype.require = function(id) {
                    if (id === 'systeminformation') {
                        logger.protect('系统信息', 'systeminformation库加载拦截');
                        return self.createSystemInformationMock();
                    }
                    return originalRequire.apply(this, arguments);
                };

                logger.protect('系统信息', 'SystemInformation库拦截器设置完成');
            } catch (e) {
                logger.error('SystemInfo', 'SystemInformation拦截器设置失败', { error: e.message });
            }
        }

        createSystemInformationMock() {
            const self = this;

            return {
                // 系统信息
                system: (callback) => this.handleCallback(callback, () => self.hardware.generateSystemInfo(), 'system'),
                bios: (callback) => this.handleCallback(callback, () => self.hardware.generateBiosInfo(), 'bios'),
                baseboard: (callback) => this.handleCallback(callback, () => self.hardware.generateBaseboardInfo(), 'baseboard'),
                chassis: (callback) => this.handleCallback(callback, () => self.hardware.generateChassisInfo(), 'chassis'),

                // CPU信息
                cpu: (callback) => this.handleCallback(callback, () => self.hardware.generateCpuInfo(), 'cpu'),
                cpuFlags: (callback) => this.handleCallback(callback, () => self.hardware.generateCpuFlags(), 'cpuFlags'),
                cpuCache: (callback) => this.handleCallback(callback, () => ({
                    l1d: 32768, l1i: 32768, l2: 262144, l3: 16777216
                }), 'cpuCache'),
                cpuCurrentSpeed: (callback) => this.handleCallback(callback, () => ({
                    avg: self.hardware.selectedTemplate.cpu.speed,
                    min: self.hardware.selectedTemplate.cpu.speedMin,
                    max: self.hardware.selectedTemplate.cpu.speedMax
                }), 'cpuCurrentSpeed'),
                cpuTemperature: (callback) => this.handleCallback(callback, () => ({
                    main: 45 + Math.floor(Math.random() * 20),
                    cores: Array(self.hardware.selectedTemplate.cpu.cores).fill(0).map(() =>
                        40 + Math.floor(Math.random() * 25)
                    ),
                    max: 85
                }), 'cpuTemperature'),

                // 内存信息
                mem: (callback) => this.handleCallback(callback, () => self.hardware.generateMemoryInfo(), 'mem'),
                memLayout: (callback) => this.handleCallback(callback, () => self.hardware.generateMemoryLayout(), 'memLayout'),

                // 存储信息
                diskLayout: (callback) => this.handleCallback(callback, () => self.hardware.generateDiskLayout()),
                blockDevices: (callback) => this.handleCallback(callback, () => self.hardware.generateDiskLayout()),
                disksIO: (callback) => this.handleCallback(callback, () => ({
                    rIO: Math.floor(Math.random() * 1000),
                    wIO: Math.floor(Math.random() * 1000),
                    tIO: Math.floor(Math.random() * 2000),
                    rIO_sec: Math.floor(Math.random() * 100),
                    wIO_sec: Math.floor(Math.random() * 100),
                    tIO_sec: Math.floor(Math.random() * 200)
                })),

                // 网络信息
                networkInterfaces: (callback) => this.handleCallback(callback, () => [
                    {
                        iface: 'Ethernet',
                        ifaceName: 'Ethernet',
                        ip4: '192.168.1.' + (100 + Math.floor(Math.random() * 50)),
                        ip4subnet: '255.255.255.0',
                        ip6: 'fe80::' + Math.random().toString(16).substr(2, 4) + ':' + Math.random().toString(16).substr(2, 4),
                        mac: self.profile.hardware.macAddresses[0],
                        internal: false,
                        virtual: false,
                        operstate: 'up',
                        type: 'wired',
                        duplex: 'full',
                        mtu: 1500,
                        speed: 1000,
                        dhcp: true,
                        dnsSuffix: 'local',
                        ieee8021xAuth: 'Not required',
                        ieee8021xState: 'Not required'
                    }
                ]),

                // 操作系统信息
                osInfo: (callback) => this.handleCallback(callback, () => ({
                    platform: self.profile.system.platform,
                    distro: self.profile.system.platform === 'win32' ? 'Windows 10' : 'Ubuntu',
                    release: self.profile.system.osRelease,
                    codename: '',
                    kernel: self.profile.system.kernelVersion,
                    arch: self.profile.system.arch,
                    hostname: self.profile.system.hostname,
                    fqdn: self.profile.system.hostname + '.local',
                    codepage: 'UTF-8',
                    logofile: '',
                    serial: self.profile.identifiers.osMachineId,
                    build: self.profile.system.osRelease,
                    servicepack: ''
                })),

                // UUID信息
                uuid: (callback) => this.handleCallback(callback, () => ({
                    os: self.profile.identifiers.osMachineId,
                    hardware: self.profile.identifiers.machineId,
                    macs: self.profile.hardware.macAddresses
                })),

                // 版本信息
                versions: (callback) => this.handleCallback(callback, () => ({
                    kernel: self.profile.system.kernelVersion,
                    openssl: '1.1.1f',
                    systemOpenssl: '1.1.1f',
                    systemOpensslLib: 'OpenSSL 1.1.1f',
                    node: self.profile.software.node,
                    v8: '9.4.146.24-node.20',
                    npm: self.profile.software.npm,
                    yarn: '1.22.19',
                    pm2: '5.2.2',
                    gulp: '4.0.2',
                    grunt: '1.5.3',
                    git: '2.34.1',
                    tsc: '4.9.4',
                    mysql: '8.0.32',
                    redis: '6.2.6',
                    mongodb: '5.0.15',
                    apache: '2.4.52',
                    nginx: '1.18.0',
                    php: '8.1.2',
                    docker: '20.10.21',
                    postfix: '3.6.4',
                    postgresql: '14.6',
                    perl: '5.34.0',
                    python: '3.10.6',
                    python3: '3.10.6',
                    pip: '22.0.2',
                    pip3: '22.0.2',
                    java: '11.0.17',
                    gcc: '11.3.0',
                    virtualbox: '6.1.38',
                    bash: '5.1.16',
                    zsh: '5.8.1',
                    fish: '3.3.1',
                    powershell: '7.2.8',
                    dotnet: '6.0.404'
                })),

                // 用户信息
                users: (callback) => this.handleCallback(callback, () => [
                    {
                        user: self.profile.system.username,
                        tty: 'console',
                        date: new Date().toISOString(),
                        time: new Date().toISOString(),
                        ip: '',
                        command: 'explorer.exe'
                    }
                ]),

                // 进程信息
                processes: (callback) => this.handleCallback(callback, () => ({
                    all: Math.floor(Math.random() * 200) + 100,
                    running: Math.floor(Math.random() * 50) + 20,
                    blocked: 0,
                    sleeping: Math.floor(Math.random() * 150) + 80,
                    unknown: 0,
                    list: []
                })),

                // 服务信息
                services: (callback) => this.handleCallback(callback, () => []),

                // 时间信息
                time: (callback) => this.handleCallback(callback, () => ({
                    current: Date.now(),
                    uptime: Math.floor((Date.now() - self.profile.software.systemBootTime) / 1000),
                    timezone: self.profile.system.timezone,
                    timezoneName: Intl.DateTimeFormat().resolvedOptions().timeZone
                })),

                // 获取所有信息的便捷方法
                getAllData: (callback) => {
                    const allData = {
                        system: self.hardware.generateSystemInfo(),
                        bios: self.hardware.generateBiosInfo(),
                        baseboard: self.hardware.generateBaseboardInfo(),
                        chassis: self.hardware.generateChassisInfo(),
                        cpu: self.hardware.generateCpuInfo(),
                        mem: self.hardware.generateMemoryInfo(),
                        memLayout: self.hardware.generateMemoryLayout(),
                        diskLayout: self.hardware.generateDiskLayout(),
                        osInfo: {
                            platform: self.profile.system.platform,
                            hostname: self.profile.system.hostname,
                            arch: self.profile.system.arch
                        },
                        uuid: {
                            os: self.profile.identifiers.osMachineId,
                            hardware: self.profile.identifiers.machineId
                        }
                    };
                    return this.handleCallback(callback, () => allData);
                }
            };
        }

        handleCallback(callback, dataGenerator, apiName = 'unknown') {
            const data = dataGenerator();

            if (typeof callback === 'function') {
                setTimeout(() => callback(data), 0);
                return;
            }
            return Promise.resolve(data);
        }
    }

    // ==================== 6. 文件系统拦截器 ====================

    class FileSystemInterceptor {
        constructor(identityProfile) {
            this.profile = identityProfile;
            this.interceptFS();
            this.interceptOS();
        }

        generateFakeSSHContent(filePath) {
            const pathStr = filePath.toString().toLowerCase();

            if (pathStr.includes('id_rsa') && !pathStr.includes('.pub')) {
                // SSH私钥
                return this.profile.ssh.privateKey;
            } else if (pathStr.includes('id_rsa.pub') || pathStr.includes('id_ed25519.pub')) {
                // SSH公钥
                return this.profile.ssh.publicKey;
            } else if (pathStr.includes('known_hosts')) {
                // known_hosts文件
                return this.profile.ssh.knownHosts;
            } else if (pathStr.includes('config')) {
                // SSH配置文件
                return this.profile.ssh.config;
            } else {
                // 其他SSH相关文件
                return `# SSH configuration file
# Generated by Augment Interceptor
Host *
    User ${this.profile.system.username}
    ServerAliveInterval 60`;
            }
        }



        getSSHFileType(filePath) {
            const pathStr = filePath.toString().toLowerCase();

            if (pathStr.includes('id_rsa') && !pathStr.includes('.pub')) {
                return '私钥';
            } else if (pathStr.includes('id_rsa.pub') || pathStr.includes('id_ed25519.pub')) {
                return '公钥';
            } else if (pathStr.includes('known_hosts')) {
                return 'known_hosts';
            } else if (pathStr.includes('config')) {
                return '配置文件';
            } else {
                return 'SSH文件';
            }
        }

        interceptFS() {
            try {
                const Module = require('module');
                const originalRequire = Module.prototype.require;
                const self = this;

                Module.prototype.require = function(id) {
                    if (id === 'fs' || id === 'node:fs') {
                        const fs = originalRequire.apply(this, arguments);
                        return self.createFSProxy(fs);
                    }
                    return originalRequire.apply(this, arguments);
                };

                logger.protect('文件系统', '文件系统拦截已设置');
            } catch (e) {
                logger.error('FileSystem', '文件系统拦截器设置失败', e.message);
            }
        }

        createFSProxy(fs) {
            const self = this;

            return new Proxy(fs, {
                get(target, prop) {
                    // 拦截stat相关方法
                    if (['statSync', 'lstatSync', 'stat', 'lstat'].includes(prop)) {
                        return function(path, ...args) {
                            const pathStr = path.toString();
                            const result = target[prop].apply(this, arguments);

                            // 替换inode信息
                            if (result && typeof result === 'object') {
                                let inodeReplaced = false;
                                let replacementType = '';

                                if (pathStr.includes('home') || pathStr.includes('Users')) {
                                    result.ino = self.profile.filesystem.homeDirectoryIno;
                                    inodeReplaced = true;
                                    replacementType = 'home目录';
                                } else if (pathStr.includes('userData')) {
                                    result.ino = self.profile.filesystem.userDataPathIno;
                                    inodeReplaced = true;
                                    replacementType = 'userData目录';
                                } else if (pathStr.includes('project') || pathStr.includes('workspace')) {
                                    result.ino = self.profile.filesystem.projectRootIno;
                                    inodeReplaced = true;
                                    replacementType = 'project目录';
                                }

                                if (inodeReplaced) {
                                    logger.fileOp('文件系统', `${prop}() inode替换`, `${replacementType}: ${pathStr}`);
                                }
                            }

                            return result;
                        };
                    }

                    // 拦截readFile相关方法（SSH密钥等）
                    if (['readFileSync', 'readFile'].includes(prop)) {
                        return function(path, ...args) {
                            const pathStr = path.toString();

                            // 拦截SSH相关文件
                            if (pathStr.includes('.ssh') || pathStr.includes('known_hosts') || pathStr.includes('id_rsa')) {
                                const fakeContent = self.generateFakeSSHContent(pathStr);
                                const fileType = self.getSSHFileType(pathStr);
                                logger.intercept('文件系统', `SSH文件访问拦截 - 替换为伪造${fileType}`, pathStr);

                                if (prop === 'readFileSync') {
                                    return Buffer.from(fakeContent);
                                } else {
                                    const callback = args[args.length - 1];
                                    if (typeof callback === 'function') {
                                        setTimeout(() => callback(null, Buffer.from(fakeContent)), 0);
                                        return;
                                    }
                                    return Promise.resolve(Buffer.from(fakeContent));
                                }
                            }

                            return target[prop].apply(this, arguments);
                        };
                    }

                    return target[prop];
                }
            });
        }

        interceptOS() {
            try {
                const Module = require('module');
                const originalRequire = Module.prototype.require;
                const self = this;

                Module.prototype.require = function(id) {
                    if (id === 'os' || id === 'node:os') {
                        const os = originalRequire.apply(this, arguments);
                        return self.createOSProxy(os);
                    }
                    return originalRequire.apply(this, arguments);
                };

                logger.protect('系统信息', 'OS模块拦截已设置');
            } catch (e) {
                logger.error('FileSystem', 'OS拦截设置失败', e.message);
            }
        }

        createOSProxy(os) {
            const self = this;

            return new Proxy(os, {
                get(target, prop) {
                    if (prop === 'hostname') {
                        return function() {
                            logger.replace('系统信息', 'hostname() 调用', `伪造: ${self.profile.system.hostname}`);
                            return self.profile.system.hostname;
                        };
                    }

                    if (prop === 'userInfo') {
                        return function() {
                            const realInfo = target[prop]();
                            const fakeInfo = {
                                ...realInfo,
                                username: self.profile.system.username,
                                homedir: realInfo.homedir.replace(realInfo.username, self.profile.system.username)
                            };
                            logger.replace('系统信息', 'userInfo() 调用', `伪造用户: ${fakeInfo.username}`);
                            return fakeInfo;
                        };
                    }

                    return target[prop];
                }
            });
        }
    }

    // ==================== 6. Child Process 拦截器 ====================

    class ChildProcessInterceptor {
        constructor(identityProfile, hardwareGenerator) {
            this.profile = identityProfile;
            this.hardware = hardwareGenerator;
            this.setupInterceptor();
        }

        setupInterceptor() {
            try {
                const Module = require('module');
                const originalRequire = Module.prototype.require;
                const self = this;

                Module.prototype.require = function(id) {
                    if (id === 'child_process' || id === 'node:child_process') {
                        const cp = originalRequire.apply(this, arguments);
                        return self.createChildProcessProxy(cp);
                    }
                    return originalRequire.apply(this, arguments);
                };

                logger.protect('系统命令', 'Child Process拦截器设置完成');
            } catch (e) {
                logger.error('ChildProcess', 'Child Process拦截器设置失败', e.message);
            }
        }

        createChildProcessProxy(cp) {
            const self = this;

            return new Proxy(cp, {
                get(target, prop) {
                    if (prop === 'exec') {
                        return function(command, options, callback) {
                            const analysis = self.analyzeCommand(command);

                            if (analysis.isHardwareQuery) {
                                const logMessage = self.getDetailedLogMessage(analysis, command);
                                logger.intercept('系统命令', `exec() ${logMessage.action}`, logMessage.details);

                                // 处理回调参数
                                if (typeof options === 'function') {
                                    callback = options;
                                    options = {};
                                }

                                // 生成伪造的输出
                                const fakeOutput = self.generateFakeOutput(analysis);

                                // 异步返回伪造结果
                                setTimeout(() => {
                                    if (callback) {
                                        callback(null, fakeOutput, '');
                                    }
                                }, 10);

                                return;
                            }

                            // 非硬件查询命令正常执行
                            return target[prop].apply(this, arguments);
                        };
                    }

                    if (prop === 'spawn') {
                        return function(command, args, options) {
                            const fullCommand = `${command} ${args ? args.join(' ') : ''}`;
                            const analysis = self.analyzeCommand(fullCommand);

                            if (analysis.isHardwareQuery) {
                                const logMessage = self.getDetailedLogMessage(analysis, fullCommand);
                                logger.intercept('系统命令', `spawn() ${logMessage.action}`, logMessage.details);

                                // 返回模拟的子进程
                                return self.createMockChildProcess(analysis);
                            }

                            // 非硬件查询命令正常执行
                            return target[prop].apply(this, arguments);
                        };
                    }

                    return target[prop];
                }
            });
        }

        analyzeCommand(command) {
            const cmd = command.toLowerCase();

            // Git命令拦截 - 防止用户身份信息泄露
            if (cmd.includes('git ') || cmd.startsWith('git')) {
                if (cmd.includes('user.email') || cmd.includes('user.name')) {
                    return { isHardwareQuery: true, type: 'Git用户信息', command };
                }
                if (cmd.includes('remote') || cmd.includes('origin') || cmd.includes('config --get remote')) {
                    return { isHardwareQuery: true, type: 'Git仓库信息', command };
                }
            }

            // Windows systeminfo命令拦截 - 补充Windows系统信息覆盖
            if (cmd.includes('systeminfo')) {
                return { isHardwareQuery: true, type: 'Windows系统信息', command };
            }

            // Windows PowerShell 硬件查询命令
            if (cmd.includes('get-ciminstance') || cmd.includes('get-wmiobject')) {
                if (cmd.includes('win32_processor') || cmd.includes('win32_computersystem')) {
                    return { isHardwareQuery: true, type: 'CPU信息', command };
                }
                if (cmd.includes('win32_physicalmemory')) {
                    return { isHardwareQuery: true, type: '内存信息', command };
                }
                if (cmd.includes('win32_diskdrive') || cmd.includes('win32_logicaldisk')) {
                    return { isHardwareQuery: true, type: '磁盘信息', command };
                }
                if (cmd.includes('win32_baseboard') || cmd.includes('win32_bios')) {
                    return { isHardwareQuery: true, type: '主板/BIOS信息', command };
                }
                if (cmd.includes('wmimonitorid')) {
                    return { isHardwareQuery: true, type: '显示器信息', command };
                }
            }

            // Windows Registry 查询
            if (cmd.includes('reg query') && cmd.includes('hardware')) {
                return { isHardwareQuery: true, type: '注册表硬件查询', command };
            }

            // macOS 硬件查询命令
            if (cmd.includes('ioreg') || cmd.includes('system_profiler')) {
                return { isHardwareQuery: true, type: 'macOS硬件查询', command };
            }

            // Linux 硬件查询命令
            if (cmd.includes('dmidecode') || cmd.includes('lscpu') || cmd.includes('lshw')) {
                return { isHardwareQuery: true, type: 'Linux硬件查询', command };
            }

            return { isHardwareQuery: false, type: 'normal', command };
        }

        generateFakeOutput(analysis) {
            const template = this.hardware.selectedTemplate;

            switch (analysis.type) {
                case 'Git用户信息':
                    return this.generateFakeGitUserInfo(analysis.command);
                case 'Git仓库信息':
                    return this.generateFakeGitRepoInfo(analysis.command);
                case 'Windows系统信息':
                    return this.generateFakeWindowsSystemInfo();
                case 'macOS硬件查询':
                    return this.generateFakeMacOSOutput(analysis.command);
                case 'Linux硬件查询':
                    return this.generateFakeLinuxOutput();
                case 'CPU信息':
                    return this.generateFakeCPUOutput(template);
                case '内存信息':
                    return this.generateFakeMemoryOutput(template);
                case '磁盘信息':
                    return this.generateFakeDiskOutput(template);
                case '主板/BIOS信息':
                    return this.generateFakeBaseboardOutput(template);
                case '显示器信息':
                    return this.generateFakeMonitorOutput(template);
                case '注册表硬件查询':
                    return this.generateFakeRegistryOutput(template);
                default:
                    return '';
            }
        }

        generateFakeCPUOutput(template) {
            return `Name                      : ${template.cpu.brand}
Manufacturer              : ${template.cpu.manufacturer}
MaxClockSpeed             : ${template.cpu.speed}
NumberOfCores             : ${template.cpu.cores}
NumberOfLogicalProcessors : ${template.cpu.cores * 2}
L2CacheSize               : 1024
L3CacheSize               : 8192`;
        }

        generateFakeMemoryOutput(template) {
            const memSerial = this.hardware.generateConsistentSerial('memory');
            const memModule = template.memory.modules[0] || {};
            return `Capacity          : ${template.memory.total}
Speed             : ${memModule.clockSpeed || 3200}
FormFactor        : 8
Manufacturer      : ${memModule.manufacturer || 'Samsung'}
PartNumber        : M471A2K43DB1-CWE
SerialNumber      : ${memSerial}`;
        }

        generateFakeDiskOutput(template) {
            const diskSerial = this.hardware.generateConsistentSerial('disk');
            return `Caption     : Samsung SSD 980 PRO 1TB
Size        : 1000204886016
SerialNumber: ${diskSerial}
InterfaceType: SATA`;
        }

        generateFakeBaseboardOutput(template) {
            return `Manufacturer: ${template.baseboard.manufacturer}
Model       : ${template.baseboard.model}
Version     : ${template.baseboard.version}
SerialNumber: ${this.profile.hardware.baseboardInfo.serial}`;
        }

        generateFakeMonitorOutput(template) {
            const displaySerial = this.hardware.generateConsistentSerial('display');
            return `ManufacturerName: ${template.display?.manufacturer || 'Dell'}
ProductCodeID   : ${template.display?.model || 'U2720Q'}
UserFriendlyName: ${template.display?.name || 'Dell U2720Q'}
SerialNumberID  : ${displaySerial}`;
        }

        generateFakeRegistryOutput(template) {
            return `FeatureSet    REG_DWORD    0x12345678
ProcessorNameString    REG_SZ    ${template.cpu.brand}`;
        }

        createMockChildProcess(analysis) {
            const fakeOutput = this.generateFakeOutput(analysis);

            return {
                stdout: {
                    on: (event, callback) => {
                        if (event === 'data') {
                            setTimeout(() => callback(Buffer.from(fakeOutput)), 10);
                        }
                    },
                    pipe: () => {}
                },
                stderr: {
                    on: () => {},
                    pipe: () => {}
                },
                on: (event, callback) => {
                    if (event === 'close' || event === 'exit') {
                        setTimeout(() => callback(0), 20);
                    }
                },
                kill: () => {}
            };
        }

        // 新增的伪造数据生成方法
        generateFakeGitUserInfo(command) {
            const cmd = command.toLowerCase();
            if (cmd.includes('user.email')) {
                return this.profile.git.userEmail;
            } else if (cmd.includes('user.name')) {
                return this.profile.git.userName;
            }
            return '';
        }

        generateFakeGitRepoInfo(command) {
            const cmd = command.toLowerCase();
            if (cmd.includes('remote') || cmd.includes('origin')) {
                return this.profile.git.defaultRemoteUrl;
            }
            return '';
        }

        generateFakeWindowsSystemInfo() {
            const template = this.hardware.selectedTemplate;
            return `Host Name:                 ${this.profile.system.hostname}
OS Name:                   Microsoft Windows 11 Pro
OS Version:                10.0.22631 N/A Build 22631
OS Manufacturer:           Microsoft Corporation
OS Configuration:          Standalone Workstation
System Manufacturer:       ${template.manufacturer}
System Model:              ${template.model}
System Type:               x64-based PC
Processor(s):              1 Processor(s) Installed.
                           [01]: ${template.cpu.brand}
Total Physical Memory:     ${Math.round(template.memory.total / 1024 / 1024 / 1024)} GB`;
        }

        generateFakeMacOSOutput(command) {
            const cmd = command.toLowerCase();
            if (cmd.includes('ioreg')) {
                const fakeUUID = this.profile.identifiers.machineId;
                const fakeSerial = this.hardware.generateConsistentSerial('mac');
                return `+-o Root  <class IORegistryEntry, id 0x100000100, retain 4>
  +-o MacBookPro18,1  <class IOPlatformExpertDevice, id 0x100000110, registered, matched, active, busy 0 (1 ms), retain 9>
    {
      "IOPlatformUUID" = "${fakeUUID}"
      "IOPlatformSerialNumber" = "${fakeSerial}"
      "model" = <"MacBookPro18,1">
    }`;
            }
            return '';
        }

        generateFakeLinuxOutput() {
            const template = this.hardware.selectedTemplate;
            return `Architecture:        x86_64
CPU op-mode(s):      32-bit, 64-bit
Byte Order:          Little Endian
CPU(s):              ${template.cpu.cores}
Model name:          ${template.cpu.brand}
CPU MHz:             ${template.cpu.speed}`;
        }

        getDetailedLogMessage(analysis, command) {
            const shortCommand = command.length > 50 ? command.substring(0, 50) + '...' : command;

            switch (analysis.type) {
                case 'Git用户信息':
                    return {
                        action: 'Git用户信息拦截 - 返回伪造身份',
                        details: `${shortCommand} → 返回: ${this.profile.git.userName}/${this.profile.git.userEmail}`
                    };
                case 'Git仓库信息':
                    return {
                        action: 'Git仓库信息拦截 - 返回伪造仓库',
                        details: `${shortCommand} → 返回: ${this.profile.git.defaultRemoteUrl}`
                    };
                case 'macOS硬件查询':
                    return {
                        action: 'macOS硬件查询拦截 - 返回伪造UUID',
                        details: `${shortCommand} → 返回伪造IOPlatformUUID: ${this.profile.identifiers.machineId.substr(0, 8)}...`
                    };
                case 'Windows系统信息':
                    return {
                        action: 'Windows系统信息拦截 - 返回伪造配置',
                        details: `${shortCommand} → 返回伪造主机名: ${this.profile.system.hostname}`
                    };
                case 'Linux硬件查询':
                    return {
                        action: 'Linux硬件查询拦截 - 返回伪造硬件',
                        details: `${shortCommand} → 返回伪造CPU信息`
                    };
                default:
                    return {
                        action: '硬件查询拦截',
                        details: `${analysis.type}: ${shortCommand}`
                    };
            }
        }
    }

    // ==================== 7. 网络拦截器 ====================

    class NetworkInterceptor {
        constructor(identityProfile, networkStrategy) {
            this.profile = identityProfile;
            this.strategy = networkStrategy;
            this.stats = {
                intercepted: 0,
                allowed: 0,
                replaced: 0,
                total: 0
            };
            this.initializeAll();
        }

        interceptFetch() {
            if (typeof fetch === 'undefined') return;

            const originalFetch = fetch;
            const self = this;

            fetch = function(url, options = {}) {
                const urlString = url.toString();
                const method = options.method || 'GET';
                const body = options.body;

                const strategy = self.strategy.getRequestStrategy(urlString, body);

                switch (strategy) {
                    case 'INTERCEPT':
                        self.stats.intercepted++;
                        self.stats.total++;
                        logger.intercept('网络拦截', `${method} ${urlString}`, '遥测数据已拦截');
                        return Promise.resolve({
                            ok: true,
                            status: 200,
                            json: () => Promise.resolve({success: true}),
                            text: () => Promise.resolve('{"success": true}')
                        });

                    case 'REPLACE_IDENTITY':
                        self.stats.replaced++;
                        self.stats.total++;
                        const fakeBody = self.strategy.replaceWithFakeIdentity(body);
                        const newOptions = { ...options, body: fakeBody };

                        // 替换请求头中的身份信息
                        if (newOptions.headers) {
                            self.replaceHeaderIdentity(newOptions.headers);
                        }

                        logger.replace('网络拦截', `${method} ${urlString}`, '身份信息已替换');
                        return originalFetch.call(this, url, newOptions);

                    case 'ALLOW':
                    default:
                        self.stats.allowed++;
                        self.stats.total++;
                        logger.allow('网络拦截', `${method} ${urlString}`, '必要功能已放行');
                        return originalFetch.apply(this, arguments);
                }
            };

            logger.protect('网络拦截', 'Fetch API拦截已设置');
        }

        interceptXHR() {
            if (typeof XMLHttpRequest === 'undefined') return;

            const originalXHR = XMLHttpRequest;
            const self = this;

            XMLHttpRequest = function() {
                const xhr = new originalXHR();
                const originalOpen = xhr.open;
                const originalSend = xhr.send;

                xhr.open = function(method, url, ...args) {
                    this._url = url;
                    this._method = method;
                    return originalOpen.apply(this, arguments);
                };

                xhr.send = function(data) {
                    const strategy = self.strategy.getRequestStrategy(this._url, data);

                    switch (strategy) {
                        case 'INTERCEPT':
                            self.stats.intercepted++;
                            self.stats.total++;
                            logger.intercept('网络拦截', `${this._method} ${this._url}`, '遥测数据已拦截');

                            setTimeout(() => {
                                Object.defineProperty(this, 'readyState', { value: 4, writable: false });
                                Object.defineProperty(this, 'status', { value: 200, writable: false });
                                Object.defineProperty(this, 'responseText', { value: '{"success": true}', writable: false });
                                if (this.onreadystatechange) this.onreadystatechange();
                            }, 0);
                            return;

                        case 'REPLACE_IDENTITY':
                            self.stats.replaced++;
                            self.stats.total++;
                            const fakeData = self.strategy.replaceWithFakeIdentity(data);
                            logger.replace('网络拦截', `${this._method} ${this._url}`, '身份信息已替换');
                            return originalSend.call(this, fakeData);

                        case 'ALLOW':
                        default:
                            self.stats.allowed++;
                            self.stats.total++;
                            logger.allow('网络拦截', `${this._method} ${this._url}`, '必要功能已放行');
                            return originalSend.apply(this, arguments);
                    }
                };

                return xhr;
            };

            // 保持原型链
            XMLHttpRequest.prototype = originalXHR.prototype;
            logger.protect('网络拦截', 'XMLHttpRequest拦截已设置');
        }

        replaceHeaderIdentity(headers) {
            const identityHeaders = ['User-Agent', 'X-Machine-Id', 'X-Device-Id'];
            identityHeaders.forEach(header => {
                if (headers[header]) {
                    headers[header] = this.strategy.replaceWithFakeIdentity(headers[header]);
                }
            });
        }

        initializeAll() {
            this.interceptFetch();
            this.interceptXHR();
            logger.protect('网络拦截', '网络拦截器初始化完成');
        }

        getStats() {
            return { ...this.stats };
        }
    }

    // ==================== 8. 完整拦截器管理器 ====================

    class CompleteInterceptorManager {
        constructor() {
            this.version = '3.6-complete';
            this.buildTime = new Date().toISOString();
            this.status = 'initializing';

            this.initialize();
        }

        async initialize() {
            try {
                logger.protect('拦截器管理', '开始初始化完整拦截器');

                // 1. 初始化身份管理器
                this.identityManager = new IdentityProfileManager();
                this.currentProfile = this.identityManager.getProfile();

                // 2. 初始化硬件生成器
                this.hardwareGenerator = new HardwareConfigGenerator(this.currentProfile);

                // 3. 初始化网络策略
                this.networkStrategy = new SmartNetworkStrategy(this.currentProfile);

                // 4. 初始化各种拦截器
                this.systemInfoInterceptor = new SystemInformationInterceptor(this.currentProfile, this.hardwareGenerator);
                this.childProcessInterceptor = new ChildProcessInterceptor(this.currentProfile, this.hardwareGenerator);
                // 注意：不再初始化EventReporterInterceptor，让Reporter正常工作以避免账号封禁
                // this.eventReporterInterceptor = new EventReporterInterceptor(this.currentProfile);
                this.fileSystemInterceptor = new FileSystemInterceptor(this.currentProfile);
                this.networkInterceptor = new NetworkInterceptor(this.currentProfile, this.networkStrategy);

                this.status = 'running';
                logger.protect('拦截器管理', '完整拦截器初始化完成');

                this.printStatus();

            } catch (error) {
                this.status = 'error';
                logger.error('Main', '完整拦截器初始化失败', error.message);
            }
        }

        printStatus() {
            console.log('='.repeat(60));
            console.log('🛡️ Augment Code Extension 完整拦截器');
            console.log('='.repeat(60));
            console.log(`状态: ${this.status}`);
            console.log(`身份ID: ${this.currentProfile.identifiers.machineId.substr(0, 8)}...`);
            console.log(`硬件模板: ${Object.keys(HARDWARE_TEMPLATES).find(key =>
                HARDWARE_TEMPLATES[key] === this.hardwareGenerator.selectedTemplate) || 'unknown'}`);
            console.log(`主机名: ${this.currentProfile.system.hostname}`);
            console.log(`用户名: ${this.currentProfile.system.username}`);
            console.log('='.repeat(60));
            console.log('🚀 完整隐私保护功能已激活！');
            console.log('✅ 40+ 硬件数据点完全伪造');
            console.log('✅ 智能网络策略已启用');
            console.log('✅ SystemInformation库完全拦截');
            console.log('✅ 文件系统隐私保护已启用');
            console.log('='.repeat(60) + '\n');
        }

        getCompleteStatus() {
            return {
                version: this.version,
                status: this.status,
                buildTime: this.buildTime,
                uptime: Date.now() - new Date(this.buildTime).getTime(),
                profile: {
                    identityId: this.currentProfile.identifiers.machineId.substr(0, 8) + '...',
                    hostname: this.currentProfile.system.hostname,
                    username: this.currentProfile.system.username,
                    hardwareTemplate: Object.keys(HARDWARE_TEMPLATES).find(key =>
                        HARDWARE_TEMPLATES[key] === this.hardwareGenerator.selectedTemplate) || 'unknown'
                },
                components: {
                    identityManager: !!this.identityManager,
                    hardwareGenerator: !!this.hardwareGenerator,
                    networkStrategy: !!this.networkStrategy,
                    systemInfoInterceptor: !!this.systemInfoInterceptor,
                    childProcessInterceptor: !!this.childProcessInterceptor,
                    // eventReporterInterceptor: 已禁用，让Reporter正常工作避免账号封禁
                    fileSystemInterceptor: !!this.fileSystemInterceptor,
                    networkInterceptor: !!this.networkInterceptor
                }
            };
        }

        getAllStats() {
            return {
                network: this.networkInterceptor ? this.networkInterceptor.getStats() : {},
                profile: this.currentProfile ? {
                    identifiers: Object.keys(this.currentProfile.identifiers).length,
                    system: Object.keys(this.currentProfile.system).length,
                    hardware: Object.keys(this.currentProfile.hardware).length,
                    filesystem: Object.keys(this.currentProfile.filesystem).length,
                    software: Object.keys(this.currentProfile.software).length
                } : {}
            };
        }

        resetIdentity() {
            if (this.identityManager) {
                const newProfile = this.identityManager.resetProfile();
                this.currentProfile = newProfile;
                logger.protect('拦截器管理', '身份已重置', `新ID: ${newProfile.identifiers.machineId.substr(0, 8)}...`);
                return newProfile;
            }
        }

        restart() {
            logger.protect('拦截器管理', '正在重启拦截器');
            this.status = 'restarting';
            setTimeout(() => {
                this.initialize();
            }, 1000);
        }

        shutdown() {
            logger.protect('拦截器管理', '正在关闭拦截器');
            this.status = 'shutdown';
        }
    }

    // ==================== 9. 初始化和导出 ====================

    // 创建完整拦截器管理器
    const completeManager = new CompleteInterceptorManager();

    // 导出到全局作用域
    const AugmentCompleteInterceptor = {
        version: '3.6-complete',
        manager: completeManager,

        // 状态方法
        getStatus: () => completeManager.getCompleteStatus(),
        getStats: () => completeManager.getAllStats(),

        // 控制方法
        restart: () => completeManager.restart(),
        shutdown: () => completeManager.shutdown(),

        // 快捷访问
        getProfile: () => completeManager.currentProfile,
        getHardwareInfo: () => completeManager.hardwareGenerator ? {
            template: Object.keys(HARDWARE_TEMPLATES).find(key =>
                HARDWARE_TEMPLATES[key] === completeManager.hardwareGenerator.selectedTemplate),
            cpu: completeManager.hardwareGenerator.generateCpuInfo(),
            memory: completeManager.hardwareGenerator.generateMemoryInfo(),
            system: completeManager.hardwareGenerator.generateSystemInfo()
        } : null,

        // 工具方法
        resetIdentity: () => completeManager.resetIdentity(),

        // 日志控制方法
        enableLog: () => {
            logger.enable();
            logger.info('Logger', '日志已启用');
        },

        disableLog: () => {
            logger.disable();
        },

        // 测试方法
        test: () => {
            logger.info('测试', '开始完整拦截功能测试');

            // 测试系统信息拦截
            try {
                const os = require('os');
                logger.info('测试', 'hostname测试', os.hostname());
                logger.info('测试', 'userInfo测试', os.userInfo().username);
            } catch (e) {
                logger.error('测试', 'OS拦截测试失败', e.message);
            }

            // 测试SystemInformation拦截
            try {
                const si = require('systeminformation');
                si.system().then(data => {
                    logger.info('测试', 'SystemInformation拦截成功', data.manufacturer);
                }).catch(() => {
                    logger.info('测试', 'SystemInformation库未安装，跳过测试');
                });
            } catch (e) {
                logger.info('测试', 'SystemInformation库未安装，跳过测试');
            }

            // 测试网络拦截
            logger.info('测试', '模拟遥测请求拦截');
            fetch('https://api.segment.io/v1/batch', {
                method: 'POST',
                body: JSON.stringify({test: 'data'})
            }).catch(() => {
                logger.info('测试', '网络拦截测试完成');
            });

            logger.info('测试', '完整拦截功能测试完成，请查看上方日志');
        },

        // 帮助信息
        help: () => {
            console.log(`
🛡️ Augment Code 完整拦截器  - 可用命令:

📊 状态查询:
  AugmentCompleteInterceptor.getStatus()      - 获取拦截器状态
  AugmentCompleteInterceptor.getStats()       - 获取拦截统计
  AugmentCompleteInterceptor.getProfile()     - 获取身份配置文件
  AugmentCompleteInterceptor.getHardwareInfo() - 获取硬件信息

📝 日志控制:
  AugmentCompleteInterceptor.enableLog()             - 启用日志输出
  AugmentCompleteInterceptor.disableLog()            - 禁用日志输出

🧪 测试功能:
  AugmentCompleteInterceptor.test()           - 测试拦截功能

🔧 控制:
  AugmentCompleteInterceptor.resetIdentity()  - 重置身份
  AugmentCompleteInterceptor.restart()        - 重启拦截器
  AugmentCompleteInterceptor.shutdown()       - 关闭拦截器
  AugmentCompleteInterceptor.help()           - 显示此帮助信息

🛡️ 功能特性:
  ✅ 40+ 硬件数据点完全伪造
  ✅ 智能网络策略（分层决策）
  ✅ SystemInformation库完全拦截
  ✅ 文件系统隐私保护
  ✅ 身份信息一致性保证
            `);
        }
    };

    // 环境检测和全局对象赋值
    const globalScope = (function() {
        if (typeof global !== 'undefined') return global;
        if (typeof window !== 'undefined') return window;
        if (typeof self !== 'undefined') return self;
        return {};
    })();

    globalScope.AugmentCompleteInterceptor = AugmentCompleteInterceptor;

    // 模块导出
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = AugmentCompleteInterceptor;
    }

    // 使用新的日志系统记录加载完成
    logger.info('Main', 'Augment Code Extension 完整拦截器  加载完成！');
    logger.info('Main', '日志系统已启用，可使用 AugmentCompleteInterceptor.help() 查看可用命令');

})();
