export default function runningClose(win) {
  try {
    this.globalStates.listeners[win.dataset.index].close();
    delete this.globalStates.listeners[win.dataset.index];
  } catch {}
}
