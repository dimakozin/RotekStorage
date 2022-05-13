const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    getDB: () => ipcRenderer.sendSync('getDB'),
    saveDatabase: (subjects) => ipcRenderer.send('saveDatabase', subjects)
})