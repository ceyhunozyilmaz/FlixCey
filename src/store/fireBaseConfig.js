// fireBaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKLxjIklyKtYuMOZPrxaE7oiHbp8f4Sbk",
  authDomain: "ceyflix-9b397.firebaseapp.com",
  projectId: "ceyflix-9b397",
  storageBucket: "ceyflix-9b397.appspot.com",
  messagingSenderId: "7168636349",
  appId: "1:7168636349:web:755b3edd4bc368b2c8ced4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(); // Auth nesnesini oluşturun
const googleProvider = new GoogleAuthProvider(); // GoogleAuthProvider nesnesini oluşturun

export { auth, googleProvider };
