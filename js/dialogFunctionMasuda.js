
//定数を定義する
SPECIAL_RESERVED_CONFIRM_DIALOG_URL = 'dialog/specialReservedConfirmDialog.html';	//体験レッスン予約確認ダイアログのHTMLファイルのURL

/* ログイン前の準備関数 */
function beforeLoginProcedure(){
	
	//ログインダイアログのJSONが用意されていなければ
	if(util.checkEmpty(creator)|| !(LOGIN_DIALOG in creator.json)){
		//ログインダイアログのJSONを取得する
		creator.getJsonFile(PATH_LOGIN_DIALOG_JSON);
	}
}
//ここまでログインダイアログの関数

//体験レッスン予約ダイアログ関連関数
//予約ダイアログの準備関数
function beforeOpenSpecialReservedDialog(){
	console.log(this);
	//予約ダイアログのインスタンスを取得する。
	var specialReservedDialogClass = $('.specialReservedDialog')[0].instance;
	
	//日付の配列を取り出す。
	var array = specialReservedDialogClass.argumentObj.date;
	var content = specialReservedDialogClass.argumentObj.contentName;
	// ダイアログのデータを格納する連想配列を宣言し、引数の配列に格納されたコンテンツ名と予約希望日時を格納する。
	reservedData = {'year': array[0], 'month': array[1], 'day': array[2]};
	
	// 全ての曜日のチェックボックスにチェックする
	allCheckbox('.allDayCheckbox', 'input[name="dayOfWeek"]');
	// 全ての週のチェックボックスにチェックする
	allCheckbox('.allWeekCheckbox', 'input[name="week"]');
	
	// ダイアログに日付欄を追加する。
	createSpecialDate(reservedData['year'], reservedData['month'], reservedData['day']);
};

var specialReservedDialogOption = {
		// ボタンの生成と設定を行う。
		buttons:[
			{
				// OKボタンのテキスト。
				text:'OK',
				// ボタン押下時の処理を記述する。
				click:function(event, ui){
				    //必須入力チェックを行う。
				    var emptyList = checkEmptyInput(checkNames);
			        //アルファベット入力だけ行わせるテキストボックス名のリストを格納する配列を宣言する。
				    var onlyAlphabetList = checkAllAlphabet('input[name="personPhoneNumber"], input[name="email"], input[name="personCount"]');
				    //メールアドレスの再入力が行われているかをチェックする。失敗なら配列に空文字を入れる。
				    var emailCheck = $('.personEmail input').val() !== $('.personEmailCheck input').val()? [""]: null;
				    //カウントクラスのテキストボックス(人数)が0以下でないかをチェックする。
				    var numberList = numberCheck('.count');
				    // 必須入力項目が皆入力済みであり、英数字しか入力してはいけない項目がOKなら
				    if(emptyList == null && onlyAlphabetList == null && emailCheck == null &&numberList == null) {
				        // 予約希望確認ダイアログを作成する。引数のオブジェクトに日付データ配列、コンテンツ名を渡す
				        var confirmDialog = new dialogEx(SPECIAL_RESERVED_CONFIRM_DIALOG_URL, {}, specialReservedConfirmDialogOption);
				    	//閉じたら完全にダイアログを破棄させる
				        confirmDialog.setCallbackClose(confirmDialog.destroy);
				        confirmDialog.run();	//予約希望確認ダイアログを開く
				        			 
					    //入力確認のものは送信すべきではないので、送信前に前持って無効化する
					    $('.personEmailCheck input').attr('disabled', 'disabled');
					    //ダイアログ内のフォームをsubmitする。
					    $('form.specialReservedDialog').submit();				        		 
					    // このダイアログの入力要素を一時的に無効化する。
					    disableInputs($(this));
				    } else {
				        //警告のテキストを作る。
				        var alerts = makeFailedAlertString({'emptyList':emptyList,'onlyAlphabetList':onlyAlphabetList,'emailCheck':emailCheck,'numberList':numberList},checkNamesJp, messages);
				        //アラートを出す。
				    	 alert(alerts);
				    }
			 	 }
			},
			{
			// キャンセルボタンのテキスト。
			text:'Cancel',
			// ボタン押下時の処理を記述する。
			click:function(event, ui){
				$(this).dialog('close');//ダイアログを閉じる
				reservedData = null;	//予約データを消す
		    }
		}
	],
		// 幅を設定する。
	width			: '300',
	// 予約ダイアログのクラスを追加する。
	dialogClass		:'reservedDialog',
	// ダイアログを生成と同時に開く。
	autoOpen		: true,
	// Escキーを押してもダイアログが閉じないようにする。
	closeOnEscape	: false,
	// モーダルダイアログとして生成する。
	modal			: true,
	// リサイズしない。
	resizable		: false, 
	// 作成完了時のコールバック関数。
	create:function(event, ui){
		// タイトルバーを見えなくする。
		$(this).prev().children().filter('.ui-dialog-titlebar-close').remove();
		$(this).next().css('font-size', '0.5em');
	},
	// 位置を指定する。
	position:{
		// ダイアログ自身の位置合わせの基準を、X座標をダイアログ中央、Y座標をダイアログ上部に設定する。
		my:'center center',
		// 位置の基準となる要素(ウィンドウ)の中心部分に配置する。
		at:'center center',
		// ウィンドウをダイアログを配置する位置の基準に指定する。
		of:window
	}

}
//ここまで体験レッスン予約ダイアログ関連関数

//体験レッスン予約確認ダイアログ関連関数

//体験レッスン予約確認ダイアログの設定オブジェクト
var specialReservedConfirmDialogOption = {
	// 幅を設定する。
	width			: '300',
	// 予約ダイアログのクラスを追加する。
	dialogClass		:'reservedDialog',
	// ダイアログを生成と同時に開く。
	autoOpen		: true,
	// Escキーを押してもダイアログが閉じないようにする。
	closeOnEscape	: false,
	//タイトルをつける。
	title:"レッスン予約希望 送信内容確認",
	// モーダルダイアログとして生成する。
	modal			: true,
	// リサイズしない。
	resizable		: false, 
	// 作成完了時のコールバック関数。
	create:function(event, ui){
		// タイトルバーを見えなくする。
		$('.reservedDialog .ui-dialog-titlebar-close').css('display', 'none');
	},
	// ダイアログが閉じられる前のイベント
	beforeClose:function(event, ui){
		//下のダイアログのロックを解除する。
		moveToPrevDialog($(this));
	},
	// 位置を指定する。
	position:{
		// ダイアログ自身の位置合わせの基準を、X座標をダイアログ中央、Y座標をダイアログ上部に設定する。
		my:'center center',
		// 位置の基準となる要素(ウィンドウ)の中心部分に配置する。
		at:'center center',
		// ウィンドウをダイアログを配置する位置の基準に指定する。
		of:window
	}
}

//ここまで体験レッスン予約確認ダイアログ関連関数

