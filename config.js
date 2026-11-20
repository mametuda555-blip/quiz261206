export const firebaseConfig = {
  apiKey: "AIzaSyABDgpf6aN0wVEmh5rxBb5yZ2SrCyIVBDo",
  authDomain: "quiz261206.firebaseapp.com",
  databaseURL: "https://quiz261206-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "quiz261206",
  storageBucket: "quiz261206.firebasestorage.app",
  messagingSenderId: "387808833911",
  appId: "1:387808833911:web:f15756b83acd5f2b483172"
};

// 司会画面（admin.html）を開くときの合言葉
export const ADMIN_PIN = "1206";

// 全10問リスト（answerは 0=1番, 1=2番, 2=3番, 3=4番）
export const QUESTIONS = [
  { text: "第一問", choices: ["1", "2", "3", "4"], answer: 0 },
  { text: "第二問", choices: ["1", "2", "3", "4"], answer: 1 },
  { text: "第三問", choices: ["1", "2", "3", "4"], answer: 2 },
  { text: "第四問", choices: ["1", "2", "3", "4"], answer: 3 },
  { text: "第五問", choices: ["1", "2", "3", "4"], answer: 0 },
  { text: "第六問", choices: ["1", "2", "3", "4"], answer: 1 },
  { text: "第七問", choices: ["1", "2", "3", "4"], answer: 2 },
  { text: "第八問", choices: ["1", "2", "3", "4"], answer: 3 },
  { text: "第九問", choices: ["1", "2", "3", "4"], answer: 0 },
  { text: "第十問", choices: ["1", "2", "3", "4"], answer: 1 }
];
