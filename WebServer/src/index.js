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
      express: undefined,
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

      // Load dependencies
      this.deps.express = this.app.nodePackages.get("express");

      addWindows.bind(this)();

      styles.bind(this)();
    }
  },
);
