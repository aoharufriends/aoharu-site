// =================================================
// あおはる⭐︎フレンズ 設定ファイル (config.js)
// ※ここを変更すれば、サイト全体の設定が変わります
// =================================================

// ▼ Google Apps Script (GAS) のURL
const GAS_API_URL = "https://script.google.com/macros/s/AKfycbwpMkLuZlQdCPWf4A3cOJQaL8SNy_VEKRaiOUuCyttdDIFAqWhc1io2L0N-qtISCet57g/exec";

// ▼ YouTube Data API キー
const YOUTUBE_API_KEY = "AIzaSyD5vgWRmsw1TDanQjKm-AO4AKQ0RLq_b18";

// ▼ グループ公式情報
const GROUP_CONFIG = { 
    name: "あおはる⭐︎フレンズ", 
    img: "logo.png", 
    youtubeChannelId: "UCMzbUvN567vufH6KZt5m7YQ", // 公式のチャンネルID
    twitterUrl: "https://x.com/AO_FURE" // 公式XのURL
};

// ▼ メンバー情報設定
const memberData = [
    { 
        name: "たく兄ちゃん", enName: "TAKU-NIICHAN", catchphrase: "小悪魔の笑顔の錬金術師", color: "#87D322", img: "taku.png", bgImg: "member_haikei.jpg", 
        voice: "voice_taku.mp3",
        youtubeId: "UCL_3vT0HazjtqyNn-2Nu45A", // チャンネルID
        twitchId: "taku_nichan2022", twitterId: "TAKU_nichan", birthday: "10月11日", height: "170cm", fanName: "#ホムンクルス", hashTag: "#たくすけっち", bio: "小悪魔の笑顔の錬金術師\n世にも珍しい『笑顔』を錬成する錬金術師\nキミの魂と**、たっぷり頂戴ね？",
        cardLayout: { bottom: "-400px", right: "-110px", width: "350px" }
    },
    { 
        name: "兎神結愛", enName: "TOGAMI YUA", catchphrase: "クールな頭脳派ゲーマー", color: "#9B59B6", img: "taku2.png", bgImg: "member_haikei2.jpg", 
        voice: "voice_blue.mp3",
        youtubeId: "UCyyyyyyyyyyyyyyyyy", // チャンネルID
        twitchId: "", birthday: "7月7日", height: "160cm", fanName: "ブルー隊", hashTag: "#青フレ", bio: "沈着冷静、でも実は熱いハートの持ち主。",
        cardLayout: { bottom: "-270px", right: "-120px", width: "360px" }
    },
    { 
        name: "鬼神イヨ", enName: "ONIGAMI IYO", catchphrase: "みんなのアイドル", color: "#FF69B4", img: "taku3.png", bgImg: "member_haikei3.jpg", 
        voice: "voice_pink.mp3",
        youtubeId: "UCzzzzzzzzzzzzzzzzz", // チャンネルID
        twitchId: "", birthday: "3月3日", height: "155cm", fanName: "ピーチーズ", hashTag: "#桃色通信", bio: "歌うことが大好き！",
        cardLayout: { bottom: "-270px", right: "-120px", width: "360px" }
    },
    { 
        name: "緋羽アオ", enName: "AKABANE AO", catchphrase: "元気100倍！", color: "#FF9800", img: "taku4.png", bgImg: "member_haikei4.jpg", 
        voice: "voice_yellow.mp3",
        youtubeId: "UCwwwwwwwwwwwwwwwww", // チャンネルID
        twitchId: "", birthday: "8月8日", height: "165cm", fanName: "きいろ組", hashTag: "#イエロー参上", bio: "とにかく明るい元気印。",
        cardLayout: { bottom: "-270px", right: "-120px", width: "360px" }
    }
];

// ▼ おみくじ設定
const fortuneTypes = ["大吉", "中吉", "小吉", "吉", "末吉"];
const luckyItems = ["ゲーミングPC", "エナジードリンク", "マイク", "配信機材", "推し活グッズ", "唐揚げ", "ラーメン", "猫", "ヘッドホン", "サイリウム"];
const fortuneComments = [
    "今日は最高の配信ができそう！",
    "ラッキーアイテムを持って待機してね！",
    "推しの配信を見ると運気アップ！",
    "今日はゆっくりアーカイブを見よう。",
    "SNSで推しを布教するといいことあるかも！"
];

// ▼ 隠しコマンド（PC:上上下下左右左右BA / スマホ:ロゴ10回タップ）
const secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

// ▼ 商品データ（初期表示用・スプシ読み込みまでの繋ぎ）
let goodsData = [{ name: "Loading...", price: "-", img: "icon.png", link: "#" }];
