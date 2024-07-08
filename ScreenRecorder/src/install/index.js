(async () => {
  const execAsync = LowLevelApi.filesystem.promisify(
    LowLevelApi.child_process.exec,
  );
  windows.open("viewtext", {
    text: "Starting installing ScreenRecorder",
    title: "Program installer status",
  });

  await execAsync(
    "sudo pacman -Sy --noconfirm --needed recordmydesktop ffmpeg",
  );

  window.installFinished();
})();
