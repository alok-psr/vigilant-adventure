import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgXJ5-e1KCzKb6e-hSUMSNhXLizmpFcJQ",
  authDomain: "scrapbook-286ba.firebaseapp.com",
  databaseURL: "https://scrapbook-286ba-default-rtdb.firebaseio.com",
  projectId: "scrapbook-286ba",
  storageBucket: "scrapbook-286ba.firebasestorage.app",
  messagingSenderId: "31920095714",
  appId: "1:31920095714:web:e867efd66ad6da7e67f9bb",
  measurementId: "G-Z6KJVVWC2J"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);