import * as path from 'path';
import * as url from 'url';

const { app, BrowserWindow, globalShortcut, ipcMain } = require('electron');
const { autoUpdater } = require('electron-updater');
const isDev = process.env.NODE_ENV === 'development';
const isInstance = app.requestSingleInstanceLock();

function createWindow() {

  const win = new BrowserWindow({
    title: 'WALDO Desktop',
    minWidth: 1200,
    minHeight: 800,
    frame: false,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      devTools: process.env.NODE_ENV !== 'production',
    },
  });

  win.setMenu(null);
  if (isDev) {
    win.loadURL('http://localhost:4000');
  } else {
    win.loadURL(
      url.format({
        pathname: path.join(__dirname, 'renderer/index.html'),
        protocol: 'file:',
        slashes: true,
      })
    );
    }  
    
  if (isDev) {
    globalShortcut.register('f5', () => {
      win.reload();
    });
    globalShortcut.register('CommandOrControl+R', () => {
      win.reload();
    });
    globalShortcut.register('CommandOrControl+Shift+I', () => {
      win.webContents.openDevTools();
    });
  } else {
    autoUpdater.checkForUpdates();
  }

  win.once('ready-to-show', () => {
    win.show();
  });

  ipcMain.on('minimize-window', () => {
    win.minimize();
  });
  ipcMain.on('maximize-window', () => {
    if (win.isMaximized()) {
      win.unmaximize();
    } else {
      win.maximize();
    }
  });
  ipcMain.on('close-window', () => {
    app.quit();
  });
}

if (!isInstance) {
  app.quit();
}

app.whenReady().then(createWindow);

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall();
});