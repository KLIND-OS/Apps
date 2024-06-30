import styles from "./styles/main";
import { windowNames, addWindows } from "./windows/windows";
import startWebserver from "./functions/startWebserver";
import stopWebserver from "./functions/stopWebserver";

ClassConstructor.add(
  class {
    app;
    key;
    windowNames = windowNames;

    globalStates = {
      listeners: [],
    };

    utils = {
      notify: (data) => control.notify(this.app.info.name, data),
    };

    deps = {
      express: LowLevelApi.NodePackages.get("express"),
    };

    functions = {
      startWebserver: startWebserver.bind(this),
      stopWebserver: stopWebserver.bind(this),
    };

    constructor(key) {
      this.key = key;
      this.app = new App({
        name: "WebServer",
        hidden: false,
      });

      addWindows.bind(this)();

      styles.bind(this)();
    }
  },
);
