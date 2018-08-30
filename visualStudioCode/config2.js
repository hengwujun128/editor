// 团队云使用的配置
{
  //-------- 编辑器配置 --------
  "editor.fontSize": 16,
  // 控制行高。
  "editor.lineHeight": 0,
  "workbench.iconTheme": "vscode-icons",
  // "editor.fontFamily": "Consolas, 'Courier New', monospace",
  "editor.fontFamily": "'Courier New', monospace",
  "workbench.startupEditor": "newUntitledFile",
  "material-icon-theme.showUpdateMessage": false,
  "html.format.preserveNewLines": false,
  // 标记列表，以逗号分隔，其前应有额外新行。"null" 默认为“标头、正文、/html”。
  "html.format.extraLiners": "",
  "editor.colorDecorators": true,
  "explorer.confirmDelete": false,
  "editor.formatOnSave": true,
  // 当打开文件时，将基于文件内容检测 "editor.tabSize" 和 "editor.insertSpaces"。
  "editor.detectIndentation": false,
  // 按 "Tab" 时插入空格。
  "editor.insertSpaces": true,
  // 一个制表符等于的空格数。
  "editor.tabSize": 2,
  // 控制光标样式，接受的值为 'block' 和 'line'
  "editor.cursorStyle": "block",
  // 删除尾随自动插入的空格
  "editor.trimAutoWhitespace": true,
  "gitlens.advanced.messages": {
    "suppressShowKeyBindingsNotice": true
  },
  // 控制折行方式。可以选择:
  //  - "off" (禁用折行)，
  //  - "on" (根据视区宽度折行)，
  //  - "wordWrapColumn" (在 "editor.wordWrapColumn" 处换行)
  //  - "bounded" (在视区宽度和 "editor.wordWrapColumn" 两者的较小者处换行)。
  "editor.wordWrap": "on",
  // 覆盖当前所选颜色主题的颜色。
  "workbench.colorCustomizations": {},
  "editorCursor.foreground": "#ffffff",
  "git.autofetch": true,
  // 启用/禁用默认 HTML 格式化程序
  "html.format.enable": true,
  "gitlens.historyExplorer.enabled": true,
  "vsicons.projectDetection.autoReload": true,

  // 
  "eslint.options": {
    "configFile": "E:/project/smartODN/WebPortal-VUE/.eslintrc.js"
    // "configFile": "E:/project/github-projects/vue-test/.eslintrc.js"
  },
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  "eslint.autoFixOnSave": true,
  "eslint.validate": [{
      "language": "vue",
      "autoFix": true
    },
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "javascript",
      "autoFix": true
    }
  ],
  "vsicons.dontShowNewVersionMessage": true
}