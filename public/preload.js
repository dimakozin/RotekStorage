const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    getDB: () => ipcRenderer.sendSync('getDB'),
})