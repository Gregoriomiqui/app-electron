const { app, BrowserWindow } = require("electron");
const path = require("path");

function crearVentanaPrincipal() {
  let ventanaPrincipal = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  ventanaPrincipal.loadFile("index.html");
}

app.whenReady().then(crearVentanaPrincipal)

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
