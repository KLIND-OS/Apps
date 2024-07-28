import doneOpen from "./DONE/open";
import recordingOpen from "./RECORDING/open";

export function getWindowNames() {
  return {
    MAIN: "ScreenRecorder",
    RECORDING: this.strings["recording"],
    DONE: this.strings["recording_saved"],
  };
}

export function addWindows() {
  const windowNames = getWindowNames.bind(this)();

  this.app.createWindow({
    name: windowNames.MAIN,
    buttons: {
      close: () => {},
      mini: () => {},
    },
    defaultWindow: true,

    content: "pages/main.html",
    passProps: () => {
      return {
        key: this.key,
        opened: this.app.storage.get("opened") == "true",
        strings: this.strings,
      };
    },
  });

  this.app.createWindow({
    name: windowNames.RECORDING,
    buttons: {
      close: (win) => win.getAttribute("recordingState") == "true",
    },
    onStart: recordingOpen.bind(this),

    content: "pages/recording.html",
    passProps: () => {
      return {
        key: this.key,
        strings: this.strings,
      };
    },
  });

  this.app.createWindow({
    name: windowNames.DONE,
    buttons: {
      close: () => {},
      mini: () => {},
    },
    onStart: doneOpen.bind(this),

    content: "pages/done.html",
    passProps: (_, args) => {
      return {
        path: args.path,
        strings: this.strings,
      };
    },
  });
}
