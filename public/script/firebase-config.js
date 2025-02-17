import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDU6pLvhH9TjyaIW2pjY-aaPc_4XvoyraE",
  authDomain: "equipo-fpt.firebaseapp.com",
  projectId: "equipo-fpt",
  storageBucket: "equipo-fpt.firebasestorage.app",
  messagingSenderId: "884544819482",
  appId: "1:884544819482:web:98457ba765b5f4c5575ca3",
  measurementId: "G-FN7EB5EP9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

export { db };