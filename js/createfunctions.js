/**
 * 体験レッスンページのコンテンツ作成用JavaScript関数 + 汎用テキスト作成JavaScript関数ファイル。
 */

/* 
 * 関数名:createText(contentName, func, array)
 * 概要  :テキストを取得してしかるべき場所に流し込む。
 * 引数  :String contentName, function func, Array array
 * 返却値  :なし
 * 作成者:T.M
 * 作成日:2015.02.06
 * 変更者:T.M
 * 変更日:2015.02.09
 * 内容  :引数に関数と配列を追加しました。また、引数に関数がセットされている場合、JSON
 * 		 をと配列を引数にして引数の関数をコールします。
 */
function createText(contentName, func, array){
	
	// コンテンツ名からJSONを連想配列で取得する。
	var json = getJSONArray(contentName);
	
	// JSONが取得できていれば
	if(json){
		// 関数名が入力されていたら
		if(func != null){
				// JSONと配列を引数にして関数をコールする。
				func(json, array);
		}
		
		// JSONデータからテキストを配置する。
		putText(json);
	} else {
		alert('通信に失敗しました。時間を空けてアクセスをお願いします。')
	}
}

/* 
 * 関数名:putText(json)
 * 概要  :JSONのテキストを空のタグに流し込む。
 * 引数  :Object json
 * 返却値  :なし
 */
function putText(json){
	// JSONの最上階層のキーを操作する。
	$.each(json, function(key, value){
		// キーに対応する要素が子要素を持っていれば
		if($('.' + key).children().length > 0){
			// その要素の子要素にテキストを追加する。
			addChildrenText(key, value);
		} else {
			// その要素のにテキストを追加する。
			addCElemText(key, value);
		}
	});
}

/* 
 * 関数名:addChildText(className, value)
 * 概要  :引数に指定した要素の子要素にテキストを追加する。
 * 引数  :String className,array value
 * 返却値  :なし
 */
function addChildText(className, value){
	
	// classNameから要素を取得して$elemsに格納する。
	var $elems = $('.' + className);
	// for文でclassNameに対応する要素全てを走査する。
	for(var i = 0; i < elems.length; i++){
		// 対象のクラスの要素の空の子要素を走査する。
		$('.'+ className +' *:empty').each(function(j){
			// 該当する要素にvalueから取得した値を格納する。
			$this.text(value[i][j]);
		});
	}
}

/* 
 * 関数名:addElemText(className, value)
 * 概要  :引数に指定した要素にテキストを追加する。
 * 引数  :String className,array value
 * 返却値  :なし
 */
function addElemText(className, value){
	
	// 対象のクラスの要素の空の子要素を走査する。
	$('.'+ className).each(function(i){
		// 該当する要素にJSONの配列から取得した値を格納する。
		$this.text(value[0][i]);
	});
}

/* 
 * 関数名:getJSONArray(contentName)
 * 概要  :JSONデータを取得して連想配列として返す。
 * 引数  :String contentName
 * 返却値  :Object json
 * 作成者:T.M
 * 作成日:2015.02.11
 */
function getJSONArray(contentName){
	// 返却値を格納する変数returnsを宣言する。
	var returns;
	
	// Ajaxでサーバ上からJSONを持ってくる。
	$.ajax({
		// コンテンツ名からJSONファイルを特定して取得する。
		url: 'source' + contentName + '.json',
		// JSONデータを取得してパースする。
		dataType: 'JSON',
		// ページ読み込み時の処理なので同期通信を行う。
		async: false,
		// 通信成功時のコールバック関数。
		success: function(json){
			// returnsに取得したJSONの連想配列を格納する。
			returns = json;
		},
		// エラー時の処理
		error:function(){
			// 失敗扱いとして0をreturnsに格納する。
			returns = 0;
		}
	});
	
	// returnsを返す。
	return returns;
}

/* 
 * 関数名:createReservedData(reservedData)
 * 概要  :予約希望のデータを作成する。
 * 引数  :Object reservedData
 * 返却値  :Object
 * 作成者:T.M
 * 作成日:2015.02.11
 */
function createReservedData(reservedData){
	
	// reservedDataに選択作品のデータを格納する。
	reservedData['construct'] = $('input[name="radioButtonSpecialConstruct"]:checked').val();
	// reservedDataに選択した時限のデータを格納する。
	reservedData['construct'] = $('input[name="radioButtonSpecialSchedule"]:checked').val();
	// 選択した予備日程の曜日を配列で取得してreservedDataに格納する。
	reservedData['weekDay'] = getCheckBoxValue('weekDay');
	// 選択した予備日程の週を配列で取得してreservedDataに格納する。
	reservedData['weekNumber'] = getCheckBoxValue('weekNumber');
	
	// reservedDataを返す。
	return reservedData;
}

/* 
 * 関数名:disableInputs(dialog)
 * 概要  :対象のダイアログの入力要素を一時無効にする。
 * 引数  :jQuery dialog
 * 返却値  :なし
 * 作成者:T.M
 * 作成日:2015.02.11
 */
function disableInputs(dialog){
	// dialogのinputタグ、buttonタグにdisabled属性を追加して一時無効化する。
	$('input,button', dialog).attr('disabled', 'disabled');
}

/* 
 * 関数名:getCheckBoxValue(className)
 * 概要  :チェックボックスの値を配列で取得する。
 * 引数  :String className
 * 返却値  :Array
 * 作成者:T.M
 * 作成日:2015.02.11
 */
function getCheckBoxValue(className){
	// 返却する値を格納する配列を用意する。
	var checkBoxies = [];
	// チェックが入ったチェックボックスを走査する。
	$('input[name="'+ className +'"]:checked').each(function(i){
		// 該当するチェックボックスから値を取得してcheckBoxiesに格納する。
		checkBoxies[i] = $(this).val();
	});
	
	// checkBoxiesを返す。
	return checkBoxies;
}

/* 
 * 関数名:removeInputDialog(dialog, reservedData)
 * 概要  :入力ダイアログを消す。
 * 引数  :jQuery dialog, Object reservedData
 * 返却値  :なし
 * 作成者:T.M
 * 作成日:2015.02.11
 */
function removeInputDialog(dialog, reservedData){
	// ダイアログを完全に消去する。
	dialog.dialog("destroy").remove();
	// reservedDataにnullを格納して空扱いにする。
	reservedData = null;
}

/* 
 * 関数名:createSpecialReservedDialog(json, array)
 * 概要  :特別レッスン予約用ダイアログを生成する。
 * 引数  :Object json, Array array
 * 返却値  :なし
 * 作成者:T.M
 * 作成日:2015.02.09
 */
function createSpecialReservedDialog(json, array){
	
	// ダイアログのデータを格納する連想配列を宣言し、引数の配列に格納されたコンテンツ名と予約希望日時を格納する。
	reservedData = {'contentName': array[0], 'year': array[1],
			'month': array[2], 'day': array[3]};

	// ダイアログの本体となるdivタグを生成する。
	$('body').append($('<div></div>')
			.addClass('specialReservedDialog'));
	// ダイアログに日付欄を追加する。
	createSpecialDate(reservedData['year'], reservedData['month'], reservedData['day']);
	// ダイアログに予約についての概要(注意書き)を追加する。
	createReservedSummary();
	// ダイアログに作品選択のラジオボタンを追加する。
	createRadioButtonSpecialConstruct(json);
	// ダイアログに予約日時選択のラジオボタンを追加する。
	createRadioButtonSpecialSchedule(json);
	// ダイアログに予備情報のダイアログを追加する。
	createSubInfo();

	// 生成したdivタグをjQuery UIのダイアログにする。
	$('.specialReservedDialog').dialog({
		// 幅を設定する。
		width			: '320px',
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
		},
		// ボタンの生成と設定を行う。
		buttons:[
			         {
			        	 // OKボタンのテキスト。
			        	 text:'OK',
			        	 // ボタン押下時の処理を記述する。
			        	 click:function(event, ui){
			        		 // 必須入力項目が皆入力済みであれば
			        		 if($('input[name="radioButtonSpecialConstruct"]:checked' ,this).length > 0 
			        				 && $('input[name="radioButtonSpecialSchedule"]:checked' ,this).length > 0){
				        		 // 予約希望データを作成する。
			        			 reservedData = createReservedData(reservedData);
				        		 
				        		 // 入力確認ダイアログを呼び出す。
				        		 createSpecialReservedConfirmDialog(reservedData);
				        		 // このダイアログの入力要素を一時的に無効化する。
				        		 disableInputs($(this));
			        		 } else {
			        			 alert('作品、時限、またはその両方が未入力となっています。');
			        		 }
			        	 }
			         },
			         {
			        	 // キャンセルボタンのテキスト。
			        	 text:'Cancel',
			        	 // ボタン押下時の処理を記述する。
			        	 click:function(event, ui){
			        		 // ダイアログと、入力された予約データを消去する。
			        		 removeInputDialog($(this), reservedData);
			        	 }
			         }
		         ]
	});
}

/* 
 * 関数名:createSpecialDate(year, month, day)
 * 概要  :予約希望日時のパーツを追加する。
 * 引数  :int year, int month, int day
 * 返却値  :なし
 * 作成者:T.M
 * 作成日:2015.02.09
 */
function createSpecialDate(year, month, day){
	// 曜日の配列を宣言、初期化する。
	var weekChars = [ '日', '月', '火', '水', '木', '金', '土' ];
	// 予約希望ダイアログに予約希望日時が書かれたタグを追加する。
	$('.specialReservedDialog').append($('<p></p>')
			// 予約希望日時のクラスを設定する。
			.addClass('specialDate')
			// 年月日と曜日のテキストデータを流し込む。月は日付型で0〜11で表現されているので、-1する。
			.text(year + '年' + month + '月' + day + '日' 
					+ '(' + weekChars[new Date(year, month - 1, day).getDay()] + '曜日)')
			);
}
/* 
 * 関数名:createSpecialReservedSummary()
 * 概要  :予約希望ダイアログの概要(注意書き)のパーツを追加する。
 * 引数  :なし
 * 返却値  :なし
 * 作成者:T.M
 * 作成日:2015.02.09
 */
function createReservedSummary(){
	// 予約希望ダイアログに予約希望についての概要(注意書き)のパーツを追加する。
	$('.specialReservedDialog').append($('<p></p>')
			.addClass('reservedSummary')
			);
}
/* 
 * 関数名:createRadioButtonSpecialConstruct(json)
 * 概要  :作品選択のラジオボタンを作成する。
 * 引数  :Object json
 * 返却値  :なし
 * 作成者:T.M
 * 作成日:2015.02.09
 */
function createRadioButtonSpecialConstruct(json){
	// jsonから作品に関する情報の配列を取得する。
	var constructs = json['radioButtonSpecialConstruct'];
	// ダイアログのjQueryオブジェクトを変数に格納して生成の手間を省く。
	var $dialog = $('.specialReservedDialog')
	
	// ダイアログに作品選択ラジオボタン群を格納するテーブルを追加する。
	createChooseTable('radioButtonSpecialConstruct', '作品');

	// テーブルのjQueryオブジェクトを変数に格納して、ループ内での生成の手間を省く。
	var $table = $('.radioButtonSpecialConstruct');
	
	// このfor文の1つ目のif文の除数で1行に表示する作品数を決める。
	// 作品名が不定であることを考慮し、デフォルトでは2にセットしておく。
	var constructColumns = 2;

	// ラジオボタンを作成する。
	createRadioButton('radioButtonSpecialConstruct', json, constructColumns);
}

/* 
 * 関数名:createRadioButtonSpecialSchedule(json)
 * 概要  :時限選択のラジオボタンを追加する。
 * 引数  :Object json
 * 返却値  :なし
 * 作成者:T.M
 * 作成日:2015.02.09
 */
function createRadioButtonSpecialSchedule(json){
	// jsonから時限に関する情報の配列を取得する。
	var schedules = json['radioButtonSpecialSchedule'];
	
	// ダイアログに作品選択ラジオボタン群を格納するテーブルを追加する。
	createChooseTable('radioButtonSpecialSchedule', '時限');

	// テーブルのjQueryオブジェクトを変数に格納して、ループ内での生成の手間を省く。
	var $table = $('.radioButtonSpecialSchedule');
	
	// ラジオボタンを作成する。
	createRadioButton('radioButtonSpecialSchedule', json, 1);
}

/* 
 * 関数名:createSubInfo()
 * 概要  :予備情報のチェックボックス群を作成する。
 * 引数  :なし
 * 返却値  :なし
 * 作成者:T.M
 * 作成日:2015.02.09
 */
function createSubInfo(){

	// ダイアログに予備情報のチェックボックス群を格納するテーブルを追加する。
	createChooseTable('subInfo', '予備情報');

	// 曜日を配列に格納する。
	var weekDays = ['月', '火', '水', '木', '金', '土', '日'];
	// 1〜4週目のテキストを配列に格納する。
	var weekNumbers = ['1週', '2週', '3週', '4週'];
	
	createCheckBox('可能曜日', 'weekDay', weekDays);
	createCheckBox('可能週', 'weekNumber', weekNumbers);
}

/* 
 * 関数名:createChooseTable(className, headText)
 * 概要  :チェックボックス群、またはラジオボタン群を格納するテーブルタグを作成する。
 * 引数  :String className, String headText
 * 返却値  :なし
 * 作成者:T.M
 * 作成日:2015.02.09
 */
function createChooseTable(className, headText){

	// ダイアログにチェックボックス群、またはラジオボタン群を格納するテーブルを追加する。
	$('.specialReservedDialog').append($('<table></table>')
			// しかるべきクラスをテーブルに追加する。
			.addClass(className)
			// 見出しの行のタグを追加する。
			.append($('<tr></tr>')
					// 見出しのセルを追加する。
					.append($('<th></th>')
							// 見出しセルにテキストを追加する。
							.text(headText)
							)
					)
			);
}

/* 
 * 関数名:createRadioButton(className, json, columns)
 * 概要  :JSONを元にテーブル内にラジオボタンを生成する。
 * 引数  :String className, Object json, int columns
 * 返却値  :なし
 * 作成者:T.M
 * 作成日:2015.02.09
 */
function createRadioButton(className, json, columns){
	
	// jsonから該当するキーの配列を取得する。
	var jsonArray = json[className][0];
	// 実際にラジオボタンを作成して挿入する関数をコールする。
	insertRadioButton(className, jsonArray, columns);
}

/* 
 * 関数名:insertRadioButton(className, json, columns)
 * 概要  :JSONから取得した配列でラジオボタンを作成、追加する。
 * 引数  :String className, Array array, int columns
 * 返却値  :なし
 * 作成者:T.M
 * 作成日:2015.02.11
 */
function insertRadioButton(className, array, columns){
	
	// for文で配列の1要素につき、1つのラベルとラジオボタンのセットのパーツを作る。
	for(var i = 0; i < array.length; i++){
		
		// チェックボックスを格納する行がないor行が満杯 かつ初回ループでなければ
		if(i % columns == 0 && i != 0){
			// テーブルに新たな行と空の見出しセルを追加する。
			$table.append($('<tr></tr>').append($('<th></th>').text(' ')));
		}
		
		// 一番後ろにある行(= カレントの行)に作品名とラジオボタンのセットのパーツを追加する。
		$('tr:last', $table).append($('<td></td>')
				// inputタグを追加する。
				.append($('<input>')
						// 属性をハッシュで一度に複数追加する。
						.attr({
							// inputタグの使い道を決める属性を追加する。
							type: 'radio',
							// name属性をセットしてグループ化する。
							name:className,
							// 項目名を値としてセットする。
							value:jsonArray[i]
						})
				)
		)
		// 項目名をセットする。
		.append($('<td></td>').text(jsonArray[i]));
	}
}

/* 
 * 関数名:createCheckBox(headText, className, array)
 * 概要  :チェックボックス群を作成する。
 * 引数  :String headText, String className, Array array
 * 返却値  :なし
 * 作成者:T.M
 * 作成日:2015.02.09
 */
function createCheckBox(headText, className, array){
	
	// 1行に格納するtdタグのセルの制限数を設定する。
	var tdLimit = 4;
	
	// 予備情報のテーブルに行を追加する。
	$table.append($('<tr></tr>')
			// 見出しのセルを追加する。
			.append($('<th></th>')
					// 見出しのテキストを追加する。
					.text(headText)
					)
				);
	
	// 実際にチェックボックスを作成、挿入する関数をコールする。
	insertCheckBox(headText, className, array, tdLimit);
}
/* 
 * 関数名:insertCheckBox(headText, className, array, tdLimit)
 * 概要  :チェックボックス群を作成し、挿入する。
 * 引数  :String headText, String className, Array array, int tdLimit
 * 返却値  :なし
 * 作成者:T.M
 * 作成日:2015.02.11
 */
function insertCheckBox(headText, className, array, tdLimit){
	
	// for文で配列の1要素につき、1つのラベルとチェックボックスまたはラジオボタンのセットのパーツを作る。
	for(var i = 0; i < array.length; i++){
		
		// 一番後ろにある行(= カレントの行)に作品名とチェックボックスのセットのパーツを追加する。
		$('tr:last', $table).append($('<td></td>')
				// inputタグを追加する。
				.append($('<input>')
						// 属性をハッシュで一度に複数追加する。
						.attr({
							// inputタグの使い道を決める属性を追加する。
							type: 'checkbox',
							// name属性をセットしてグループ化する。
							name:name,
							// 配列の要素を値としてセットする。
							value:array[i]
						})
				)
		)
		// 項目名をセットする。
		.append($('<td></td>').text(array[i]));
		
		// 1行に配置できるチェックボックスの数を超えていれば
		if($('tr:last td:nth-child(odd)', $table).length >= tdLimit){
			// 新たに行と空の見出しセルを追加する。
			$table.append($('<tr></tr>')
					.append($('<th></th>')
							.text(' ')
							)
					);
		}
	}
}

/* 
 * 関数名:sendReservedData(reservedData)
 * 概要  :サーバに予約希望データを送信する。
 * 引数  :Object reservedData
 * 返却値  :なし
 * 作成者:T.M
 * 作成日:2015.02.11
 */
function sendReservedData(reservedData){
	// サーバにデータを送信し、その結果の文字列をisSuccessに格納する。
	var isSuccess = sendData(reservedData);
	
	// データの送信に成功したら
	if(isSuccess){
		// 帰ってきたメッセージをダイアログで表示する。
		alert(isSuccess);
		// ダイアログを消す。
		removeReservedDialogs();
	} else {
		// 時間を空けてもう一度実行してもらうようメッセージのダイアログを出す。
		alert("通信に失敗しました。時間をあけてもう一度お試しください。");
	}
}

/* 
 * 関数名:sendData(reservedData)
 * 概要  :サーバに予約希望データを送信する。
 * 引数  :Object reservedData
 * 返却値  :Object or int
 * 作成者:T.M
 * 作成日:2015.02.11
 */
function sendData(reservedData){
	// 返却値を格納する変数returnsを宣言、0で初期化する。
	var returns = 0;
	// ajax通信で予約データをサーバに送信する。
	$.ajax({
		// 予約データ保存用のPHPにデータを送信する。
		url: init["sendReservedPhp"],
//		 url: 'correctReserved.php',
		// テキストデータを返してもらう。
		dataType: 'text',
		// 非同期通信にしない。
		async: false,
		// 予約データを添付する。
		data: {"reserved":reservedData},
		// 通信成功時の処理。
		success:function(text){
			// returnsに帰ってきたテキストを代入する。
			returns = text;
		}
	});
	
	// returnsを返す。
	return returns;
}

/* 
 * 関数名:moveToPrevDialog(current)
 * 概要  :直前のダイアログに戻る。
 * 引数  :jQuery current
 * 返却値 :なし
 * 作成者:T.M
 * 作成日:2015.02.12
 */
function moveToPrevDialog(current){
	// currentの前のダイアログの入力要素を有効にする。
	$('.dialog').eq(current.index('.dialog') - 1).removeAttr('disabled');
	// ダイアログを消去する。
	current.dialog('destroy').remove();
}

/* 
 * 関数名:removeReservedDialogs(dialogs)
 * 概要  :引数の配列にセットされたダイアログを消す。
 * 引数  :array dialogs
 * 返却値 :なし
 * 作成者:T.M
 * 作成日:2015.02.12
 */
function removeReservedDialogs(dialogs){
	// 引数のダイアログの配列を走査する。
	$.each(dialogs, function(){
		// ダイアログを消去する。
		$(this).dialog('destroy').remove();
	});
}

/* 
 * 関数名:createSpecialReservedConfirmDialog(reservedData)
 * 概要  :入力内容を表示して送信を確定するダイアログを表示する。
 * 引数  :Object reservedData
 * 返却値  :なし
 * 作成者:T.M
 * 作成日:2015.02.09
 */
function createSpecialReservedConfirmDialog(reservedData){
	// ダイアログの本体となるdivタグを生成する。
	$('body').append($('<div></div>')
			.addClass('specialReservedConfirmDialog'));
	// 入力された予約内容を一覧表示する。
	createSpecialConfirmSummary(reservedData);
	// 生成したdivタグをjQuery UIのダイアログにする。
	$('.specialReservedConfirmDialog').dialog({
		// 幅を設定する。
		width			: '320px',
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
			$(this).prev().children().filter('button').css('display', 'none');
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
		},
		// ボタンの生成と設定を行う。
		buttons:[
			         {
			        	 // OKボタンのテキスト。
			        	 text:'OK',
			        	 // ボタン押下時の処理を記述する。
			        	 click:function(event, ui){
			        		 // サーバに予約希望データを送信する。
			        		 sendReservedData(reservedData);
			        		 
			        	 }
			         },
			         {
			        	 // キャンセルボタンのテキスト。
			        	 text:'Cancel',
			        	 // ボタン押下時の処理を記述する。
			        	 click:function(event, ui){
			        		 // 前のダイアログに戻る。
			        		 moveToPrevDialog($(this));
			        		 }
			        	 }
			         
		         ]
	});
}

/* 
 * 関数名:createSpecialConfirmSummary(reservedData)
 * 概要  :予約データを予約内容確認ダイアログに書き出す。
 * 引数  :Object reservedData
 * 返却値  :なし
 * 作成者:T.M
 * 作成日:2015.02.09
 */
function createSpecialConfirmSummary(reservedData){
	// 予約データ確認ダイアログにテーブルを追加する。
	$('.specialReservedConfirmDialog').append($('<table></table>')
			.addClass('specialConfirmSummary')
			);
	//テーブルのjQueryオブジェクトを変数にセットする。 
	var $summary = $('.specialConfirmSummary');
	
	// 予約希望データ送信に対し同意を求める文章のタグを追加する。
	$summary.before($('<p></p>')
			.addClass('confirmNotice')
			.text('以下の内容で予約希望を承ります。')
			);
	// 予約希望日時を書き出す。
	$summary.append($('<tr></tr>').append($('<td></td>')
				.text('予約希望日時')
				)
			.append($('<td></td>')
					.text(reservedData['year'] + '年' + reservedData['month'] + '月' + reservedData['day'] + '日')
				)
			);
	// 希望作品を書き出す。
	$summary.append($('<tr></tr>').append($('<td></td>')
			.text('希望作品')
	)
	.append($('<td></td>')
			.text(reservedData['construct'])
	)
	);
	// 希望の時限を書き出す。
	$summary.append($('<tr></tr>').append($('<td></td>')
			.text('希望時限')
	)
	.append($('<td></td>')
			.text(reservedData['schedule'])
	)
	);
	// 予備の希望曜日を書き出す。
	$summary.append($('<tr></tr>').append($('<td></td>')
			.text('予備希望曜日')
	)
	.append($('<td></td>')
			.text(reservedData['weekDay'])
	)
	);
	// 予備の希望週を書き出す。
	$summary.append($('<tr></tr>').append($('<td></td>')
			.text('予備希望週')
	)
	.append($('<td></td>')
			.text(reservedData['weekNumber'])
	)
	);
}

/* 
 * 関数名:getInitData(path, continues)
 * 概要  :初期化用データの連想配列を取得して返す。
 * 引数  :String path, int continues
 * 返却値  :Object
 * 作成者:T.M
 * 作成日:2015.02.12
 */
function getInitData(path, continues){
	// 返却値を格納する変数を宣言、0で初期化する。
	var returns = 0;
	// for文で規定回数通信するか、通信成功するまで通信を繰り返す。
	for (var i = 0; i < continues && returns; i++){
		// Ajax通信を行いファイルを取得する。
		returns = getJSONFile(path);
	}
	
	// ファイルが取得できていなかったら
	if(!(returns)){
		alert('初期化ファイルの取得に失敗しました。');
	}
}

/* 
 * 関数名:getJSONFile(path)
 * 概要  :JSONファイルを取得して返す。
 * 引数  :String path
 * 返却値  :Object or int
 * 作成者:T.M
 * 作成日:2015.02.12
 */
function getJSONFile(path){
	// 返却値を格納する変数を宣言、0で初期化する。
	var returns = 0;

	// ajax通信で予約データをサーバに送信する。
	$.ajax({
		// pathのファイルを取得する。
		url: path,
		// テキストデータを返してもらう。
		dataType: 'JSON',
		// 同期通信を行う。
		async: false,
		// 通信成功時の処理。
		success:function(json){
			// returnsに取得したJSONデータを格納する。
			returns = json;
		}
	});
	
	// returnsを返す。
	return returns;
}

// 初期化用関数をコールして初期化用データの連想配列を用意する。
var init = getInitData("source/init.json");