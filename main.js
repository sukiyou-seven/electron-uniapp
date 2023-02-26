const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
const electron = require('electron')


/*获取electron窗体的菜单栏*/
const Menu = electron.Menu
/*隐藏electron创听的菜单栏*/
Menu.setApplicationMenu(null)


let win

function createWindow () {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
//   require('./menu/zh-cn.js')
//   win.loadFile('./web/index.html')
//   win.webContents.openDevTools()
  win.loadURL(url.format({
    // pathname : path.join(__dirname,'web/index.html'),
    pathname : path.join(__dirname,'web/jump.html'),
    protocol : 'file:',
    slashes : true
  }))

  win.on('closed',()=>{
    win = null
  })
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
