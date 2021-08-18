const { app, BrowserWindow, session } = require('electron');

const env = process.env.NODE_ENV || 'production';

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 960,
        height: 540,
        autoHideMenuBar: true,
        webPreferences: {
            preload: `${__dirname}/js/preload.js`,
        },
    });

    // Use custom User Agent
    session.defaultSession.webRequest.onBeforeSendHeaders(
        (details, callback) => {
            details.requestHeaders['User-Agent'] =
                'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36';
            callback({ cancel: false, requestHeaders: details.requestHeaders });
        }
    );

    // Load WhatsApp web URL
    mainWindow.loadURL('http://web.whatsapp.com/');

    // Open dev tools
    if (env === 'development')
        mainWindow.webContents.openDevTools({ mode: 'detach' });
};

app.on('ready', createWindow);

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
