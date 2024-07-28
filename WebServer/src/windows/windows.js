import runningOpen from "./RUNNING/open";
import runningClose from "./RUNNING/close";

export const windowNames = {
  MAIN: "WebServer",
  RUNNING: "WebServer - Beží",
};

export function addWindows() {
  this.app.createWindow({
    name: this.windowNames.MAIN,
    buttons: {
      close: () => {},
      mini: () => {},
    },
    content: "pages/main.html",
    passProps: () => {
      return { key: this.key };
    },
    defaultWindow: true,
  });

  this.app.createWindow({
    name: this.windowNames.RUNNING,
    buttons: {
      close: runningClose.bind(this),
      mini: () => {},
    },
    onStart: runningOpen.bind(this),
    content: "pages/running.html",
    passProps: (_, { index }) => {
      return {
        key: this.key,
        index,
      };
    },
  });
}
