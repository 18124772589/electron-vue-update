'use strict'

import { app, BrowserWindow, ipcMain } from 'electron'
import { autoUpdater } from 'electron-updater'
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    minHeight: 563,
    useContentSize: true,
    minWidth: 1000,
    show: false,
  })

  mainWindow.loadURL(winURL)
  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  // 加载好html再呈现window，避免白屏
  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
    mainWindow.focus();
  });

  //更新
  updateHandle()
}

app.on('ready', createWindow)
// app.on('ready', () => {
//   if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdatesAndNotify();
//   createWindow();
// });


// 窗口最小化
ipcMain.on('min-window', () => {
  mainWindow.minimize();
});
// 窗口最大化
ipcMain.on('max-window', () => {
  if (mainWindow.isMaximized()) {
    mainWindow.restore();
  } else {
    mainWindow.maximize();
  }
});
// 关闭
ipcMain.on('close-window', () => {
  mainWindow.close();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

// 检测更新
function updateHandle () {
  
  let uploadUrl = 'http://szjxpxzx.test.jianzaogong.com/build/'
  autoUpdater.setFeedURL(uploadUrl)

  //检查更新错误
  autoUpdater.on('error', function (error) {
    sendUpdateMessage("error",error)
  })

  //正在检查更新
  autoUpdater.on('checking-for-update', text=>{
    sendUpdateMessage("checking-for-update",text)
  })

  //检查有更新版本
  autoUpdater.on('update-available', text=>{
    sendUpdateMessage("update-available",text)

  })

  //已更新
  autoUpdater.on('update-not-available', text=>{
    sendUpdateMessage("update-not-available",text)
  })
 
  // 阻止程序关闭自动安装升级
  autoUpdater.autoInstallOnAppQuit = false;
  // 阻止程序关闭自动下载
  autoUpdater.autoDownload = false;


  // 更新下载进度事件
  autoUpdater.on('download-progress', text=>{
    sendUpdateMessage('download-progress',text);
  })

  ipcMain.on('update-start', text=> {
    autoUpdater.downloadUpdate();
  });

  // 更新下载完成事件(event, releaseNotes, releaseName, releaseDate, updateUrl, quitAndUpdate)
  autoUpdater.on('update-downloaded', function (event, releaseNotes, releaseName, releaseDate, updateUrl, quitAndUpdate) {
    sendUpdateMessage('update-downloaded', {});
    ipcMain.once('update-now', () => {
      autoUpdater.quitAndInstall();
    });
  })
 
  ipcMain.on('checkForUpdate', () => {
    console.log('检查更新------')
    autoUpdater.checkForUpdates()
  })
}
 
// 通过main进程发送事件给renderer进程，提示更新信息
function sendUpdateMessage (message,text) {
  mainWindow.webContents.send('message',{ message, text })
}