const songs = [
"天ノ弱/164",
"タイムマシン/1640mP",
"からくりピエロ/40mP",
"シリョクケンサ/40mP",
"恋愛裁判/40mP",
 "フタリボシ/40mP",
"Step to you/40mP",
"トリノコシティ/40mP",
"静電気。/emon(Tes.)",
"too Cute!/emon(Tes.)",
"Cosmic star/emon(Tes.)",
"Shake it!/emon(Tes.)",
"Dear/19's Sound Factory",
"ハイドアンド・シーク/19's Sound Factory",
"アウト オブ エデン/K's Sound Project",
"帰巣本能 少年 by the mile-/鏡音リン・レン",
"ジェミニ/鏡音リン・レン",
"廃都アトリエスタにて/鏡音リン・レン",
"グッドナイトエクスプレス/鏡音リン・レン",
"Ur-Style/DATEKEN feat.鏡音リン",
"ぼくらの16bit戦争/sasakure.‌ UK",
"どうぶつ占い/すこっぷ",
"Packaged/kz(livetune)",
"Hand in Hand/kz(livetune)",
"Tell Your World/livetune",
"ストロボナイツ/livetune",
"ファインダー/livetune",
"Last Night,Good Night/livetune",
"ンダーランドと羊の歌/ハチ",
"Tómur/におP",
"マトリョシカ/初音ミク・GUMI",
"Rabbit/一億円P feat. 初音ミク",
"Sweet Devil/初音ミク",
"深海少女/初音ミク",
"ハジメテノオト/初音ミク",
"ヒカレルサテライト/初音ミク",
"みむかｩわナイストライ/初音ミク",
"夏色☆キャンバス/初音ミク",
"Scene/ジミーサムP",
"* ハロー、プラネット。/初音ミク",
"うさぎのかぞえかた/初音ミク&鏡音リン",
"フラジール/ぬゆり",
"1/6 -out of the gravity-/ぼーかりおどP",
"1/6/ぼーかりおどP",
"風待ちハローワールド/add9(ヘリP)",
"うっせぇわ/Ado",
"唱/Ado",
"新時代/Ado",
"踊/Ado",
"START DASH SENSATION/AIKATSU STARS!",
"Blooming♡Blooming/AIKATSU☆STARS!",
"STARDOM!/AIKATSU☆STARS!",
"スタートライン! /AIKATSU☆STARS!",
"Brave Shine/Aimer",
"Ref:rain/Aimer",
"残響散歌/Aimer",
"創聖のアクエリオン/AKINO",
"聖少女領域/ALI PROJECT",
"さよならごっこ/amazarashi",
"季節は次々死んでいく/amazarashi",
"僕が死のうと思ったのは/amazarashi",
"空に歌えば/amazarashi",
"ロンリーユニバース/Aqu3ra",
"Velonica/Aqua Timez",
"しおり/Aqua Timez",
"千の夜をこえて/Aqua Timez",
"決意の朝に/Aqua Timez",
"夏のかけら/Aqua Timez ",
"等身大のラブソング/Aqua Timez",
"つぼみ/Aqua Timez",
"リライト/ASIAN KUNG-FU GENERATION",
"遥か彼方/ASIAN KUNG-FU GENERATION",
"Stairway Generation/Base Ball Bear",
"ドラマチック/Base Ball Bear",
"鐘を鳴らして/BONNIE PINK",
"ココロのちず/BOYSTYLE",
"Aurora/BUMP OF CHICKEN",
"Butterfly/BUMP OF CHICKEN",
"GO/BUMP OF CHICKEN",
"Hello,world!/BUMP OF CHICKEN",
"ray/BUMP OF CHICKEN",
"アカシア/BUMP OF CHICKEN",
"アンサー/BUMP OF CHICKEN",
"カルマ/BUMP OF CHICKEN",
"クロノスタシス/BUMP OF CHICKEN",
"なないろ/BUMP OF CHICKEN",
"天体観測/BUMP OF CHICKEN",
"月虹/BUMP OF CHICKEN",
"車輪の唄/BUMP OF CHICKEN",
"Be Somewhere/Buzy",
"鯨/Buzy",
"ピーターパン・シンドローム/buzzG",
"星の唄/buzzG",
"ギリギリchop/B'z",
"サインはB/B小町 アイ (CV:高橋李依)",
"STAR☆T☆RAIN -New Arrange Ver.-/B小町",
"Call Me Maybe/Carly Rae Jepsen",
"I Really Like You/Carly Rae Jepsen",
"Period/CHEMISTRY",
"桜ロック/CHERRYBLOSSOM",
"病名恋ワズライ/HoneyWorks",
"カヌレ/CHiCO with HoneyWorks",
"プライド革命/CHiCO with HoneyWorks",
"可愛くなりたい/CHiCO with HoneyWorks",
"私、アイドル宣言/CHiCO with HoneyWorks",
"世界は恋に落ちている/CHiCO with HoneyWorks",
"世界はまだ君を知らない/阿部真央",
"CLICK/ClariS",
"irony/ClariS",
"コネクト/ClariS",
"ヒトリゴト/ClariS",
"reunion/ClariS",
"nexus/ClariS",
"voice/CLOUD",
"EQUALロマンス/CoCo",
"U.S.A. /DA PUMP",
"faraway/day after tomorrow",
"Starry Heavens/day after tomorrow",
"そして僕にできるコト/day after tomorrow",
"Snow Song Show/DECO*27",
"キミ以上、ボク未満。/DECO*27",
"ヴァンパイア/DECO*27",
"おじゃま虫/DECO*27",
"弱虫モンブラン/DECO*27",
"ストリーミングハート/DECO*27",
"セカイ/DECO*27",
"ヒバナ/DECO*27",
"恋距離遠愛/DECO*27",
"乙女解剖/DECO*27",
"二息步行/DECO*27",
"妄想感傷代償連盟/DECO*27",
"夜行性ハイズ/DECO*27",
"愛言葉II/DECO*27",
"愛言葉Ⅲ/DECO*27",
"罪と罰/DECO*27",
"モザイクロール/DECO*27",
"ペダルハート/DECO*27",
"ゴーストルール/DECO*27",
"探し物/DIRTY OLD MEN",
"Just Be Friends/Dixie Flatline",
"夜鷹の夢/Do As Infinity",
"TAO/Do As Infinity",
"モノクロアクト/doriko",
"ロミオとシンデレラ/doriko",
"歌に形はないけれど/doriko",
"Get Over/dream",
"ようかい体操第一/Dream5",
"ハッピーシンセサイザ/Easy Pop",
"名前のない怪物/EGOIST",
"路地裏猫の正体/GUMI",
"KISS ME BABY!!!/ELEGUMI TOKYO",
"平行線/Eve × suis",
"群青讃歌/Eve",
"careless breath/EXILE",
"虹を編めたら/fhana",
"青空のラプソディ/fhána",
"DAN DAN 心魅かれてく/FIELD OF VIEW",
"渇いた叫び/FIELD OF VIEW",
"GO!!!/FLOW",
"Answer/FLOW",
"星に願いを/flumpool",
"君に届け/flumpool",
"Believe/Folder5",
"SAKURAスキップ/fourfolium",
"only my railgun/fripSide",
"sister's noise/fripSide",
"LEVEL5 -judgelight-/fripSide",
"夏空/Galileo Galilei",
"Myself/VALSHE",
"Mysterious Eyes/GARNET CROW",
"君という光/GARNET CROW",
"夏の幻/GARNET CROW",
"涙のイエスタデー/GARNET CROW",
"君の思い描いた夢 集Xル HEAVEN／GARNET CROW",
"極楽浄土/GARNiDELiA",
"偶然の確率/girl next door",
"Alchemy/Girls Dead Monster",
"Crow Song/Girls Dead Monster ",
"Here I am/globe",
"# あくあ色ぱれっと/湊あくあ",
"あいうえおんがく/GReeeeN",
"キセキ/GReeeeN",
"奇跡/GReeeeN",
"愛唄/GReeeeN",
"瞬きもせずに/H△G",
"センチメンタルクライシス/halca",
"Blessing/halyosy",
"Connecting/halyosy",
"かさなる影/Hearts Grow",
"clover/hiro",
"ビビっとラブ/HoneyWorks",
"プライド革命/HoneyWorks",
"今ちょっとだけ話題の神様/HoneyWorks",
"可愛くてごめん/HoneyWorks",
"金曜日のおはよう/HoneyWorks",
"誇り高きアイドル/HoneyWorks",
"グロウアップ/Hysteric Blue",
"366日/HY",
"I'll be the one/HΛL",
"明日への扉/I WiSH",
"月光花/Janne Da Arc",
"恋の願い星/JellyPanda",
"くじら12号/JUDY AND MARY",
"そばかす/JUDY AND MARY",
"ZIGG-ZAGG/Junky",
"ディスティック・ラブ/Junky",
"Happy Halloween/Junky",
"トゥインクル/Junky",
"メランコリック/Junky",
"ラブチーノ/Junky",
"スイートマジック/Junky",
"キミペディア/Junky",
"夕花火/Junky",
"ポップンガール@コミュニケーション/Junky",
"シルエット/KANA-BOON",
"スターマーカー/KANA-BOON",
"ソングオブザデッド/KANA-BOON",
"KING/Kanaria",
"酔いどれ知らず/Kanaria",
"一番の宝物/karuta",
"bitter/keeno",
"crack/keeno",
"glow/keeno",
"人生リセットボタン/kemu",
"おはよう。/Keno",
"ボクラの冒険/Kids Alive",
"OVERLAP/Kimeru",
"Best Friend/Kiroro",
"アウト オブ エデン/Kouhei",
"なりすましゲンガー/KulfiQ",
"セツナトリップ/Last Note.",
"放課後ストライド/Last Note.",
"恋愛勇者/Last Note.",
"有頂天ビバーチェ/Last Note.",
"My Soul, Your Beats!/Lia",
"Bravely You/Lia",
"小さなてのひら/Lia",
"時を刻む唄/Lia",
"ロメオ/LIP×LIP",
"crossing field/LiSA",
"oath sign/LiSA",
"炎/LiSA",
"紅蓮華/LiSA",
"悲しみをやさしさに/little by little",
"あの日タイムマシン/LONG SHOT PARTY ",
"けーたいみしてよ/MAISONdes",
"トウキョウ・シャンディ・ランデヴ/MAISONdes",
"絆ノ奇跡/MAN WITH A MISSION × milet",
"ライオン/May'n/中島愛",
"気分上々↑↑/mihimaru GT",
"VS/misono",
"二人三脚/misono",
"Chasing hearts/miwa",
"ヒカリへ/miwa",
"リブート/miwa",
"ファンサ/mona(CV:夏川椎菜)",
"小さな恋のうた/MONGOL800",
"HANABI/Mr.Children",
"Magic/Mrs. GREEN APPLE",
"インフェルノ/Mrs. GREEN APPLE",
"ケセラセラ/Mrs. GREEN APPLE",
"青と夏/Mrs. GREEN APPLE",
"ライラック/Mrs. GREEN APPLE",
"夢幻/MY FIRST STORY x HYDE",
"STYX HELIX/MYTH & ROID ",
"リアルワールド/nano.RIPE",
"月花/nano.RIPE",
"ロストワンの号哭/Neru",
"命のユースティティア/Neru",
"ホログラム/NICO Touches the Walls",
"天地ガエシ/NICO Touches the Walls",
"ココロオドル/nobodyknows+",
"Bad Apple!!/nomico",
"Cry Baby/Official髭男dism",
"HELLO/Official髭男dism",
"イエスタデイ/Official髭男dism",
"ホワイトノイズ/Official髭男dism",
"ミックスナッツ/Official髭男dism",
"What Makes You Beautiful/One Direction",
"以心電信/ORANGE RANGE",
"DAYBREAK FRONTLINE/Orangestar",
"Surges/Orangestar",
"アスノヨゾラ哨戒班/Orangestar",
"回る空うさぎ/Orangestar",
"空奏列車/Orangestar",
"trick and treat/OSTER project",
"Good Time/Owl city & Carly Rae Jepsen",
"Magic of Love/Perfume",
"コンピューターシティ/Perfume",
"チョコレイト・ディスコ/Perfume",
"君＝花/pigstar",
"シル・ヴ・プレジデント/P丸様。",
"すずめ/RADWIMPS",
"スパークル/RADWIMPS",
"なんでもないや/RADWIMPS",
"前前前世/RADWIMPS",
"愛にできることはまだあるかい/RADWIMPS",
"夢灯篭/RADWIMPS",
"祝祭/RADWIMPS",
"100万回の「I love you」/Rake",
"大切な人/Rake",
"ebb and flow/Ray",
"銀色の空/redballoon",
"ENDLESS STORY/REIRA starring YUNA ITO",
"メグメル/riya",
"My SunShine/ROCK'A'TRENCH",
"ハルモニア/RYTHEM",
"ホウキ雲/RYTHEM",
"グメグ☆ファイアーエンドレスナイト/samfree",
"トンデモワンダーズ/Sasakure.UK",
"あんなに一緒だったのに/See-Saw",
"スターライトパレード/SEKAI NO OWARI",
"最高到達点/SEKAI NO OWARI",
"RPG/SEKAI NO OWARI",
"桃源郷エイリアン/serial TV drama",
"LOVEトロピカ～ナ/Sister MAYO",
"世界に一つだけの花/SMAP",
"夜空ノムコウ/SMAP",
"イマジネーション/SPYAIR",
"サムライハート/SPYAIR",
"KIRA☆Power/STAR ANIS",
"SHINING LINE*/STAR☆ANIS",
"オリジナルスター☆彡/STAR☆ANIS",
"カレンダーガール/STAR☆ANIS",
"SPLASH FREE/STYLE FIVE",
"さよならメモリーズ/Supercell",
"ワールドイズマイン/supercell",
"ブラック★ロックシューター/Supercell",
"メルト/supercell",
"君の知らない物語/supercell",
"初めての恋が終わる時/supercell",
"さぁ/SURFACE",
"HEART OF SWORD ～夜明け前～/T.M.Revolution",
"HOT LIMIT/T.M.Revolution",
"resonance/T.M.Revolution",
"The secret garden/葉月ゆら",
"The Story of Us/Taylor Swift",
"We Are Never Ever Getting Back Together/Taylor Swift",
"お願い！シンデレラ/THE IDOLM@STER CINDERELLA GIRLS",
"One day/The ROOTLESS",
"Get Wild/TM NETWORK",
"Pray/Tommy heavenly6",
"BOY MEETS GIRL/TRF",
"Adrenaline!!!/TrySail",
"晩餐歌/tuki.",
"シュガーソングとビターステップ/UNISON SQUARE GARDEN",
"アンビバレント/Uru ",
"CHANGE THE WORLD/V6",
"WAになっておどろう/V6",
"怪獣の花唄/Vaundy",
"夏祭り/Whiteberry",
"アイドル/YOASOBI",
"アドベンチャー/YOASOBI",
"夜に駆ける/YOASOBI",
"勇者/YOASOBI",
"群青/YOASOBI",
"UNDEAD/YOASOBI",
"again/YUI",
"CHE.R.RY/YUI",
"Good-bye days/YUI",
"HELLO ～Paradise Kiss～/YUI",
"Laugh away/YUI",
"Rolling star/YUI",
"SUMMER SONG/YUI",
"JOY/YUKI",
"インドア系ならトラックメイカー/Yunomi & nicamoq",
"secret base～君がくれたもの～/ZONE",
"未来コネクション/ЯeaL",
"unravel/TK from 凛として時雨",
"Together/あきよしふみえ",
"HAKOBAKO PLAYER/アゴアニキP",
"Let It Go/アナと雪の女王",
"生まれてはじめて/アナと雪の女王",
"イーガービリーバー/アヒル軍曹P",
"A Whole New World/アラジン",
"フレンド・ライク・ミー/アラジン",
"TKGの歌/アリレム",
"ブルーバード/いきものがかり",
"気まぐれロマンティック/いきものがかり",
"花は桜 君は美し/いきものがかり ",
"青春ライン/いきものがかり",
"熱情のスペクトラム/いきものがかり",
"きゅうくらりん/いよわ",
"うまぴょい伝説/ウマ娘",
"Stay Alive/エミリア(高橋李依)",
"君じゃなきゃダメみたい/オーイシマサヨシ",
"ダーリンダンス/かいりきベア",
"ベノム/かいりきベア",
"メンタルチェンソー/かいりきベア",
"命に嫌われている。/カンザキイオリ",
"LUVORATORRRRRY!/ギガ・れをる",
"ギガンティックO.T.N/ギガP",
"ウィーアー!/きただにひろし",
"青のすみか/キタニタツヤ",
"金木犀/くじら",
"Catch You Catch Me/グミ",
"君のそばで～ヒカリのテーマ～/グリン",
"インタビュア/クワガタP",
"はいよろこんで/こっちのけんと",
"蕾/コブクロ",
"たばこ/コレサワ",
"夜もすがら君想ふ/ころん",
"シンデレラ/サイダーガール",
"TSUNAMI/サザンオールスターズ",
"青いベンチ/サスケ",
"うさぎのかぞえかた/さつきがてんこもり",
"ネトゲ廃人シュプレヒコール/さつきがてんこもり",
"お断りします/さつきがてんこもり",
"それは僕たちの奇跡/μ's",
"それは小さな光のような/さユり",
"ミカヅキ/さユり",
"花の塔/さユり",
"世界はそれを愛と呼ぶんだぜ/サンボマスター",
"Step and Go!/シグナルP",
"粛聖!!ロリ神レクイエム☆/しぐれうい",
"モノクロのキス/シド",
"嘘/シド",
"Calc./ジミーサムP",
"from Y to Y/ジミーサムP",
"No Logic/ジミーサムP",
"Starduster/ジミーサムP",
"オツキミリサイタル/じん",
"夜咄ディセイブ/じん",
"めいど・うぃず・どらごんず/スーパーちょろゴンず",
"はじまりの日/スガシカオ",
"Ah Yeah!!/スキマスイッチ",
"ゴールデンタイムラバー/スキマスイッチ",
"ボクノート/スキマスイッチ",
"世界寿命と最後の一日/スズム",
"東京レトロ/すこっぷ",
"秒針を噛む/ずっと真夜中でいいのに。",
"残機/ずっと真夜中でいいのに。",
"美しい鰭/スピッツ",
"快眠！安眠！スヤリスト生活/スヤリス姫(水瀬いのり)",
"Los! Los! Los!/ターニャ・デグレチャフ(悠木碧)",
"だってだってだって/タカノン",
"動く、動く/チト(CV:水瀬いのり)、ユーリ(CV:久保ユリカ)",
"風吹けば恋/チャットモンチー",
"風になる/つじあやの",
"フォニイ/ツミキ",
"ミュージックミュージック/とあ",
"SPiCa-acoustic arrange.ver-/とくP",
"ホシノウタ/とくP",
"Hello/ナオト・インティライミ",
"いつかきっと/ナオト・インティライミ",
"タカラモノ～この声がなくなるまで～/ナオト・インティライミ",
"ナイテタッテ/ナオト・インティライミ",
"Panorama/なぎ",
"Overdose/なとり",
"No pain, No game/ナノ",
"右肩の蝶/のりぴー",
"clock lock works/ハチ",
"砂の惑星/ハチ",
"ワンダーランドと羊の歌/ハチ",
"シャルル/バルーン",
"17才/ハルカトミユキ",
"ハロ/ハワユ/ナノウ",
"悪魔の子/ヒグチアイ",
"soundless voice/ひとしずくP",
"神っぽいな/ピノキオピー",
"ヒャダインのカカカタ カタオモイ-/ヒャダイン",
"一輪の花/ふみP",
"またあした/ふわりP",
"SKY'S the limit/ぼくのりりっくのぼうよみ",
"アゲハ蝶/ポルノグラフィティ",
"サウダージ/ポルノグラフィティ",
"ハネウマライダー/ポルノグラフィティ",
"ミュージック・アワー/ポルノグラフィティ",
"メリッサ/ポルノグラフィティ",
"㋰責任集合体/マサラダ",
"ブラッククリスマス/まふまふ",
"かまってちょーだい/まふまふ×天月",
"ロキ/みきとP",
"夕立のりぼん/みきとP",
"小夜子/みきとP",
"世田谷ナイトサファリ/みきとP",
"うそつき/めざめP",
"走れ！/ももいろクローバー",
"honey & clover club/ゆうゆ",
"天樂/ゆうゆ",
"イロトリドリ/ゆず",
"栄光の架橋/ゆず",
"夏色/ゆず",
"↑人生ゲーム↓/ゆずひこ",
"Blackjack/ゆちゃP",
"星天ドロップス/ゆちゃP",
"I will find a star/ゆよゆっぺ",
"だいしきゅーだいしゅき/femme fatale",
"だから僕は音楽を辞めた/ヨルシカ",
"ただ君に晴れ/ヨルシカ",
"花に亡霊/ヨルシカ",
"春泥棒/ヨルシカ",
"斜陽/ヨルシカ",
"嘘月/ヨルシカ",
"花になって/緑黄色社会",
"愛を感じて/ライオン・キング",
"星間飛行/ランカ・リー(CV:中島愛)",
"Deep in Abyss/リコ(CV:富田美憂)、レグ(CV:伊瀬茉莉也)",
"少年と魔法のロボット/伊東歌詞太郎",
"言ノ葉カルマ/れるりり",
"脳漿炸裂ガール/れるりり",
"あんたにあっかんべ/一二三",
"I see.../乃木坂46",
"Carry Me Off/八王子P",
"KiLLER LADY/八王子P",
"シューティングスター/八王子P",
"バタフライ・グラフィティ/八王子P",
"whiteout/八王子P",
"リテラチュア/上田麗奈",
"O-Ku-Ri-Mo-No Sunday!/久川凪(CV:立花日菜)、久川颯(CV:長江里加)",
"もうそう えくすぷれす/千石撫子(花澤香菜)",
"恋愛サーキュレーション/千石撫子(花澤香菜)",
"カサブタ/千綿ヒデノリ",
"かくしん的☆めたまるふぉ～ぜっ!/土間うまる(田中あいみ)",
"夏のしずく/大山百合香",
"ようこそジャパリパークへ/大石昌良",
"あなただけ見つめてる/大黒摩季",
"SMILY/大塚愛",
"プラネタリウム/大塚愛",
"フレンジャー/大塚愛",
"黒毛和牛上塩タン焼680円/大塚愛",
"火炎/女王蜂",
"キラキラ/aiko",
"キラキラ/小田和正",
"ラブ・ストーリーは突然に/小田和正",
"たしかなこと/小田和正",
"輝く未来/小此木麻里&畠中洋",
"hectopascal/小糸侑(高田憂希),七海燈子(寿美菜子)",
"PSI-missing/川田まみ",
"Oh My Darlin'/中ノ森BAND",
"空色デイズ/中川翔子",
"GLAMOROUS SKY/中島美嘉",
"Glory Days/尾崎裕哉",
"シューティングスター/天月-あまつき-",
"月曜日の憂鬱/天月-あまつき-",
"かいしんのいちげき!/天月-あまつき-",
"テルーの唄/手嶌葵",
"ブリキノダンス/日向電工",
"いつも何度でも/木村弓",
"いのちの名前/木村弓",
"innocent starter/水樹奈々",
"エジソン/水曜日のカンパネラ",
"消せない罪/北出菜奈",
"Override/市瀬るぽ",
"Step by step/市瀬るぽ",
"POP STAR/平井堅",
"Super Driver/平野綾",
"冒険でしょでしょ？/平野綾",
"FEELING AROUND/鈴木みのり",
"fancy baby doll/田村ゆかり",
"Fantastic future/田村ゆかり",
"Little Wish ～lyrical step～/田村ゆかり",
"童話迷宮/田村ゆかり",
"You & Me/田村ゆかり feat. motsu from m.o.v.e",
"Ready Go!/田村直美",
"ゆずれない願い/田村直美",
"ゆるふわ樹海ガール/石風呂",
"君はいなせなガール/石風呂",
"勇気100%/光GENJI ",
"灼け落ちない翼/多田葵 ",
"First Love/宇多田ヒカル",
"知らなきゃ/安月名莉子 ",
"忘れじの言の葉/安次嶺希和子",
"Flamingo/米津玄師",
"KICK BACK/米津玄師",
"Lemon/米津玄師",
"M八七/米津玄師",
"orion/米津玄師",
"パプリカ/米津玄師",
"ピースサイン/米津玄師",
"打上花火/米津玄師",
"灰色と青/米津玄師",
"No.1/mona(CV：夏川椎菜)",
"No.1/西野カナ",
"Best Friend/西野カナ",
"トリセツ/西野カナ",
"Style. /西野カナ",
"吉原ラメント/亜沙",
"ウラオモテ・フォーチュン/佐倉千代(CV:小澤亜李)",
"プラチナ/坂本真綾",
"人生リセットボタンぽちーw/沙花叉クロヱ",
"Good day/足立佳奈",
"Butter-Fly/和田光司",
"バレンタイン・キッス/国生さゆり",
"ミライチズ/夜のひと笑い",
"美少女無罪♡パイレーツ/宝鐘マリン",
"TOMORROW/岡本真夜",
"Don't say ”lazy”/放課後ティータイム",
"ふわふわ時間/放課後ティータイム",
"わたしの恋はホッチキス/放課後ティータイム",
"GO! GO! MANIAC/放課後ティータイム",
"OK!/松本梨香",
"タイプ:ワイルド/松本梨香",
"ライバル!/松本梨香",
"brave heart/林原めぐみ",
"Northern lights/林原めぐみ",
"Over soul/林原めぐみ",
"おもかげ/林原めぐみ",
"ふわふわ♪/牧野由依",
"はっぴぃ にゅう にゃあ/芹沢文乃(伊藤かな恵)&梅ノ森千世(井口裕香)&霧谷希(竹達彩奈)",
"白金ディスコ/阿良々木月火(井口裕香)",
"白い雪のプリンセスは/のぼる",
"story/前島麻由",
"恋のヒメヒメ☆ぺったんこ/姫野湖鳥(田村ゆかり)",
"どこまでも～How Far I'll Go～/屋比久知奈",
"太陽曰く燃えよカオス/後ろから這いより隊G",
"恋は渾沌の隷也/後ろから這いより隊G",
"Stellar Stellar/星街すいせい",
"マーシャル・マキシマイザー/柊マグネタイト",
"Soar/流星P",
"magnet/湊 貴大(流星P)",
"アイデンティティ/秋山黄色",
"always/倉木麻衣",
"Secret of my heart/倉木麻衣",
"Time after time～花舞う街で～/倉木麻衣",
"Your Best Friend/倉木麻衣",
"風のららら/倉木麻衣",
"恋に恋して/倉木麻衣",
"TRY AGAIN/倉木麻衣",
"涙そうそう/夏川りみ",
"ニア/夏代孝明",
"サブリナ/家入レオ",
"Falco-ファルコ-/島谷ひとみ",
"YUME日和/島谷ひとみ",
"ZERO!!/栗林みな実",
"明日晴れるかな/桑田佳祐",
"Cagayake! GIRLS/桜高軽音部",
"太陽の楽園 ～Promised Land～/神戸みゆき",
"ひまわりの約束/秦基博",
"お願いマッスル/紗倉ひびき(ファイルーズあい)&街雄鳴造(石川界人)",
"だんご大家族/茶太",
"微笑みの爆弾/馬渡松子",
"バトルフロンティア/高屋亜希那",
"キラメキラリ/高槻やよい(仁後真耶子)",
"魔訶不思議アドベンチャー! /高橋洋樹",
"ウォーアイニー/高橋瞳",
"青空のナミダ/高橋瞳",
"僕たちの行方/高橋瞳",
"光/LOVE PSYCHEDELICO",
"月光/鬼束ちひろ",
"流星群/鬼束ちひろ",
"眩暈/鬼束ちひろ",
"私とワルツを/鬼束ちひろ",
"ダンシング☆サムライ/崎山つばさ",
"燈/崎山蒼志",
"コンプレックス・イマージュ/彩音",
"虎視眈々/梅とら",
"God Knows.../涼宮ハルヒ(CV:平野綾)",
"プレパレード/逢坂大河(釘宮理恵)&櫛枝実乃梨(堀江由衣)&川嶋亜美(喜多村英梨)",
"オレンジ/逢坂大河(釘宮理恵)・櫛枝実乃梨(堀江由衣)・川嶋亜美(喜多村英梨)",
"人柱アリス/雪那(歪P)",
"なだめスかし Negotiation/鹿乃",
"千本桜/黒うさP",
"紅一葉/黒うさP",
"Happy Girl/喜多村英梨",
"Wind Climbing ～風にあそばれて～/奥井亜紀",
"変わらないもの/奥華子",
"ガーネット/奥華子",
"Happiness/嵐",
"One Love/嵐",
"Love so sweet/嵐",
"丸の内サディスティック/椎名林檎",
"カラカラ/結束バンド",
"ギターと孤独と蒼い惑星/結束バンド",
"なにが悪い/結束バンド",
"忘れてやらない/結束バンド",
"青春コンプレックス/結束バンド",
"星座になれたら/結束バンド",
"PLEASURE/華原朋美",
"MAGIC/愛内里菜",
"I can't stop my love for you/愛内里菜 ",
"恋はスリル、ショック、サスペンス/愛内里菜",
"staple stable/戦場ヶ原ひたぎ(斎藤千和)",
"香水/瑛人",
"それでも明日はやってくる/鈴木結女",
"輝きは君の中に/鈴木結女",
"Lap Tap Love/電ポルP",
"サイノウサンプラー/電ポルP",
"曖昧劣情Lover/電ポルP",
"FOR REAL/徳山秀典",
"Treasure/碧陽学園生徒会",
"虹/Aqua Timez",
"虹/福山雅治",
"道標/橘慶太",
"心拍数# 0822/蝶々P",
"ドライフラワー/優里",
"ベテルギウス/優里",
"マル・マル・モリ・モリ!/薫と友樹、たまにムック。",
"you/癒月",
"ヒトミノチカラ/観月ありさ",
"SIX COLORS BOY/雛形あきこ",
" *～アスタリスク～/オレンジレンジ",
"ニブンノイチ/BACK-ON",
"一斉の声/喜多修平",
"おかえり/宮内れんげ・一条蛍・越谷夏海・越谷小鞠",
"曲名はまだないです/Aogumo",
"White Love/SPEED",
"小さきもの/林明日香",
"Drawing days/SPLAY",
"心絵/ロードオブメジャー",
"愛包ダンスホール/HIMEHINA",
"ハナミズキ/一青窈",
"わたしの一番かわいいところ/FRUITS ZIPPER",
"もってけ!セーラーふく/泉こなた(平野綾),柊かがみ(加藤英美里),柊つかさ(福原香織),高良みゆき(遠藤綾)",
"チューリングラブ/ナナヲアカリ",
"空耳ケーキ/Oranges & Lemons",
"すないぱー。/『ユイカ』",
"もう君だけを離したりはしない/上木彩矢",
"こころのたまご/Buono!",
"最上級にかわいいの！/超ときめき♡宣伝部",
"ダブルラリアット/巡音ルカ",
"X-encounter/黑崎真音",
"らしさ/SUPER BEAVER",
"曇天/DOES",
"出航さ！～Sail Out For Someone～/E-girls",
"departure!/小野正利",
"Forever.../savage genius",
"ワイルド アット ハート/嵐",
"ピエロ/絵師じゃないKEI",
"気ままな天使たち/わたてん☆5",
"星屑のインターリュード/fhana",
"Re: Re:/ASIAN KUNG-FU GENERATION",
"future nova/School Food Punishment",
"futuristic imagination/School Food Punishment",
"light prayer/School Food Punishment",
"栄光への一秒/MAGIC OF LiFE",
"アイコトバ/アイナ・ジ・エンド",
"Wonderful Wonder World*/Yun*chi",
"光あれ/岡野昭仁",
"Glory Days/尾崎裕哉",
"笑一笑 ～シャオイーシャオ！～/ももいろクローバーZ",
"true my heart/佐倉紗織",
 
    // 將您的歌單加入這裡
];
// 將歌單加載到 HTML 並顯示總數
function loadSongs() {
    const songList = document.getElementById('songs');
    const songCount = document.getElementById('song-count');

    // 清空現有內容
    songList.innerHTML = "";

    // 加入所有歌曲
    songs.forEach((song, index) => {
        const li = document.createElement('li');
      const songName = song.replace(/^\d+\s?[\./\-＿－]?\s?/, ''); // 去除开头的数字和分隔符
       li.textContent = songName;
        songList.appendChild(li);
    });

    // 更新歌曲總數
    songCount.textContent = `総曲数: ${songs.length}`;
}

// 初始加載
loadSongs();

// 顯示或隱藏歌曲清單的函數
function toggleSongList() {
    // 隐藏主内容区域
    document.getElementById("main-content").style.display = "none";
    
    // 显示歌曲清单
    const songListDiv = document.getElementById("song-list");
    songListDiv.style.display = "block";
    


    // 填充歌曲清单
    const songListUl = document.getElementById("songs");
    songListUl.innerHTML = "";
    songs.forEach(song => {
        const li = document.createElement("li");
        li.textContent = song;
        songListUl.appendChild(li);
    });
}

function closeSongList() {
    // 隐藏歌曲清单
    document.getElementById("song-list").style.display = "none";

    // 显示主内容区域
    document.getElementById("main-content").style.display = "block";


}

// 隨機選擇歌曲的函數
function selectRandomSong() {
    const randomIndex = Math.floor(Math.random() * songs.length);
    const selectedSong = songs[randomIndex];
    document.getElementById("song-result").textContent = `${selectedSong}`;
}

// 動態生成流星元素並添加到頁面
const numberOfMeteors = 60; // 生成 60 顆流星
for (let i = 0; i < numberOfMeteors; i++) {
    const meteor = document.createElement('div');
    meteor.classList.add('meteor');
    document.body.appendChild(meteor);

    // 隨機選擇起始 X 和 Y 座標，避開畫面中心
    let startX = Math.random() * 160 - 60; // 設定範圍為 -60 到 100
    let startY = Math.random() * -30 - 40; // 設定範圍為 -40vh 到 -70vh
    
    // 避免流星出現在畫面中心
    if (Math.abs(startX) < 20 && Math.abs(startY) < 20) {
        startX = Math.random() * 160 - 60;  // 再隨機一次生成 X
        startY = Math.random() * -30 - 40; // 再隨機一次生成 Y
    }

    // 設定流星結束的 X 和 Y 座標
    const endX = startX + (Math.random() * 40 - 20); // 結束位置 X 偏移範圍（-20 到 +20）
    const endY = 110; // 流星結束位置超出視窗底部（110vh）

    // 設定流星的起點和終點位置
    meteor.style.setProperty('--start-x', `${startX}vw`);
    meteor.style.setProperty('--start-y', `${startY}vh`);
    meteor.style.setProperty('--end-x', `${endX}vw`);
    meteor.style.setProperty('--end-y', `${endY}vh`);

    // 隨機設定動畫時間和延遲
    meteor.style.animationDuration = `${Math.random() * 3 + 3}s`; // 隨機動畫時長（3-6秒）
    meteor.style.animationDelay = `${Math.random() * 3}s`; // 隨機延遲時間
}

