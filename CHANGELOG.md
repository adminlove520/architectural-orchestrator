# Changelog

## [1.6.0] - 2026-04-08

### 🛡️ 帝国治理引擎 (Imperial Governance Engine)
- **Veto Power (封驳权)**: 新增 `orchestrate reject <reason>`。门下省 (Audit role) 可驳回不合格规划，强制逻辑重置回 Planning 阶段。
- **Memorial System (奏折系统)**: 新增 `orchestrate memorial`。每一阶段必须生成带思维轨迹 (Thinking Trajectory) 的阶段性总结，消除“黑盒”执行。
- **Regime Matrix (执行模式矩阵)**: 细化了基于复杂评分的“三省制衡”策略（Flat, Balanced, Strict）。
- **L1 记忆分层**: 强化 `orchestrate summarize`，支持思维摘要提取，大幅降低主进程 Token 负担。

### 🏗️ 架构治理 (Governance Architecture)
- **三省六部逻辑**: 将执行流显式划分为中书 (Planning)、门下 (Audit)、尚书 (Execution)。
- **物理化状态**: 增强了 `archive/architecture_state.json` 的字段，包含封驳计数和当前政治角色状态。

## [1.4.0] - 2026-04-08

### ✨ 管理与治理增强 (Management & Governance)
- **ADR (Architecture Decision Records)**: 新增 `orchestrate decide <title>`。
- **Verification Gate**: 新增 `orchestrate gate <taskId>`。
- **Risk Management**: 新增 `orchestrate risk <issue>`。

## [1.3.0] - 2026-04-08

### ✨ 架构级功能 (Architectural Powerups)
- **Scaffolding**: 新增 `orchestrate create <type> <name>`。
- **Context Management**: 新增 `orchestrate summarize <dir>`。

## [1.2.0] - 2026-04-08

### 🩹 修复与优化 (Fixes & Refinement)
- **Decision Matrix**: 引入评分矩阵。
- **Operational Protocol**: 指令化改造。

## [1.1.0] - 2026-04-08

### ✨ 新特性 (Features)
- **Unified Orchestrator**: 升级为“通用架构化”能力。
