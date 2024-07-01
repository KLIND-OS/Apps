import mainOpen from "./MAIN/open";

export const windowNames = {
  MAIN: "Tisknout",
};

export function addWindows() {
  this.app.createWindow({
    name: this.windowNames.MAIN,
    buttons: {
      close: () => {},
      mini: () => {},
    },
    onStart: mainOpen.bind(this),
    defaultWindow: true,

    content: "pages/main.html",
    passProps: () => {
      return {
        key: this.key,
      };
    },
  });
}
