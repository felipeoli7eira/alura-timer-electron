const { app, BrowserWindow, ipcMain } = require('electron')

app.on('ready', () => {
    let mainWindow = new BrowserWindow(
        {
            width: 1200,
            height: 600
        }
    )

    mainWindow.loadURL(`file://${__dirname}/app/window/main.html`)
})

app.on('window-all-closed', () => app.quit())

// "about" window
let aboutWindow = null
ipcMain.on('open-about-window-event', () => {
    if (aboutWindow === null) {
        aboutWindow = new BrowserWindow(
            {
                width: 300,
                height: 300,
                alwaysOnTop: true,
                frame: false
            }
        )
    }

    aboutWindow.on('closed', () => aboutWindow = null)
    aboutWindow.loadURL(`file://${__dirname}/app/window/about.html`)
})

ipcMain.on('close-about-window-event', () => aboutWindow.close())