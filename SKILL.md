# Skill: Unified Orchestrator v1.2.0 (Operational Protocol)

## 🎯 核心定位
本协议旨在解决大模型处理复杂任务时的“上下文溢出”和“逻辑漂移”问题。它将 Agent 从“对话者”提升为“编排者”，通过物理层面的任务隔离和状态持久化，确保大型工程的可预测性。

## 🚦 决策逻辑 (Scoring Matrix)
*当满足以下任一条件或总评分 ≥ 6 时，必须启动此协议：*
- **Volume**: 需要阅读 >500 行代码或跨越 >3 个功能模块。
- **Steps**: 预估执行路径超过 5 个原子步骤。
- **Uncertainty**: 涉及未使用的 API 或需要进行技术调研。

## 🛠️ 阶段性指令集 (Agent-to-Agent Protocols)

### Phase 1: Deep Discovery (由 explore 代理执行)
**指令规范**: `sessions_spawn(agent_id="explore", task="SCAN: [target]. OUTPUT: {dependencies: [], entry_points: [], side_effects: []}")`
**验收标准**: 必须生成一个 `archive/discovery_report.json` 文件，禁止口头汇报。

### Phase 2: Strategic Tasking (由主进程执行)
**指令规范**: 
1. 建立 `task_create` 列表。
2. 每个 Task 必须包含 `Acceptance Criteria` (验收准则)。
3. 使用 `addBlockedBy` 标记依赖。

### Phase 3: Distributed Execution (领域代理协作)
- **`explore`**: 仅限审计与分析。
- **`bash`**: 仅限物理操作、构建与测试。
- **`general`**: 负责核心逻辑重写。
- **上下文管理**: 子代理写入 `delivery_path`，主进程仅读取其 `README.md` 摘要，而非全量内容。

### Phase 4: Synthesis & Verification (由 bash/general 协作)
- 强制执行 `orchestrate verify` 命令（如果存在）。
- 最终产出必须包含：`Refactoring Summary` + `Test Pass Log` + `Post-check diff`。

## ⚠️ 禁忌与红线 (Red Lines)
- **禁止单点读写**: 严禁在主对话窗口直接修改核心业务代码。
- **禁止口头完成**: 任何 Task 的状态更新必须伴随物理文件的变更或测试日志。
- **禁止并行超限**: 最大并发 Session 限制为 5 个。

## 📦 工具链集成
- `task_*`: 状态持久化看板。
- `sessions_*`: 分布式算力调度。
- `orchestrate CLI`: 物理环境初始化。
