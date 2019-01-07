{
  "editor.fontSize": 16,
  // 控制行高。
  "editor.lineHeight": 0,
  // "editor.fontFamily": "Consolas, 'Courier New', monospace",
  "editor.fontFamily": "'Courier New', monospace",
  "workbench.startupEditor": "newUntitledFile",
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
  "git.autofetch": true,
  // 启用/禁用默认 HTML 格式化程序
  "html.format.enable": true,
  "gitlens.historyExplorer.enabled": true,
  /**
    We can still optimize ESLint by configuring it
    to perform code formatting every time we save the file
    */

  //
  "eslint.options": {
    // 要用项目中的eslint配置文件，覆盖用户设置的全局的配置文件
    "configFile": "D:/project/smartODN/web/WebPortal-VUE/.eslintrc.js",
    "plugins": ["html"]
  },
  "eslint.autoFixOnSave": true,
  // VSCode will perform validation for these three file types: vue, HTML and JavaScript.
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "html",
    "vue",
    {
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



  // 参考vetur 官网配置(https://vuejs.github.io/vetur/formatting.html#settings)
  "vetur.format.defaultFormatterOptions": {
    // Prettier option here
    "prettier": {
      "semi": false, // Whether to add a semicolon at the end of every line
      "singleQuote": true, // If true, will use single instead of double quotes
      "eslintIntegration": true, //eslint 集成

    }
  },

  //html格式化依赖  默认为none,js-beautifuy-html
  "vetur.format.defaultFormatter.html": "prettyhtml",
  // js 格式化
  // "vetur.format.defaultFormatter.js": "vscode-typescript",
  "vetur.format.defaultFormatter.js": "prettier",
  //函数前加空格
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,


  "terminal.integrated.rendererType": "dom",
  "gitlens.views.fileHistory.enabled": true,
  "gitlens.views.lineHistory.enabled": true
}