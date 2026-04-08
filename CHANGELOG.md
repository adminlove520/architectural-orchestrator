# Changelog

## [1.4.0] - 2026-04-08

### ✨ 管理与治理增强 (Management & Governance)
- **ADR (Architecture Decision Records)**: 新增 `orchestrate decide <title>` 命令。强制记录重大技术选型及其背景（在 `archive/adr/` 目录下）。
- **Verification Gate (验收门禁)**: 新增 `orchestrate gate <taskId>` 命令。任务完成前必须通过自动化/模拟的验收门禁（涵盖 Linting, Tests, Side-effects）。
- **Risk Management (风险管理)**: 新增 `orchestrate risk <issue>` 命令。支持登记并追踪项目中的技术/业务风险（在 `archive/risk_log.json` 中）。
- **Governance Scaffolding**: `orchestrate init` 现在会自动初始化 ADR 目录、日志目录和风险日志文件。

### 🏗️ 协议加固 (Protocol Hardening)
- **强制动作**: 在重构过程中，凡涉及重大变更必须记录 ADR。
- **验收准则**: 任务看板中的原子任务现在必须关联“Gate Check”通过状态。

## [1.3.0] - 2026-04-08

### ✨ 架构级功能 (Architectural Powerups)
- **Scaffolding**: 新增 `orchestrate create <type> <name>` 命令，支持快速生成插件化的 `monitor`, `notifier`, `processor` 脚手架。
- **Context Management**: 新增 `orchestrate summarize <dir>` 命令，用于压缩子代理的交付上下文，有效解决主进程 Token 溢出问题。
- **Compliance Check**: 新增 `orchestrate check` 命令，强制执行协议合规性检查（如：是否存在 Discovery Report、架构状态文件等）。
- **State Persistence**: 引入 `archive/architecture_state.json` 记录全局架构阶段。

### 🏗️ 协议加固 (Protocol Hardening)
- **强制动作**: 在 Phase 3 中增加了对 `SUMMARY.json` 的强制要求。
- **I/O 契约**: 明确了子代理必须产出物理报告的义务。

## [1.2.0] - 2026-04-08

### 🩹 修复与优化 (Fixes & Refinement)
- **Decision Matrix**: 引入了任务复杂性评分矩阵 (Scoring Matrix)。
- **Operational Protocol**: 将 SKILL.md 从“散文”改造成“指令集”。

## [1.1.2] - 2026-04-08

### 🩹 修复与优化 (Fixes & Refinement)
- 修正了版本一致性问题。
- 完善了 GitHub Actions 自动化发布流程。

## [1.1.1] - 2026-04-08

### 🩹 修复与优化 (Fixes & Refinement)
- 修正了发布流中的权限和版本一致性。
- 优化了文档链接和 npm 配置文件安全性。

## [1.1.0] - 2026-04-08

### ✨ 新特性 (Features)
- **Unified Orchestrator**: 将原有的“代码重构”能力 (Architectural Orchestrator) 升级为“通用架构化”能力。
- **跨领域调度支持**: 明确支持 `browser`, `bash`, `explore`, `general` 四类 Agent 的分布式协作逻辑。
- **任务看板建模**: 强调使用 `task_create` 和 `addBlockedBy` 进行依赖拓扑建模。
- **CLI 原型设计**: 引入了 `orchestrate` CLI 命令集，方便在本地环境快速管理架构任务。

### 🏗️ 架构优化 (Architecture)
- **上下文防污染**: 强制执行子代理预处理原则，保护主进程 Token。
- **原子性原则**: 细化了任务拆解的标准。

## [1.0.0] - 2026-04-08

### 🚀 初始发布 (Initial Release)
- **Architectural Orchestrator**: 初始版本的代码重构与架构化能力。
- **Sub-agent 调度机制**: 建立了基础的多代理分工模型。
- **GitHub 集成**: 完成了 Skill 的仓库初始化。
