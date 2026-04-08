# Skill: Unified Orchestrator (Architectural Orchestrator)

## Overview
这个 Skill 赋予 Agent 处理任何复杂、多阶段、高不确定性任务的能力。它不仅限于编程 (Coding)，而是通过标准化的“信息解构”、“战略规划”和“分布式执行”流程，确保任何复杂问题的解决都具备架构级的严谨性和闭环性。

## Trigger Keywords
- 重构 / Refactor
- 复杂任务 / Complex Task
- 深度研究 / Deep Research
- 多阶段规划 / Multi-stage Planning
- 架构设计 / Architecture Design
- 自动化流程 / Automation Flow
- 项目管理 / Project Management

## Core Workflow (通用架构化流程)

### Phase 1: Deep Discovery & Scoping (深度探索与范围界定)
1. **全景调研**: 根据任务类型（代码、市场、技术、文档），调度 `explore` 或 `browser` 代理收集全量背景数据。
2. **逻辑解构**: 从海量原始信息中提取核心要素，明确输入 (Input)、约束 (Constraints) 和交付物标准 (Definition of Done)。

### Phase 2: Strategic Tasking & Dependency Mapping (战略分工与依赖建模)
1. **看板建立**: 调用 `task_create` 初始化任务看板，赋予任务持久化状态。
2. **原子化拆解**: 将复杂大目标拆解为“单次交互可闭环”的原子任务。每个任务必须有明确的验收标准。
3. **依赖建模**: 使用 `addBlockedBy` 建立任务间的拓扑逻辑，识别关键路径 (Critical Path)。

### Phase 3: Domain-Specific Execution (分布式领域执行)
精准调度不同能力的 Sub-agents：
- **`explore`**: 负责静态资源（代码、本地文件、日志）的深度分析。
- **`browser`**: 负责动态信息（网页实时数据、API 调试、三方服务验证）。
- **`bash`**: 负责环境构建、脚本执行、物理操作、自动化测试。
- **`general`**: 负责逻辑综合、长文撰写、模块开发。

### Phase 4: Synthesis & Cross-Verification (综合汇总与交叉验证)
1. **结果归集**: 从 `delivery_path` 收集所有分布式产出，进行逻辑对齐。
2. **闭环验证**: 通过子代理或自动化脚本进行最终验收，确保所有原子任务的合集满足最初的交付标准。
3. **交付报告**: 生成最终的执行摘要，确认所有 Task 的完成状态。

## Best Practices
- **上下文防污染**: 严禁在主进程中直接处理超过 1000 行的原始数据。必须委派子代理进行预处理。
- **原子性原则**: 每一个 Task 的描述必须清晰到“足以让一个零背景的子代理独立完成”。
- **并行最大化**: 只要没有依赖关系，必须在同一个 Turn 中并行启动所有子代理。

## Tools Used
- `task_create / task_update / task_list`
- `sessions_spawn / sessions_send / sessions_history`
- `glob / grep / read / web_search / web_fetch`
