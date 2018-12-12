const path = require('path');
const isDev = require('electron-is-dev');

var menubar = require('menubar')
var htmlToLoad = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`


var mb = menubar({ index: htmlToLoad })


mb.on('ready', function ready () {
  console.log('app is ready')
  // your app code here
})

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
