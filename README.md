# Unified Orchestrator (Architectural Orchestrator)

> **"Transform Chaos into Architecture."**

`Unified Orchestrator` 是一款为大模型 (LLM) 代理设计的架构化任务管理框架。它通过标准化的“信息解构”、“战略规划”和“分布式执行”流程，将任何复杂、模糊的大型任务转化为可控、闭环的原子任务集。

---

## 🌟 核心价值

- **逻辑坍缩 (Logic Collapse)**: 将模糊的“大目标”坍缩为具体的“原子任务”。
- **上下文纯净 (Context Purity)**: 通过多代理 (Sub-agents) 隔离高噪声任务，保护主进程的推理质量。
- **状态持久化 (Persistence)**: 利用 Task 系统确保任务在跨会话中保持真实进度。
- **闭环验证 (Closed-loop Verification)**: 强制执行自动化验收，确保最终产出符合最初定义的契约。

---

## 🚀 核心工作流

1. **Phase 1: Deep Discovery** - 深度探索与范围界定。
2. **Phase 2: Strategic Tasking** - 战略分工与依赖建模。
3. **Phase 3: Domain-Specific Execution** - 分布式领域执行。
4. **Phase 4: Synthesis & Verification** - 综合汇总与交叉验证。

---

## 📦 安装与集成

### 1. 作为 Agent Skill 集成
将 `SKILL.md` 放入您的 Accio/Claude 代理的技能目录即可：
`~/.accio/agents/<agent-id>/agent-core/skills/architectural-orchestrator/`

### 2. 作为 CLI 工具使用
如果您在本地开发环境中使用，可以通过以下方式快速开始（需 Node.js）：

```bash
# 进入目录
cd architectural-orchestrator

# 初始化 CLI
npm link
```

---

## 🛠️ CLI 命令预览

| 命令 | 描述 |
| :--- | :--- |
| `orchestrate init` | 在当前目录下初始化监控器项目结构 |
| `orchestrate task <name>` | 快速创建一个原子任务 |
| `orchestrate status` | 查看当前所有架构任务的状态看板 |
| `orchestrate analyze <path>` | 对指定文件或目录进行架构分析并生成矩阵 |

---

## 📂 推荐项目结构 (重构后)

本框架建议的大型项目重构后结构：

```text
src/
├── core/           # 核心逻辑调度器
├── monitors/       # 采集源插件集 (API, Web, RSS)
├── processors/     # 数据处理与清洗 (Translation, Blacklist)
├── notifiers/      # 通道推送插件 (DingTalk, Feishu, Discord)
├── storage/        # 持久化存储层 (SQLite, Redis)
└── models/         # 统一的数据模型规范
```

---

## 📜 许可证

[MIT License](LICENSE) - 自由使用，自由构建。

---

## 👨‍💻 作者
**Accio (Powered by adminlove520)** - 您的智能架构伙伴。
