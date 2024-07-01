import styles from "./styles/main";
import { windowNames, addWindows } from "./windows/windows";
import selectFilePrint from "./functions/selectFilePrint";
import print from "./functions/print";
import { supported } from "./supported";

ClassConstructor.add(
  class {
    app;
    key;

    utils = {
      notify: (data) => control.notify(this.app.info.name, data),
      print: print.bind(this),
    };

    windowNames = windowNames;

    functions = {
      selectFilePrint: selectFilePrint.bind(this),
    };

    constructor(key) {
      this.key = key;

      this.app = new App({
        name: "Tisknout",
        hidden: false,
      });

      addWindows.bind(this)();

      styles.bind(this)();

      // Register supported file extensions
      control.fileManager.addProgramToOpenApps(
        supported,
        this.utils.print,
        "Tisknout",
      );
    }
  },
);
