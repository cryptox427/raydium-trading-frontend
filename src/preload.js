const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld(
  'scratchpad',
  {
    saveContent: (content) => ipcRenderer.send('saveContent', content),
    content: ipcRenderer.invoke("loadContent"),
  }
)
