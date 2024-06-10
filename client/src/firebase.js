// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "abhi-blog-99fc4.firebaseapp.com",
  projectId: "abhi-blog-99fc4",
  storageBucket: "abhi-blog-99fc4.appspot.com",
  messagingSenderId: "55965047282",
  appId: "1:55965047282:web:1c1c1634bdf7c5f841336b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;