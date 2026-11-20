export const firebaseConfig = {
  apiKey: "AIzaSyABDgpf6aN0wVEmh5rxBb5yZ2SrCyIVBDo",
  authDomain: "quiz261206.firebaseapp.com",
  databaseURL: "https://quiz261206-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "quiz261206",
  storageBucket: "quiz261206.firebasestorage.app",
  messagingSenderId: "387808833911",
  appId: "1:387808833911:web:f15756b83acd5f2b483172"
};

// 司会画面（admin.html）を開くときの合言葉（お好きな英数字に変更できます）
export const ADMIN_PIN = "1206";

// クイズの問題リスト（answerは 0=A, 1=B, 2=C, 3=D）
export const QUESTIONS = [
  {
    text: "2人が初めて出会った場所はどこ？",
    choices: ["大学のサークル", "職場の研修", "友人の紹介", "マッチングアプリ"],
    answer: 1,
    explanation: "実は新入社員研修の同じグループがきっかけでした！"
  },
  {
    text: "プロポーズの際に渡したプレゼントは？",
    choices: ["108本のバラ", "婚約指輪", "手紙と花束", "腕時計"],
    answer: 2,
    explanation: "緊張しながら手紙を読み上げました。"
  },
  {
    text: "2人の共通の趣味として正しいものは？",
    choices: ["キャンプ", "食べ歩き", "ボードゲーム", "映画鑑賞"],
    answer: 1,
    explanation: "休日は美味しいお店を探してよく出かけています！"
  }
];
