// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration



const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "dardcode-blogs.firebaseapp.com",
  projectId: "dardcode-blogs",
  storageBucket: "dardcode-blogs.appspot.com",
  messagingSenderId: "578818708",
  appId: "1:578818708:web:cb9cfc895a3a350af3da81"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


