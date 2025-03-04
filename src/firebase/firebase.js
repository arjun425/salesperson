// src/firebase/firebase.js
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "./firebaseConfig";

// If no Firebase apps have been initialized, initialize one. Otherwise, use the existing app.
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth, firebaseConfig };
