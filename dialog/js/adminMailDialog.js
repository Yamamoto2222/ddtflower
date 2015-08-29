/* ファイル名:adminMailDialog.js
 * 概要　　　:管理者 会員一覧 メール作成ダイアログのJSファイル
 * 作成者　:T.Masuda
 * 場所　　:dialog/js/adminMailDialog.js
 */

/* クラス名:adminMailDialog.js
 * 概要　　:管理者 会員一覧 メール作成ダイアログ
 * 親クラス:baseDialog
 * 引数	 :Element dialog:ダイアログのDOM
 * 作成者　:T.Masuda
 * 場所　　:dialog/js/adminMailDialog.js
 */
function adminMailDialog(dialog){
	baseDialog.call(this, dialog);	//親クラスのコンストラクタをコールする

	/* 関数名:getJson
	 * 概要　:JSONを取得する(オーバーライドして内容を定義してください)
	 * 引数　:なし
	 * 返却値:なし
	 * 設計者　:H.Kaneko
	 * 作成日　:2015.0815
	 * 作成者　:T.Masuda
	 */
	this.getJson = function(){
		//会員にメール送信ダイアログのjsonを取得する
		this[VAR_CREATE_TAG].getJsonFile('dialog/source/adminMailDialog.json');
	};
	
	/* 関数名:getDom
	 * 概要　:createTag用テンプレートHTMLを取得する(オーバーライドして内容を定義してください)
	 * 引数　:なし
	 * 返却値:なし
	 * 設計者　:H.Kaneko
	 * 作成日　:2015.0822
	 * 作成者　:T.Masuda
	 */
	this.getDom = function(){
		
		//会員にメール送信ダイアログのjsonを取得するのテンプレートを取得する
		this[VAR_CREATE_TAG].getDomFile('dialog/template/adminMailDialog.html');
		
	};
	
	/* 関数名:customizeJson
	 * 概要　:constructionContentで取得したJSONの加工を行う。オーバーライドして定義されたし
	 * 引数　:なし
	 * 返却値:なし
	 * 設計者　:H.Kaneko
	 * 作成日　:2015.0815
	 * 作成者　:T.Masuda
	 */
	this.customizeJson = function(){
		//ダイアログのインプット用データを取得する
		var data = this[DIALOG_CLASS].getArgumentDataObject();
		//表示、送信するデータをまとめる
		var sendData = this.createSendData(data);
		//createTag用にcreateLittleContentsクラスインスタンスのJSON連想配列に宛先の名前、メールアドレスを追加する
		this[VAR_CREATE_TAG].json.mailForm.mailToPersonArea.mailToPersonLabel.text = sendData.name;
		this[VAR_CREATE_TAG].json.mailForm.mailToArea.mailTo.text = sendData.email;
		data.idList = sendData.id;	//送信先のIDをセットする
	};

	/* 関数名:createSendData
	 * 概要　:表示、送信するデータをまとめる
	 * 引数　:Object data:ユーザ名、メールアドレス、会員IDのリスト(配列)がまとめられたオブジェクト
	 * 返却値:Object:まとめたデータを返す。データがなかったら空オブジェクトを返す
	 * 作成日　:2015.0822
	 * 作成者　:T.Masuda
	 */
	this.createSendData = function(data){
		//送信するメールまたはお知らせの数を取得する
		var mailNum = data.name.length;
		
		if(!mailNum){	//データがなければ
			return {};	//空のオブジェクトを返す
		}
		
		//各配列をまとめるための文字列を格納する変数を宣言する
		var userNames = EMPTY_STRING;		//ユーザ名
		var eMails = EMPTY_STRING;			//メールアドレス
		var idList = EMPTY_STRING;			//IDの一覧
		
		//ループで情報をまとめる
		for(var i = 0 ;i < mailNum; i++) {
			//初回ループでなければ
			if (userNames != EMPTY_STRING) {
				//各文字列をカンマで区切る
				userNames += CHAR_COMMA;
				eMails += CHAR_COMMA;
				idList += CHAR_COMMA;
			}
			//各文字列に順次追加を行っていく
			userNames += data.name[i];
			eMails += data.mail[i];
			idList += data.id[i];
		}
		
		//作成したデータをオブジェクトにまとめて返す
		return {name : userNames, email : eMails, id : idList};
	}

	/* 関数名:dispContentsMain
	 * 概要　:画面パーツ設定用関数のメイン部分作成担当関数
	 * 引数　:なし
	 * 返却値:なし
	 * 設計者　:H.Kaneko
	 * 作成日　:2015.0814
	 * 作成者　:T.Masuda
	 */
	this.dispContentsMain = function(){
		//メールフォームを作る
		this[VAR_CREATE_TAG].outputTag('mailForm', 'mailForm', CURRENT_DIALOG);
	}
	
	/* 関数名:dispContentsFooter
	 * 概要　:画面パーツ設定用関数のフッター部分作成担当関数
	 * 引数　:なし
	 * 返却値:なし
	 * 設計者　:H.Kaneko
	 * 作成日　:2015.0814
	 * 作成者　:T.Masuda
	 */
	this.dispContentsFooter = function(){
		//送信の確認ボタン、リセットボタンを配置する
		this.setButtons(this.confirm_reset);
	}
	
	/* 関数名:setArgumentObj
	 * 概要　:ダイアログに渡すオブジェクトを生成する
	 * 引数　:なし
	 * 返却値:なし
	 * 作成日　:015.08.14
	 * 作成者　:T.Masuda
	 */
	this.setArgumentObj = function() {
		//インプット用オブジェクトのコピーを作る
		var argumentObj = commonFunc.createCloneObject(this[DIALOG_CLASS].getArgumentObject());
		var data = this[DIALOG_CLASS].getArgumentDataObject();
		//次のダイアログに渡すデータをまとめる
		$.extend(true, 	
				argumentObj.data,		//送信確認ダイアログのdataオブジェクト 
				commonFuncs.getInputData('.mailSendContent'),	//このダイアログで編集したデータ 
				data, 								//このダイアログに渡されたパラメータのdataオブジェクト
				{dialog:this[DIALOG_CLASS], callback:this.doSendMail}				//このダイアログのクラスインスタンス
		);
		
		return argumentObj;	//作成したオブジェクトを返す
	}

	/* 関数名:updateJson
	 * 概要　:サーバへクエリを投げる前に、送信するJSONデータを加工する
	 * 引数　:なし
	 * 返却値:Object:送信するオブジェクトを返す
	 * 設計者　:H.Kaneko
	 * 作成日　:2015.0815
	 * 作成者　:T.Masuda
	 */
	this.updateJson = function(){
		//お知らせのレコードを追加するためのオブジェクトを作成する
		//返却するためのオブジェクトを作成する。2つのクエリを投げるので、それに対応した2つのキーとオブジェクトを用意する
		var retObj = {inf:{}, to:{}};
		//createTagのJSONを取得する
		var json = this[VAR_CREATE_TAG];
		//お知らせのコンテンツ部分を作る
		retObj.inf = 
				{
					db_setQuery:json.insertMessageInf.db_setQuery,		//クエリを設定する 
					message_title:{ value : $('.message_title')}, 		//ダイアログからタイトルを取得する
					message_content:{ value : $('.message_content')}	//ダイアログから本文を取得する
				};
		//お知らせのユーザとコンテンツの紐付けレコードの部分を作る
		retObj.to = 
				{
					db_setQuery : json.insertMessageTo.db_setQuery,	//クエリを設定する 
					user_key : { value : EMPTY_STRING }				//会員IDをセットするキーとオブジェクトをセットする
				};
		
		return retObj;	//作成したオブジェクトを返す
	};
	
	/* 関数名:sendMailOrAnnounce
	 * 概要　:メール、またはお知らせを送信する
	 * 引数　:Object data:送信するデータを格納したオブジェクト
	 * 返却値:boolean:送信の成否判定を返す
	 * 作成日　:015.08.22
	 * 作成者　:T.Masuda
	 */
	this.sendMailOrAnnounce = function(data){
		//メール送信が成功したか否かの判定の変数を用意する
		var isSend = 0;	
		// メールを送信する処理
		//メール送信用のデータを取得する
		var sendMaidData = commonFuncs.getInputData('.mailSendContent');
		var sendObject = {									//送信するデータのオブジェクト
				to:data.idList					//送信先(会員IDの羅列)
				,subject:data.suggest_title		//タイトル
				,content:data.suggest_content	//本文
		};
		
		//メール送信であれば
		if(data.sendType == 'mail'){
			var sendUrl = SEND_ADMINMAIL_PHP ;					//管理者メールの送信先PHP
			//メールを送信する。成否判定を設定する
			isSend = commonFuncs.sendMail(sendObject, 'php/mailSendEntryMemberMail.php', 'メールの送信に成功しました。');
		//お知らせ更新であれば
		} else {
			//DBへクエリを送信するため、ダイアログ専用の処理を行うクラスのインスタンスを取得する
			var dialogBuilder = this[DIALOG_BUILDER];
			//データ追加用JSONを作成する
			var sendObject = dialogBuilder.updateJson();
			//DBにお知らせのデータを追加する
			isSend = parseInt(dialogBuilder.__proto__.sendQuery(URL_SAVE_JSON_DATA_PHP, sendObject.inf)['message']) ?
					//1つ目のクエリが成功したら、2つ目のクエリを実行する
					parseInt(dialogBuilder.sendQuery(URL_SAVE_JSON_DATA_PHP, sendObject.to).message) : false;
		}
	
		return isSend;	//送信の成否判定を返す
	}
	
	/* 関数名:sendQuery
	 * 概要　:DBヘテーブル操作のクエリを投げる
	 * 引数　:String sendUrl:DBへアクセスするアプリケーションのパス
	 * 		:Object sendObj:URLへ送信するデータのオブジェクト
	 * 返却値:int:処理したレコード数を返す
	 * 設計者　:H.Kaneko
	 * 作成日　:2015.0822
	 * 作成者　:T.Masuda
	 */
	this.sendQuery = function(sendUrl, sendObj){
		//会員IDのリストを取り出す
		var id = this[DIALOG_CLASS].getArgumentDataObject().id;
		var idLength = id.length;	//会員IDの数を取得する
		var processCount = 0;
		var isProcess;
		
		for(var i = 0; i < idLength; i++){
			sendObj.user_key.value = id[i];	//順次お知らせをセットする先の会員IDを送信するJSONにセットする
			//クラス継承元のsendQuery関数で会員IDの分だけクエリを発行する
			isProcess = this.__proto__.sendQuery(sendUrl, sendObj);
			//処理に成功していたら
			if(isProcess){
				processCount++;	//処理件数をカウントアップする
			}
		}
		
		return processCount;	//処理した件数を返す
	};
	
	//管理者メール送信確認ダイアログのコールバック関数。

	/* 関数名:doSendMail
	 * 概要　:メールを送信する
	 * 引数　:なし
	 * 返却値:なし
	 * 作成日　:2015.08.10
	 * 作成者　:T.Masuda
	 */
	this.doSendMail = function(){
		//親のダイアログのクラスインスタンスを取得する
		var dialogClass = this.instance.getArgumentDataObject().dialog;
		
		//押されたボタンの判定を行う。returnObjに設定されたボタンの値を基準にする
		switch(dialogClass.getPushedButtonState()){
		//はいボタンが押されていたら
			case YES:
				var data = dialogClass.getArgumentDataObject();	//argumentObjのdataを取得する
				//メール、またはお知らせを送信する
				var isSend = this.sendMailOrAnnounce(data);
				
				//メールの送信に成功していたら
				if(isSend){
					//送信完了と共に入力ダイアログを消す
					$(dialogClass.dom).dialog(CLOSE);
				}
				break;	//switch文を抜ける
			//処理を行うボタンが押されていなければ
			default:break;	//そのまま処理を終える
		}
	};
	
	/* 関数名:callbackSend
	 * 概要　:ダイアログの確認ボタンを押したときのコールバック関数用関数
	 * 引数　:なし
	 * 返却値:なし
	 * 設計者　:H.Kaneko
	 * 作成日　:015.08.22
	 * 作成者　:T.Masuda
	 */
	this.callbackConfirm = function(){
		//確認ダイアログを開く
		this.createDialog(URL_CONFIRM_DIALOG);
	};

	
//ここまでクラスの記述
}

//継承の記述
adminMailDialog.prototype = new baseDialog();
//サブクラスのコンストラクタを有効にする
adminMailDialog.prototype.constructor = baseDialog;




