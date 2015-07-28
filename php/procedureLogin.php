<?php

/*
 * ファイル名:procedureLogin.php
 * 概要	:ログインの手続きを行うクラスのファイル。
 * 設計者:H.Kaneko
 * 作成者:T.Masuda
 * 作成日:2015.0728
 * パス	:/php/procedureLogin.php
 */

//親クラスのファイルを読み込む
include ('procedureBase.php');

/*
 * クラス名:procedureLogin
 * 概要	:ログインの手続きを行うクラス。
 * 設計者:H.Kaneko
 * 作成者:T.Masuda
 * 作成日:2015.0728
 */
class procedureLogin extends procedureBase{

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
		//loginクラスのinit関数をコールする。
		login::init();
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
		login();	//ログインを実行する。
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