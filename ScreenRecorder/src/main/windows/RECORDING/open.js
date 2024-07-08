export default function recordingOpen(win) {
  const width = win.offsetWidth;
  const screenWidth = window.innerWidth;
  const finalLeft = screenWidth - width - 15;
  win.style.inset = `15px auto auto ${finalLeft}px`;

  win.setAttribute("recordingState", "true");
  this.globalStates.recording = true;

  const bash = LowLevelApi.child_process.spawn("bash", [
    "-c",
    this.utils.SCRIPT,
  ]);

  function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = Math.floor(seconds % 60);
    return ("0" + minutes).slice(-2) + ":" + ("0" + remainingSeconds).slice(-2);
  }
  var startTime = Date.now() / 1000;
  var elapsedTime;
  const timer = win.querySelector("h1");
  var intervalId = setInterval(function () {
    elapsedTime = Date.now() / 1000 - startTime;
    timer.textContent = formatTime(elapsedTime);
  }, 1000);

  win.setAttribute("timerIntervalId", intervalId);

  this.globalStates.recordingObject = bash;
}
