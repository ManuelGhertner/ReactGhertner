import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC1jBY9O8XbUHtY84tUm7WkeZFiKF1PMRA",
  authDomain: "reactghertner.firebaseapp.com",
  projectId: "reactghertner",
  storageBucket: "reactghertner.appspot.com",
  messagingSenderId: "817664468739",
  appId: "1:817664468739:web:10879861690403845eeb36"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);