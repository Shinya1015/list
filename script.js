// --- ▼▼▼ 新增：歌曲與直播連結的對應資料 (目前只有第一首的範例) ▼▼▼ ---
const songStreamLinks = {
  // !! 請務必將 videoId 和 timestamp 換成真實的資料 !!
  "天ノ弱/164": [
    { date: "2024年12月28日", videoId: "sIYJQCrhT2s", timestamp: 1010 },
    { date: "2024年5月27日", videoId: "ZRqhVaH-ZcA", timestamp: 2432 },
    { date: "2024年5月1日", videoId: "DFsko7-t5_Y", timestamp: 6351 },
    { date: "2024年2月26日", videoId: "pjRxjZz-Cq0", timestamp: 12255 },
    { date: "2024年2月17日", videoId: "gVKf-Iqmjs0", timestamp: 3129 },
    { date: "2023年5月28日", videoId: "KpbetdQYukA", timestamp: 14160 }, 
    { date: "2023年1月24日", videoId: "YI2mn04MU_s", timestamp: 1554 }
  ],
  "タイムマシン/1640mP": [
    { date: "2025年3月29日", videoId: "r4WSqrEyefI", timestamp: 7466 },
    { date: "2025年3月23日", videoId: "r4WSqrEyefI", timestamp: 7466 },
    { date: "2025年1月24日", videoId: "51B2KoeyR6I", timestamp: 3779 },
    { date: "2024年12月28日", videoId: "sIYJQCrhT2s", timestamp: 1743 },
    { date: "2024年5月12日", videoId: "M_OMw1TfyTk", timestamp: 1070 },
    { date: "2024年5月1日", videoId: "DFsko7-t5_Y", timestamp: 5983 },
    { date: "2024年3月29日", videoId: "NET9-AJ6g-U", timestamp: 6120 },
    { date: "2024年3月23日", videoId: "y6IhWb9jBTY", timestamp: 9436 },
    { date: "2024年1月31日", videoId: "mQybi_EZC6k", timestamp: 5926 },
    { date: "2024年1月17日", videoId: "uq6bkRYAZvI", timestamp: 1137 },
    { date: "2024年1月9日", videoId: "lSdN2PzHKvI", timestamp: 2934 },
    { date: "2023年7月12日", videoId: "HnqygtJDc1w", timestamp: 7995 },
    { date: "2023年6月8日", videoId: "CS5HvLlsDVc", timestamp: 4608 },
    { date: "2023年5月2日", videoId: "Nw0mRArA6kE", timestamp: 4488 },
    { date: "2023年3月9日", videoId: "ocR9SezEBfQ", timestamp: 18153 },
    { date: "2023年3月4日", videoId: "STcegm8gGbQ", timestamp: 8159 },
    { date: "2023年1月6日", videoId: "lb9LTP381-c", timestamp: 3069 },
   ],
  "からくりピエロ/40mP": [
     { date: "2023年3月9日", videoId: "ocR9SezEBfQ", timestamp: 10472 },
     { date: "2023年1月924", videoId: "YI2mn04MU_s", timestamp: 2870 },
 ],   
"シリョクケンサ/40mP": [
    { date: "2024年5月4日", videoId: "R3_yWlP3Ho0", timestamp: 18149 },
    { date: "2024年3月17日", videoId: "btGgcxZOhcA", timestamp: 10255 },
    { date: "2021年10月11日", videoId: "LBIn6n6Z6VQ", timestamp: 4502 },
    { date: "2023年6月8日", videoId: "CS5HvLlsDVc", timestamp: 3603 },
    { date: "2023年2月24日", videoId: "xYVoR21Dfwk", timestamp: 6815 },
 ],
"恋愛裁判/40mP": [
  { date: "2024年2月17日", videoId: "gVKf-Iqmjs0", timestamp: 2529 },
  { date: "2023年6月8日", videoId: "CS5HvLlsDVc", timestamp: 3949 },
  { date: "2023年3月9日", videoId: "ocR9SezEBfQ", timestamp: 13972 },
  { date: "2023年2月14日", videoId: "miWn1J9dZQ8", timestamp: 2152 },
 ],
"フタリボシ/40mP": [
  { date: "2024年10月26日", videoId: "JoYHIozHIF0", timestamp: 14801 },
  { date: "2024年1月19日", videoId: "DgLxMHZn5PU", timestamp: 8544 },
 ],
"Step to you/40mP": [
  { date: "2024年5月4日", videoId: "R3_yWlP3Ho0", timestamp: 18883 },
  { date: "2024年3月26日", videoId: "3qhlFZL3j_w", timestamp: 6035 },
  { date: "2024年1月31日", videoId: "mQybi_EZC6k", timestamp: 6346 },
 ],
"トリノコシティ/40mP": [
  { date: "2025年3月20日", videoId: "FrYUQ-tM_fo", timestamp: 15327 },
  { date: "2024年8月25日-piano ver", videoId: "GYV3z44H4ew", timestamp: 8941 },
  { date: "2024年5月4日", videoId: "R3_yWlP3Ho0", timestamp: 21858 },
  { date: "2024年3月17日", videoId: "btGgcxZOhcA", timestamp: 10531 },
  { date: "2023年7月30日", videoId: "7nXcFkxEX-Y", timestamp: 9225 },
  { date: "2023年6月8日", videoId: "CS5HvLlsDVc", timestamp: 3390 },
  { date: "2023年5月2日", videoId: "Nw0mRArA6kE", timestamp: 3714 },
  { date: "2023年3月9日", videoId: "ocR9SezEBfQ", timestamp: 10099 },
 ],
"静電気。/emon(Tes.)": [
  { date: "2024年5月4日", videoId: "R3_yWlP3Ho0", timestamp: 14922 },
  ],
"too Cute!/emon(Tes.)": [
  { date: "2024年3月24日", videoId: "DGKzBUpYvE8", timestamp: 4022 },
  { date: "2023年8月7日", videoId: "UM-edp2dfSA", timestamp: 2647 },
  { date: "2023年6月3日", videoId: "Bs0jmjvcOhU", timestamp: 2851 },
  { date: "2023年3月4日", videoId: "STcegm8gGbQ", timestamp: 3452 },
  { date: "2022年12月25日", videoId: "kJZYq-AVZiI", timestamp: 12130 },
  ],
"Cosmic star/emon(Tes.)": [
  { date: "2023年6月3日", videoId: "Bs0jmjvcOhU", timestamp: 3270 },
  { date: "2023年5月2日", videoId: "Nw0mRArA6kE", timestamp: 6336 },
  { date: "2023年1月18日", videoId: "ME1ONTBCpho", timestamp: 4640 },
  ],
"Shake it!/emon(Tes.)": [
  { date: "2025年3月20日", videoId: "FrYUQ-tM_fo", timestamp: 16523 },
  { date: "2025年1月10日", videoId: "rNK1As42Lcw", timestamp: 1334 },
  { date: "2024年3月24日", videoId: "DGKzBUpYvE8", timestamp: 1079 },
  { date: "2023年10月11日", videoId: "LBIn6n6Z6VQ", timestamp: 2164 },
  ],
  "Dear/19's Sound Factory": [
  { date: "2024年5月27日", videoId: "ZRqhVaH-ZcA", timestamp: 5928 },
  { date: "2023年3月9日", videoId: "ocR9SezEBfQ", timestamp: 5196 },
  { date: "2023年1月14日", videoId: "ZuvpreZgpGk", timestamp: 11279 },
  ],
   "ハイドアンド・シーク/19's Sound Factory": [
  { date: "2025年2月22日", videoId: "lspd9aMQIXU", timestamp: 9530 },
  { date: "2024年11月10日", videoId: "q18m9BbYltI", timestamp: 3800 },
  { date: "2024年10月20日", videoId: "8iQwRuHgTOw", timestamp: 9636 },
  { date: "2024年9月28日", videoId: "vaS0RT_DFPU", timestamp: 8156 },
  { date: "2024年8月20日", videoId: "QCdAFK77p-U", timestamp: 7977 },
  { date: "2024年3月31日", videoId: "kjaROypg7Tc", timestamp: 7992 },
  { date: "2024年2月6日", videoId: "alU1RfrvC74", timestamp: 6670 },
  { date: "2023年1月11日", videoId: "l_bJ0AaBakk", timestamp: 1580 },
  { date: "2023年8月7日", videoId: "UM-edp2dfSA", timestamp: 6333 },
     
  ],
};
// --- ▲▲▲ 歌曲連結資料結束 ▲▲▲ ---

// --- 歌曲列表 (低音) ---
const lowPitchSongs = [
    "からくりピエロ/40mP",
    "トリノコシティ/40mP",
    "ハイドアンド・シーク/19's Sound Factory",
    "glow/keeno",
    "crack/keeno",
    "bitter/keeno",
    "Dragon Night/SEKAI NO OWARI",
    "フラジール/ぬゆり",
    "僕が死のうと思ったのは/amazarashi",
    "季節は次々死んでいく/amazarashi",
    "空に歌えば/amazarashi",
    "しおり/Aqua Timez",
    "千の夜をこえて/Aqua Timez",
    "等身大のラブソング/Aqua Timez",
    "つぼみ/Aqua Timez",
    "リライト/ASIAN KUNG-FU GENERATION",
    "遥か彼方/ASIAN KUNG-FU GENERATION",
    "カルマ/BUMP OF CHICKEN",
    "車輪の唄/BUMP OF CHICKEN",
    "天体観測/BUMP OF CHICKEN",
    "歌に形はないけれど/doriko",
    "from Y to Y/ジミーサムP",
    "Calc./ジミーサムP",
    "Starduster/ジミーサムP",
    "No Logic/ジミーサムP",
    "ひまわりの約束/秦基博",
    "月光/鬼束ちひろ",
    "流星群/鬼束ちひろ",
    "眩暈/鬼束ちひろ",
    "私とワルツを/鬼束ちひろ",
    "TSUNAMI/サザンオールスターズ",
    "蕾/コブクロ",
    "ボクノート/スキマスイッチ",
    "砂の惑星/ハチ",
    "シャルル/バルーン",
    "ハロ/ハワユ/ナノウ",
    "First Love/宇多田ヒカル",
    "Flamingo/米津玄師",
    "Lemon/米津玄師",
    "M八七/米津玄師",
    "orion/米津玄師",
    "灰色と青/米津玄師",
    "虹/福山雅治",
    "丸の内サディスティック/椎名林檎",
    "香水/瑛人",
    "Secret of my heart/倉木麻衣",
    "Time after time～花舞う街で～/倉木麻衣",
    "風のららら/倉木麻衣",
    "テルーの唄/手嶌葵",
    "Brave Shine/Aimer",
    "Ref:rain/Aimer",
    "小夜子/みきとP",
    "世田谷ナイトサファリ/みきとP",
    "心拍数♯0822/蝶々P",
    "ドライフラワー/優里",
    "ベテルギウス/優里",
    "you/癒月",
    "*～アスタリスク～/オレンジレンジ",
    "心絵/ロードオブメジャー",
    "ハナミズキ/一青窈",
    "曇天/DOES",
    "サイハテホーム/サクラメリーメン",
    "アイコトバ/サクラメリーメン",
    "ありがとう/SunSet Swish",
    "明日、僕は君に会いに行く/ワカバ",
    "サヨナラの空/Qwai",
    "変わらないもの/奥華子",
    "ガーネット/奥華子"
];
const animeSongs = [
    "START DASH SENSATION/AIKATSU STARS!",             // 偶像活動！ (Aikatsu!)
    "Blooming♡Blooming/AIKATSU☆STARS!",             // 偶像活動Stars！ (Aikatsu Stars!)
    "STARDOM!/AIKATSU☆STARS!",                         // 偶像活動Stars！ (Aikatsu Stars!)
    "スタートライン! /AIKATSU☆STARS!",               // 偶像活動Stars！ (Aikatsu Stars!)
    "episode solo/AIKATSU☆STARS!",                     // 偶像活動Stars！ (Aikatsu Stars!)
    "Brave Shine/Aimer",                                // Fate/stay night [Unlimited Blade Works]
    "Ref:rain/Aimer",                                   // 愛在雨過天晴時 (Koi wa Ameagari no You ni)
    "残響散歌/Aimer",                                   // 鬼滅之刃 遊郭篇 (Demon Slayer: Entertainment District Arc)
    "創聖のアクエリオン/AKINO",                         // 創聖的大天使 (Genesis of Aquarion)
    "聖少女領域/ALI PROJECT",                           // 薔薇少女 夢見 (Rozen Maiden: Träumend)
    "さよならごっこ/amazarashi",                       // 多羅羅 (Dororo)
    "季節は次々死んでいく/amazarashi",                 // 東京喰種√A (Tokyo Ghoul √A)
    "空に歌えば/amazarashi",                           // 我的英雄學院 (My Hero Academia)
    "Velonica/Aqua Timez",                              // BLEACH 死神
    "しおり/Aqua Timez",                                // 火影忍者疾風傳劇場版：羈絆 (Naruto Shippuden the Movie: Bonds)
    "決意の朝に/Aqua Timez",                            // 勇者物語 (Brave Story) - 電影
    "リライト/ASIAN KUNG-FU GENERATION",                // 鋼之鍊金術師 (Fullmetal Alchemist 2003)
    "遥か彼方/ASIAN KUNG-FU GENERATION",                // 火影忍者 (Naruto)
    "Stairway Generation/Base Ball Bear",               // 銀魂 (Gintama)
    "ドラマチック/Base Ball Bear",                      // 王牌投手 振臂高揮 (Big Windup!)
    "鐘を鳴らして/BONNIE PINK",                         // 宵星傳奇 (Tales of Vesperia) - 遊戲/動畫
    "ココロのちず/BOYSTYLE",                           // ONE PIECE 航海王
    "GO/BUMP OF CHICKEN",                               // GRANBLUE FANTASY The Animation (碧藍幻想)
    "Hello,world!/BUMP OF CHICKEN",                     // 血界戰線 (Blood Blockade Battlefront)
    "アンサー/BUMP OF CHICKEN",                         // 3月的獅子 (March Comes in Like a Lion)
    "月虹/BUMP OF CHICKEN",                             // 魔偶馬戲團 (Karakuri Circus)
    "サインはB/B小町 アイ (CV:高橋李依)",               // 【我推的孩子】 (Oshi no Ko) - 插入曲
    "STAR☆T☆RAIN -New Arrange Ver.-/B小町",         // 【我推的孩子】 (Oshi no Ko) - 插入曲
    "Period/CHEMISTRY",                                 // 鋼之鍊金術師 FULLMETAL ALCHEMIST (Fullmetal Alchemist: Brotherhood)
    "桜ロック/CHERRYBLOSSOM",                           // 家庭教師HITMAN REBORN! (Reborn!)
    "病名恋ワズライ/HoneyWorks",                       // 告白實行委員會系列 - 動畫電影/關聯歌曲
    "カヌレ/CHiCO with HoneyWorks",                     // 告白實行委員會系列 - 動畫電影/關聯歌曲
    "プライド革命/CHiCO with HoneyWorks",               // 銀魂° (Gintama°)
    "可愛くなりたい/CHiCO with HoneyWorks",             // 告白實行委員會系列 - 關聯歌曲 (女主角育成計劃！)
    "私、アイドル宣言/CHiCO with HoneyWorks",           // 告白實行委員會系列 - 關聯歌曲 (女主角育成計劃！)
    "世界は恋に落ちている/CHiCO with HoneyWorks",       // 閃爍的青春 (Ao Haru Ride)
    "ビビっとラブ/HoneyWorks",                         // 女主角育成計劃！～被討厭的女主角和秘密的工作～ (Heroines Run the Show)
    "今ちょっとだけ話題の神様/HoneyWorks",             // 元氣少女緣結神 (Kamisama Kiss) - OVA
    "可愛くてごめん/HoneyWorks",                       // 女主角育成計劃！～被討厭的女主角和秘密的工作～ (Heroines Run the Show) - 插入曲
    "金曜日のおはよう/HoneyWorks",                     // 告白實行委員會系列 - 關聯歌曲
    "誇り高きアイドル/HoneyWorks",                     // 女主角育成計劃！～被討厭的女主角和秘密的工作～ (Heroines Run the Show)
    "CLICK/ClariS",                                     // 偽戀 (Nisekoi)
    "irony/ClariS",                                     // 我的妹妹哪有這麼可愛！ (Oreimo)
    "コネクト/ClariS",                                  // 魔法少女小圓 (Puella Magi Madoka Magica)
    "ヒトリゴト/ClariS",                                // 情色漫畫老師 (Eromanga Sensei)
    "reunion/ClariS",                                   // 我的妹妹哪有這麼可愛。 (Oreimo Season 2)
    "nexus/ClariS",                                     // 我的妹妹哪有這麼可愛！ (Oreimo) - 遊戲版主題曲等
    "voice/CLOUD",                                      // 遊☆戲☆王 怪獸之決鬥 (Yu-Gi-Oh! Duel Monsters)
    "EQUALロマンス/CoCo",                              // 亂馬1/2 (Ranma 1/2) - 偶像團體CoCo演唱版
    "ようかい体操第一/Dream5",                         // 妖怪手錶 (Yo-kai Watch)
    "名前のない怪物/EGOIST",                           // PSYCHO-PASS 心靈判官 (Psycho-Pass)
    "虹を編めたら/fhana",                              // 春&夏事件簿 (Haruchika)
    "青空のラプソディ/fhána",                          // 小林家的龍女僕 (Miss Kobayashi's Dragon Maid)
    "DAN DAN 心魅かれてく/FIELD OF VIEW",              // 七龍珠GT (Dragon Ball GT)
    "渇いた叫び/FIELD OF VIEW",                        // 遊☆戲☆王 (Yu-Gi-Oh! 初期東映版)
    "GO!!!/FLOW",                                       // 火影忍者 (Naruto)
    "Answer/FLOW",                                      // 偵探學園Q (Tantei Gakuen Q)
    "Believe/Folder5",                                  // ONE PIECE 航海王
    "SAKURAスキップ/fourfolium",                       // NEW GAME!
    "only my railgun/fripSide",                         // 科學超電磁砲 (A Certain Scientific Railgun)
    "sister's noise/fripSide",                          // 科學超電磁砲S (A Certain Scientific Railgun S)
    "LEVEL5 -judgelight-/fripSide",                     // 科學超電磁砲 (A Certain Scientific Railgun)
    "Mysterious Eyes/GARNET CROW",                      // 名偵探柯南 (Detective Conan)
    "君という光/GARNET CROW",                          // 名偵探柯南 (Detective Conan)
    "夏の幻/GARNET CROW",                              // 名偵探柯南 (Detective Conan)
    "涙のイエスタデー/GARNET CROW",                    // 名偵探柯南 (Detective Conan)
    "君の思い描いた夢 集Xル HEAVEN／GARNET CROW",      // MÄR 魔兵傳奇 (MÄR)
    "Alchemy/Girls Dead Monster",                       // Angel Beats! - 插入曲
    "Crow Song/Girls Dead Monster ",                    // Angel Beats! - 插入曲
    "# あくあ色ぱれっと/湊あくあ",                      // Hololive關聯歌曲 (VTuber) - 很可能非動畫合作曲
    "センチメンタルクライシス/halca",                   // 輝夜姬想讓人告白～天才們的戀愛頭腦戰～ (Kaguya-sama: Love Is War)
    "スターティングブルー/halca",                      // 逆轉裁判 ～對這個「真實」，有異議！～ Season 2 (Ace Attorney Season 2)
    "かさなる影/Hearts Grow",                           // 銀魂 (Gintama)
    "I'll be the one/HΛL",                              // 棋魂 (Hikaru no Go)
    "明日への扉/I WiSH",                               // 戀愛巴士 (Ainori) - 綜藝節目，但在動漫情境中也常被演唱
    "月光花/Janne Da Arc",                              // 怪醫黑傑克 (Black Jack)
    "そばかす/JUDY AND MARY",                           // 神劍闖江湖 -明治劍客浪漫譚- (Rurouni Kenshin)
    "シルエット/KANA-BOON",                             // 火影忍者疾風傳 (Naruto Shippuden)
    "スターマーカー/KANA-BOON",                         // 我的英雄學院 (My Hero Academia)
    "ソングオブザデッド/KANA-BOON",                     // 殭屍100～在成為殭屍前要做的100件事～ (Zom 100: Bucket List of the Dead)
    "一番の宝物/karuta",                                // Angel Beats! - 插入曲 (翻唱/別版本)
    "おはよう。/Keno",                                  // HUNTER×HUNTER 獵人 (1999年版)
    "ボクラの冒険/Kids Alive",                          // 棋魂 (Hikaru no Go)
    "OVERLAP/Kimeru",                                   // 遊☆戲☆王 怪獸之決鬥 (Yu-Gi-Oh! Duel Monsters)
    "My Soul, Your Beats!/Lia",                         // Angel Beats!
    "Bravely You/Lia",                                  // Charlotte 夏洛特
    "時を刻む唄/Lia",                                   // CLANNAD ～AFTER STORY～
    "ロメオ/LIP×LIP",                                   // 告白實行委員會系列 - 關聯歌曲
    "crossing field/LiSA",                              // 刀劍神域 (Sword Art Online)
    "oath sign/LiSA",                                   // Fate/Zero
    "炎/LiSA",                                          // 鬼滅之刃劇場版 無限列車篇 (Demon Slayer: Mugen Train Arc) - 電影/TV版主題曲
    "紅蓮華/LiSA",                                      // 鬼滅之刃 (Demon Slayer: Kimetsu no Yaiba)
    "紅蓮の弓矢/Linked Horizon",                       // 進擊的巨人 (Attack on Titan)
    "悲しみをやさしさに/little by little",              // 火影忍者 (Naruto)
    "あの日タイムマシン/LONG SHOT PARTY ",              // 夏目友人帳 續 (Natsume Yujin-cho Shi)
    "絆ノ奇跡/MAN WITH A MISSION × milet",              // 鬼滅之刃 刀匠村篇 (Demon Slayer: Swordsmith Village Arc)
    "ライオン/May'n/中島愛",                           // 超時空要塞F (Macross Frontier)
    "ファンサ/mona(CV:夏川椎菜)",                        // 女主角育成計劃！～被討厭的女主角和秘密的工作～ (Heroines Run the Show) - 插入曲
    "インフェルノ/Mrs. GREEN APPLE",                    // 炎炎消防隊 (Fire Force)
    "夢幻/MY FIRST STORY x HYDE",                       // 鬼滅之刃 柱訓練篇 (Demon Slayer: Hashira Training Arc)
    "STYX HELIX/MYTH & ROID ",                          // Re:從零開始的異世界生活 (Re:ZERO -Starting Life in Another World-)
    "リアルワールド/nano.RIPE",                        // 人類衰退之後 (Humanity Has Declined)
    "月花/nano.RIPE",                                   // 打工吧！魔王大人 (The Devil Is a Part-Timer!)
    "ホログラム/NICO Touches the Walls",                // 鋼之鍊金術師 FULLMETAL ALCHEMIST (Fullmetal Alchemist: Brotherhood)
    "天地ガエシ/NICO Touches the Walls",                // 排球少年!! (Haikyu!!)
    "Bad Apple!!/nomico",                               // 東方Project關聯歌曲 - 遊戲原作，非動畫合作曲
    "イエスタデイ/Official髭男dism",                    // HELLO WORLD - 電影
    "ホワイトノイズ/Official髭男dism",                  // 東京復仇者 聖夜決戰篇 (Tokyo Revengers: Christmas Showdown Arc)
    "ミックスナッツ/Official髭男dism",                  // SPY×FAMILY 間諜家家酒
    "Surges/Orangestar",                                // 「加油吧，同期醬」Web動畫 主題曲
    "君＝花/pigstar",                                  // 純情羅曼史 (Junjou Romantica)
    "シル・ヴ・プレジデント/P丸様。",                    // VTuber歌曲 - 很可能非動畫合作曲
    "すずめ/RADWIMPS",                                  // 鈴芽之旅 (Suzume) - 電影
    "スパークル/RADWIMPS",                              // 你的名字。 (Your Name.) - 電影
    "なんでもないや/RADWIMPS",                          // 你的名字。 (Your Name.) - 電影
    "前前前世/RADWIMPS",                                // 你的名字。 (Your Name.) - 電影
    "愛にできることはまだあるかい/RADWIMPS",            // 天氣之子 (Weathering With You) - 電影
    "夢灯篭/RADWIMPS",                                  // 你的名字。 (Your Name.) - 電影
    "祝祭/RADWIMPS",                                    // 天氣之子 (Weathering With You) - 電影
    "ebb and flow/Ray",                                 // 來自風平浪靜的明天 (Nagi-Asu: A Lull in the Sea)
    "銀色の空/redballoon",                             // 銀魂 (Gintama)
    "ENDLESS STORY/REIRA starring YUNA ITO",            // NANA - 電影 (原作是漫畫)
    "ホウキ雲/RYTHEM",                                  // 烘焙王 (Yakitate!! Japan)
    "あんなに一緒だったのに/See-Saw",                   // 機動戰士鋼彈SEED (Mobile Suit Gundam SEED)
    "最高到達点/SEKAI NO OWARI",                       // ONE PIECE 航海王
    "RPG/SEKAI NO OWARI",                               // 蠟筆小新：超級美味！B級美食大逃亡！！ (Crayon Shin-chan Movie 21) - 電影
    "Take Your Way/SEKAI NO OWARI",                     // 烏龍派出所電影版2相關歌曲 (雖然最終未使用)
    "桃源郷エイリアン/serial TV drama",                 // 銀魂' (Gintama')
    "LOVEトロピカ～ナ/Sister MAYO",                    // 熱帶雨林的爆笑生活 (Haré+Guu)
    "イマジネーション/SPYAIR",                          // 排球少年!! (Haikyu!!)
    "サムライハート/SPYAIR",                            // 銀魂' (Gintama')
    "KIRA☆Power/STAR ANIS",                            // 偶像活動！ (Aikatsu!)
    "SHINING LINE*/STAR☆ANIS",                         // 偶像活動！ (Aikatsu!)
    "オリジナルスター☆彡/STAR☆ANIS",                  // 偶像活動！ (Aikatsu!)
    "カレンダーガール/STAR☆ANIS",                      // 偶像活動！ (Aikatsu!)
    "オトナモード/STAR☆ANIS",                          // 偶像活動！ (Aikatsu!)
    "フレンド/STAR☆ANIS",                              // 偶像活動！ (Aikatsu!)
    "prism spiral/STAR☆ANIS",                          // 偶像活動！ (Aikatsu!)
    "輝きのエチュード/STAR☆ANIS",                      // 劇場版 偶像活動！ (Aikatsu! The Movie)
    "笑顔のsuncatcher/STAR☆ANIS",                      // 偶像活動！ (Aikatsu!)
    "ハッピィクレッシェンド/STAR☆ANIS",                // 偶像活動！ (Aikatsu!)
    "SPLASH FREE/STYLE FIVE",                           // Free! 男子游泳部
    "君の知らない物語/supercell",                       // 化物語 (Bakemonogatari)
    "さぁ/SURFACE",                                     // 守護月天！ (Mamotte Shugogetten!)
    "HEART OF SWORD ～夜明け前～/T.M.Revolution",       // 神劍闖江湖 -明治劍客浪漫譚- (Rurouni Kenshin)
    "resonance/T.M.Revolution",                         // SOUL EATER 噬魂者
    "お願い！シンデレラ/THE IDOLM@STER CINDERELLA GIRLS", // 偶像大師 灰姑娘女孩 (The Idolmaster Cinderella Girls) - 遊戲/動畫
    "One day/The ROOTLESS",                             // ONE PIECE 航海王
    "Get Wild/TM NETWORK",                              // 城市獵人 (City Hunter)
    "Pray/Tommy heavenly6",                             // 銀魂 (Gintama)
    "Pray/Wish*",                                       // 網球王子 (The Prince of Tennis) - 可能是角色歌翻唱
    "Adrenaline!!!/TrySail",                            // 情色漫畫老師 (Eromanga Sensei)
    "シュガーソングとビターステップ/UNISON SQUARE GARDEN", // 血界戰線 (Blood Blockade Battlefront)
    "アイドル/YOASOBI",                                 // 【我推的孩子】 (Oshi no Ko)
    "勇者/YOASOBI",                                     // 葬送的芙莉蓮 (Frieren: Beyond Journey's End)
    "群青/YOASOBI",                                     // 藍色時期 (Blue Period) - 關聯 (CM曲，但與動畫世界觀契合)
    "again/YUI",                                        // 鋼之鍊金術師 FULLMETAL ALCHEMIST (Fullmetal Alchemist: Brotherhood)
    "Good-bye days/YUI",                                // 午夜的陽光 (Midnight Sun) - 電影 (原作是小說)
    "HELLO ～Paradise Kiss～/YUI",                      // 天國之吻 (Paradise Kiss) - 電影 (原作是漫畫)
    "Rolling star/YUI",                                 // BLEACH 死神
    "secret base～君がくれたもの～/ZONE",               // 我們仍未知道那天所看見的花名。(Anohana: The Flower We Saw That Day) - ED翻唱 (原曲為日劇主題曲)
    "未来コネクション/ЯeaL",                          // 精靈寶可夢 太陽&月亮 (Pokémon Sun & Moon)
    "unravel/TK from 凛として時雨",                   // 東京喰種 (Tokyo Ghoul)
    "Together/あきよしふみえ",                          // 精靈寶可夢 超世代 (Pokémon Advanced Generation)
    "Let It Go/アナと雪の女王",                        // 冰雪奇緣 (Frozen) - 電影
    "生まれてはじめて/アナと雪の女王",                  // 冰雪奇緣 (Frozen) - 電影
    "A Whole New World/アラジン",                       // 阿拉丁 (Aladdin) - 電影
    "フレンド・ライク・ミー/アラジン",                  // 阿拉丁 (Aladdin) - 電影
    "ブルーバード/いきものがかり",                       // 火影忍者疾風傳 (Naruto Shippuden)
    "青春ライン/いきものがかり",                       // 王牌投手 振臂高揮 (Big Windup!)
    "熱情のスペクトラム/いきものがかり",                 // 七大罪 (The Seven Deadly Sins)
    "うまぴょい伝説/ウマ娘",                           // 賽馬娘Pretty Derby (Uma Musume Pretty Derby) - 遊戲/動畫
    "Stay Alive/エミリア(高橋李依)",                   // Re:從零開始的異世界生活 (Re:ZERO -Starting Life in Another World-)
    "君じゃなきゃダメみたい/オーイシマサヨシ",          // 月刊少女野崎同學 (Monthly Girls' Nozaki-kun)
    "ウィーアー!/きただにひろし",                      // ONE PIECE 航海王
    "青のすみか/キタニタツヤ",                          // 咒術迴戰 懷玉・玉折篇 (Jujutsu Kaisen Kaigyoku/Gyokusetsu Arc)
    "Catch You Catch Me/グミ",                          // 庫洛魔法使 (Cardcaptor Sakura)
    "君のそばで～ヒカリのテーマ～/グリン",              // 精靈寶可夢 鑽石&珍珠 (Pokémon Diamond & Pearl)
    "それは僕たちの奇跡/μ's",                          // Love Live! School idol project
    "それは小さな光のような/さユり",                   // 只有我不存在的城市 (ERASED)
    "ミカヅキ/さユり",                                  // 亂步奇譚 Game of Laplace
    "花の塔/さユり",                                    // Lycoris Recoil 莉可麗絲
    "粛聖!!ロリ神レクイエム☆/しぐれうい",              // VTuber歌曲 - 非動畫合作曲
    "モノクロのキス/シド",                              // 黑執事 (Black Butler)
    "嘘/シド",                                          // 鋼之鍊金術師 FULLMETAL ALCHEMIST (Fullmetal Alchemist: Brotherhood)
    "めいど・うぃず・どらごんず/スーパーちょろゴンず",  // 小林家的龍女僕S (Miss Kobayashi's Dragon Maid S)
    "Ah Yeah!!/スキマスイッチ",                         // 排球少年!! (Haikyu!!)
    "ゴールデンタイムラバー/スキマスイッチ",            // 鋼之鍊金術師 FULLMETAL ALCHEMIST (Fullmetal Alchemist: Brotherhood)
    "快眠！安眠！スヤリスト生活/スヤリス姫(水瀬いのり)", // 在魔王城說晚安 (Sleepy Princess in the Demon Castle)
    "Los! Los! Los!/ターニャ・デグレチャフ(悠木碧)",   // 幼女戰記 (Saga of Tanya the Evil)
    "動く、動く/チト(CV:水瀬いのり)、ユーリ(CV:久保ユリカ)", // 少女終末旅行 (Girls' Last Tour)
    "風になる/つじあやの",                              // 貓的報恩 (The Cat Returns) - 電影
    "SPiCa-acoustic arrange.ver-/とくP",                // VOCALOID歌曲 - 非動畫合作曲 (初音未來 -Project DIVA- 關聯)
    "No pain, No game/ナノ",                            // BTOOOM! 驚爆遊戲
    "砂の惑星/ハチ",                                    // VOCALOID歌曲 (Magical Mirai 2017主題曲) - 非動畫合作曲
    "悪魔の子/ヒグチアイ",                              // 進擊的巨人 The Final Season Part 2
    "ヒャダインのカカカタ カタオモイ-/ヒャダイン",      // 日常 (Nichijou)
    "一輪の花/ふみP",                                  // BLEACH 死神
    "メリッサ/ポルノグラフィティ",                      // 鋼之鍊金術師 (Fullmetal Alchemist 2003)
    "脳漿炸裂ガール/れるりり",                         // VOCALOID歌曲 - 非動畫合作曲 (有關聯小說/電影)
    "リテラチュア/上田麗奈",                            // 魔女之旅 (Wandering Witch: The Journey of Elaina)
    "O-Ku-Ri-Mo-No Sunday!/久川凪(CV:立花日菜)、久川颯(CV:長江里加)", // 偶像大師 灰姑娘女孩劇場 (The Idolmaster Cinderella Girls Theater) - 遊戲/動畫
    "もうそう えくすぷれす/千石撫子(花澤香菜)",          // 〈物語〉系列 第二季 (Monogatari Series Second Season) - 囮物語
    "恋愛サーキュレーション/千石撫子(花澤香菜)",        // 化物語 (Bakemonogatari) - なでこスネイク
    "カサブタ/千綿ヒデノリ",                            // 魔法少年賈修 (Zatch Bell!)
    "かくしん的☆めたまるふぉ～ぜっ!/土間うまる(田中あいみ)", // 我家有個魚乾妹 (Himouto! Umaru-chan)
    "ようこそジャパリパークへ/大石昌良",                // 動物朋友 (Kemono Friends)
    "あなただけ見つめてる/大黒摩季",                    // 灌籃高手 (SLAM DUNK)
    "hectopascal/小糸侑(高田憂希),七海燈子(寿美菜子)", // 終將成為妳 (Bloom Into You)
    "PSI-missing/川田まみ",                             // 魔法禁書目錄 (A Certain Magical Index)
    "空色デイズ/中川翔子",                              // 天元突破 紅蓮螺巖 (Gurren Lagann)
    "GLAMOROUS SKY/中島美嘉",                           // NANA - 電影 (原作是漫畫)
    "シューティングスター/天月-あまつき-",              // 數碼寶貝-APP獸 (Digimon Universe App Monsters)
    "月曜日の憂鬱/天月-あまつき-",                      // 告白實行委員會系列 - 關聯歌曲
    "いつも何度でも/木村弓",                            // 神隱少女 (Spirited Away) - 電影
    "いのちの名前/木村弓",                              // 神隱少女 (Spirited Away) - 電影 (關聯歌曲)
    "innocent starter/水樹奈々",                        // 魔法少女奈葉 (Magical Girl Lyrical Nanoha)
    "消せない罪/北出菜奈",                              // 鋼之鍊金術師 (Fullmetal Alchemist 2003)
    "Super Driver/平野綾",                              // 涼宮春日的憂鬱 (The Melancholy of Haruhi Suzumiya)
    "冒険でしょでしょ？/平野綾",                        // 涼宮春日的憂鬱 (The Melancholy of Haruhi Suzumiya)
    "FEELING AROUND/鈴木みのり",                       // 愛吃拉麵的小泉同學 (Ms. Koizumi Loves Ramen Noodles)
    "fancy baby doll/田村ゆかり",                      // C³ -魔幻三次方- (C³)
    "Fantastic future/田村ゆかり",                      // 變態王子與不笑貓 (The "Hentai" Prince and the Stony Cat.)
    "Little Wish ～lyrical step～/田村ゆかり",         // 魔法少女奈葉 (Magical Girl Lyrical Nanoha)
    "童話迷宮/田村ゆかり",                              // 童話槍手小紅帽 (Fairy Musketeers)
    "Ready Go!/田村直美",                               // 精靈寶可夢 (Pokémon)
    "ゆずれない願い/田村直美",                          // 魔法騎士雷阿斯 (Magic Knight Rayearth)
    "勇気100%/光GENJI ",                                // 忍者亂太郎 (Nintama Rantaro)
    "灼け落ちない翼/多田葵 ",                          // Charlotte 夏洛特
    "KICK BACK/米津玄師",                               // 鏈鋸人 (Chainsaw Man)
    "ピースサイン/米津玄師",                            // 我的英雄學院 (My Hero Academia)
    "打上花火/米津玄師",                                // 煙花 (Fireworks) - 電影
    "No.1/mona(CV：夏川椎菜)",                           // 女主角育成計劃！～被討厭的女主角和秘密的工作～ (Heroines Run the Show) - 插入曲
    "ウラオモテ・フォーチュン/佐倉千代(CV:小澤亜李)",   // 月刊少女野崎同學 (Monthly Girls' Nozaki-kun)
    "プラチナ/坂本真綾",                                // 庫洛魔法使 (Cardcaptor Sakura)
    "Butter-Fly/和田光司",                              // 數碼寶貝大冒險 (Digimon Adventure)
    "美少女無罪♡パイレーツ/宝鐘マリン",                // Hololive關聯歌曲 (VTuber) - 非動畫合作曲
    "Don't say ”lazy”/放課後ティータイム",             // K-ON！輕音部 (K-On!)
    "ふわふわ時間/放課後ティータイム",                  // K-ON！輕音部 (K-On!) - 插入曲
    "わたしの恋はホッチキス/放課後ティータイム",        // K-ON！輕音部 (K-On!) - 插入曲
    "GO! GO! MANIAC/放課後ティータイム",                // K-ON！！輕音部 (K-On!!)
    "OK!/松本梨香",                                     // 精靈寶可夢 (Pokémon)
    "タイプ:ワイルド/松本梨香",                        // 精靈寶可夢 (Pokémon)
    "ライバル!/松本梨香",                              // 精靈寶可夢 (Pokémon)
    "brave heart/林原めぐみ",                          // 數碼寶貝大冒險 (Digimon Adventure) - 插入曲
    "Northern lights/林原めぐみ",                      // 通靈王 (Shaman King 2001)
    "Over soul/林原めぐみ",                            // 通靈王 (Shaman King 2001)
    "ふわふわ♪/牧野由依",                              // 水星領航員 The NATURAL (ARIA The NATURAL)
    "はっぴぃ にゅう にゃあ/芹沢文乃(伊藤かな恵)&梅ノ森千世(井口裕香)&霧谷希(竹達彩奈)", // 嬌蠻貓娘大橫行！ (Mayoi Neko Overrun!)
    "白金ディスコ/阿良々木月火(井口裕香)",              // 偽物語 (Nisemonogatari)
    "story/前島麻由",                                  // Re:從零開始的異世界生活 (Re:ZERO) 第2季 後半OP
    "恋のヒメヒメ☆ぺったんこ/姫野湖鳥(田村ゆかり)",     // 飆速宅男 (Yowamushi Pedal) - 劇中動畫「Love★Hime」主題曲
    "どこまでも～How Far I'll Go～/屋比久知奈",        // 海洋奇緣 (Moana) - 電影 (日語版)
    "太陽曰く燃えよカオス/後ろから這いより隊G",         // 襲來！美少女邪神 (Nyaruko: Crawling with Love)
    "恋は渾沌の隷也/後ろから這いより隊G",               // 襲來！美少女邪神W (Nyaruko: Crawling with Love W)
    "Stellar Stellar/星街すいせい",                     // Hololive關聯歌曲 (VTuber) - 非動畫合作曲
    "always/倉木麻衣",                                  // 名偵探柯南 (Detective Conan) - 電影『往天國的倒數計時』主題曲 / ED
    "Secret of my heart/倉木麻衣",                      // 名偵探柯南 (Detective Conan)
    "Time after time～花舞う街で～/倉木麻衣",          // 名偵探柯南 (Detective Conan) - 電影『迷宮的十字路』主題曲
    "Your Best Friend/倉木麻衣",                        // 名偵探柯南 (Detective Conan)
    "風のららら/倉木麻衣",                              // 名偵探柯南 (Detective Conan)
    "恋に恋して/倉木麻衣",                              // 名偵探柯南 (Detective Conan)
    "TRY AGAIN/倉木麻衣",                               // 名偵探柯南 (Detective Conan)
    "Falco-ファルコ-/島谷ひとみ",                       // 植木的法則 (The Law of Ueki)
    "YUME日和/島谷ひとみ",                              // 大雄與不可思議的風使者 (Doraemon: Nobita and the Windmasters) - 電影
    "ZERO!!/栗林みな実",                               // 打工吧！魔王大人 (The Devil Is a Part-Timer!)
    "Cagayake! GIRLS/桜高軽音部",                       // K-ON！輕音部 (K-On!)
    "太陽の楽園 ～Promised Land～/神戸みゆき",          // 真珠美人魚 (Mermaid Melody Pichi Pichi Pitch)
    "お願いマッスル/紗倉ひびき(ファイルーズあい)&街雄鳴造(石川界人)", // 流汗吧！健身少女 (How Heavy Are the Dumbbells You Lift?)
    "だんご大家族/茶太",                                // CLANNAD
    "微笑みの爆弾/馬渡松子",                            // 幽☆遊☆白書 (Yu Yu Hakusho)
    "バトルフロンティア/高屋亜希那",                    // 精靈寶可夢 超世代 (Pokémon Advanced Generation)
    "キラメキラリ/高槻やよい(仁後真耶子)",              // 偶像大師 (The Idolmaster) - 遊戲/動畫關聯歌曲
    "魔訶不思議アドベンチャー! /高橋洋樹",              // 七龍珠 (Dragon Ball)
    "God Knows.../涼宮ハルヒ(CV:平野綾)",               // 涼宮春日的憂鬱 (The Melancholy of Haruhi Suzumiya) - 插入曲
    "プレパレード/逢坂大河(釘宮理恵)&櫛枝実乃梨(堀江由衣)&川嶋亜美(喜多村英梨)", // TIGER×DRAGON！ (Toradora!)
    "オレンジ/逢坂大河(釘宮理恵)・櫛枝実乃梨(堀江由衣)・川嶋亜美(喜多村英梨)", // TIGER×DRAGON！ (Toradora!)
    "バニラソルト/堀江由衣",                            // TIGER×DRAGON！ (Toradora!)
    "Happy Girl/喜多村英梨",                            // 要聽爸爸的話！ (Listen to Me, Girls. I Am Your Father!)
    "Wind Climbing ～風にあそばれて～/奥井亜紀",        // 咕嚕咕嚕魔法陣 (Magical Circle Guru Guru)
    "カラカラ/結束バンド",                              // 孤獨搖滾！ (Bocchi the Rock!)
    "ギターと孤独と蒼い惑星/結束バンド",                // 孤獨搖滾！ (Bocchi the Rock!)
    "なにが悪い/結束バンド",                            // 孤獨搖滾！ (Bocchi the Rock!)
    "忘れてやらない/結束バンド",                        // 孤獨搖滾！ (Bocchi the Rock!)
    "青春コンプレックス/結束バンド",                    // 孤獨搖滾！ (Bocchi the Rock!)
    "星座になれたら/結束バンド",                        // 孤獨搖滾！ (Bocchi the Rock!)
    "MAGIC/愛内里菜",                                   // 名偵探柯南 (Detective Conan)
    "I can't stop my love for you/愛内里菜 ",           // 名偵探柯南 (Detective Conan)
    "恋はスリル、ショック、サスペンス/愛内里菜",        // 名偵探柯南 (Detective Conan)
    "staple stable/戦場ヶ原ひたぎ(斎藤千和)",           // 化物語 (Bakemonogatari) - ひたぎクラブ
    "それでも明日はやってくる/鈴木結女",                // 魔法騎士雷阿斯 (Magic Knight Rayearth)
    "輝きは君の中に/鈴木結女",                          // NINKU -忍空-
    "FOR REAL/徳山秀典",                                // 最遊記 (Saiyuki)
    "Treasure/碧陽学園生徒会",                          // 學生會的一存 (Student Council's Discretion)
    "道標/橘慶太",                                      // 家庭教師HITMAN REBORN! (Reborn!)
    "ニブンノイチ/BACK-ON",                             // 鋼彈創鬥者 (Gundam Build Fighters)
    "一斉の声/喜多修平",                                // 夏目友人帳 (Natsume Yujin-cho)
    "おかえり/宮内れんげ・一条蛍・越谷夏海・越谷小鞠",  // 悠悠哉哉少女日和 Repeat (Non Non Biyori Repeat)
    "小さきもの/林明日香",                              // 精靈寶可夢劇場版：七夜的許願星 基拉祈 (Pokémon: Jirachi—Wish Maker) - 電影
    "Drawing days/SPLAY",                               // 家庭教師HITMAN REBORN! (Reborn!)
    "心絵/ロードオブメジャー",                          // MAJOR 棒球大聯盟
    "もってけ!セーラーふく/泉こなた(平野綾),柊かがみ(加藤英美里),柊つかさ(福原香織),高良みゆき(遠藤綾)", // 幸運☆星 (Lucky☆Star)
    "チューリングラブ/ナナヲアカリ",                    // 理科生墜入情網，故嘗試證明。 (Science Fell in Love, So I Tried to Prove It)
    "空耳ケーキ/Oranges & Lemons",                      // 阿滋漫畫大王 (Azumanga Daioh)
    "もう君だけを離したりはしない/上木彩矢",            // 名偵探柯南 (Detective Conan)
    "こころのたまご/Buono!",                           // 守護甜心！ (Shugo Chara!)
    "X-encounter/黑崎真音",                             // 東京闇鴉 (Tokyo Ravens)
    "らしさ/SUPER BEAVER",                             // 元氣囝仔 (Barakamon)
    "曇天/DOES",                                        // 銀魂 (Gintama)
    "departure!/小野正利",                             // HUNTER×HUNTER 獵人 (2011年版)
    "Forever.../savage genius",                         // 武器種族傳說 (Elemental Gelade)
    "ピエロ/絵師じゃないKEI",                          // 魔偶馬戲團 (Karakuri Circus)
    "気ままな天使たち/わたてん☆5",                     // 天使降臨到我身邊！ (Wataten!: An Angel Flew Down to Me)
    "星屑のインターリュード/fhana",                    // 天體運行式 (Celestial Method)
    "Re: Re:/ASIAN KUNG-FU GENERATION",                // 只有我不存在的城市 (ERASED)
    "future nova/School Food Punishment",               // 東之伊甸 (Eden of the East)
    "futuristic imagination/School Food Punishment",    // 東之伊甸 (Eden of the East)
    "light prayer/School Food Punishment",              // 東之伊甸 劇場版I The King of Eden
    "栄光への一秒/MAGIC OF LiFE",                      // 飆速宅男 GRANDE ROAD (Yowamushi Pedal: Grande Road)
    "Wonderful Wonder World*/Yun*chi",                  // 記錄的地平線 (Log Horizon)
    "SUNDAY/ザ・ベイビースターズ",                      // 烘焙王 (Yakitate!! Japan)
    "光あれ/岡野昭仁",                                  // 七大罪 憤怒的審判 (The Seven Deadly Sins: Dragon's Judgement)
    "笑一笑 ～シャオイーシャオ！～/ももいろクローバーZ", // 蠟筆小新：功夫小子～拉麵大亂鬥～ (Crayon Shin-chan Movie 26) - 電影
    "アドバンス・アドベンチャー/GARDEN",                // 精靈寶可夢 超世代 (Pokémon Advanced Generation)
    "弱虫な炎/DIRTY OLD MEN",                           // 飆速宅男 (Yowamushi Pedal)
    "果てなき道/HIMEKA",                                // 信蜂 (Tegami Bachi: Letter Bee)
    "Reset/平原綾香",                                  // 大神 (Ōkami) - 遊戲 (亦有動畫化)
    "サヨナラの空/Qwai",                                // 銀魂' (Gintama')
    "ETERNAL BLAZE/水樹奈々",                          // 魔法少女奈葉A's (Magical Girl Lyrical Nanoha A's)
    "ギー太に首ったけ/平沢唯(豊崎愛生)",                // K-ON！輕音部 (K-On!) - 角色歌曲
    "Dear My Friend~まだ見ぬ未来へ~/ELISA",             // 科學超電磁砲 (A Certain Scientific Railgun)
    "Ring My Bell/blue drops",                          // 天降之物f (Sora no Otoshimono: Forte)
    "party night/真田アサミ・沢城みゆき・氷上 恭子",     // Di Gi Charat Nyo! (デ・ジ・キャラットにょ)
    "迷Q!?-迷宫-Make★You-/岸本早未",                  // 偵探學園Q (Tantei Gakuen Q)
    "Fast Forward/MONKEY MAJIK",                        // 妖怪少爺 (Nura: Rise of the Yokai Clan)
    "衝動/Pigstar",                                    // 純情羅曼史 (Junjou Romantica)
    "ワスレガタキ/石崎ひゅーい",                         // Dr.STONE 新石紀 NEW WORLD
    "三原色/PELICAN FANCLUB",                           // Dr.STONE 新石紀
    "夢のような/佐伯ユウス",                            // Dr.STONE 新石紀
    "瞬間センチメンタル/SCANDAL",                       // 鋼之鍊金術師 FULLMETAL ALCHEMIST (Fullmetal Alchemist: Brotherhood)
    "Blood teller/Faylan",                              // 未來日記 (Future Diary)
    "Destin Histoire/yoshiki*lisa",                     // GOSICK
    "こだまことだま/nano.RIPE",                        // 悠悠哉哉少女日和 Repeat (Non Non Biyori Repeat)
    "夏色プレゼント/あおい (井口裕香)、ひなた(阿澄 佳奈)、かえで(日笠陽子)、ここ な(小倉唯)", // 前進吧！登山少女 第二季 (Encouragement of Climb Season 2)
    "マジで感謝!/T-Pistonz+KMC",                       // 閃電十一人 (Inazuma Eleven)
    "Zzz/佐咲紗花",                                     // 日常 (Nichijou)
    "ハヤテのごとく!/KOTOKO",                           // 旋風管家！ (Hayate the Combat Butler)
    "Magical Babyrinth/DA PUMP"                         // 入間同學入魔了！ (Welcome to Demon School! Iruma-kun)
];
    



const notionBaseUrl = "https://www.notion.so/16bc0662e4368082a3bfc982aa928702?v=16bc0662e436812981a1000c061b7652";

// --- 函數定義區域 ---

function loadSongsCount() {
    const songCount = document.getElementById('song-count');
    // 確保 streamerSongList 存在 (如果它在其他地方定義)
    if (songCount && typeof streamerSongList !== 'undefined') {
        songCount.textContent = `総曲数: ${streamerSongList.length}`;
    } else if (songCount) {
         // 如果 streamerSongList 未定義，可以顯示 0 或保持不變
         // songCount.textContent = `総曲数: 0`;
    }
}

function selectRandomSong() {
    const selector = document.getElementById('song-type-selector');
    const selectedType = selector ? selector.value : "すべて";
    const resultParagraph = document.getElementById("song-result");
    let songPool = [];

    // 確保相關列表存在
    const allSongsDefined = typeof streamerSongList !== 'undefined' && streamerSongList.length > 0;
    const lowSongsDefined = typeof lowPitchSongs !== 'undefined' && lowPitchSongs.length > 0;
    const animeSongsDefined = typeof animeSongs !== 'undefined' && animeSongs.length > 0;

    if (selectedType === "すべて") {
        if (allSongsDefined) { songPool = streamerSongList; }
        else { resultParagraph.textContent = "曲リストが読み込まれていません！"; return; }
    } else if (selectedType === "低音") {
        if (lowSongsDefined) { songPool = lowPitchSongs; }
        else { resultParagraph.textContent = "低音曲リストが空か、定義されていません！"; return; }
    } else if (selectedType === "アニソン") {
        if (animeSongsDefined) { songPool = animeSongs; }
        else { resultParagraph.textContent = "アニソン曲リストが空か、定義されていません！"; return; }
    } else {
        console.warn(`未知的抽選類型: ${selectedType}，將從全部歌曲中抽選。`);
        if (allSongsDefined) { songPool = streamerSongList; }
        else { resultParagraph.textContent = "曲リストが読み込まれていません！"; return; }
    }

    if (songPool && songPool.length > 0) {
        const randomIndex = Math.floor(Math.random() * songPool.length);
        resultParagraph.textContent = songPool[randomIndex];
    } else {
        resultParagraph.textContent = `「${selectedType}」タイプの曲が見つかりません！`;
    }
}

// --- ▼▼▼ 修改：顯示歌曲列表，並根據連結資料添加 class ---
function toggleSongList() {
    document.getElementById("main-content").style.display = "none";
    const songListDiv = document.getElementById("song-list");
    songListDiv.style.display = "flex";

    const songListUl = document.getElementById("songs");
    songListUl.innerHTML = ""; // 清空舊列表

    // 確保 streamerSongList 存在
    if (typeof streamerSongList === 'undefined' || streamerSongList.length === 0) {
        songListUl.innerHTML = "<li>曲リストが空です。</li>";
        const songCount = document.getElementById('song-count');
        if (songCount) songCount.textContent = `総曲数: 0`;
        return;
    }

    streamerSongList.forEach(displayName => {
        const li = document.createElement("li");

        // 歌曲名稱 Span
        const songSpan = document.createElement("span");
        songSpan.textContent = displayName;

        // ▼▼▼ 檢查是否有連結資料，並添加對應 class ▼▼▼
        if (songStreamLinks && songStreamLinks[displayName] && songStreamLinks[displayName].length > 0) {
            songSpan.classList.add("song-name--has-link"); // 有資料，設為可點擊樣式 (CSS中定義為藍色)
        }
        // ▲▲▲ 檢查結束 ▲▲▲
        li.appendChild(songSpan);

        // 按鈕容器
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-group");
        const copyButton = document.createElement("button");
        copyButton.textContent = "コピー";
        copyButton.classList.add("copy-button");
        copyButton.dataset.song = displayName;
        buttonContainer.appendChild(copyButton);
        li.appendChild(buttonContainer);

        songListUl.appendChild(li);
    });

    // --- 事件委派處理列表點擊 ---
    songListUl.removeEventListener('click', handleSongListInteraction);
    songListUl.addEventListener('click', handleSongListInteraction);

    // 重置篩選和搜尋
    const searchInput = document.getElementById('search-input');
    if (searchInput) { searchInput.value = ""; }
    const filterSelect = document.getElementById('list-song-type-filter');
    if (filterSelect) { filterSelect.value = "すべて"; }
    filterSongs();
    loadSongsCount();
}

// --- ▼▼▼ 修改：處理列表互動，點擊只對有連結的歌名生效 ---
function handleSongListInteraction(event) {
    const target = event.target;

    // 檢查是否點擊了複製按鈕
    const copyBtn = target.closest('.copy-button');
    if (copyBtn && copyBtn.dataset.song) {
        copySongName(copyBtn.dataset.song, copyBtn);
        return;
    }

    // ▼▼▼ 檢查是否點擊了帶有連結的歌曲名稱 ▼▼▼
    const songNameSpan = target.closest('.song-name--has-link'); // 只查找有 .song-name--has-link class 的元素
    if (songNameSpan) {
        const songName = songNameSpan.textContent;
        // 因為加了 class 就表示 songStreamLinks[songName] 存在且有內容
        showStreamLinksPopup(songName);
    }
    // ▲▲▲ 檢查結束 ▲▲▲
}

async function copySongName(songText, buttonElement) {
   try {
        await navigator.clipboard.writeText(songText);
        const originalText = buttonElement.textContent;
        buttonElement.textContent = 'コピー済み!';
        buttonElement.disabled = true;
        setTimeout(() => {
            if (buttonElement?.closest('ul#songs')) {
                buttonElement.textContent = originalText;
                buttonElement.disabled = false;
            }
        }, 1500);
    } catch (err) {
        console.error('テキストのコピーに失敗しました: ', err);
    }
}

function filterSongs() {
    const searchInput = document.getElementById('search-input');
    const filterSelect = document.getElementById('list-song-type-filter');
    if (!searchInput || !filterSelect) return;

    const searchText = searchInput.value.toLowerCase();
    const filterType = filterSelect.value;

    const songsUl = document.getElementById('songs');
    if (!songsUl) return;
    const listItems = songsUl.getElementsByTagName('li');

    // 確保相關列表存在
    const lowSongsDefined = typeof lowPitchSongs !== 'undefined';
    const animeSongsDefined = typeof animeSongs !== 'undefined';


    for (let i = 0; i < listItems.length; i++) {
        const li = listItems[i];
        // ▼▼▼ 選第一個 span 作為歌名判斷基準 ▼▼▼
        const songSpan = li.querySelector('span:first-child');
        // ▲▲▲ 修改選擇器 ▲▲▲
        if (songSpan) {
            const songNameText = songSpan.textContent || songSpan.innerText;
            const songNameLower = songNameText.toLowerCase();

            let typeMatch = false;
            if (filterType === 'すべて') {
                typeMatch = true;
            } else if (filterType === '低音') {
                // 加上列表存在的判斷
                typeMatch = lowSongsDefined && lowPitchSongs.includes(songNameText);
            } else if (filterType === 'アニソン') {
                 // 加上列表存在的判斷
                typeMatch = animeSongsDefined && animeSongs.includes(songNameText);
            }

            const textMatch = songNameLower.includes(searchText);

            if (textMatch && typeMatch) {
                li.style.display = "flex";
            } else {
                li.style.display = "none";
            }
        }
    }
}

function closeSongList() {
    const songListDiv = document.getElementById("song-list");
    const mainContentDiv = document.getElementById("main-content");
    if (songListDiv) songListDiv.style.display = "none";
    if (mainContentDiv) mainContentDiv.style.display = "flex";
}

// --- ▼▼▼ 修改後的 showStreamLinksPopup 函數 ▼▼▼ ---
function showStreamLinksPopup(songName) {
    const modal = document.getElementById('stream-links-modal');
    const overlay = document.getElementById('modal-overlay');
    const titleElement = document.getElementById('modal-song-title');
    const listElement = document.getElementById('modal-stream-list'); // This should be an <ol>

    if (!modal || !overlay || !titleElement || !listElement) {
        console.error("ポップアップ表示に必要なHTML要素が見つかりませんでした！");
        return;
    }

    const links = songStreamLinks[songName]; // Assume songStreamLinks is defined elsewhere
    titleElement.textContent = songName;
    listElement.innerHTML = ''; // Clear previous list items

    // Check if links exist and display accordingly
    if (!links || links.length === 0) {
        // Display message if no links found
        const li = document.createElement('li');
        li.style.color = '#555'; // Style for non-clickable item
        li.style.cursor = 'default';
        li.textContent = '該当する配信記録のリンクが見つかりませんでした。';
        listElement.appendChild(li);
    } else {
        // Generate list items if links exist
        links.forEach(linkInfo => {
            const li = document.createElement('li');

            // ▼▼▼【關鍵修改】創建 span 並添加 class ▼▼▼
            const dateSpan = document.createElement('span');
            dateSpan.textContent = linkInfo.date; // Put date text inside the span
            dateSpan.classList.add('modal-list-date'); // Add class for styling
            li.appendChild(dateSpan); // Add the span to the li
            // ▲▲▲【修改完成】▲▲▲

            // Store data attributes on the li element
            li.dataset.videoId = linkInfo.videoId;
            li.dataset.timestamp = linkInfo.timestamp;

            listElement.appendChild(li); // Add the li to the list (<ol>)
        });
    }

    // Display the modal and overlay
    modal.style.display = 'block';
    overlay.style.display = 'block';
}
// --- ▲▲▲ 修改後的 showStreamLinksPopup 函數結束 ▲▲▲ ---


function closeStreamLinksPopup() {
    const modal = document.getElementById('stream-links-modal');
    const overlay = document.getElementById('modal-overlay');
    if (modal) modal.style.display = 'none';
    if (overlay) overlay.style.display = 'none';
}

function openYouTubeLink(videoId, timestamp) {
    if (!videoId || timestamp === undefined || timestamp === null) {
        console.error("無効なYouTube動画IDまたはタイムスタンプです！");
        return;
    }
    const url = `https://www.youtube.com/watch?v=${videoId}&t=${timestamp}s`;
    window.open(url, '_blank');
   //closeStreamLinksPopup(); // Keeping popup open after click
}

// --- 初始化和事件監聽器 ---
document.addEventListener('DOMContentLoaded', () => {
    const notionHeaderButton = document.getElementById('notion-header-button');
    if (notionHeaderButton) {
        notionHeaderButton.addEventListener('click', () => {
            window.open(notionBaseUrl, '_blank');
        });
    }

    const modalCloseButton = document.getElementById('modal-close-button');
    if (modalCloseButton) {
        modalCloseButton.addEventListener('click', closeStreamLinksPopup);
    }

    const overlay = document.getElementById('modal-overlay');
    if (overlay) {
        overlay.addEventListener('click', closeStreamLinksPopup);
    }

    const modalList = document.getElementById('modal-stream-list');
    if (modalList) {
        modalList.addEventListener('click', (event) => {
            const targetLi = event.target.closest('li');
            if (targetLi && targetLi.dataset.videoId && targetLi.dataset.timestamp) {
                openYouTubeLink(targetLi.dataset.videoId, targetLi.dataset.timestamp);
            }
        });
    }

    // 確保 loadSongsCount 和流星生成只執行一次
    // (如果 streamerSongList 等列表在其他地方延遲載入，這部分可能需要調整)
    if (typeof streamerSongList !== 'undefined') {
       loadSongsCount();
    }

    // 生成流星
    const numberOfMeteors = 60;
    // 確保 body 存在才添加流星
    if (document.body) {
        for (let i = 0; i < numberOfMeteors; i++) {
            const meteor = document.createElement('div');
            meteor.classList.add('meteor');
            document.body.appendChild(meteor);
            let startX = Math.random() * 160 - 60;
            let startY = Math.random() * -30 - 40;
            if (Math.abs(startX) < 20 && Math.abs(startY) < 20) {
                startX = Math.random() * 160 - 60;
                startY = Math.random() * -30 - 40;
            }
            const endX = startX + (Math.random() * 40 - 20);
            const endY = 110;
            meteor.style.setProperty('--start-x', `${startX}vw`);
            meteor.style.setProperty('--start-y', `${startY}vh`);
            meteor.style.setProperty('--end-x', `${endX}vw`);
            meteor.style.setProperty('--end-y', `${endY}vh`);
            meteor.style.animationDuration = `${Math.random() * 3 + 3}s`;
            meteor.style.animationDelay = `${Math.random() * 3}s`;
        }
    } else {
        console.error("無法生成流星：document.body 不存在。");
    }

}); // DOMContentLoaded 結束

const streamerSongList = [
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
    "ワンダーランドと羊の歌/ハチ",
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
    "恋になりたいAQUARIUM/Aqours",
    "うっせぇわ/Ado",
    "唱/Ado",
    "新時代/Ado",
    "踊/Ado",
    "START DASH SENSATION/AIKATSU STARS!",             // 偶像活動！ (Aikatsu!)
    "Blooming♡Blooming/AIKATSU☆STARS!",             // 偶像活動Stars！ (Aikatsu Stars!)
    "STARDOM!/AIKATSU☆STARS!",                         // 偶像活動Stars！ (Aikatsu Stars!)
    "スタートライン! /AIKATSU☆STARS!",               // 偶像活動Stars！ (Aikatsu Stars!)
    "episode solo/AIKATSU☆STARS!",                     // 偶像活動Stars！ (Aikatsu Stars!)
    "Brave Shine/Aimer",                                // Fate/stay night [Unlimited Blade Works]
    "Ref:rain/Aimer",                                   // 愛在雨過天晴時 (Koi wa Ameagari no You ni)
    "残響散歌/Aimer",                                   // 鬼滅之刃 遊郭篇 (Demon Slayer: Entertainment District Arc)
    "創聖のアクエリオン/AKINO",                         // 創聖的大天使 (Genesis of Aquarion)
    "聖少女領域/ALI PROJECT",                           // 薔薇少女 夢見 (Rozen Maiden: Träumend)
    "さよならごっこ/amazarashi",                       // 多羅羅 (Dororo)
    "季節は次々死んでいく/amazarashi",                 // 東京喰種√A (Tokyo Ghoul √A)
    "僕が死のうと思ったのは/amazarashi",
    "空に歌えば/amazarashi",                           // 我的英雄學院 (My Hero Academia)
    "ロンリーユニバース/Aqu3ra",
    "Velonica/Aqua Timez",                              // BLEACH 死神
    "しおり/Aqua Timez",                                // 火影忍者疾風傳劇場版：羈絆 (Naruto Shippuden the Movie: Bonds)
    "千の夜をこえて/Aqua Timez",
    "決意の朝に/Aqua Timez",                            // 勇者物語 (Brave Story) - 電影
    "夏のかけら/Aqua Timez ",
    "等身大のラブソング/Aqua Timez",
    "つぼみ/Aqua Timez",
    "リライト/ASIAN KUNG-FU GENERATION",                // 鋼之鍊金術師 (Fullmetal Alchemist 2003)
    "遥か彼方/ASIAN KUNG-FU GENERATION",                // 火影忍者 (Naruto)
    "Stairway Generation/Base Ball Bear",               // 銀魂 (Gintama)
    "ドラマチック/Base Ball Bear",                      // 王牌投手 振臂高揮 (Big Windup!)
    "鐘を鳴らして/BONNIE PINK",                         // 宵星傳奇 (Tales of Vesperia) - 遊戲/動畫
    "まもりたい ~White Wishes~/BoA",
    "ココロのちず/BOYSTYLE",                           // ONE PIECE 航海王
    "Aurora/BUMP OF CHICKEN",
    "Butterfly/BUMP OF CHICKEN",
    "GO/BUMP OF CHICKEN",                               // GRANBLUE FANTASY The Animation (碧藍幻想)
    "Hello,world!/BUMP OF CHICKEN",                     // 血界戰線 (Blood Blockade Battlefront)
    "ray/BUMP OF CHICKEN",
    "アカシア/BUMP OF CHICKEN",
    "アンサー/BUMP OF CHICKEN",                         // 3月的獅子 (March Comes in Like a Lion)
    "カルマ/BUMP OF CHICKEN",
    "クロノスタシス/BUMP OF CHICKEN",
    "なないろ/BUMP OF CHICKEN",
    "天体観測/BUMP OF CHICKEN",
    "月虹/BUMP OF CHICKEN",                             // 魔偶馬戲團 (Karakuri Circus)
    "車輪の唄/BUMP OF CHICKEN",
    "Be Somewhere/Buzy",
    "鯨/Buzy",
    "ピーターパン・シンドローム/buzzG",
    "星の唄/buzzG",
    "ギリギリchop/B'z",
    "サインはB/B小町 アイ (CV:高橋李依)",               // 【我推的孩子】 (Oshi no Ko) - 插入曲
    "STAR☆T☆RAIN -New Arrange Ver.-/B小町",         // 【我推的孩子】 (Oshi no Ko) - 插入曲
    "Call Me Maybe/Carly Rae Jepsen",
    "I Really Like You/Carly Rae Jepsen",
    "Period/CHEMISTRY",                                 // 鋼之鍊金術師 FULLMETAL ALCHEMIST (Fullmetal Alchemist: Brotherhood)
    "桜ロック/CHERRYBLOSSOM",                           // 家庭教師HITMAN REBORN! (Reborn!)
    "病名恋ワズライ/HoneyWorks",                       // 告白實行委員會系列 - 動畫電影/關聯歌曲
    "カヌレ/CHiCO with HoneyWorks",                     // 告白實行委員會系列 - 動畫電影/關聯歌曲
    "プライド革命/CHiCO with HoneyWorks",               // 銀魂° (Gintama°)
    "可愛くなりたい/CHiCO with HoneyWorks",             // 告白實行委員會系列 - 關聯歌曲 (女主角育成計劃！)
    "私、アイドル宣言/CHiCO with HoneyWorks",           // 告白實行委員會系列 - 關聯歌曲 (女主角育成計劃！)
    "世界は恋に落ちている/CHiCO with HoneyWorks",       // 閃爍的青春 (Ao Haru Ride)
    "ビビっとラブ/HoneyWorks",                         // 女主角育成計劃！～被討厭的女主角和秘密的工作～ (Heroines Run the Show)
    "今ちょっとだけ話題の神様/HoneyWorks",             // 元氣少女緣結神 (Kamisama Kiss) - OVA
    "可愛くてごめん/HoneyWorks",                       // 女主角育成計劃！～被討厭的女主角和秘密的工作～ (Heroines Run the Show) - 插入曲
    "金曜日のおはよう/HoneyWorks",                     // 告白實行委員會系列 - 關聯歌曲
    "誇り高きアイドル/HoneyWorks",                     // 女主角育成計劃！～被討厭的女主角和秘密的工作～ (Heroines Run the Show)
    "世界はまだ君を知らない/阿部真央",
    "CLICK/ClariS",                                     // 偽戀 (Nisekoi)
    "irony/ClariS",                                     // 我的妹妹哪有這麼可愛！ (Oreimo)
    "コネクト/ClariS",                                  // 魔法少女小圓 (Puella Magi Madoka Magica)
    "ヒトリゴト/ClariS",                                // 情色漫畫老師 (Eromanga Sensei)
    "reunion/ClariS",                                   // 我的妹妹哪有這麼可愛。 (Oreimo Season 2)
    "nexus/ClariS",                                     // 我的妹妹哪有這麼可愛！ (Oreimo) - 遊戲版主題曲等
    "voice/CLOUD",                                      // 遊☆戲☆王 怪獸之決鬥 (Yu-Gi-Oh! Duel Monsters)
    "EQUALロマンス/CoCo",                              // 亂馬1/2 (Ranma 1/2) - 偶像團體CoCo演唱版
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
    "心壊サミット/DECO*27",
    "探し物/DIRTY OLD MEN",
    "Just Be Friends/Dixie Flatline",
    "夜鷹の夢/Do As Infinity",
    "TAO/Do As Infinity",
    "モノクロアクト/doriko",
    "ロミオとシンデレラ/doriko",
    "歌に形はないけれど/doriko",
    "Get Over/dream",
    "ようかい体操第一/Dream5",                         // 妖怪手錶 (Yo-kai Watch)
    "ハッピーシンセサイザ/Easy Pop",
    "名前のない怪物/EGOIST",                           // PSYCHO-PASS 心靈判官 (Psycho-Pass)
    "路地裏猫の正体/GUMI",
    "KISS ME BABY!!!/ELEGUMI TOKYO",
    "平行線/Eve × suis",
    "群青讃歌/Eve",
    "careless breath/EXILE",
    "虹を編めたら/fhana",                              // 春&夏事件簿 (Haruchika)
    "青空のラプソディ/fhána",                          // 小林家的龍女僕 (Miss Kobayashi's Dragon Maid)
    "DAN DAN 心魅かれてく/FIELD OF VIEW",              // 七龍珠GT (Dragon Ball GT)
    "渇いた叫び/FIELD OF VIEW",                        // 遊☆戲☆王 (Yu-Gi-Oh! 初期東映版)
    "GO!!!/FLOW",                                       // 火影忍者 (Naruto)
    "Answer/FLOW",                                      // 偵探學園Q (Tantei Gakuen Q)
    "星に願いを/flumpool",
    "君に届け/flumpool",
    "ちいさな日々/flumpool",
    "Believe/Folder5",                                  // ONE PIECE 航海王
    "SAKURAスキップ/fourfolium",                       // NEW GAME!
    "only my railgun/fripSide",                         // 科學超電磁砲 (A Certain Scientific Railgun)
    "sister's noise/fripSide",                          // 科學超電磁砲S (A Certain Scientific Railgun S)
    "LEVEL5 -judgelight-/fripSide",                     // 科學超電磁砲 (A Certain Scientific Railgun)
    "夏空/Galileo Galilei",
    "Myself/VALSHE",
    "Mysterious Eyes/GARNET CROW",                      // 名偵探柯南 (Detective Conan)
    "君という光/GARNET CROW",                          // 名偵探柯南 (Detective Conan)
    "夏の幻/GARNET CROW",                              // 名偵探柯南 (Detective Conan)
    "涙のイエスタデー/GARNET CROW",                    // 名偵探柯南 (Detective Conan)
    "君の思い描いた夢 集Xル HEAVEN／GARNET CROW",      // MÄR 魔兵傳奇 (MÄR)
    "極楽浄土/GARNiDELiA",
    "偶然の確率/girl next door",
    "Alchemy/Girls Dead Monster",                       // Angel Beats! - 插入曲
    "Crow Song/Girls Dead Monster ",                    // Angel Beats! - 插入曲
    "Here I am/globe",
    "# あくあ色ぱれっと/湊あくあ",                      // Hololive關聯歌曲 (VTuber) - 很可能非動畫合作曲
    "あいうえおんがく/GReeeeN",
    "キセキ/GReeeeN",
    "奇跡/GReeeeN",
    "愛唄/GReeeeN",
    "瞬きもせずに/H△G",
    "センチメンタルクライシス/halca",                   // 輝夜姬想讓人告白～天才們的戀愛頭腦戰～ (Kaguya-sama: Love Is War)
    "スターティングブルー/halca",                      // 逆轉裁判 ～對這個「真實」，有異議！～ Season 2 (Ace Attorney Season 2)
    "Blessing/halyosy",
    "Connecting/halyosy",
    "かさなる影/Hearts Grow",                           // 銀魂 (Gintama)
    "clover/hiro",
    "グロウアップ/Hysteric Blue",
    "366日/HY",
    "I'll be the one/HΛL",                              // 棋魂 (Hikaru no Go)
    "明日への扉/I WiSH",                               // 戀愛巴士 (Ainori) - 綜藝節目，但在動漫情境中也常被演唱
    "月光花/Janne Da Arc",                              // 怪醫黑傑克 (Black Jack)
    "恋の願い星/JellyPanda",
    "くじら12号/JUDY AND MARY",
    "そばかす/JUDY AND MARY",                           // 神劍闖江湖 -明治劍客浪漫譚- (Rurouni Kenshin)
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
    "シルエット/KANA-BOON",                             // 火影忍者疾風傳 (Naruto Shippuden)
    "スターマーカー/KANA-BOON",                         // 我的英雄學院 (My Hero Academia)
    "ソングオブザデッド/KANA-BOON",                     // 殭屍100～在成為殭屍前要做的100件事～ (Zom 100: Bucket List of the Dead)
    "KING/Kanaria",
    "酔いどれ知らず/Kanaria",
    "一番の宝物/karuta",                                // Angel Beats! - 插入曲 (翻唱/別版本)
    "bitter/keeno",
    "crack/keeno",
    "glow/keeno",
    "人生リセットボタン/kemu",
    "おはよう。/Keno",                                  // HUNTER×HUNTER 獵人 (1999年版)
    "ボクラの冒険/Kids Alive",                          // 棋魂 (Hikaru no Go)
    "OVERLAP/Kimeru",                                   // 遊☆戲☆王 怪獸之決鬥 (Yu-Gi-Oh! Duel Monsters)
    "Best Friend/Kiroro",
    "アウト オブ エデン/Kouhei",
    "なりすましゲンガー/KulfiQ",
    "セツナトリップ/Last Note.",
    "放課後ストライド/Last Note.",
    "恋愛勇者/Last Note.",
    "有頂天ビバーチェ/Last Note.",
    "My Soul, Your Beats!/Lia",                         // Angel Beats!
    "Bravely You/Lia",                                  // Charlotte 夏洛特
    "小さなてのひら/Lia",
    "時を刻む唄/Lia",                                   // CLANNAD ～AFTER STORY～
    "ロメオ/LIP×LIP",                                   // 告白實行委員會系列 - 關聯歌曲
    "crossing field/LiSA",                              // 刀劍神域 (Sword Art Online)
    "oath sign/LiSA",                                   // Fate/Zero
    "炎/LiSA",                                          // 鬼滅之刃劇場版 無限列車篇 (Demon Slayer: Mugen Train Arc) - 電影/TV版主題曲
    "紅蓮華/LiSA",                                      // 鬼滅之刃 (Demon Slayer: Kimetsu no Yaiba)
    "紅蓮の弓矢/Linked Horizon",                       // 進擊的巨人 (Attack on Titan)
    "悲しみをやさしさに/little by little",              // 火影忍者 (Naruto)
    "あの日タイムマシン/LONG SHOT PARTY ",              // 夏目友人帳 續 (Natsume Yujin-cho Shi)
    "けーたいみしてよ/MAISONdes",
    "トウキョウ・シャンディ・ランデヴ/MAISONdes",
    "絆ノ奇跡/MAN WITH A MISSION × milet",              // 鬼滅之刃 刀匠村篇 (Demon Slayer: Swordsmith Village Arc)
    "ライオン/May'n/中島愛",                           // 超時空要塞F (Macross Frontier)
    "気分上々↑↑/mihimaru GT",
    "VS/misono",
    "二人三脚/misono",
    "Chasing hearts/miwa",
    "ヒカリへ/miwa",
    "リブート/miwa",
    "ファンサ/mona(CV:夏川椎菜)",                        // 女主角育成計劃！～被討厭的女主角和秘密的工作～ (Heroines Run the Show) - 插入曲
    "小さな恋のうた/MONGOL800",
    "HANABI/Mr.Children",
    "Magic/Mrs. GREEN APPLE",
    "インフェルノ/Mrs. GREEN APPLE",                    // 炎炎消防隊 (Fire Force)
    "ケセラセラ/Mrs. GREEN APPLE",
    "青と夏/Mrs. GREEN APPLE",
    "ライラック/Mrs. GREEN APPLE",
    "夢幻/MY FIRST STORY x HYDE",                       // 鬼滅之刃 柱訓練篇 (Demon Slayer: Hashira Training Arc)
    "STYX HELIX/MYTH & ROID ",                          // Re:從零開始的異世界生活 (Re:ZERO -Starting Life in Another World-)
    "リアルワールド/nano.RIPE",                        // 人類衰退之後 (Humanity Has Declined)
    "月花/nano.RIPE",                                   // 打工吧！魔王大人 (The Devil Is a Part-Timer!)
    "ロストワンの号哭/Neru",
    "命のユースティティア/Neru",
    "ホログラム/NICO Touches the Walls",                // 鋼之鍊金術師 FULLMETAL ALCHEMIST (Fullmetal Alchemist: Brotherhood)
    "天地ガエシ/NICO Touches the Walls",                // 排球少年!! (Haikyu!!)
    "ココロオドル/nobodyknows+",
    "Bad Apple!!/nomico",                               // 東方Project關聯歌曲 - 遊戲原作，非動畫合作曲
    "Cry Baby/Official髭男dism",
    "HELLO/Official髭男dism",
    "イエスタデイ/Official髭男dism",                    // HELLO WORLD - 電影
    "ホワイトノイズ/Official髭男dism",                  // 東京復仇者 聖夜決戰篇 (Tokyo Revengers: Christmas Showdown Arc)
    "ミックスナッツ/Official髭男dism",                  // SPY×FAMILY 間諜家家酒
    "What Makes You Beautiful/One Direction",
    "以心電信/ORANGE RANGE",
    "DAYBREAK FRONTLINE/Orangestar",
    "Surges/Orangestar",                                // 「加油吧，同期醬」Web動畫 主題曲
    "アスノヨゾラ哨戒班/Orangestar",
    "回る空うさぎ/Orangestar",
    "空奏列車/Orangestar",
    "trick and treat/OSTER project",
    "Good Time/Owl city & Carly Rae Jepsen",
    "Magic of Love/Perfume",
    "コンピューターシティ/Perfume",
    "チョコレイト・ディスコ/Perfume",
    "君＝花/pigstar",                                  // 純情羅曼史 (Junjou Romantica)
    "シル・ヴ・プレジデント/P丸様。",                    // VTuber歌曲 - 很可能非動畫合作曲
    "すずめ/RADWIMPS",                                  // 鈴芽之旅 (Suzume) - 電影
    "スパークル/RADWIMPS",                              // 你的名字。 (Your Name.) - 電影
    "なんでもないや/RADWIMPS",                          // 你的名字。 (Your Name.) - 電影
    "前前前世/RADWIMPS",                                // 你的名字。 (Your Name.) - 電影
    "愛にできることはまだあるかい/RADWIMPS",            // 天氣之子 (Weathering With You) - 電影
    "夢灯篭/RADWIMPS",                                  // 你的名字。 (Your Name.) - 電影
    "祝祭/RADWIMPS",                                    // 天氣之子 (Weathering With You) - 電影
    "100万回の「I love you」/Rake",
    "大切な人/Rake",
    "ebb and flow/Ray",                                 // 來自風平浪靜的明天 (Nagi-Asu: A Lull in the Sea)
    "銀色の空/redballoon",                             // 銀魂 (Gintama)
    "ENDLESS STORY/REIRA starring YUNA ITO",            // NANA - 電影 (原作是漫畫)
    "メグメル/riya",
    "My SunShine/ROCK'A'TRENCH",
    "ハルモニア/RYTHEM",
    "ホウキ雲/RYTHEM",                                  // 烘焙王 (Yakitate!! Japan)
    "グメグ☆ファイアーエンドレスナイト/samfree",
    "トンデモワンダーズ/Sasakure.UK",
    "あんなに一緒だったのに/See-Saw",                   // 機動戰士鋼彈SEED (Mobile Suit Gundam SEED)
    "スターライトパレード/SEKAI NO OWARI",
    "最高到達点/SEKAI NO OWARI",                       // ONE PIECE 航海王
    "RPG/SEKAI NO OWARI",                               // 蠟筆小新：超級美味！B級美食大逃亡！！ (Crayon Shin-chan Movie 21) - 電影
    "Take Your Way/SEKAI NO OWARI",                     // 烏龍派出所電影版2相關歌曲 (雖然最終未使用)
    "Dragon Night/SEKAI NO OWARI", 
    "桃源郷エイリアン/serial TV drama",                 // 銀魂' (Gintama')
    "LOVEトロピカ～ナ/Sister MAYO",                    // 熱帶雨林的爆笑生活 (Haré+Guu)
    "世界に一つだけの花/SMAP",
    "夜空ノムコウ/SMAP",
    "イマジネーション/SPYAIR",                          // 排球少年!! (Haikyu!!)
    "サムライハート/SPYAIR",                            // 銀魂' (Gintama')
    "KIRA☆Power/STAR ANIS",                            // 偶像活動！ (Aikatsu!)
    "SHINING LINE*/STAR☆ANIS",                         // 偶像活動！ (Aikatsu!)
    "オリジナルスター☆彡/STAR☆ANIS",                  // 偶像活動！ (Aikatsu!)
    "カレンダーガール/STAR☆ANIS",                      // 偶像活動！ (Aikatsu!)
    "オトナモード/STAR☆ANIS",                          // 偶像活動！ (Aikatsu!)
    "フレンド/STAR☆ANIS",                              // 偶像活動！ (Aikatsu!)
    "prism spiral/STAR☆ANIS",                          // 偶像活動！ (Aikatsu!)
    "輝きのエチュード/STAR☆ANIS",                      // 劇場版 偶像活動！ (Aikatsu! The Movie)
    "笑顔のsuncatcher/STAR☆ANIS",                      // 偶像活動！ (Aikatsu!)
    "ハッピィクレッシェンド/STAR☆ANIS",                // 偶像活動！ (Aikatsu!)
    "SPLASH FREE/STYLE FIVE",                           // Free! 男子游泳部
    "さよならメモリーズ/supercell",
    "ワールドイズマイン/supercell",
    "ブラック★ロックシューター/supercell",
    "メルト/supercell",
    "君の知らない物語/supercell",                       // 化物語 (Bakemonogatari)
    "初めての恋が終わる時/supercell",
    "さぁ/SURFACE",                                     // 守護月天！ (Mamotte Shugogetten!)
    "HEART OF SWORD ～夜明け前～/T.M.Revolution",       // 神劍闖江湖 -明治劍客浪漫譚- (Rurouni Kenshin)
    "HOT LIMIT/T.M.Revolution",
    "resonance/T.M.Revolution",                         // SOUL EATER 噬魂者
    "The secret garden/葉月ゆら",
    "The Story of Us/Taylor Swift",
    "We Are Never Ever Getting Back Together/Taylor Swift",
    "お願い！シンデレラ/THE IDOLM@STER CINDERELLA GIRLS", // 偶像大師 灰姑娘女孩 (The Idolmaster Cinderella Girls) - 遊戲/動畫
    "One day/The ROOTLESS",                             // ONE PIECE 航海王
    "Get Wild/TM NETWORK",                              // 城市獵人 (City Hunter)
    "Pray/Tommy heavenly6",                             // 銀魂 (Gintama)
    "Pray/Wish*",                                       // 網球王子 (The Prince of Tennis) - 可能是角色歌翻唱
    "BOY MEETS GIRL/TRF",
    "Adrenaline!!!/TrySail",                            // 情色漫畫老師 (Eromanga Sensei)
    "晩餐歌/tuki.",
    "シュガーソングとビターステップ/UNISON SQUARE GARDEN", // 血界戰線 (Blood Blockade Battlefront)
    "アンビバレント/Uru ",
    "CHANGE THE WORLD/V6",
    "WAになっておどろう/V6",
    "怪獣の花唄/Vaundy",
    "夏祭り/Whiteberry",
    "アイドル/YOASOBI",                                 // 【我推的孩子】 (Oshi no Ko)
    "アドベンチャー/YOASOBI",
    "夜に駆ける/YOASOBI",
    "勇者/YOASOBI",                                     // 葬送的芙莉蓮 (Frieren: Beyond Journey's End)
    "群青/YOASOBI",                                     // 藍色時期 (Blue Period) - 關聯 (CM曲，但與動畫世界觀契合)
    "UNDEAD/YOASOBI",
    "again/YUI",                                        // 鋼之鍊金術師 FULLMETAL ALCHEMIST (Fullmetal Alchemist: Brotherhood)
    "CHE.R.RY/YUI",
    "Good-bye days/YUI",                                // 午夜的陽光 (Midnight Sun) - 電影 (原作是小說)
    "HELLO ～Paradise Kiss～/YUI",                      // 天國之吻 (Paradise Kiss) - 電影 (原作是漫畫)
    "Laugh away/YUI",
    "Rolling star/YUI",                                 // BLEACH 死神
    "SUMMER SONG/YUI",
    "JOY/YUKI",
    "インドア系ならトラックメイカー/Yunomi & nicamoq",
    "secret base～君がくれたもの～/ZONE",               // 我們仍未知道那天所看見的花名。(Anohana: The Flower We Saw That Day) - ED翻唱 (原曲為日劇主題曲)
    "未来コネクション/ЯeaL",                          // 精靈寶可夢 太陽&月亮 (Pokémon Sun & Moon)
    "unravel/TK from 凛として時雨",                   // 東京喰種 (Tokyo Ghoul)
    "Together/あきよしふみえ",                          // 精靈寶可夢 超世代 (Pokémon Advanced Generation)
    "HAKOBAKO PLAYER/アゴアニキP",
    "Let It Go/アナと雪の女王",                        // 冰雪奇緣 (Frozen) - 電影
    "生まれてはじめて/アナと雪の女王",                  // 冰雪奇緣 (Frozen) - 電影
    "イーガービリーバー/アヒル軍曹P",
    "A Whole New World/アラジン",                       // 阿拉丁 (Aladdin) - 電影
    "フレンド・ライク・ミー/アラジン",                  // 阿拉丁 (Aladdin) - 電影
    "TKGの歌/アリレム",
    "ブルーバード/いきものがかり",                       // 火影忍者疾風傳 (Naruto Shippuden)
    "気まぐれロマンティック/いきものがかり",
    "花は桜 君は美し/いきものがかり ",
    "青春ライン/いきものがかり",                       // 王牌投手 振臂高揮 (Big Windup!)
    "熱情のスペクトラム/いきものがかり",                 // 七大罪 (The Seven Deadly Sins)
    "きゅうくらりん/いよわ",
    "うまぴょい伝説/ウマ娘",                           // 賽馬娘Pretty Derby (Uma Musume Pretty Derby) - 遊戲/動畫
    "Stay Alive/エミリア(高橋李依)",                   // Re:從零開始的異世界生活 (Re:ZERO -Starting Life in Another World-)
    "君じゃなきゃダメみたい/オーイシマサヨシ",          // 月刊少女野崎同學 (Monthly Girls' Nozaki-kun)
    "ダーリンダンス/かいりきベア",
    "ベノム/かいりきベア",
    "メンタルチェンソー/かいりきベア",
    "命に嫌われている。/カンザキイオリ",
    "LUVORATORRRRRY!/ギガ・れをる",
    "ギガンティックO.T.N/ギガP",
    "ウィーアー!/きただにひろし",                      // ONE PIECE 航海王
    "青のすみか/キタニタツヤ",                          // 咒術迴戰 懷玉・玉折篇 (Jujutsu Kaisen Kaigyoku/Gyokusetsu Arc)
    "金木犀/くじら",
    "Catch You Catch Me/グミ",                          // 庫洛魔法使 (Cardcaptor Sakura)
    "君のそばで～ヒカリのテーマ～/グリン",              // 精靈寶可夢 鑽石&珍珠 (Pokémon Diamond & Pearl)
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
    "それは僕たちの奇跡/μ's",                          // Love Live! School idol project
    "それは小さな光のような/さユり",                   // 只有我不存在的城市 (ERASED)
    "ミカヅキ/さユり",                                  // 亂步奇譚 Game of Laplace
    "花の塔/さユり",                                    // Lycoris Recoil 莉可麗絲
    "世界はそれを愛と呼ぶんだぜ/サンボマスター",
    "Step and Go!/シグナルP",
    "粛聖!!ロリ神レクイエム☆/しぐれうい",              // VTuber歌曲 - 非動畫合作曲
    "モノクロのキス/シド",                              // 黑執事 (Black Butler)
    "嘘/シド",                                          // 鋼之鍊金術師 FULLMETAL ALCHEMIST (Fullmetal Alchemist: Brotherhood)
    "Calc./ジミーサムP",
    "from Y to Y/ジミーサムP",
    "No Logic/ジミーサムP",
    "Starduster/ジミーサムP",
    "オツキミリサイタル/じん",
    "夜咄ディセイブ/じん",
    "めいど・うぃず・どらごんず/スーパーちょろゴンず",  // 小林家的龍女僕S (Miss Kobayashi's Dragon Maid S)
    "はじまりの日/スガシカオ",
    "Ah Yeah!!/スキマスイッチ",                         // 排球少年!! (Haikyu!!)
    "ゴールデンタイムラバー/スキマスイッチ",            // 鋼之鍊金術師 FULLMETAL ALCHEMIST (Fullmetal Alchemist: Brotherhood)
    "ボクノート/スキマスイッチ",
    "世界寿命と最後の一日/スズム",
    "東京レトロ/すこっぷ",
    "秒針を噛む/ずっと真夜中でいいのに。",
    "残機/ずっと真夜中でいいのに。",
    "美しい鰭/スピッツ",
    "快眠！安眠！スヤリスト生活/スヤリス姫(水瀬いのり)", // 在魔王城說晚安 (Sleepy Princess in the Demon Castle)
    "Los! Los! Los!/ターニャ・デグレチャフ(悠木碧)",   // 幼女戰記 (Saga of Tanya the Evil)
    "だってだってだって/タカノン",
    "動く、動く/チト(CV:水瀬いのり)、ユーリ(CV:久保ユリカ)", // 少女終末旅行 (Girls' Last Tour)
    "風吹けば恋/チャットモンチー",
    "風になる/つじあやの",                              // 貓的報恩 (The Cat Returns) - 電影
    "フォニイ/ツミキ",
    "ミュージックミュージック/とあ",
    "SPiCa-acoustic arrange.ver-/とくP",                // VOCALOID歌曲 - 非動畫合作曲 (初音未來 -Project DIVA- 關聯)
    "ホシノウタ/とくP",
    "Hello/ナオト・インティライミ",
    "いつかきっと/ナオト・インティライミ",
    "タカラモノ～この声がなくなるまで～/ナオト・インティライミ",
    "ナイテタッテ/ナオト・インティライミ",
    "Panorama/なぎ",
    "Overdose/なとり",
    "No pain, No game/ナノ",                            // BTOOOM! 驚爆遊戲
    "右肩の蝶/のりぴー",
    "clock lock works/ハチ",
    "砂の惑星/ハチ",                                    // VOCALOID歌曲 (Magical Mirai 2017主題曲) - 非動畫合作曲
    "ワンダーランドと羊の歌/ハチ",
    "シャルル/バルーン",
    "17才/ハルカトミユキ",
    "ハロ/ハワユ/ナノウ",
    "悪魔の子/ヒグチアイ",                              // 進擊的巨人 The Final Season Part 2
    "soundless voice/ひとしずくP",
    "神っぽいな/ピノキオピー",
    "ヒャダインのカカカタ カタオモイ-/ヒャダイン",      // 日常 (Nichijou)
    "一輪の花/ふみP",                                  // BLEACH 死神
    "またあした/ふわりP",
    "SKY'S the limit/ぼくのりりっくのぼうよみ",
    "アゲハ蝶/ポルノグラフィティ",
    "サウダージ/ポルノグラフィティ",
    "ハネウマライダー/ポルノグラフィティ",
    "ミュージック・アワー/ポルノグラフィティ",
    "メリッサ/ポルノグラフィティ",                      // 鋼之鍊金術師 (Fullmetal Alchemist 2003)
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
    "星間飛行/ランカ・リー(CV:中島愛)",                // 超時空要塞F (Macross Frontier)
    "Deep in Abyss/リコ(CV:富田美憂)、レグ(CV:伊瀬茉莉也)", // 來自深淵 (Made in Abyss)
    "少年と魔法のロボット/伊東歌詞太郎",
    "言ノ葉カルマ/れるりり",
    "脳漿炸裂ガール/れるりり",                         // VOCALOID歌曲 - 非動畫合作曲 (有關聯小說/電影)
    "あんたにあっかんべ/一二三",
    "I see.../乃木坂46",
    "Carry Me Off/八王子P",
    "KiLLER LADY/八王子P",
    "シューティングスター/八王子P",
    "バタフライ・グラフィティ/八王子P",
    "whiteout/八王子P",
    "リテラチュア/上田麗奈",                            // 魔女之旅 (Wandering Witch: The Journey of Elaina)
    "O-Ku-Ri-Mo-No Sunday!/久川凪(CV:立花日菜)、久川颯(CV:長江里加)", // 偶像大師 灰姑娘女孩劇場 (The Idolmaster Cinderella Girls Theater) - 遊戲/動畫
    "もうそう えくすぷれす/千石撫子(花澤香菜)",          // 〈物語〉系列 第二季 (Monogatari Series Second Season) - 囮物語
    "恋愛サーキュレーション/千石撫子(花澤香菜)",        // 化物語 (Bakemonogatari) - なでこスネイク
    "カサブタ/千綿ヒデノリ",                            // 魔法少年賈修 (Zatch Bell!)
    "かくしん的☆めたまるふぉ～ぜっ!/土間うまる(田中あいみ)", // 我家有個魚乾妹 (Himouto! Umaru-chan)
    "夏のしずく/大山百合香",
    "ようこそジャパリパークへ/大石昌良",                // 動物朋友 (Kemono Friends)
    "あなただけ見つめてる/大黒摩季",                    // 灌籃高手 (SLAM DUNK)
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
    "hectopascal/小糸侑(高田憂希),七海燈子(寿美菜子)", // 終將成為妳 (Bloom Into You)
    "PSI-missing/川田まみ",                             // 魔法禁書目錄 (A Certain Magical Index)
    "Oh My Darlin'/中ノ森BAND",
    "空色デイズ/中川翔子",                              // 天元突破 紅蓮螺巖 (Gurren Lagann)
    "GLAMOROUS SKY/中島美嘉",                           // NANA - 電影 (原作是漫畫)
    "Glory Days/尾崎裕哉",
    "シューティングスター/天月-あまつき-",              // 數碼寶貝-APP獸 (Digimon Universe App Monsters)
    "月曜日の憂鬱/天月-あまつき-",                      // 告白實行委員會系列 - 關聯歌曲
    "かいしんのいちげき!/天月-あまつき-",
    "テルーの唄/手嶌葵",
    "ブリキノダンス/日向電工",
    "いつも何度でも/木村弓",                            // 神隱少女 (Spirited Away) - 電影
    "いのちの名前/木村弓",                              // 神隱少女 (Spirited Away) - 電影 (關聯歌曲)
    "innocent starter/水樹奈々",                        // 魔法少女奈葉 (Magical Girl Lyrical Nanoha)
    "エジソン/水曜日のカンパネラ",
    "消せない罪/北出菜奈",                              // 鋼之鍊金術師 (Fullmetal Alchemist 2003)
    "Override/市瀬るぽ",
    "Step by step/市瀬るぽ",
    "POP STAR/平井堅",
    "Super Driver/平野綾",                              // 涼宮春日的憂鬱 (The Melancholy of Haruhi Suzumiya)
    "冒険でしょでしょ？/平野綾",                        // 涼宮春日的憂鬱 (The Melancholy of Haruhi Suzumiya)
    "FEELING AROUND/鈴木みのり",                       // 愛吃拉麵的小泉同學 (Ms. Koizumi Loves Ramen Noodles)
    "fancy baby doll/田村ゆかり",                      // C³ -魔幻三次方- (C³)
    "Fantastic future/田村ゆかり",                      // 變態王子與不笑貓 (The "Hentai" Prince and the Stony Cat.)
    "Little Wish ～lyrical step～/田村ゆかり",         // 魔法少女奈葉 (Magical Girl Lyrical Nanoha)
    "童話迷宮/田村ゆかり",                              // 童話槍手小紅帽 (Fairy Musketeers)
    "You & Me/田村ゆかり feat. motsu from m.o.v.e",
    "Ready Go!/田村直美",                               // 精靈寶可夢 (Pokémon)
    "ゆずれない願い/田村直美",                          // 魔法騎士雷阿斯 (Magic Knight Rayearth)
    "ゆるふわ樹海ガール/石風呂",
    "君はいなせなガール/石風呂",
    "勇気100%/光GENJI ",                                // 忍者亂太郎 (Nintama Rantaro)
    "灼け落ちない翼/多田葵 ",                          // Charlotte 夏洛特
    "First Love/宇多田ヒカル",
    "知らなきゃ/安月名莉子 ",
    "忘れじの言の葉/安次嶺希和子",
    "Flamingo/米津玄師",
    "KICK BACK/米津玄師",                               // 鏈鋸人 (Chainsaw Man)
    "Lemon/米津玄師",
    "M八七/米津玄師",
    "orion/米津玄師",
    "パプリカ/米津玄師",
    "ピースサイン/米津玄師",                            // 我的英雄學院 (My Hero Academia)
    "打上花火/米津玄師",                                // 煙花 (Fireworks) - 電影
    "灰色と青/米津玄師",
    "No.1/mona(CV：夏川椎菜)",                           // 女主角育成計劃！～被討厭的女主角和秘密的工作～ (Heroines Run the Show) - 插入曲
    "No.1/西野カナ",
    "Best Friend/西野カナ",
    "トリセツ/西野カナ",
    "Style. /西野カナ",
    "吉原ラメント/亜沙",
    "ウラオモテ・フォーチュン/佐倉千代(CV:小澤亜李)",   // 月刊少女野崎同學 (Monthly Girls' Nozaki-kun)
    "プラチナ/坂本真綾",                                // 庫洛魔法使 (Cardcaptor Sakura)
    "人生リセットボタンぽちーw/沙花叉クロヱ",
    "Good day/足立佳奈",
    "Butter-Fly/和田光司",                              // 數碼寶貝大冒險 (Digimon Adventure)
    "バレンタイン・キッス/国生さゆり",
    "ミライチズ/夜のひと笑い",
    "美少女無罪♡パイレーツ/宝鐘マリン",                // Hololive關聯歌曲 (VTuber) - 非動畫合作曲
    "TOMORROW/岡本真夜",
    "Don't say ”lazy”/放課後ティータイム",             // K-ON！輕音部 (K-On!)
    "ふわふわ時間/放課後ティータイム",                  // K-ON！輕音部 (K-On!) - 插入曲
    "わたしの恋はホッチキス/放課後ティータイム",        // K-ON！輕音部 (K-On!) - 插入曲
    "GO! GO! MANIAC/放課後ティータイム",                // K-ON！！輕音部 (K-On!!)
    "OK!/松本梨香",                                     // 精靈寶可夢 (Pokémon)
    "タイプ:ワイルド/松本梨香",                        // 精靈寶可夢 (Pokémon)
    "ライバル!/松本梨香",                              // 精靈寶可夢 (Pokémon)
    "brave heart/林原めぐみ",                          // 數碼寶貝大冒險 (Digimon Adventure) - 插入曲
    "Northern lights/林原めぐみ",                      // 通靈王 (Shaman King 2001)
    "Over soul/林原めぐみ",                            // 通靈王 (Shaman King 2001)
    "おもかげ/林原めぐみ",
    "ふわふわ♪/牧野由依",                              // 水星領航員 The NATURAL (ARIA The NATURAL)
    "はっぴぃ にゅう にゃあ/芹沢文乃(伊藤かな恵)&梅ノ森千世(井口裕香)&霧谷希(竹達彩奈)", // 嬌蠻貓娘大橫行！ (Mayoi Neko Overrun!)
    "白金ディスコ/阿良々木月火(井口裕香)",              // 偽物語 (Nisemonogatari)
    "白い雪のプリンセスは/のぼる",
    "story/前島麻由",                                  // Re:從零開始的異世界生活 (Re:ZERO) 第2季 後半OP
    "恋のヒメヒメ☆ぺったんこ/姫野湖鳥(田村ゆかり)",     // 飆速宅男 (Yowamushi Pedal) - 劇中動畫「Love★Hime」主題曲
    "どこまでも～How Far I'll Go～/屋比久知奈",        // 海洋奇緣 (Moana) - 電影 (日語版)
    "太陽曰く燃えよカオス/後ろから這いより隊G",         // 襲來！美少女邪神 (Nyaruko: Crawling with Love)
    "恋は渾沌の隷也/後ろから這いより隊G",               // 襲來！美少女邪神W (Nyaruko: Crawling with Love W)
    "Stellar Stellar/星街すいせい",                     // Hololive關聯歌曲 (VTuber) - 非動畫合作曲
    "マーシャル・マキシマイザー/柊マグネタイト",
    "Soar/流星P",
    "magnet/湊 貴大(流星P)",
    "アイデンティティ/秋山黄色",
    "always/倉木麻衣",                                  // 名偵探柯南 (Detective Conan) - 電影『往天國的倒數計時』主題曲 / ED
    "Secret of my heart/倉木麻衣",                      // 名偵探柯南 (Detective Conan)
    "Time after time～花舞う街で～/倉木麻衣",          // 名偵探柯南 (Detective Conan) - 電影『迷宮的十字路』主題曲
    "Your Best Friend/倉木麻衣",                        // 名偵探柯南 (Detective Conan)
    "風のららら/倉木麻衣",                              // 名偵探柯南 (Detective Conan)
    "恋に恋して/倉木麻衣",                              // 名偵探柯南 (Detective Conan)
    "TRY AGAIN/倉木麻衣",                               // 名偵探柯南 (Detective Conan)
    "涙そうそう/夏川りみ",
    "ニア/夏代孝明",
    "サブリナ/家入レオ",
    "Falco-ファルコ-/島谷ひとみ",                       // 植木的法則 (The Law of Ueki)
    "YUME日和/島谷ひとみ",                              // 大雄與不可思議的風使者 (Doraemon: Nobita and the Windmasters) - 電影
    "ZERO!!/栗林みな実",                               // 打工吧！魔王大人 (The Devil Is a Part-Timer!)
    "明日晴れるかな/桑田佳祐",
    "Cagayake! GIRLS/桜高軽音部",                       // K-ON！輕音部 (K-On!)
    "太陽の楽園 ～Promised Land～/神戸みゆき",          // 真珠美人魚 (Mermaid Melody Pichi Pichi Pitch)
    "ひまわりの約束/秦基博",
    "お願いマッスル/紗倉ひびき(ファイルーズあい)&街雄鳴造(石川界人)", // 流汗吧！健身少女 (How Heavy Are the Dumbbells You Lift?)
    "だんご大家族/茶太",                                // CLANNAD
    "微笑みの爆弾/馬渡松子",                            // 幽☆遊☆白書 (Yu Yu Hakusho)
    "バトルフロンティア/高屋亜希那",                    // 精靈寶可夢 超世代 (Pokémon Advanced Generation)
    "キラメキラリ/高槻やよい(仁後真耶子)",              // 偶像大師 (The Idolmaster) - 遊戲/動畫關聯歌曲
    "魔訶不思議アドベンチャー! /高橋洋樹",              // 七龍珠 (Dragon Ball)
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
    "God Knows.../涼宮ハルヒ(CV:平野綾)",               // 涼宮春日的憂鬱 (The Melancholy of Haruhi Suzumiya) - 插入曲
    "プレパレード/逢坂大河(釘宮理恵)&櫛枝実乃梨(堀江由衣)&川嶋亜美(喜多村英梨)", // TIGER×DRAGON！ (Toradora!)
    "オレンジ/逢坂大河(釘宮理恵)・櫛枝実乃梨(堀江由衣)・川嶋亜美(喜多村英梨)", // TIGER×DRAGON！ (Toradora!)
    "バニラソルト/堀江由衣",                            // TIGER×DRAGON！ (Toradora!)
    "人柱アリス/雪那(歪P)",
    "なだめスかし Negotiation/鹿乃",
    "千本桜/黒うさP",
    "紅一葉/黒うさP",
    "Happy Girl/喜多村英梨",                            // 要聽爸爸的話！ (Listen to Me, Girls. I Am Your Father!)
    "Wind Climbing ～風にあそばれて～/奥井亜紀",        // 咕嚕咕嚕魔法陣 (Magical Circle Guru Guru)
    "変わらないもの/奥華子",
    "ガーネット/奥華子",
    "Happiness/嵐",
    "One Love/嵐",
    "Love so sweet/嵐",
    "素晴らしき世界/嵐",
    "丸の内サディスティック/椎名林檎",
    "カラカラ/結束バンド",                              // 孤獨搖滾！ (Bocchi the Rock!)
    "ギターと孤独と蒼い惑星/結束バンド",                // 孤獨搖滾！ (Bocchi the Rock!)
    "なにが悪い/結束バンド",                            // 孤獨搖滾！ (Bocchi the Rock!)
    "忘れてやらない/結束バンド",                        // 孤獨搖滾！ (Bocchi the Rock!)
    "青春コンプレックス/結束バンド",                    // 孤獨搖滾！ (Bocchi the Rock!)
    "星座になれたら/結束バンド",                        // 孤獨搖滾！ (Bocchi the Rock!)
    "PLEASURE/華原朋美",
    "MAGIC/愛内里菜",                                   // 名偵探柯南 (Detective Conan)
    "I can't stop my love for you/愛内里菜 ",           // 名偵探柯南 (Detective Conan)
    "恋はスリル、ショック、サスペンス/愛内里菜",        // 名偵探柯南 (Detective Conan)
    "staple stable/戦場ヶ原ひたぎ(斎藤千和)",           // 化物語 (Bakemonogatari) - ひたぎクラブ
    "香水/瑛人",
    "それでも明日はやってくる/鈴木結女",                // 魔法騎士雷阿斯 (Magic Knight Rayearth)
    "輝きは君の中に/鈴木結女",                          // NINKU -忍空-
    "Lap Tap Love/電ポルP",
    "サイノウサンプラー/電ポルP",
    "曖昧劣情Lover/電ポルP",
    "FOR REAL/徳山秀典",                                // 最遊記 (Saiyuki)
    "Treasure/碧陽学園生徒会",                          // 學生會的一存 (Student Council's Discretion)
    "虹/Aqua Timez",
    "虹/福山雅治",
    "道標/橘慶太",                                      // 家庭教師HITMAN REBORN! (Reborn!)
    "心拍数# 0822/蝶々P",
    "ドライフラワー/優里",
    "ベテルギウス/優里",
    "マル・マル・モリ・モリ!/薫と友樹、たまにムック。",
    "you/癒月",
    "ヒトミノチカラ/観月ありさ",
    "SIX COLORS BOY/雛形あきこ",
    " *～アスタリスク～/オレンジレンジ",
    "ニブンノイチ/BACK-ON",                             // 鋼彈創鬥者 (Gundam Build Fighters)
    "一斉の声/喜多修平",                                // 夏目友人帳 (Natsume Yujin-cho)
    "おかえり/宮内れんげ・一条蛍・越谷夏海・越谷小鞠",  // 悠悠哉哉少女日和 Repeat (Non Non Biyori Repeat)
    "曲名はまだないです/Aogumo",
    "White Love/SPEED",
    "小さきもの/林明日香",                              // 精靈寶可夢劇場版：七夜的許願星 基拉祈 (Pokémon: Jirachi—Wish Maker) - 電影
    "Drawing days/SPLAY",                               // 家庭教師HITMAN REBORN! (Reborn!)
    "心絵/ロードオブメジャー",                          // MAJOR 棒球大聯盟
    "愛包ダンスホール/HIMEHINA",
    "ハナミズキ/一青窈",
    "わたしの一番かわいいところ/FRUITS ZIPPER",
    "もってけ!セーラーふく/泉こなた(平野綾),柊かがみ(加藤英美里),柊つかさ(福原香織),高良みゆき(遠藤綾)", // 幸運☆星 (Lucky☆Star)
    "チューリングラブ/ナナヲアカリ",                    // 理科生墜入情網，故嘗試證明。 (Science Fell in Love, So I Tried to Prove It)
    "空耳ケーキ/Oranges & Lemons",                      // 阿滋漫畫大王 (Azumanga Daioh)
    "すないぱー。/『ユイカ』",
    "もう君だけを離したりはしない/上木彩矢",            // 名偵探柯南 (Detective Conan)
    "こころのたまご/Buono!",                           // 守護甜心！ (Shugo Chara!)
    "最上級にかわいいの！/超ときめき♡宣伝部",
    "ダブルラリアット/巡音ルカ",
    "X-encounter/黑崎真音",                             // 東京闇鴉 (Tokyo Ravens)
    "らしさ/SUPER BEAVER",                             // 元氣囝仔 (Barakamon)
    "曇天/DOES",                                        // 銀魂 (Gintama)
    "出航さ！～Sail Out For Someone～/E-girls",
    "departure!/小野正利",                             // HUNTER×HUNTER 獵人 (2011年版)
    "Forever.../savage genius",                         // 武器種族傳說 (Elemental Gelade)
    "ワイルド アット ハート/嵐",
    "ピエロ/絵師じゃないKEI",                          // 魔偶馬戲團 (Karakuri Circus)
    "気ままな天使たち/わたてん☆5",                     // 天使降臨到我身邊！ (Wataten!: An Angel Flew Down to Me)
    "星屑のインターリュード/fhana",                    // 天體運行式 (Celestial Method)
    "Re: Re:/ASIAN KUNG-FU GENERATION",                // 只有我不存在的城市 (ERASED)
    "future nova/School Food Punishment",               // 東之伊甸 (Eden of the East)
    "futuristic imagination/School Food Punishment",    // 東之伊甸 (Eden of the East)
    "light prayer/School Food Punishment",              // 東之伊甸 劇場版I The King of Eden
    "栄光への一秒/MAGIC OF LiFE",                      // 飆速宅男 GRANDE ROAD (Yowamushi Pedal: Grande Road)
    "サイハテホーム/サクラメリーメン",
    "アイコトバ/サクラメリーメン",
    "Wonderful Wonder World*/Yun*chi",                  // 記錄的地平線 (Log Horizon)
    "SUNDAY/ザ・ベイビースターズ",                      // 烘焙王 (Yakitate!! Japan)
    "光あれ/岡野昭仁",                                  // 七大罪 憤怒的審判 (The Seven Deadly Sins: Dragon's Judgement)
    "Glory Days/尾崎裕哉",
    "笑一笑 ～シャオイーシャオ！～/ももいろクローバーZ", // 蠟筆小新：功夫小子～拉麵大亂鬥～ (Crayon Shin-chan Movie 26) - 電影
    "True My Heart/佐倉紗織",
    "アドバンス・アドベンチャー/GARDEN",                // 精靈寶可夢 超世代 (Pokémon Advanced Generation)
    "弱虫な炎/DIRTY OLD MEN",                           // 飆速宅男 (Yowamushi Pedal)
    "果てなき道/HIMEKA",                                // 信蜂 (Tegami Bachi: Letter Bee)
    "ありがとう/SunSet Swish",
    "明日、僕は君に会いに行く/ワカバ",
    "いーあるふぁんくらぶ/みきとP",
    "Reset/平原綾香",                                  // 大神 (Ōkami) - 遊戲 (亦有動畫化)
    "サヨナラの空/Qwai",                                // 銀魂' (Gintama')
    "ETERNAL BLAZE/水樹奈々",                          // 魔法少女奈葉A's (Magical Girl Lyrical Nanoha A's)
    "ギー太に首ったけ/平沢唯(豊崎愛生)",                // K-ON！輕音部 (K-On!) - 角色歌曲
    "Dear My Friend~まだ見ぬ未来へ~/ELISA",             // 科學超電磁砲 (A Certain Scientific Railgun)
    "Ring My Bell/blue drops",                          // 天降之物f (Sora no Otoshimono: Forte)
    "party night/真田アサミ・沢城みゆき・氷上 恭子",     // Di Gi Charat Nyo! (デ・ジ・キャラットにょ)
    "迷Q!?-迷宫-Make★You-/岸本早未",                  // 偵探學園Q (Tantei Gakuen Q)
    "Fast Forward/MONKEY MAJIK",                        // 妖怪少爺 (Nura: Rise of the Yokai Clan)
    "Sunshine/MONKEY MAJIK",
    "衝動/Pigstar",                                    // 純情羅曼史 (Junjou Romantica)
    "ワスレガタキ/石崎ひゅーい",                         // Dr.STONE 新石紀 NEW WORLD
    "三原色/PELICAN FANCLUB",                           // Dr.STONE 新石紀
    "夢のような/佐伯ユウス",                            // Dr.STONE 新石紀
    "君に贈る歌/小池徹平",
    "Spring of Life/Perfume",
    "瞬間センチメンタル/SCANDAL",                       // 鋼之鍊金術師 FULLMETAL ALCHEMIST (Fullmetal Alchemist: Brotherhood)
    "Blood teller/Faylan",                              // 未來日記 (Future Diary)
    "Destin Histoire/yoshiki*lisa",                     // GOSICK
    "こだまことだま/nano.RIPE",                        // 悠悠哉哉少女日和 Repeat (Non Non Biyori Repeat)
    "夏色プレゼント/あおい (井口裕香)、ひなた(阿澄 佳奈)、かえで(日笠陽子)、ここ な(小倉唯)", // 前進吧！登山少女 第二季 (Encouragement of Climb Season 2)
    "マジで感謝!/T-Pistonz+KMC",                       // 閃電十一人 (Inazuma Eleven)
    "Zzz/佐咲紗花",                                     // 日常 (Nichijou)
    "ハヤテのごとく!/KOTOKO",                           // 旋風管家！ (Hayate the Combat Butler)
    "Magical Babyrinth/DA PUMP"                         // 入間同學入魔了！ (Welcome to Demon School! Iruma-kun)
];
