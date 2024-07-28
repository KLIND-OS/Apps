export default async function loadLang() {
  const supported = ["cs", "en"];
  const lang = Localization.getLang();
  let finalLang = lang; 

  if (!supported.includes(lang)) {
    finalLang = "en";
  }

  const stringsText = await this.app.appData.getText(`localization/${finalLang}/strings.json5`);
  const strings = JSON5.parse(stringsText);

  this.strings = strings;
}
