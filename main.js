const { app, BrowserWindow } = require('electron');
const { App } = require('./config/config.json');

let splashScreenWindow;

function createSplashWindow() {
  splashScreenWindow = new BrowserWindow({
    width: 600,
    height: 400,
    webPreferences: {
      nodeIntegration: true
    },
    frame: false
  })

  splashScreenWindow.loadFile('index.html');

  if (!App.window.menu) splashScreenWindow.setMenu(null);
  if (App.developer.activated) splashScreenWindow.webContents.openDevTools();

  splashScreenWindow.on('closed', function () {
    createGUIWindow();
    splashScreenWindow = null
  })
}

app.on('ready', createSplashWindow)
app.on('window-all-closed', function () { if (process.platform !== 'darwin') app.quit() });
app.on('activate', function () { if (splashScreenWindow === null) createWindow() });