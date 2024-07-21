const { app, BrowserWindow } = require('electron')
const path = require('node:path')

const Janela = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    win.loadFile('index.html')
  }


// Caso você use "script":"nodemon index.js" no seu
// package.json, irá ocorrer um erro com o whenReady()
// então use o "script":"electron ."
app.whenReady().then(() => {
    Janela()
  })
