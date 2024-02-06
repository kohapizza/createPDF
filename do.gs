function onOpen() {
  let ui = SpreadsheetApp.getUi()
  
  //メニュー名を決定
  let menu = ui.createMenu("GAS実行");
  
  //メニューに実行ボタン名と関数を割り当て
  menu.addItem("PDF作成","savePdf");
  
  //スプレッドシートに反映
  menu.addToUi();
}