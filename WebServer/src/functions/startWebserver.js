export default function startWebserver(win) {
  const port = win.querySelector("#port").value;

  if (this.globalStates.listeners.some((e) => e.adress().port == port)) {
    return this.utils.notify("Server is already running on this port!");
  }

  if (["9998", "9999", "100000"].includes(port)) {
    return this.utils.notify("This port is already used by the system!");
  }

  const path = LowLevelApi.filesystem.path.join(
    LowLevelApi.filesystem.os.homedir() + "/usrfiles",
    win.querySelector("#folder").value,
  );

  const expressApp = this.deps.express();

  expressApp.use(this.deps.express.static(path));

  const listener = expressApp.listen(port);

  const index = this.globalStates.listeners.length;
  this.globalStates.listeners.push(listener);

  win.querySelector(".close").click();
  windows.open(this.app.windowParser.parseName(this.windowNames.RUNNING), {
    index,
  });
}
