
const { Menu, MenuItem } = require('electron')

// 定义菜单项
const template = [
  {
    label: '文件',
    submenu: [
      { label: '打开', accelerator: 'CmdOrCtrl+O', role: 'open' },
      { label: '保存', accelerator: 'CmdOrCtrl+S', role: 'save' },
      { type: 'separator' },
      { label: '退出', accelerator: 'CmdOrCtrl+Q', role: 'quit' }
    ]
  },
  {
    label: '编辑',
    submenu: [
      { label: '复制', accelerator: 'CmdOrCtrl+C', role: 'copy' },
      { label: '剪切', accelerator: 'CmdOrCtrl+X', role: 'cut' },
      { label: '粘贴', accelerator: 'CmdOrCtrl+V', role: 'paste' }
    ]
  },
  {
    label: '语言',
    submenu: [
      {
        label: '中文',
        type: 'radio',
        checked: true,
        click() {
          global.language = 'zh-CN'
          app.relaunch()
          app.quit()
        }
      },
      {
        label: 'English',
        type: 'radio',
        checked: false,
        click() {
          global.language = 'en-US'
          app.relaunch()
          app.quit()
        }
      }
    ]
  }
]

// 创建菜单
const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
