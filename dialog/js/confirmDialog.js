/* ファイル名:confirmDialog.js
 * 概要　　　:管理者 会員一覧 メール作成ダイアログのJSファイル
 * 作成者　:T.Masuda
 * 場所　　:dialog/js/confirmDialog.js
 */

/* クラス名:confirmDialog.js
 * 概要　　:管理者 会員一覧 メール作成ダイアログ
 * 親クラス:baseDialog
 * 引数	 :Element dialog:ダイアログのDOM
 * 作成者　:T.Masuda
 * 場所　　:dialog/js/confirmDialog.js
 */
function confirmDialog(dialog){
	baseDialog.call(this, dialog);	//親クラスのコンストラクタをコールする

	/* 関数名:setArgumentObj
	 * 概要　:ダイアログに渡すオブジェクトを生成する
	 * 引数　:なし
	 * 返却値:なし
	 * 作成日　:015.08.14
	 * 作成者　:T.Masuda
	 */
	this.setArgumentObj = function() {
	}

	/* 関数名:setConfig
	 * 概要　:ダイアログの設定を行う。任意でオーバーライドして定義する
	 * 引数　:なし
	 * 返却値:なし
	 * 作成日　:2015.0822
	 * 作成者　:T.Masuda
	 */
	this.setConfig = function(){
		//ダイアログのインプット用データのオブジェクトを取得する
		var data = this.dialogClass.getArgumentDataObject();
		//はい・いいえボタンを使う
		this.setButtons(this.yes_no);
		this.dialogClass.setConfirmContents(data.message, data.callback);
		//デフォルトではダイアログの位置調整のみ行う
		this.setDialogPosition(POSITION_CENTER_TOP);
	}


}

//継承の記述
confirmDialog.prototype = new baseDialog();
//サブクラスのコンストラクタを有効にする
confirmDialog.prototype.constructor = baseDialog;






