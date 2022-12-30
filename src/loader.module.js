/*
* THIS MODULE WILL BE USED FOR
* preloading elements / models and bigger files
* before user can enter the studio GUI
*/

const { remote } = require('electron');
const splashWindow = remote.getCurrentWindow();
//const BrowserWindow = remote.BrowserWindow;
const { BrowserWindow } = require('electron');
//const { App } = require('../config/config.json');

const LoadAssets = () => {
    const AssetLoader = new Promise(resolve => {
        //placeholder for loader
        (!App.developer.activated) ? setTimeout(resolve, 5000) : setTimeout(resolve, 0);
    }).then((_metadata) => {
        createGUIWindow()
        splashWindow.close();
    });
}

const createGUIWindow = () => {
    const studioGUIWindow = new BrowserWindow({
        width: 1200,
        height: 720,
        webPreferences: {
            nodeIntegration: true
        },
    });

    if (!App.window.menu) studioGUIWindow.setMenu(null);
    if (App.developer.activated) studioGUIWindow.webContents.openDevTools();

    studioGUIWindow.loadFile('main.html');
}

module.exports = {
    LoadAssets
}