export default function styles() {
  const styles = new JSSElement("", undefined, [
    new JSSElement(
      `.${this.app.windowParser.parseClass(this.windowNames.MAIN)}`,
      undefined,
      [
        new JSSElement(
          `h1`,
          new JSSStyles([new JSSStyle("text-align", "center")]),
        ),
        new JSSElement(
          `button`,
          new JSSStyles([
            new JSSStyle("width", "100%"),
            new JSSStyle("height", "40px"),
            new JSSStyle("font-size", "20px"),
            new JSSStyle("margin-top", "20px"),
          ]),
        ),
        new JSSElement(
          `h3`,
          new JSSStyles([new JSSStyle("margin-top", "10px")]),
        ),
      ],
    ),
    new JSSElement(
      `.${this.app.windowParser.parseClass(this.windowNames.RUNNING)}`,
      undefined,
      [
        new JSSElement(
          `h1`,
          new JSSStyles([new JSSStyle("text-align", "center")]),
        ),
      ],
    ),
  ]);
  const compiledStyles = JSSCompiler.compile(styles);
  JSSCompiler.add(compiledStyles);
}
