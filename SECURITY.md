# Security Policy

**Deterministic logic > AI generation.** Because EnvForge generates scripts that run on user systems, we take security exceptionally seriously.

## Supported Versions

EnvForge provides security updates for the following versions:

| Version | Supported          | Notes                               |
| ------- | ------------------ | ----------------------------------- |
| 0.2.x   | :white_check_mark: | Currently in active development     |
| 0.1.x   | :x:                | Alpha release, no longer maintained |

## Responsible Disclosure

If you discover a security vulnerability in the backend API, template engine, or CLI agent, please report it to us privately.

**DO NOT open a public GitHub issue for security vulnerabilities.**

Instead, please email **rishabh0510@gmail.com** with:
1. A description of the vulnerability.
2. Steps to reproduce the issue.
3. The affected versions or components (e.g., `TemplateRenderer`, `envforge-agent`).
4. Any potential mitigations you suggest.

## Unsafe Command Policy

EnvForge explicitly forbids the generation of dangerous shell commands. Every generated script passes through a strict `SafetyFilter`. We consider any bypass of this filter a critical security vulnerability.

**Prohibited commands include, but are not limited to:**
- Recursive directory deletion (`rm -rf /`, `rm -rf $HOME`)
- Filesystem formatting (`mkfs`, `format C:`)
- Raw disk writing (`dd`)
- System shutdown or reboot commands
- Database drop commands (`DROP TABLE`, `DROP DATABASE`)

For full details, read our [Script Safety Policy](./docs/SCRIPT_SAFETY.md).

## No Destructive Automation

EnvForge is designed to *provision* and *repair*, not to blindly destroy.
- We do not generate scripts that automatically uninstall GPU drivers.
- We do not generate scripts that forcefully delete Python environments without explicit user consent.
- All repair scripts must be auditable plain-text files.

## Sandboxing Philosophy

We encourage users to test generated scripts inside Docker containers or isolated WSL environments whenever possible. We explicitly provide a `Dockerfile` output format for every profile to support this sandboxed approach.
