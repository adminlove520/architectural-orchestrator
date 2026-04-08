# Skill: Unified Orchestrator v1.4.0 (Governance Edition)

## 🎯 核心定位
本协议旨在解决大模型处理复杂任务时的“上下文溢出”和“逻辑漂移”问题。它将 Agent 从“对话者”提升为“编排者”，通过物理层面的任务隔离、状态持久化、架构决策审计 (ADR) 和验证门禁 (Verification Gate)，确保大型工程的治理水平和最终交付质量。

## 🚦 决策逻辑 (Scoring Matrix)
*当满足以下任一条件或总评分 ≥ 6 时，必须启动此协议：*
- **Volume**: 阅读 >500 行代码或跨越 >3 个功能模块。
- **Steps**: 执行路径超过 5 个原子步骤。
- **Uncertainty**: 涉及调研、选型或不确定的 API。
- **Risk**: 涉及核心数据结构、物理环境变更或第三方集成。

## 🏛️ 管理与治理协议 (Governance Protocols)

### 1. 架构决策审计 (ADR Protocol)
**强制动作**: 当涉及重大技术选型（如：更换数据库、修改异步模型、引入新库）时，主进程必须运行 `orchestrate decide "Title"`。
**验收标准**: `archive/adr/` 目录下必须存在对应的决策记录文档，解释“为什么”这样做。

### 2. 风险管理 (Risk Tracking Protocol)
**强制动作**: 在 Discovery 阶段发现的任何潜在隐患，必须通过 `orchestrate risk "Issue"` 登记。
**状态维护**: 关键任务完成前，必须核查关联风险是否已解决 (Status: CLOSED)。

### 3. 验证门禁 (Verification Gate Protocol)
**强制动作**: 任何子代理交付的任务，在标记为 `COMPLETED` 前，主进程必须模拟或执行 `orchestrate gate taskId` 进行最终验收。
**门禁标准**: 代码审计、单测覆盖、副作用检查、文档同步。

## 🛠️ 分布式执行流 (Execution Flow)

### Phase 1: Deep Discovery (由 explore 执行)
**产出**: 必须生成 `archive/discovery_report.json`。

### Phase 2: Strategic Planning & Decision (由主进程执行)
**动作**:
1. 初始化 `task_create` 列表。
2. 记录初始 ADR 决策。
3. 建立 `archive/risk_log.json`。

### Phase 3: Domain Execution (分布式协作)
**动作**:
- **Scaffolding**: 使用 `orchestrate create` 生成标准代码。
- **Delivery**: 子代理由 `orchestrate summarize` 压缩上下文。

### Phase 4: Gatekeeping & Final Merge (主进程执行)
**动作**:
1. 运行 `orchestrate gate` 进行物理验收。
2. 运行 `orchestrate check` 检查协议合规性。
3. 合并成果并更新 `architecture_state.json`。

## ⚠️ 禁忌与红线 (Red Lines)
- **禁止秘密决策**: 重大架构变更必须记录 ADR。
- **禁止单点读写**: 严禁在主对话窗口直接修改核心业务代码。
- **禁止跳过验收**: 严禁在未经 `gate` 检查的情况下标记任务完成。

## 📦 工具链
- `task_*`: 状态持久化看板。
- `sessions_*`: 分布式调度。
- `orchestrate CLI`: 治理实施、ADR 记录、风险登记、验收门禁、上下文压缩。
