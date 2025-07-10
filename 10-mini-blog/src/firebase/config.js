import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBfIRzArFq6PClgm8m_vkBy_bUZypud-oc",
  authDomain: "miniblog-78019.firebaseapp.com",
  projectId: "miniblog-78019",
  storageBucket: "miniblog-78019.firebasestorage.app",
  messagingSenderId: "1095557902690",
  appId: "1:1095557902690:web:056b7fe184a08e737dbc3b"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }