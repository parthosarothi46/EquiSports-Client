// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA98tGOzMwvb0XPZyamH8IzH6oVCyeqsc",
  authDomain: "equisports-b8d0f.firebaseapp.com",
  projectId: "equisports-b8d0f",
  storageBucket: "equisports-b8d0f.firebasestorage.app",
  messagingSenderId: "992150920989",
  appId: "1:992150920989:web:6e98fb524fcce6910b0bf4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
