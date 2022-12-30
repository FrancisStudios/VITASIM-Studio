const { app, BrowserWindow, nativeTheme } = require('electron');
const { App } = require('./config/config.json');
const path = require('path');

let splashScreenWindow;

const createSplashWindow = () => {
    splashScreenWindow = new BrowserWindow({
        width: 600,
        height: 400,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            enableRemoteModule: true,
            nodeIntegration: true,
            contextIsolation: false
        },
        frame: false
    });

    splashScreenWindow.loadFile('index.html');

    if (!App.window.menu) splashScreenWindow.setMenu(null);
    /*if (App.developer.activated) splashScreenWindow.webContents.openDevTools();*/

}

const createGUIWindow = () => {
    const studioGUIWindow = new BrowserWindow({
        width: 1200,
        height: 720,
        webPreferences: {
            enableRemoteModule: true,
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    if (!App.window.menu) studioGUIWindow.setMenu(null);
    if (App.developer.activated) studioGUIWindow.webContents.openDevTools();

    studioGUIWindow.loadFile('main.html');
    nativeTheme.themeSource = 'dark';
}

app.whenReady().then(() => {
    createSplashWindow();
    LoadAssets();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createSplashWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

///

const LoadAssets = () => {
    const AssetLoader = new Promise(resolve => {
        //placeholder for loader
        (!App.developer.activated) ? setTimeout(resolve, 5000) : setTimeout(resolve, 0);
    }).then((_metadata) => {
        createGUIWindow();
        splashScreenWindow.close();
    });
}