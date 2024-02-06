//明細書をPDFとして保存する
function savePdf(){

  //今日の日付を取得
  let today = new Date();

  //日付を取得
  let month = today.getMonth();

  //一桁月を二桁にするために月を文字列化
  let monthStr = month.toString();

  //必要があれば二桁表示にする
  if(monthStr.length === 1){
    monthStr = "0" + monthStr;
  }

  //西暦を取得
  let year = today.getFullYear();

  //保存先
  let folderID = "******"; //******：保存先URL

  //アクティブなスプレッドシートを取得する
  let ss = SpreadsheetApp.getActiveSpreadsheet();

  //スプレッドシートIDを取得する
  let ssId = ss.getId();

  //シートIDを取得する
  let shId = ss.getActiveSheet().getSheetId();

  //従業員名取得
  let memberNameRange = ss.getRange("****"); //****：従業員名の書いてあるセル
  let memberName = memberNameRange.getValue();

  //PDFファイルの名前
  let fileName = year + monthStr + "報酬明細書_" + memberName;

  //関数createPdfを実行し、PDFを作成、保存する
  createPdf(folderID, ssId, shId, fileName);
}