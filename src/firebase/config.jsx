import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqgZ4qDZf1dbPvDX_0sCACgRX1-QJBuSs",
  authDomain: "study-hub-b89d5.firebaseapp.com",
  projectId: "study-hub-b89d5",
  storageBucket: "study-hub-b89d5.appspot.com",
  messagingSenderId: "743967561255",
  appId: "1:743967561255:web:f19587733e73fb7f812002",
};
//init firebase
initializeApp(firebaseConfig);

const db = getFirestore();

//init firebase auth
const auth = getAuth();

export { db, auth };
