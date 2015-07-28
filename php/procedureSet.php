<?php

/*
 * ファイル名:procedureSet.php
 * 概要  :クライアントから送られたJSONのクエリを実行し、
 * 		DBへのレコード追加、変更、削除を行う役割のクラスのファイル。
 * 設計者:H.Kaneko
 * 作成者:T.Masuda
 * 作成日:2015.0728
 * パス	:/php/procedureSet.php
 */

//親クラスのファイルを読み込む
include ('procedureBase.php');

/*
 * クラス名:procedureSet
 * 概要  :クライアントから送られたJSONのクエリを実行し、
 * 		DBへのレコード追加、変更、削除を行う役割のクラス。
 * 設計者:H.Kaneko
 * 作成者:T.Masuda
 * 作成日:2015.0728
 */
class procedureSet extends procedureBase{

	/*
	 * 関数名：init
	 * 概要  :クラスの初期化関数
	 * 引数  :なし
	 * 戻り値:なし
	 * 設計者:H.Kaneko
	 * 作成者:T.Masuda
	 * 作成日:2015.0728
	 */
	function init(){
		//親クラスのinit関数をコールする。
		parent::init();
	}

	/*
	 * 関数名：job
	 * 概要  :クラス特有の処理を行う関数
	 * 引数  :String $jsonString:JSON文字列
	 * 戻り値:なし
	 * 設計者:H.Kaneko
	 * 作成者:T.Masuda
	 * 作成日:2015.0728
	 */
	function job($jsonString){
		parent::job($jsonString);	//親クラスのjobを実行し、メンバにJSONの連想配列を格納する。
		//JSONをDBに反映させる。
	}
	
	/*
	 * 関数名：run
	 * 概要  :クラスのinit、job関数をまとめて実行する。
	 * 引数  :なし
	 * 戻り値:なし
	 * 設計者:H.Kaneko
	 * 作成者:T.Masuda
	 * 作成日:2015.0728
	 */
	function run(){
		//初期化処理とクラス独自の処理をまとめて実行する。
		init();	//初期化関数
		job();	//クラス特有の処理を行う
	}
}