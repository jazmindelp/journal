import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, setPersistence, browserSessionPersistence} from "firebase/auth";
import { collection, getDocs, getFirestore, orderBy, query} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUq-LG2qC5KTsDVSoTXxQdBkNuLjh6AHo",
  authDomain: "journal-7ec7a.firebaseapp.com",
  projectId: "journal-7ec7a",
  storageBucket: "journal-7ec7a.appspot.com",
  messagingSenderId: "548029416465",
  appId: "1:548029416465:web:c1e8b83be4b9b2fad09db0"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

