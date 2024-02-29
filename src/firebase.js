import firebase from 'firebase/compat/app'; // 最新バージョンではcompatモジュールを使用します
import 'firebase/compat/firestore'; // 必要に応じて他のサービスもインポートします


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlycqvizaMYhI_UH6sz1pn7gOgZuwZwFg",
  authDomain: "tik-tok-clone-18169.firebaseapp.com",
  projectId: "tik-tok-clone-18169",
  storageBucket: "tik-tok-clone-18169.appspot.com",
  messagingSenderId: "488368236754",
  appId: "1:488368236754:web:7197e09839833e7f65e50b",
  measurementId: "G-3QQP0X4STW"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);

export default db;
