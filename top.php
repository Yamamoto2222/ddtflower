<!-- container -->
<div id="container" class="window" name="usuall">

<header class="header">
</header>
	<div class="main">
	</div>
<script>
		try{
			commonFuncs = new common();						//汎用共通関数定義クラスインスタンスを生成する

			var creator = new createLittleContents();		//createTagクラスのインスタンスを生成する
			
			creator.getJsonFile('source/index.json');		// ファイルのデータをjsonを用いて持ってくる
			creator.getJsonFile('source/commonJson.json');	// ファイルのデータをjsonを用いて持ってくる
			creator.getDomFile('template/common.html');		// 共通パーツのDOMを取得する。
			creator.getDomFile('template/toppage.html');	// トップページのパーツのDOMを取得する。
			//ヘッダー内のタグが作成済みでなければ
		
			creator.createNormalHeaderContent();	//ヘッダー内のタグが作成済みでなければ作る。
		
			creator.outputTag('flowerBackground', 'createImage');	// トップページ背景を作る
			//ブログのお知らせを作る。
			creator.outputTag('topicGallery','topic', '.flowerBackground');
			creator.outputTag('topicCampaign','topic', '.flowerBackground');
			creator.outputTag('topicBlog','topic', '.flowerBackground');
			creator.outputTag('topicShowCampaign','topicShow', '.flowerBackground');
			creator.outputTag('topicShowGallery','topicShow', '.flowerBackground');
			creator.outputTag('topicShowBlog','topicShow', '.flowerBackground');
			
			creator.outputTag('footer');							// フッターを作る
			
			// トップメニューにマウスオーバーのフィルターを配置する。
			functionFilter('.topMenu li');
		
			//JSONデータを格納する変数を初期化する。
			//@add 2015.0604 T.Masuda MSLの記事一覧を最新記事表示ウィンドウに載せる
			//ブログとギャラリーのお知らせの内容を消す
//			$('.topicGallery').empty();
//			$('.topicBlog').empty();
			//MSLのリストをお知らせウィンドウに入れる。非表示になっているので表示する
//			$('.topicGallery').append($('#mslongtail_1985').show());
//			$('.topicBlog').append($('#mslongtail_1984').show());
			
			//0ミリ秒後にキャンペーンお知らせ表示ボタンをスライド表示する。
			commonFuncs.moveNoticeWindows();
			//お知らせウィンドウを開閉させるイベントを登録する
			commonFuncs.toggleNoticeWindows();


			commonFuncs.setShowSelectedBlogArticleEvent();			
			
			//例外処理
			}catch(e){
				//エラーログを出す
				console.log(e);
			}
		</script>
</div>
<!-- JavaScriptのコードを記述する -->
