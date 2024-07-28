import styles from "./styles/main";
import { addWindows, getWindowNames } from "./windows/windows";
import startRecording from "./functions/startRecording";
import stopRecording from "./functions/stopRecording";
import killRecording from "./functions/killRecording";
import continueWelcome from "./functions/continueWelcome";
import loadLang from "./utils/loadLang";

ClassConstructor.add(
  class {
    app;
    key;

    globalStates = {
      recording: false,
      recordingObject: undefined,
    };

    utils = {
      asyncExec: LowLevelApi.filesystem.promisify(
        LowLevelApi.child_process.exec,
      ),
      SCRIPT: `recordmydesktop --device pipewire --output ~/recording.ogv --no-frame --overwrite`,
    };

    strings = {};

    functions = {
      continueWelcome: continueWelcome.bind(this),
      startRecording: startRecording.bind(this),
      stopRecording: stopRecording.bind(this),
      killRecording: killRecording.bind(this),
    };

    constructor(key) {
      this.key = key;

      this.app = new App({
        name: "ScreenRecorder",
        hidden: false,
      });
      (async () => {
        await loadLang.bind(this)();

        addWindows.bind(this)();

        this.windowNames = getWindowNames.bind(this)();

        styles.bind(this)();
      })();
    }
  },
);
