export default function stopWebserver(index, win) {
  this.globalStates.listeners[index].close();
  delete this.globalStates.listeners[index];

  win.querySelector(".close").click();
}
