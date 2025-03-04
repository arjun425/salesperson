
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBl2JppV838_TGQ7akVeCi_aubcvrAl9nw",
    authDomain: "invenapp-a4191.firebaseapp.com",
    projectId: "invenapp-a4191",
    storageBucket: "invenapp-a4191.appspot.com", // typically projectId.appspot.com
    messagingSenderId: "1061867595172",
    appId: "1:1061867595172:web:527ad9b97eff34a621cd31",
    measurementId: "G-SJXX8VGJGX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const database = getDatabase(app);

// Export everything properly
export { app, db, auth, database, firebaseConfig };
