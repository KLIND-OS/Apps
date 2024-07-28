export default function doneOpen(win) {
  const width = win.offsetWidth;
  const height = win.offsetHeight;
  var ww = window.innerWidth;
  var wh = window.innerHeight;
  const finalw = ww / 2 - width / 2;
  const finalh = wh / 2 - height / 2;
  win.style.inset = finalh + "px auto auto " + finalw + "px";
}
