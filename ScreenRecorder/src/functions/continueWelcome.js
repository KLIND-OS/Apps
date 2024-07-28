export default function continueWelcome(win) {
  this.app.storage.set("opened", "true");
  win.querySelector(".headerclass .close").click();
  windows.open(Apps[this.app.info.name]);
}
