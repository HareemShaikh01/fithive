import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAU34g8OcOgVfY2d-ObE7uDUp59Zxu7POA",
  authDomain: "fithive-436e7.firebaseapp.com",
  projectId: "fithive-436e7",
  storageBucket: "fithive-436e7.appspot.com",
  messagingSenderId: "120206514999",
  appId: "1:120206514999:web:dcc8f80abfd3e5f34e58b2",
  measurementId: "G-TJ58Z02K3T"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);