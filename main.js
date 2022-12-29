const {app, BrowserWindow} = require('electron');
const { App } = require('./config/config.json');

let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 400,
    webPreferences: {
      nodeIntegration: true
    },
    frame: false
  })

  mainWindow.loadFile('index.html');

  if ( !App.window.menu ) mainWindow.setMenu(null);
  if ( App.developer.activated ) mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', function () { if (process.platform !== 'darwin') app.quit() });
app.on('activate', function () { if (mainWindow === null) createWindow() });