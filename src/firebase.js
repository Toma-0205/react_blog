import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmVbtQ5JtgmGp8KOzMksP4QoYY0rjCWfM",
  authDomain: "blog-b8f23.firebaseapp.com",
  projectId: "blog-b8f23",
  storageBucket: "blog-b8f23.appspot.com",
  messagingSenderId: "531881549048",
  appId: "1:531881549048:web:22f377f11d26875d66ef0d"
};

// Firebaseアプリの初期化
const app = initializeApp(firebaseConfig);

// Firebaseサービスの初期化
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };