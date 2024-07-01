import { supported } from "../supported";

export default function selectFilePrint() {
  control.fileManager.fileSelect({
    success: (filePath) => {
      if (!supported.includes(filePath.split(".")[1])) {
        return this.utils.notify("Tento typ souboru není podporován.");
      }

      this.utils.print(filePath);
    },
    closed: () => {},
  });
}
