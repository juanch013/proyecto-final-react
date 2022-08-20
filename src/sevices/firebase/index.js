
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDOC2lDoPVa7DF-Zd8C6sMAO0muPRgFqL8",
  authDomain: "backendproyectoreact.firebaseapp.com",
  projectId: "backendproyectoreact",
  storageBucket: "backendproyectoreact.appspot.com",
  messagingSenderId: "19687301420",
  appId: "1:19687301420:web:0fb0486454e4b8b81d4c89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export  const db = getFirestore(app)