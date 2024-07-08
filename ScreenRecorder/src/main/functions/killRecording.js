export default function killRecording(win, button) {
  button.textContent = this.strings["please_wait"];
  clearInterval(win.getAttribute("timerIntervalId"));
  win.querySelectorAll("#root button").forEach((button) => {
    button.disabled = true;
  });

  this.globalStates.recordingObject.on("close", async () => {
    await this.utils.asyncExec(`rm $HOME/recording.ogv`);

    this.globalStates.recording = false;
    win.setAttribute("recordingState", "false");
    win.querySelector(".headerclass .close").click();
  });

  this.globalStates.recordingObject.kill("SIGINT");
  setTimeout(() => {
    this.globalStates.recordingObject.kill("SIGINT");
  }, 200);
}
