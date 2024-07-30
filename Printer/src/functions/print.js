export default async function print(path) {
  const exec = LowLevelApi.filesystem.promisify(LowLevelApi.child_process.exec);
  const finalPath = LowLevelApi.filesystem.path.join(
    LowLevelApi.filesystem.os.homedir(),
    "usrfiles",
    path,
  );

  const printers = JSON.parse(
    (
      await exec(
        `lpstat -p | awk '/^printer/ {print $2}' | jq -R 'split("\\n") | map(select(length > 0))'`,
      )
    ).stdout,
  );

  control.message.list("Select printer for printing", printers, (printer) => {
    control.message.prompt(
      "Select number of copies",
      async (copies) => {
        if (isNaN(parseInt(copies)) || parseInt(copies) < 1) {
          return control.message.alert("Invalid numbers of copies!");
        }

        await exec(`lp -d '${printer.trim()}' -n ${copies.trim()} '${finalPath}'`);

        this.utils.notify("File was added to the queue.");
      },
      "1",
    );
  });
}
