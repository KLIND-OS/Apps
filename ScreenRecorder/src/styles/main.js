export default function styles() {
  const styles = new JSSElement("", undefined, [
    new JSSElement(
      `.${this.app.windowParser.parseClass(this.windowNames.MAIN)} #root`,
      new JSSStyles([
        new JSSStyle("display", "flex"),
        new JSSStyle("flex-direction", "column"),
        new JSSStyle("text-align", "center"),
        new JSSStyle("gap", "15px"),
        new JSSStyle("justify-content", "center"),
      ]),
      [
        new JSSElement(
          `button`,
          new JSSStyles([new JSSStyle("height", "50px")]),
        ),
      ],
    ),
    new JSSElement(
      `.${this.app.windowParser.parseClass(this.windowNames.RECORDING)} #root`,
      new JSSStyles([
        new JSSStyle("display", "flex"),
        new JSSStyle("flex-direction", "column"),
        new JSSStyle("text-align", "center"),
        new JSSStyle("justify-content", "center"),
      ]),
      [
        new JSSElement(
          `button`,
          new JSSStyles([new JSSStyle("height", "50px")]),
        ),
      ],
    ),
    new JSSElement(
      `.${this.app.windowParser.parseClass(this.windowNames.DONE)} #root`,
      new JSSStyles([
        new JSSStyle("display", "flex"),
        new JSSStyle("flex-direction", "column"),
        new JSSStyle("text-align", "center"),
        new JSSStyle("gap", "15px"),
        new JSSStyle("justify-content", "center"),
      ]),
    ),
  ]);

  const compiledStyles = JSSCompiler.compile(styles);
  JSSCompiler.add(compiledStyles);
}
