export default function startRecording(win) {
  if (this.globalStates.recording) {
    control.notify(
      this.app.info.name,
      this.strings["already_recording"],
    );
    return;
  }

  win.querySelector(".headerclass .close").click();
  windows.open(this.app.windowParser.parseName(this.windowNames.RECORDING));
}
