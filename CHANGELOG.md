# Changelog

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
