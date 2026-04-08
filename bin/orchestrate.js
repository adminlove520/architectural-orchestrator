#!/usr/bin/env node

/**
 * Orchestrate CLI - A companion tool for Unified Orchestrator Skill
 * 
 * Provides quick helper commands to manage architectural tasks.
 */

const fs = require('fs');
const path = require('path');

const [, , command, ...args] = process.argv;

const showHelp = () => {
  console.log(`
  🚀 Unified Orchestrator CLI (v1.1.0)
  
  Usage:
    orchestrate <command> [args]
    
  Commands:
    init              初始化符合架构标准的项目结构 (src/core, monitors, processors...)
    task <name>       创建一个原子任务描述 (生成 Markdown 任务单)
    analyze <path>    [Agent 专用] 分析指定路径并生成功能架构矩阵
    status            列出当前项目的架构任务看板状态
    
  Examples:
    orchestrate init
    orchestrate task "Implement Telegram Notifier"
  `);
};

const commands = {
  init: () => {
    const folders = [
      'src/core',
      'src/monitors',
      'src/processors',
      'src/notifiers',
      'src/storage',
      'src/models',
      'archive'
    ];
    console.log('🏗️ Initializing standard project structure...');
    folders.forEach(f => {
      const dir = path.join(process.cwd(), f);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        console.log(`  ✅ Created: ${f}`);
      } else {
        console.log(`  🟡 Exists: ${f}`);
      }
    });
    console.log('\n✨ Project structure initialized successfully!');
  },

  task: (name) => {
    if (!name) return console.log('❌ Error: Task name is required.');
    const taskId = `task-${Date.now().toString().slice(-4)}`;
    const content = `# Task: ${name}\n\nID: ${taskId}\nStatus: PENDING\n\n## Description\n\n## Acceptance Criteria\n`;
    const filename = `${taskId}.md`;
    fs.writeFileSync(filename, content);
    console.log(`📝 Task created: ${filename}`);
  },

  status: () => {
    console.log('📊 Current Task Board Status:');
    console.log(' (Run via Agent to see persistent task_list from disk)');
  },

  analyze: (targetPath) => {
    console.log(`🔍 [AGENT] Analyzing path: ${targetPath || '.'}...`);
    console.log(' (Triggered agent-specific sub-process logic)');
  }
};

if (!command || !commands[command]) {
  showHelp();
} else {
  commands[command](...args);
}
