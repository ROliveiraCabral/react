import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCzgNHVS8WYZcg760cVPIRAinMJg8m0HRk",
  authDomain: "miniblog-roc.firebaseapp.com",
  projectId: "miniblog-roc",
  storageBucket: "miniblog-roc.appspot.com",
  messagingSenderId: "482599914451",
  appId: "1:482599914451:web:0612712995daf3733bfd26",
};

const app = initializeApp(firebaseConfig);

const db = getFireStore(app);

export { db };
