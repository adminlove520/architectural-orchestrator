# Skill: Unified Orchestrator v1.6.0 (Imperial Governance & Veto Engine)

## 🎯 核心定位
本协议是基于“分权制衡”与“架构透明”理念构建的 Agent 运行引擎。它借鉴了“三省六部”制度，通过引入 **封驳权 (Veto)**、**奏折系统 (Memorials)** 和 **L1 层记忆分层**，确保复杂任务的执行不再是“黑盒”，而是具备高度可审计性和可干预性的治理过程。

## 🚦 执行模式 (Regime Matrix)
*启动 `orchestrate score` 自动评估，强制应用以下治理模式：*

| 模式 | 评分 | 核心逻辑 | 治理要求 |
| :--- | :--- | :--- | :--- |
| **⚡ 现代模式 (Flat)** | < 6 | 快速迭代，直接执行。 | 基础 `task_create` 即可。 |
| **⚖️ 均衡模式 (Balanced)** | 6 - 9 | 规划 -> 审核 -> 派发 -> 验证。 | 必须产出 `Discovery Report`。 |
| **🛡️ 严谨模式 (Strict)** | > 9 | 深度解构 -> 封驳审核 -> 风险对齐 -> 门禁。 | 全量 ADR、Risk Log、Veto Check。 |

## 🏛️ 三省六部治理协议 (Imperial Protocols)

### Phase 1: Zhongshu (中书省 - 规划与调研)
- **职责**: 深度调研目标项目，产出原子任务拆解方案。
- **强制动作**: 生成 `archive/discovery_report.json`。
- **关键输出**: 依赖矩阵图谱、风险点初步识别。

### Phase 2: Menxia (门下省 - 审核与封驳)
- **职责**: 质量把关。对中书省的方案进行“封驳”或“准奏”。
- **封驳权 (Veto)**: 若方案模糊、风险未覆盖、逻辑不严密，必须运行 `orchestrate reject "Reason"`。
- **强制要求**: 被封驳后，逻辑强制重置回 Phase 1 重新规划。

### Phase 3: Shangshu (尚书省 - 派发与汇总)
- **职责**: 调度执行层（六部/子代理），管理上下文。
- **执行准则**: 调度 `explore` (工部), `bash` (兵部), `general` (吏部)。
- **L1 记忆压缩**: 子代理交付时强制运行 `orchestrate summarize [dir]`。主进程仅读取 `SUMMARY.json`。

### Phase 4: Memorial (回奏 - 阶段性结案)
- **职责**: 每一阶段结束或重大任务完成，必须生成“奏折”。
- **指令**: `orchestrate memorial`。
- **内容**: 包含 `Thinking Trajectory` (思维轨迹) 和 `Refactoring Summary`。

## 🧠 智慧模型 (Thinking Models)
- **First Principles**: 回归物理逻辑，不被现有混乱代码带偏。
- **MECE**: 任务拆解相互独立，完全穷尽。
- **Veto Logic**: 封驳不是为了阻碍，而是为了确保方向的绝对正确。

## ⚠️ 禁忌与红线 (Red Lines)
- **禁止单点读写**: 严禁在主对话窗口直接修改核心业务代码。
- **禁止跨级执行**: 严禁在未经门下省审核的情况下直接进行 Shangshu 派发。
- **禁止思维黑盒**: 所有重大的“为什么”必须记录在 ADR 或奏折中。

## 📦 工具链集成
- `task_*`: 任务看板持久化。
- `sessions_*`: 分布式算力调度。
- `orchestrate CLI`: 治理实施、封驳操作、奏折生成、上下文压缩。
