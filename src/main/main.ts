import { app, BrowserWindow, Menu, systemPreferences } from 'electron';
import * as path from 'path';
import * as url from 'url';

const isMac = 'darwin' === process.platform;
const USER_AGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36'; // tslint:disable-line

let mainWindow: Electron.BrowserWindow | null;
let forceQuit = false;

const template = [
  {
    label: '编辑',
    submenu: [
      { label: '剪切', accelerator: 'CmdOrCtrl+X', role: 'cut' },
      { label: '复制', accelerator: 'CmdOrCtrl+C', role: 'copy' },
      { label: '粘贴', accelerator: 'CmdOrCtrl+V', role: 'paste' },
      { label: '全选', accelerator: 'CmdOrCtrl+A', role: 'selectall' },
    ],
  },
  {
    label: '查看',
    submenu: [
      {
        label: '重载',
        accelerator: 'CmdOrCtrl+R',
        click(item, focusedWindow) {
          if (focusedWindow) {
            if (focusedWindow.id === 1) {
              BrowserWindow.getAllWindows().forEach(win => {
                if (win.id > 1) {
                  win.close();
                }
              });
            }
            focusedWindow.reload();
          }
        },
      },
      {
        label: '切换全屏',
        accelerator: (() => {
          if (isMac) {
            return 'Ctrl+Command+F';
          } else {
            return 'F11';
          }
        })(),
        click(item, focusedWindow) {
          if (focusedWindow) {
            focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
          }
        },
      },
      {
        label: '切换开发者工具',
        accelerator: (() => {
          if (isMac) {
            return 'Alt+Command+I';
          } else {
            return 'Ctrl+Shift+I';
          }
        })(),
        click(item, focusedWindow) {
          if (focusedWindow) {
            focusedWindow.toggleDevTools();
          }
        },
      },
    ],
  },
  {
    label: '窗口',
    role: 'window',
    submenu: [
      { label: '最小化', accelerator: 'CmdOrCtrl+M', role: 'minimize' },
      { label: '关闭', accelerator: 'CmdOrCtrl+W', role: 'close' },
      { label: '退出', accelerator: 'Cmd+Q', role: 'quit' },
    ],
  },
];

if (isMac) {
  template.unshift({
    label: app.getName(),
    submenu: [
      { label: `关于 ${app.getName()}`, role: 'about', accelerator: '' },
    ],
  });
}

function createWindow() {
  const titleBarStyle = isMac ? 'hiddenInset' : 'default';
  mainWindow = new BrowserWindow({
    minHeight: 600,
    minWidth: 900,
    width: 1165,
    height: 650,
    backgroundColor: 'white',
    titleBarStyle,
    title: '配电网多源信息故障诊断模拟软件',
    frame: !isMac,
    icon: path.join(__dirname, '../../build/icon.png'),
    show: true,
    acceptFirstMouse: true,
    webPreferences: {
      webSecurity: false,
    },
  });

  mainWindow.webContents.setUserAgent(USER_AGENT);

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:6008/#/');
    if (process.env.DEV_TOOLS) {
      mainWindow.webContents.openDevTools();
    }
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, './dist/renderer/index.html'),
        protocol: 'file:',
        slashes: true,
      })
    );
  }

  if (isMac) {
    setTimeout(
      () => systemPreferences.isTrustedAccessibilityClient(true),
      1000
    );
  }

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.on('close', e => {
    if (forceQuit || !isMac) {
      app.quit();
    } else {
      e.preventDefault();
      mainWindow.hide();
    }
  });
}

app.on('ready', () => {
  createWindow();

  if (isMac) {
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
  }
});

app.on('window-all-closed', () => {
  if (isMac) {
    app.quit();
  }
});

app.on('activate', () => {
  if (!mainWindow.isVisible()) {
    mainWindow.show();
  }
});

app.on('before-quit', e => {
  forceQuit = true;
  mainWindow = null;
});
