# Skill: Unified Orchestrator v1.3.0 (Architectural Engine)

## 🎯 核心定位
本协议旨在解决大模型处理复杂任务时的“上下文溢出”和“逻辑漂移”问题。它将 Agent 从“对话者”提升为“编排者”，通过物理层面的任务隔离、状态持久化和标准化脚手架，确保大型工程的可预测性。

## 🚦 决策逻辑 (Scoring Matrix)
*当满足以下任一条件或总评分 ≥ 6 时，必须启动此协议：*
- **Volume**: 需要阅读 >500 行代码或跨越 >3 个功能模块。
- **Steps**: 预估执行路径超过 5 个原子步骤。
- **Uncertainty**: 涉及未使用的 API 或需要进行技术调研。
- **Risk**: 涉及核心数据结构或物理环境变更。

## 🛠️ 阶段性指令集 (Operational Protocols)

### Phase 1: Deep Discovery (由 explore 代理执行)
**指令规范**: `sessions_spawn(agent_id="explore", task="SCAN: [target]. OUTPUT: {dependencies: [], entry_points: [], side_effects: []}")`
**强制动作**: 必须生成 `archive/discovery_report.json` 文件。
**验收准则**: 报告必须包含 `dependencies` 和 `logic_complexity` 评估。

### Phase 2: Strategic Tasking (由主进程执行)
**指令规范**: 
1. 建立 `task_create` 列表。
2. 每个 Task 必须包含 `Acceptance Criteria` (验收准则)。
3. 使用 `addBlockedBy` 标记依赖。
**强制动作**: 初始化 `archive/architecture_state.json` 记录全局进度。

### Phase 3: Domain-Specific Execution (领域代理协作)
**分布式策略**:
- **Scaffolding**: 使用 `orchestrate create [type] [name]` 确保新代码符合规范。
- **Execution**: 子代理写入 `delivery_path`。
- **Context Management**: 必须在交付目录运行 `orchestrate summarize [dir]`。主进程仅读取 `SUMMARY.json`。

### Phase 4: Synthesis & Verification (由 bash/general 协作)
- 强制运行 `orchestrate check` 检查协议合规性。
- 最终产出必须包含：`Refactoring Summary` + `Test Pass Log` + `Post-check diff`。

## ⚠️ 禁忌与红线 (Red Lines)
- **禁止单点读写**: 严禁在主对话窗口直接修改核心业务代码。
- **禁止口头完成**: 任何 Task 的状态更新必须伴随物理文件的变更或测试日志。
- **禁止上下文倾倒**: 子代理不得向主进程返回超过 100 行的原始输出，必须使用 `SUMMARY.json`。

## 📦 工具链集成
- `task_*`: 状态持久化看板。
- `sessions_*`: 分布式算力调度。
- `orchestrate CLI`: 协议实施、脚手架、合规性检查、上下文压缩。
