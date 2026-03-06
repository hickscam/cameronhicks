// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY as string,
  authDomain: import.meta.env.VITE_AUTHDOMAIN as string,
  projectId: import.meta.env.PROJECTID as string,
  storageBucket: import.meta.env.STORAGEBUCKET as string,
  messagingSenderId: import.meta.env.MESSAGINGSENDERID as string,
  appId: import.meta.env.APPID as string,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);