const { contextBridge, ipcRenderer } = require("electron")
const { currentLoad } = require("systeminformation")

contextBridge.exposeInMainWorld("api", {
  close: () => ipcRenderer.send("close-app"),
  getCurrentLoad: () => currentLoad()
});

// window.addEventListener('DOMContentLoaded', () => {
//   const replaceText = (selector, text) => {
//     const element = document.getElementById(selector)
//     if (element) element.innerText = text
//   }

//   for (const dependency of ['chrome', 'node', 'electron']) {
//     replaceText(`${dependency}-version`, process.versions[dependency])
//   }
// })
