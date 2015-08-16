﻿/** ファイル名:constants.js
 * 概要　　　:定数定義ファイル
 * 作成日　:2015.0813
 * 作成者　:T.Masuda
 * 場所　　:js/constants.js
 */

//トップページのファイル名の定数
TOPPAGE_NAME = 'top.php';
USER_ID = 'userId';			//ユーザID
PHP_SESSID = 'PHPSESSID';	//PHPのセッションIDのキー
//サーバへメッセージを送信したという文言
SEND_TO_SERVER_MESSAGE = 'サーバへデータの送信を行いました。';
validIdentifiers = ['.jpg', '.jpeg', '.JPG', '.JPEG', '.png', '.PNG'];	//有効な画像拡張子

MSL_LIST_PHP					= 'list.php';						//MSLのリスト
MSL_DETAIL_PHP					= 'detail.php';						//MSLの記事詳細
INIT_JSON						= 'source/init.json';				//初期化の値のJSONファイル
//@add 2015.0627 T.Masuda 定数を大量に追加しました。詳細はGitで確認してください。
PATH_LOGIN_DIALOG_JSON			= 'source/loginDialog.json';		//ログインダイアログのJSONファイルのパス
PATH_LOGIN_DIALOG_HTML			= 'template/loginDialog.html';		//ログインダイアログのテンプレートHTMLファイルのパス
CLASS_HEADER					= '.header';						//ヘッダーのクラス
CLASS_LOGOUT_LINK				= '.logoutLink';					//ログアウトボタンのクラス

ADMIN_LESSON_INFORMATION	= 'adminLessonInformation';			//管理者日ごとダイアログの内容
CLASS							= 'class';							//クラス

LOGIN_DIALOG				= 'loginDialog';					//ログインダイアログ
CLASS_LOGIN_DIALOG			= '.loginDialog';					//ログインダイアログのクラスのセレクタ
PATH_LOGIN_DIALOG			= 'dialog/loginDialog.html';					//ログインダイアログのクラスのセレクタ
CLASS_LOGIN					= '.login';							//ログインボタンのクラスのセレクタ
CLICK						= 'click';							//クリックイベントの文字列
CLOSE						= 'close';							//closeの文字列
CLASS_HEADER				= '.header';						//ヘッダーのクラス
PATH_MEMBERPAGE_JSON		= 'source/memberPage.json';			//会員ページのJSON
PATH_MEMBERCOMMON_JSON		= 'source/memberCommon.json';		//会員ページ共通のJSON
MEMBERPAGE_HTML				= 'memberPage.html';				//会員ページのHTML
USER_KEY					= 'user_key';						//ユーザキー
VALUE						= 'value';							//バリュー
ID							= 'id';								//ID
SELECTOR_HEAD_LAST			= 'head link:last';					//headタグの最後のタグ
PATH_MEMBERPAGE_CSS			= '<link href="css/memberPage.css" rel="stylesheet" type="text/css">';
PATH_COURCEGUIDE_CSS		= '<link href="css/courseGuide.css" rel="stylesheet" type="text/css">';
PATH_ADMINPAGE_CSS			= '<link href="css/adminPage.css" rel="stylesheet" type="text/css">';			//管理者ページ共通のCSS
PATH_CONTACT_CSS			= '<link href="css/contact.css" rel="stylesheet" type="text/css">';
PATH_DAILYCLASSES_JS		= '<script type="text/javascript" src="js/dailyClasses.js"></script>';
CLASS_HEADER				= '.header';						//ヘッダーのクラス
CLASS_LOGOUT_LINK			= '.logoutLink';					//ログアウトボタンのクラス
CLASS_HEADERS				= '.memberHeader, .adminHeader';	//会員ページ、管理者ページのヘッダーのクラス

RESERVED_LESSON_TABLE		= 'reservedLessonTable';			//予約中授業のテーブル
TAG_TR						= ' tr';							//trタグ
TAG_TABLE					= 'table';							//tableタグ
CANCEL_LESSON_DIALOG_CONTENT= 'cancelLessonDialogContent';		//授業予約キャンセルダイアログの中身のコンテンツセレクター
CANCEL_LESSON_DIALOG 		= 'cancelLessonDialog';				//予約キャンセルダイアログの外枠
ADMIN_EACH_DAY_LESSON_TABLE = 'adminEachDayLessonTable';		//管理者日ごと授業テーブル
ADMIN_LESSON_LIST_DIALOG	= 'adminLessonListDialog';			//管理者日ごとダイアログ
COLUMN_NAME_DEFAULT_USER_CLASSWORK_COST = 'default_user_classwork_cost';//DBのカラム名、この列の値があれば予約可になる。
WAIT_DEFAULT				= 0;								//待ち時間のデフォルト値
LESSON_DETAIL_DIALOG		= 'lessonDetailDialog';				//管理者ページ授業詳細ダイアログ
ADMIN_LESSON_LIST_DIALOG_TR = '.adminLessonListDialog tr';		//管理者の日ごと授業テーブルの行
ADMIN_LESSON_LIST_DIALOG_TD = '.adminLessonListDialog td';		//管理者の日ごと授業テーブルのセル
LESSON_DATA					= 'lessonData';						//管理者の授業詳細ダイアログのコンテンツ部分
ADMIN_PAGE_URL = 'adminPage.html';								//管理者ページURL
MEMBER_PAGE_URL = 'memberPage.html';							//会員ページURL

//定数
EXPERIENCE	= 'experience';
LESSON		= 'Lesson';

//定数定義
ADMIN_LESSON_LIST_INFORMATION	= 'adminLessonInformation';						//管理者日ごとダイアログの内容
NOW_PAGE						= 'nowPage';									//ページングの現在のページのクラス名
PAGING 							= 'paging';										//ページングのクラス名
PAGING_AREA						= 'pagingArea';									//ページングを囲むdivクラス名
CHANGE							= 'change';										//イベント名がchangeのときにchangeイベントを登録するための定数
MARGIN_TOP = 'margin-top';														//上margin
PX_5 = '5px';																	//5PX
PX_115 = '115px';																//115PX
BLOG_SHOW_PAGES					=  1;											//ブログ表示記事数。blog.phpでも使う
EMPTY_STRING					=  '';											//空文字

//セレクターの文字列定数
NORMAL_HEADER								= 'header.header';							//通常のヘッダー
HEADER_VISIBLE								= 'header.header:visible';					//隠してないヘッダー
HEADER_HIDDEN								= 'header.header:hidden';					//隠してあるヘッダー
MAIN_TAG									= '.main';									//メインのタグのセレクタ
GUIDES										= 'guides';									//ガイド領域
TOP_MENU									= 'topMenu';								//トップメニュー
LOCATION									= 'flower_clone/';							//サイトルート前
SITE_ROOT									= 'http://localhost/' + LOCATION;			//サイトルート
IMAGE_PATH									= 'uploadImage/flowerImage/';				//アップロード画像フォルダ
UPLOAD_LOCATION								= SITE_ROOT + SITE_ROOT;					//アップロードURL
SPECIAL_RESERVED_DIALOG_URL					= 'dialog/specialReservedDialog.html';		//体験レッスン予約ダイアログのHMTLファイルURL
ADMIN_NEWLESSON_CREATE_DIALOG_PATH 			= 'dialog/adminNewLessonCreateDialog.html';	//授業新規作成ダイアログのHTMLファイルのパス
LESSON_DETAIL_DIALOG_PATH					= 'dialog/lessonDetailDialog.html';			//管理者 授業詳細ダイアログのHTMLファイルのパス
//createLittleContentクラスインスタンスの連想配列内キー用文字列
CREATOR										= 'creator';
//会員ページ 予約一覧ダイアログのcreateLittleContentsクラスインスタンスの連想配列内キー用文字列
RESERVE_LIST_CREATOR						= 'reserveListCreator';	
NUMBER										= 'number';									//numberキーの文字列
STRING										= 'string';									//stringの文字列

//画像縮小時のデフォルトサイズ
DEFAULT_WIDTH								= 300;										//画像の縮小サイズ 横
DEFAULT_HEIGHT								= 300;										//画像の縮小サイズ 縦
IMG_QUALITY									= 80;										//画像圧縮時の品質
USER_IMAGE_UPLOADER							= 'uploadImage/imageUpload.php';			//画像アップローダーのパス

CHAR_DOT										= '.';
CHAR_HYPHEN										= '-';
CHAR_RIGHT_ARROW								= '>';
MESSAGE_SUCCESS_RESERVED						= '予約を承りました。';
MESSAGE_SUCCESS_CANCELED						= '予約をキャンセルしました。';
MESSAGE_SUCCESS_PROFILE_UPDATE					= 'プロフィールを変更しました。';
MESSAGE_SUCCESS_PASSWORD_UPDATE					= 'パスワードを変更しました。';
MESSAGE_FAILED_RESERVED							= '予約の処理に失敗しました。時間をおいてもう一度お試しください。';
MESSAGE_FAILED_CONNECT							= '通信に失敗しました。時間をおいてもう一度お試しください。';
MESSAGE_LOGIN_ERROR								= 'idまたはパスワードが間違っています';
SELECTOR_ALL_CHILD								= '> *';				//全ての子要素のセレクタ
SELECTOR_ALLCHILD_CLASS_FRONT					= ' > *[class="';
SELECTOR_CLOSE_ATTRIBUTE						= '"]';
SELECTOR_KEYS									= '.keys'; 
SELECTOR_MAIN									= '.main';
SELECTOR_NUMBERING_OUGHTER						= '.numberingOuter';
SELECTOR_VALUES									= '.values';
SELECTOR_LESSON_TABLE							= '.lessonTable';
SELECTOR_RESERVE_LESSON_LIST_DIALOG_TR			= '.memberReserveListDialog table tr';
SELECTOR_RESERVE_LESSON_LIST_DIALOG_TD			= '.memberReserveListDialog table tr td';
SELECTOR_RESERVE_LESSON_LIST_DIALOG				= '.memberReserveListDialog';
SELECTOR_MEMBER_RESERVED_CONFIRM_DIALOG			= '.memberReservedConfirmDialog';
SELECTOR_MEMBER_RESERVED_CONFIRM_DIALOG_CONTENT	= '.memberReservedConfirmDialogContent';
STR_FAILD_TO_CREATE								= 'の作成に失敗しました。';	//outputTagでパーツの作成を失敗したときのメッセージ
STR_ARROW_LEFT_DOUBLE							= '<<';
STR_TEXT										= 'text';
STR_HTML										= 'html';
STR_BODY										= 'body';
STR_NUMBERING									= 'numbering';
STR_PRE											= 'pre';
STR_KEY_AND_VALUE								= 'keyAndValue';
STR_VALUELABEL									= 'valueLabel';
STR_VALUES										= 'values';
STR_KEYS										= 'keys';
STR_EDITVALUE									= 'editValue';
STR_NAME										= 'name';
STR_CLICK										= 'click';
STR_STYLE										= 'style';
STR_OPEN										= 'open';
STR_RESERVE_LESSON_LIST_DIALOG					= 'memberReserveListDialog';
STR_LESSON_TABLE_AREA							= 'lessonTableArea';
STR_DIALOG										= 'dialog';
STR_TR											= 'tr';
STR_TD											= 'td';
STR_TH											= 'th';
STR_JSON  										= 'json';				//json
STR_DOM  										= 'dom';				//dom
STR_OBJECT 										= 'object';				//objectかどうかの判定に使う
STR_TRANSPORT_FAILD_MESSAGE						= '通信に失敗しました。';	//通信失敗のメッセージ
STR_POST										= 'POST';				//リクエストのPOSTメソッド設定
STR_HTML										= 'HTML';				//AJAXのレスポンスの指定をHTMLにする時に使う
STR_AUTO										= 'auto';
STR_FONT_SIZE									= 'font-size';
STR_TAG_TABLE									= 'tagTable';
STR_LESSON_TABLE								= 'lessonTable';
STR_MEMBER_RESERVED_CONFIRM_DIALOG_CONTENT		= 'memberReservedConfirmDialogContent';
SYMBOL_UNIT										= ' 〜 ';
TAG_DIV											= '<div></div>';
TAG_SPAN										= '<span></span>'; 
TAG_LABEL										= '<label></label>';
TAG_TEXTAREA									= '<textarea></textarea>'; 
URL_GET_JSON_STRING_PHP							= 'php/GetJSONString.php';
URL_GET_JSON_ARRAY_PHP							= 'php/GetJSONArray.php';
URL_GET_JSON_ARRAY_FOR_JQGRID_PHP				= 'php/GetJSONArrayForJqGrid.php';
URL_SAVE_JSON_DATA_PHP							= 'php/SaveJSONRecord.php';
STR_LESSON_TABLE								= 'lessonTable';
STR_RESERVE_LESSON_LIST_DIALOG					= 'memberReserveListDialog';
STR_CENTER_CENTER								= 'center center';
STR_MEMBER_RESERVED_CONFIRM_DIALOG				= 'memberReservedConfirmDialog';
STR_EVENT										= 'event';
STR_COLSPAN										= 'colspan';
VALUE_0_5EM										= '0.5em';
STR_MEMBER_INFORMATION							= 'memberInfomation';
STR_REPLACE_TABLE								= 'replaceTable';
SP_SELECTOR_REPLACE_TABLE						= ' .replaceTable';
//処理の分岐のフラグの数値
PATTERN_ADD = 0;
PATTERN_REPLACE = 1;
//outputNumberingTagで用いる記事のオブジェクトの親のキー。
USER_ID											= 'userId';
ADMIN_AUTHORITY									= '80';	//管理者権限のIDの定数							
ACCOUNT_HEADER									= 'accountHeader';	//アカウント管理のJSONのキー
EMPTY											= '';								//空文字
SLASH											= '/';								//スラッシュ記号
DOT												= '.';								//ドット

//ログインエラー時の状態の整数値定数
TITLE = 'title';		//タイトルの文字列
STATE_NOT_LOGIN	= 0;	//非ログイン時
STATE_TIMEOUT	= 1;	//タイムアウト時
LOGIN = 'ログイン';		//ログインダイアログのタイトル「ログイン」
RE_LOGIN = '再ログイン';	//再ログインダイアログのタイトル「再ログイン」
LOGIN_MESSAGE = '';		//ログインダイアログのメッセージ
RE_LOGIN_MESSAGE = '';	//再ログインダイアログのメッセージ
URL_LOGIN_DIALOG = 'dialog/loginDialog.html';	//ログインダイアログのHTMLファイルのURL
URL_ADMIN_PAGE = 'adminPage.html'; //管理者ページのURL
URL_MEMBER_PAGE = 'memberPage.html'; //管理者ページのURL

DIALOG_DEFAULT_ALERT_CONTENTS				 = 'dialog/defaultAlertContents.html';			//アラートを出すdomがあるファイル名
DIALOG_RESERVE_LESSON_LIST 					 = 'dialog/memberReserveListDialog.html';		//会員、予約可能授業一覧ダイアログファイルパス
DIALOG_MEMBER_RESERVED_CONFIRM 				 = 'dialog/memberReservedConfirmDialog.html';	//会員、授業予約確認ダイアログパス
DIALOG_CANCEL_LESSON 						 = 'dialog/cancelLessonDialog.html';			//会員、授業予約キャンセルダイアログパス
DIALOG_LESSON_DETAIL 						 = 'dialog/lessonDetailDialog.html';			//管理者、授業詳細、授業の詳細ダイアログパス
DIALOG_ADMIN_NEW_LESSON_CREATE				 = 'dialog/adminNewLessonCreateDialog.html';	//管理者、授業詳細、新規授業作成ダイアログパス
UI_DIALOG_CONTENT 							 = 'ui-dialog-content';							//ダイアログコンテンツのクラス名
DIALOG_CONTENT_ADMIN_LESSON_LIST 			 = 'adminLessonListContent';					//管理者、授業一覧ダイアログコンテンツ部分
DIALOG_CONTENT_ADMIN_NEW_LESSON_CREATE		 = 'adminNewLessonCreateContent';				//管理者、新規授業作成ダイアログコンテンツ部分
DIALOG_CONTENT_RESERVED_LESSON_LIST 		 = 'reserveLessonListContent';					//会員、予約可能授業ダイアログコンテンツ部分
DIALOG_CONTENT_MEMBER_RESERVED_CONFIRM 		 = 'memberReservedConfirmDialogContent';		//会員、予約確認ダイアログコンテンツ部分
DIALOG_CONTENT_CANCEL_LESSON				 = 'cancelLessonDialogContent';					//会員、予約キャンセルダイアログコンテンツ部分
UI_DIALOG 									 = 'ui-dialog';									//ダイアログクラス名
CLOSE 										 = 'close';										//クローズ処理に使う
DIALOG_CLOSE_BUTTON 						 = 'dailogCloseButton';							//閉じるボタンクラス名
DEFAULT_ALERT_CONTENTS 						 = 'defaultAlertContents';						//アラートダイアログの外側divのクラス名
TAG_P										 = ' p';										//pタグ
LESSON_TABLE 								 = 'lessonTable';								//会員画面予約授業一覧テーブル
LESSON_TABLE_RECORD 						 = 'targetLessonTable';							//会員画面予約授業一覧テーブルの1行ごとのクラス名
MEMBER_RESERVED_CONFIRM_DIALOG				 = 'memberReservedConfirmDialog';				//会員画面予約確認ダイアログ
CANCEL_LESSON_DIALOG 						 = 'cancelLessonDialog';						//会員画面予約キャンセルダイアログ
ADMIN_LESSONLIST_DIALOG 					 = 'adminLessonListDialog';						//管理者画面授業設定一覧ダイアログ
LESSON_DETAIL_DIALOG 						 = 'lessonDetailDialog';						//管理者画面授業詳細設定ダイアログ
ADMIN_NEW_LESSON_CREATE 					 = 'adminNewLessonCreateDialog';				//管理者画面新規授業作成ダイアログ
ADMIN_MAIL_SEND_DIALOG 						 = 'adminMailSendDialog';						//管理者画面メール送信ダイアログ
CONFIRM_DIALOG 								 = 'confirmDialog';								//確認ダイアログ
TITLE 										 = 'title';										//ダイアログの設定のタイトルなどで使う
USER_ID 									 = 'userId';									//ユーザの会員番号key名
TABLE 										 = 'table';										//テーブル。DBから取り出した値のkey名としても使われている
TABLE_DATA 									 = 'tableData';									//テーブルのデータ
LESSON_DATE 								 = 'lessonDate'									//レッスン日
TIME_SCHEDULE 								 = 'time_schedule';								//時間割の列名
LESSON_TABLE_REPLACE_FUNC 					 = 'callReservedLessonValue';					//予約可能授業一覧置換関数名
ADMIN_LESSON_DETAIL_TABLE					 = 'adminLessonDetailTable';					//管理者、授業詳細一覧テーブル
ADMIN_LESSON_DETAIL_TABLE_RECORD			 = 'targetAdminLessonRecord';					//管理者、授業詳細一覧テーブルの1行ごとのクラス名
ADMIN_LESSON_DETAIL_TABLE_REPLACE_FUNC 		 = 'callAdminReservedLessonValue';				//管理者、授業詳細一覧テーブル置換関数名
FINISHED_LESSONTABLE						 = 'finishedLessonTable';						//会員、受講済み授業テーブル
FINISHED_LESSONTABLE_REPLACE_FUNC			 = 'callMemberLessonValue';						//会員、受講済み授業テーブル置換関数名
RESERVED_LESSON_TABLE 						 = 'reservedLessonTable';						//会員、予約中授業テーブル
RESERVED_LESSON_TABLE_RECORD 				 = 'targetCancelReservedLesson';				//会員、予約中授業テーブルの1行ごとのクラス名
RESERVED_LESSON_TABLE_REPLACE_FUNC 			 = 'callMemberLessonValue';						//会員、予約中授業テーブル置換関数名
EACH_DAY_RESERVED_INFO_TABLE 				 = 'eachDayReservedInfoTable';					//管理者、日ごと予約者一覧テーブル
EACH_DAY_RESERVED_INFO_TABLE_RECORD			 = 'targetEachDayLessonRecord';					//管理者、日ごと予約者一覧テーブル1行ごとのクラス名
EACH_DAY_RESERVED_INFO_TABLE_REPLACE_FUNC 	 = 'callEachDayReservedValue';					//管理者、日ごと予約者一覧テーブル置換関数名
DO_LECTURE_PERMIT_INFO_TABLE 				 = 'doLecturePermitInfoTable';					//管理者、受講承認テーブル
DO_LECTURE_PERMIT_INFO_TABLE_REPLACE_FUNC 	 = 'callLecturePermitValue';					//管理者、受講承認テーブル置換関数名
LECTURE_PERMIT_LIST_INFO_TABLE				 = 'lecturePermitListInfoTable';				//管理者、受講承認一覧テーブル
LECTURE_PERMIT_LIST_INFO_TABLE_REPLACE_FUNC  = 'callPermitLessonListValue';					//管理者、受講承認一覧テーブル置換関数名
ADMIN_LESSON_ADD_BUTTON						 = 'lessonAddButton';							//管理者、授業詳細、新規授業の追加ボタン
LESSON_DATA 								 = 'lessonData';								//管理者、授業詳細、授業データ部分クラス名
COLUMN_NAME_TIME_TABLE_DAY_KEY 				 = 'time_table_day_key';						//授業の時限データのキー名
COLUMN_NAME_TIMETABLE_KEY 					 = 'timetable_key';								//スクールの時限ごとのキー名
CREATE_NEW_LESSON_MESSAGE 					 = '新規授業の作成に成功しました。';	
CONFIRM_DIALOG_BUTTONS						= '.confirmDialog button';						//確認ダイアログのボタン×2のセレクタ
CLICK										= 'click';										//クリックイベント用文字列
CONFIRM_DIALOG_PATH							= 'dialog/confirmDialog.html';					//確認ダイアログのHTMLファイルパス
UI_DIALOG_CLOSEBOX							= '.ui-dialog-titlebar-close';					//jQuery UI Dialogのクローズボックスのセレクタ
UI_DIALOG_BUTTON_PANEL						= '.ui-dialog-buttonpane';						//jQuery UI Dialogのオプションで作るボタン領域のセレクタ

//選択されたボタンを表す値。
UNSELECTED 									= -1;											//ボタン未選択の値
NO											= 0;											//「はい」ボタンの値
YES											= 1;											//「いいえ」ボタンの値
CANCEL										= 2;											//「キャンセル」ボタンの値

CONFIRM_DIALOG_WAIT							= 30;											//汎用確認ダイアログ関数終了後関数実行までの待ち時間
ARGUMENT_OBJ								= 'argumentObj';								//dialogExクラスのインプット用オブジェクト名
RETURN_OBJ									= 'returnObj';									//dialogExクラスのアウトプット用オブジェクト名
SELECTOR_LAST								= ':last';										//「一番後ろの要素」の疑似セレクタ
MESSAGE_SEND_SUCCESS_SIMPLE_NOTICE			= "メッセージの送信が完了しました。";					//簡易的なメッセージ送信完了のメッセージ	
ROLE										= 'role';										//role属性
CONFIRM_DIALOG								= 'confirmDialog';								//確認ダイアログ
SUGGESTION_BOX_CONFIRM_DIALOG				= 'suggestionBoxConfirmDialog';					//目安箱送信確認ダイアログ
MY_BLOG_CONFIRM_DIALOG						= 'myBlogConfirmDialog';						//マイブログ更新確認ダイアログ
MAIL_MAGAZINE_CONFIRM_DIALOG				= 'mailmagazineConfirmDialog';					//メルマガ送信確認ダイアログ
DESTROY										= 'destroy';									//破棄命令の文字列
MESSAGE_SEND_FAILED_SIMPLE_NOTICE			= 'メッセージの送信に失敗しました。時間をおいてお試しください。';	//簡易的なメッセージ送信失敗のメッセージ	
MEMBER_MAIL									= 0;											//目安箱 会員メールを示す数値
SUGGESTION_MAIL								= 1;											//目安箱 目安箱メールを示す数値
SEND_MEMBERMAIL_PHP							= 'php/mailSendEntryMemberMail.php';			//目安箱 会員メール送信用のPHP
SEND_SUGGEST_PHP							= 'php/mailSendEntrySuggest.php';				//目安箱 目安箱メール送信用のPHP
DIALOG_JS_DIR								= 'dialog/js/';
JS_IDENTIFIER								= '.js';
TEST_DIALOG									= 'testdialog';
DIALOG										= 'dialog';
BUTTONS										= 'buttons';
OPTION										= 'option';

GET_SCRIPT_FAIL_MESSAGE_FRONT				= "Faild to get Script File(location:";			//JSファイル取得エラーメッセージの前方
PARENTHESES_REAR							= ")";											//丸括弧閉じ
URL_TEST_DIALOG_CHILD						= 'dialog/testdialogchild.html'					//テスト用子ダイアログ(2世代目)のURL
COMMON_FUNCS_NOT_EXIST						= 'commonFuncs is not exist.';					//共通関数クラスインスタンスcommonFuncsがないエラーメッセージ		
TEST_DIALOG_GRANDCHILD_URL					= 'dialog/testdialoggrandchild.html';			//孫ダイアログURL
TOP_LOCATION								= 'top.php';				//トップページ用PHPのURL
LOADING_SCREEN								= '.loading'				//ローディング画面のセレクタ
DISPLAY										= 'display';				//displayの文字列。css用
BLOCK										= 'block';					//blockの文字列
NONE										= 'none';					//noneの文字列
CANCEL_TEXT									= 'キャンセル';				//キャンセルのテキスト
LOGIN_TEXT									= 'ログイン';					//ログインのテキスト
LOGIN_BUTTON								= 'loginButton';			//ログインボタンのテキスト
USERNAME_SELECTOR							= '.userName';				//ユーザ名
CURRENT_DIALOG_SELECTOR						= '.dialog:last';			//カレントのダイアログのセレクタ
ERROR_LESSONLIST							= '予約可能な授業がありません';	//予約できる授業がないというメッセージ
LESSON_TABLE								= 'lessonTable';			//授業テーブル
SELECTOR_LESSON_TABLE						= DOT + LESSON_TABLE;		////授業テーブルのセレクタ
RESERVE_LIST_JSON							= 'dialog/source/memberReserveListDialog.json';
RESERVE_LIST_HTML							= 'dialog/template/memberReserveListDialog.html';

LESSON_NEW_BUTTON_TEXT						= '新規作成'				 //授業新規作成ボタンテキスト


//会員、予約確認ダイアログ
MEMBER_RESERVE_CONFIRM_DIALOG				= 'dialog/memberReserveConfirmDialog.html';
MEMBER_RESERVE_CONFIRM_DIALOG_JS 			= 'dialog/js/memberReserveConfirmDialog.js';
MEMBER_RESERVE_CONFIRM_DIALOG_HTML 			= 'dialog/template/memberReserveConfirmDialog.html';
MEMBER_RESERVE_CONFIRM_DIALOG_JSON 			= 'dialog/source/memberReserveConfirmDialog.json';

//会員、予約キャンセルダイアログ
MEMBER_RESERVE_CANCEL_DIALOG 				= 'dialog/memberReserveCancelDialog.html';
MEMBER_RESERVE_CANCEL_DIALOG_JS 			= 'dialog/js/memberReserveCancelDialog.js';
MEMBER_RESERVE_CANCEL_DIALOG_HTML 			= 'dialog/template/memberReserveCancelDialog.html';
MEMBER_RESERVE_CANCEL_DIALOG_JSON 			= 'dialog/source/memberReserveCancelDialog.json';

//管理者、授業一覧ダイアログ
ADMIN_LESSON_LIST_DIALOG 					= 'dialog/adminLessonListDialog.html';
ADMIN_LESSON_LIST_DIALOG_JS 				= 'dialog/js/adminLessonListDialog.js';
ADMIN_LESSON_LIST_DIALOG_HTML 				= 'dialog/template/adminLessonListDialog.html';
ADMIN_LESSON_LIST_DIALOG_JSON 				= 'dialog/source/adminLessonListDialog.json';

//管理者、授業詳細ダイアログ
ADMIN_LESSON_DETAIL_DIALOG 					= 'dialog/adminLessonDetailDialog.html';
ADMIN_LESSON_DETAIL_DIALOG_JS 				= 'dialog/js/adminLessonDetailDialog.js';
ADMIN_LESSON_DETAIL_DIALOG_HTML 			= 'dialog/template/adminLessonDetailDialog.html';
ADMIN_LESSON_DETAIL_DIALOG_JSON 			= 'dialog/source/adminLessonDetailDialog.json';

//管理者、新規授業作成ダイアログ
ADMIN_LESSON_CREATE_DIALOG 					= 'dialog/adminLessonCreateDialog.html';
ADMIN_LESSON_CREATE_DIALOG_JS 				= 'dialog/js/adminLessonCreateDialog.js';
ADMIN_LESSON_CREATE_DIALOG_HTML 			= 'dialog/template/adminLessonCreateDialog.html';
ADMIN_LESSON_CREATE_DIALOG_JSON 			= 'dialog/source/adminLessonCreateDialog.json';

//テーブルから取り出す列名
COLUMN_NAME_MAX_NUM					= 'max_num';					// １限に予約できる最大の数
COLUMN_NAME_START_TIME				= 'start_time';					// 授業開始時間
COLUMN_NAME_END_TIME				= 'end_time';					// 授業終了時間
COLUMN_NAME_ORDER_STUDENTS			= 'order_students';				// 予約している生徒の数
COLUMN_NAME_MAX_STUDENTS			= 'max_students';				// 個別の予約できる最大の数
COLUMN_NAME_LESSON_DATE				= 'lesson_date';				// 授業受講日
COLUMN_NAME_USER_WORK_STATUS		= 'user_work_status';			// ユーザ授業ステータス
COLUMN_NAME_CLASSWORK_STATUS		= 'classwork_status';			// 授業ステータス
COLUMN_NAME_POINT_RATE				= 'point_rate';					// ポイントレート
COLUMN_NAME_STOP_ORDER_DATE			= 'stop_order_date';			// 授業締切日？
COLUMN_NAME_SCHOOL_NAME				= 'school_name';				// 店舗名
COLUMN_NAME_LESSON_NAME				= 'lesson_name';				//授業テーマ名
COLUMN_NAME_TODAY					= 'today';						// 今日の日付
COLUMN_DEFAULT_USER_CLASSWORK_COST	= 'default_user_classwork_cost';// デフォルト授業料
COLUMN_USER_CLASSWORK_COST			= 'user_classwork_cost';		// 授業料

//カスタマイズ後の行のKey名
START_END_TIME 						= 'startEndTime';				//開始時間と終了時間を合わせたもの
LESSON_DATE_TIME 					= 'lessonDateTime';				//年月日を含んだ開始時間と終了時間を合わせたもの
SUM_COST							= 'sumCost';					//受講料の合計
LESSON_POINT 						= 'lessonPoint';				//レッスン受講で加算されるポイント
LESSON_REST 						= 'lesssonRest';				//受講情報の残席情報記号
LESSON_STATUS 						= 'lessonStatus';				//レッスンの予約状況

//「テーブルデータ」のキー
TABLE_DATA_KEY								= 'tableData';
//「データ」のキー
DATA_KEY									= 'data';
//日本語に変換した日付文字列
DATE_JAPANESE								= 'dateJapanese';
//jQuery UI Position用文字列。ダイアログの座標指定に使う
POSITION									= 'position';
DIALOG_POSITION 							= 'center top';				//ダイアログのポジション
LESSON_STATUS								= 'lessonStatus';
//テーブルの領域名とセレクタ
TABLE_AREA									= 'tableArea';
SELECTOR_TABLE_AREA							= DOT + TABLE_AREA;
EXPLAIN										= 'explain';
CHAR_INVALIDATE								= '✕';
TAG_CHILD_TR								= ' tr';	//子セレクタとしてのtr
TEXT_YES									= 'はい';	//「はい」の文字列
TEXT_NO										= 'いいえ';	//「いいえ」の文字列
//予約キャンセルダイアログ
HTML_MEMBER_RESERVE_CANCEL_DIALOG			= 'memberReserveCancelDialog.html';
//予約確認ダイアログ
HTML_MEMBER_RESERVE_CONFIRM_DIALOG			= 'memberReserveConfirmDialog.html';
//整数の4
INT_4										= 4;
//ターゲットの授業テーブル
SELECTOR_TARGET_LESSON_TABLE				= '.targetLessonTable';
//疑似セレクタ eqの文字列 前部
EQ_FRONT									= ':eq(';
//閉じ括弧と子セレクタtd
CLOSE_AND_TD_TAG 							= ') td';
//閉じるテキスト
STR_CLOSE_JP								= '閉じる';
//createTagクラスインスタンス用変数orキー名
VAR_CREATE_TAG								= 'create_tag';
//ログインダイアログのテンプレートHTLMパス
PATH_LOGIN_DIALOG_TEMPLATE					= 'dialog/template/loginDialog.html';
//ログインダイアログのJSONパス
PATH_LOGIN_DIALOG_JSON						= 'dialog/source/loginDialog.json';
//クラスインスタンスを表すinstanceの文字列
INSTANCE									= 'instance';
//各ダイアログ専用クラスインスタンス用の変数orキー名
DIALOG_BUILDER								= 'dialogBuilder';
//パスワードのセレクタ
PASSWORD_SELECTOR							= '.password';
//ハッシュの文字
CHAR_HASH									= '#';
//ユーザ名とパスワードをまとめたセレクタ
SELECTOR_USERNAME_PASSWORD					= '.userName, .password';
//ログインボタンのセレクタ
SELECTOR_LOGIN_BUTTON						= DOT + LOGIN_BUTTON;
//最新のダイアログのセレクタ
CURRENT_DIALOG								= DOT + DIALOG + SELECTOR_LAST;
//ログインダイアログのJSファイルのURL
URL_LOGIN_DIALOG_JS							= 'dialog/js/loginDialog.js';
//入力エリア
INPUT_AREA									= 'inputArea';
//体験レッスン予約希望ダイアログのJSファイルパス
EXPERIENCE_RESERVED_DIALOG_JS				= 'dialog/js/experienceReservedDialog.js';
ALLDAY_CHECKBOX								= '.allDayCheckbox';
ALLWEEK_CHECKBOX							= '.allWeekCheckbox';
CHECKBOX_DAYOFWEEK							= 'input[name="dayOfWeek"]';
CHECKBOX_WEEK								= 'input[name="week"]';
DIALOG_CLASS								= 'dialogClass';
STR_SEND_JP									= '送信';
//体験レッスン予約確認ダイアログのHTMLファイルのURL
EXPERIENCE_RESERVED_CONFIRM_DIALOG_URL		 = 'dialog/experienceReservedConfirmDialog.html';	
EXPERIENCE_RESERVED_CONFIRM_DIALOG_JS		 = 'dialog/js/experienceReservedConfirmDialog.js';	
EXPERIENCE_RESERVED_CONFIRM_DIALOG_JSON		 = 'dialog/source/experienceReservedConfirmDialog.json';	
EXPERIENCE_RESERVED_CONFIRM_DIALOG_HTML		 = 'dialog/template/experienceReservedConfirmDialog.html';	
//体験レッスン予約希望ダイアログの入力チェック用の定数群
//必須入力を行う入力フォームのname属性を配列に入れる。
EXPERIENCE_CHECK_FORMS = ['construct', 'course','schedule', 'name', 'personPhoneNumber', 'email', 'personEmailCheck', 'personCount'];
//必須入力を行う入力フォームのname属性の日本語版を連想配列で用意する。
EXPERIENCE_CHECK_FORMS_JP_NAME = {
			construct:'希望作品', 
			schedule:'希望時限', 
			name:'ご氏名', 
			personPhoneNumber:'電話番号', 
			email:'メールアドレス', 
			personEmailCheck:'メールアドレス(確認)', 
			personCount:'人数',
			course:'コース'
		};
//入力項目のエラー別メッセージの連想配列。
EXPERIENCE_CHECK_FORMS_ERROR_TEXT = {
		emptyList:"以下の項目が未入力となっています。\n",
		onlyAlphabetList	:"以下の項目は半角英数字記号のみを入力してください。\n",
		emailCheck	:"確認のため、同じメールアドレスもう一度入力してください。\n\n",
		numberList:"以下の項目の数値を1以上で入力してください。\n"
}
//体験レッスン予約希望ダイアログのパーツ名群
RESERVED_DATE								= 'reservedDate';
RESERVED_SUMMARY							= 'reservedSummary';
SPECIAL_CONTRUCT							= 'radioButtonSpecialConstruct';
SPECIAL_SCHEDULE							= 'radioButtonSpecialSchedule';
SUBINFO										= 'subInfo';
PERSON_INFORMATION							= 'personInformation';
MAIL_SUBJECT								= 'mailSubject';

//体験レッスン予約希望ダイアログ　入力チェックのリスト名称群
EMPTY_LIST									= 'emptyList';
ONLY_ALPHABET_LIST							= 'onlyAlphabetList';
EMAIL_CHECK									= 'emailCheck';
NUMBER_LIST									= 'numberList';
//体験レッスン予約希望ダイアログ 英数字入力チェック対象のセレクタ
IS_ALPHABET_CHECK_ELEMS_RESERVED_DIALOG		= 'input[name="personPhoneNumber"], input[name="email"], input[name="personCount"]';
SELECTOR_PERSON_MAIL						= '.personEmail input';
SELECTOR_PERSON_MAIL_CHECK					= '.personEmailCheck input';
SELECTOR_COUNT								= '.count';
ESCAPE_KAIGYOU								= "\n";				//改行のエスケープ文字
DISABLED									= 'disabled';
FORM_ELEMS									= 'input,button,textarea';	//フォームで使うタグ
FORM_DATA									= 'formData';
SELECTOR_NAME_FRONT							= '[name="';		//name属性を指定して取得するinputタグのセレクタの前部
SELECTOR_INPUT_NAME_FRONT					= 'input[name="';	//name属性を指定して取得するinputタグのセレクタの前部
SELECTOR_ATTR_REAR_AND_CHECKED				= '"]:checked';		//属性を指定するセレクタの閉じ括弧＋チェックが入った要素の疑似セレクタの文字列
RADIO										= 'radio';
CHECKBOX									= 'checkbox';
TYPE										= 'type';
FORM_VALIE_INPUTS							= 'input:text, input[type="email"], textarea, input:radio:checked, input:checkbox:checked, input:hidden,input[type="number"], input[type="search"], input[type="tel"], input[type="password"]';
ATTR_DISABLED								= '[disabled]';