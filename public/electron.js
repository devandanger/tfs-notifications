const path = require('path');
const isDev = require('electron-is-dev');
const { BrowserWindow, Menu } = require("electron");

var menubar = require('menubar')
var htmlToLoad = isDev ? 'http://localhost:3000?main' : `file://${path.join(__dirname, '../build/index.html?main')}`


var mb = menubar({ index: htmlToLoad })


mb.on('ready', function ready () {
  console.log('app is ready')
  // your app code here
})

//right click menu for Tray
mb.on('after-create-window', function() {
  const contextMenu = Menu.buildFromTemplate ([
    {label: 'Settings', click: () => createSettingsWindow() },
    {label: 'Restart', click: () => { mb.app.quit();mb.app.relaunch(); }},
    {type: 'separator'},
    {label: 'Quit', click: () => {mb.app.quit ();}}
  ])
  mb.tray.on ('right-click', () => {
      mb.tray.popUpContextMenu (contextMenu);
  })
});

const openDevTools = () => {
  console.log("Opening dev tool")
  let devWin = new BrowserWindow({ width: 400, height: 400 })
  devWin.webContents.openDevTools()
}

const createSettingsWindow = () => {
  let win = new BrowserWindow({ width: 250, height: 400 })
  win.on('closed', () => {
    win = null
  })
  var settingsHtmlToLoad = isDev ? 'http://localhost:3000?settings' : `file://${path.join(__dirname, '../build/index.html?settings')}`
  win.loadURL(settingsHtmlToLoad)
}


// app.on('ready', () => {
// 	createWindow();
// });

// app.on('window-all-closed', () => {
// 	app.quit();
// });

// app.on('activate', () => {
// 	if (mainWindow === null) {
// 		createWindow();
// 	}
// });

// ipcMain.on('load-page', (event, arg) => {
// 	mainWindow.loadURL(arg);
// });
