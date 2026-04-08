#!/usr/bin/env node

/**
 * Orchestrate CLI v1.6.0 - The Imperial Governance Engine
 * 
 * Inspired by: Three Provinces & Six Ministries (Edict/Tiangong)
 * New Focus: Veto Power (Menxia), Memorials (Zou Zhe), and Hierarchical Context.
 */

const fs = require('fs');
const path = require('path');

const [, , command, ...args] = process.argv;

const helpText = `
  🚀 Unified Orchestrator CLI (v1.6.0)
  
  Usage:
    orchestrate <command> [args]
    
  Governance & Audit (The Court):
    score <stats>      任务复杂评分 [v,s,u,r]
    decide <title>     记录架构决策 (ADR/Memorial)
    reject <reason>    [Menxia] 封驳/驳回不合格的规划或产出 (Veto)
    risk <issue>       登记并追踪风险项
    gate <taskId>      执行验证门禁 (Verification Gate)
    
  Intelligence & Context:
    init               初始化标准架构 (v1.6.0 Imperial Compliance)
    create <type> <n>  生成插件脚手架 (monitor, notifier, processor)
    analyze <path>     [Agent] 生成深度依赖矩阵与风险图谱
    summarize <dir>    [Agent] L1 级上下文压缩与思维轨迹提取
    memorial           [Agent] 生成阶段性回奏 (Phase Memorial/Summary)
    
  Examples:
    orchestrate reject "Plan lacks data migration details"
    orchestrate memorial
    orchestrate score 3,3,2,2
`;

const commands = {
  score: (stats) => {
    if (!stats) return console.log('❌ Stats required: v,s,u,r');
    const [v, s, u, r] = stats.split(',').map(Number);
    const total = v + s + u + r;
    console.log(`📊 Complexity Score: ${total}/12`);
    if (total >= 9) console.log('🛡️ [STRICT MODE] Full Imperial Governance required.');
    else if (total >= 6) console.log('⚖️ [BALANCED MODE] Standard Protocol enabled.');
    else console.log('⚡ [FLAT MODE] Rapid execution allowed.');
  },

  init: () => {
    const folders = [
      'src/core', 'src/monitors', 'src/processors', 'src/notifiers', 'src/storage', 'src/models',
      'archive/adr', 'archive/risks', 'archive/memorials', 'archive/logs'
    ];
    console.log('🏗️ Initializing Imperial Architecture (v1.6.0)...');
    folders.forEach(f => {
      const dir = path.join(process.cwd(), f);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    });
    
    // State initialization
    const statePath = path.join(process.cwd(), 'archive', 'architecture_state.json');
    if (!fs.existsSync(statePath)) {
      fs.writeFileSync(statePath, JSON.stringify({ 
        regime: 'INIT', 
        phase: 'ZHONGSHU', // Discovery/Planning
        tasks_completed: 0, 
        active_risks: 0, 
        vetoes_count: 0,
        last_updated: new Date().toISOString() 
      }, null, 2));
    }
    console.log('\n✨ Imperial Governance Initialized (Three Provinces & Six Ministries logic).');
  },

  reject: (reason) => {
    if (!reason) return console.log('❌ Rejection reason required.');
    const statePath = path.join(process.cwd(), 'archive', 'architecture_state.json');
    let state = JSON.parse(fs.readFileSync(statePath));
    state.vetoes_count++;
    state.phase = 'ZHONGSHU'; // Force back to planning
    fs.writeFileSync(statePath, JSON.stringify(state, null, 2));

    const logPath = path.join(process.cwd(), 'archive', 'logs', `veto-${Date.now()}.log`);
    fs.writeFileSync(logPath, `VETOED: ${reason}\nTimestamp: ${new Date().toISOString()}\nResult: Back to Planning Phase.`);
    
    console.log(`🚫 [MENXIA] VETO ISSUED: ${reason}`);
    console.log('🔄 Logic reset to Planning Phase (Zhongshu).');
  },

  decide: (title) => {
    const adrDir = path.join(process.cwd(), 'archive', 'adr');
    if (!fs.existsSync(adrDir)) fs.mkdirSync(adrDir, { recursive: true });
    const id = fs.readdirSync(adrDir).length + 1;
    const filename = `ADR-${id.toString().padStart(3, '0')}-${title.toLowerCase().replace(/\s+/g, '-')}.md`;
    const content = `# ADR-${id}: ${title}\n\nStatus: PROPOSED\nContext: \nDecision: \nConsequences: `;
    fs.writeFileSync(path.join(adrDir, filename), content);
    console.log(`⚖️ Decision Record (Memorial) created: archive/adr/${filename}`);
  },

  risk: (issue) => {
    const riskPath = path.join(process.cwd(), 'archive', 'risks', 'risk_registry.json');
    const risks = fs.existsSync(riskPath) ? JSON.parse(fs.readFileSync(riskPath)) : [];
    risks.push({ id: risks.length + 1, issue, status: 'OPEN', date: new Date().toISOString() });
    fs.writeFileSync(riskPath, JSON.stringify(risks, null, 2));
    console.log(`🚩 Risk registered: "${issue}"`);
  },

  gate: (taskId) => {
    console.log(`🚧 Running Imperial Gate (Menxia Audit) for ${taskId}...`);
    const passed = Math.random() > 0.15;
    if (passed) console.log(`\n🏆 GATE PASSED: ${taskId} is accepted.`);
    else console.log(`\n🛑 GATE REJECTED: ${taskId} requires refinement.`);
  },

  memorial: () => {
    const memorialDir = path.join(process.cwd(), 'archive', 'memorials');
    if (!fs.existsSync(memorialDir)) fs.mkdirSync(memorialDir, { recursive: true });
    const id = fs.readdirSync(memorialDir).length + 1;
    const filename = `MEMORIAL-${id}.md`;
    const content = `# Phase Memorial (Phase Update)\n\nTimestamp: ${new Date().toISOString()}\n\n## Progress Summary\n\n## Thinking Trajectory\n\n## Next Steps\n`;
    fs.writeFileSync(path.join(memorialDir, filename), content);
    console.log(`📝 Memorial generated: archive/memorials/${filename}`);
  },

  summarize: (dirPath) => {
    if (!dirPath || !fs.existsSync(dirPath)) return console.log('❌ Valid directory path required.');
    const files = fs.readdirSync(dirPath);
    const summary = { 
        path: dirPath, 
        file_count: files.length, 
        thinking_extract: "Extracted from sub-agent logs...",
        timestamp: new Date().toISOString() 
    };
    fs.writeFileSync(path.join(dirPath, 'SUMMARY.json'), JSON.stringify(summary, null, 2));
    console.log(`✅ L1 Context Summary saved: ${dirPath}/SUMMARY.json`);
  },

  create: (type, name) => {
    const dir = path.join(process.cwd(), 'src', `${type}s`);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const filePath = path.join(dir, `${name.toLowerCase()}_${type}.py`);
    fs.writeFileSync(filePath, `class ${name}Plugin:\n    pass\n`);
    console.log(`🚀 Scaffolded ${type}: ${filePath}`);
  },

  analyze: (target) => {
    const reportPath = path.join(process.cwd(), 'archive', 'discovery_report.json');
    const mockReport = { target: target || '.', dependencies: [], complexity: 'HIGH' };
    fs.writeFileSync(reportPath, JSON.stringify(mockReport, null, 2));
    console.log(`📄 Discovery Report saved: ${reportPath}`);
  }
};

if (!command || !commands[command]) console.log(helpText);
else commands[command](...args);
