import { supported } from "../supported";

export default function selectFilePrint() {
  control.fileManager.fileSelect({
    success: (filePath) => {
      const parts = filePath.split(".")[1];
      const type = parts[parts.length - 1];
      if (!supported.includes(type)) {
        return this.utils.notify("Tento typ souboru není podporován.");
      }

      this.utils.print(filePath);
    },
    closed: () => {},
  });
}
