const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
require("electron-reload")(__dirname)

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 200,
    maxHeight: 200, minHeight: 200,
    minWidth: 800, maxWidth: 800,
    frame: false,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    transparent: true,
    alwaysOnTop: true,
  })

  ipcMain.on("close-app", () => app.quit())

  win.loadFile('index.html')
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})


