export default function stopRecording(win, button) {
  if (!this.globalStates.recording) {
    control.notify(this.app.info.name, "Nahrávání neprobíhá!");
    return;
  }

  win.querySelectorAll("#root button").forEach((button) => {
    button.disabled = true;
  });
  button.textContent = this.strings["please_wait"];

  clearInterval(win.getAttribute("timerIntervalId"));

  this.globalStates.recordingObject.stdout.on("data", (data) => {
    try {
      const dat = data.toString().trim().split("[")[1].split("]")[0];
      button.textContent = this.strings["saving"] + ": " + dat;
    } catch {}
  });

  this.globalStates.recordingObject.on("close", async () => {
    button.textContent = this.strings["converting"];

    try {
      await this.utils.asyncExec(`mkdir $HOME/usrfiles/Recordings`);
    } catch {}

    const time = new Date().toISOString().replace("T", " ").split(".")[0];
    const filePath = `/Recordings/REC ${time}.mp4`;

    const bypass = FileLocker.add(filePath);
    const intervalID = setInterval(() => {
      FileLocker.continue(filePath);
    }, 2000);

    const script = `ffmpeg -i "$HOME/recording.ogv" -vcodec libx264 "$HOME/usrfiles${filePath}"`;
    const bash = LowLevelApi.child_process.spawn("bash", ["-c", script]);

    bash.on("close", async () => {
      await this.utils.asyncExec(`rm $HOME/recording.ogv`);

      FileLocker.remove(filePath, bypass);
      clearInterval(intervalID);

      win.setAttribute("recordingState", "false");
      win.querySelector(".headerclass .close").click();
      windows.open(this.app.windowParser.parseName(this.windowNames.DONE), {
        path: filePath,
      });
    });
  });

  this.globalStates.recording = false;
  this.globalStates.recordingObject.kill("SIGINT");
}
