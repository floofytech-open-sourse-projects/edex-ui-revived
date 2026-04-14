// preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('eDex', {
  scanApps: () => ipcRenderer.invoke('scan-apps'),
  runApp: (cmd) => ipcRenderer.invoke('run-app', cmd)
});
