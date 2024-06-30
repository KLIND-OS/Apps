(async () => {
  control.notify("test", "Začínám instalaci!");
  windows.open("viewtext", {
    text: "Instalace programu test\n\nPrávě se začala instalovat aplikace test.\n\nProsím počkejte...",
    title: "Status instalace programu",
  });

  await LowLevelApi.NodePackages.install("express")

  windows.open("viewtext", {
    text: "Instalace programu test byla dokončena!\n\nZa několik sekund se vám restartuje počítač.",
    title: "Status instalace programu"
  })

  setTimeout(() => {
    window.installFinished();
  }, 5000)
})();
