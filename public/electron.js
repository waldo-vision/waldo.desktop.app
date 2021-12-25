const path = require('path');
const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const { autoUpdater } = require('electron-updater');

autoUpdater.logger = require('electron-log');
autoUpdater.logger.transports.file.level = 'info';

const express = require('express')
const expressApp = express();
const port = 5001;

expressApp.listen(port);

function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },
    });

    // and load the index.html of the app.
    // win.loadFile("index.html");
    win.loadURL(
        isDev
            ? 'http://localhost:3000' 
            : `file://${path.join(__dirname, '../build/index.html')}`
    );
    // Open the DevTools.
    if (isDev) {
        win.webContents.openDevTools({ mode: 'detach' });
    }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

autoUpdater.on('checking-for-update', () => {
    console.log('Checking for update...');
});

autoUpdater.on('update-avaliable', (info) => {
    console.log('Update avaliable.');
    console.log("Version: " + info.version);
    console.log("Release Date: " + info.releaseDate);
});

autoUpdater.on('update-not-available', (info) => {
    console.log("Running latest version.");
});

autoUpdater.on('download-progress', (progressObj) => {
    console.log("Download speed: " + progressObj.bytesPerSecond);
    console.log("Downloaded: " + progressObj.percent + "%");
    console.log("Expected total size: " + progressObj.total);
    console.log("Downloaded: " + progressObj.transferred);
});

autoUpdater.on('update-downloaded', (info) => {
    console.log("Update downloaded");
    autoUpdater.quitAndInstall();
});

if (!isDev) {
    autoUpdater.checkForUpdates();
}
