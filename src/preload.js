import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {
    msg: (title) => ipcRenderer.send('msg', title)
})