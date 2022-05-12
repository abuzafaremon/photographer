// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMvzKu-a1CCK91FDT2t5ZLG8z5tbo_P6Q",
  authDomain: "independent-service-prov-7c1de.firebaseapp.com",
  projectId: "independent-service-prov-7c1de",
  storageBucket: "independent-service-prov-7c1de.appspot.com",
  messagingSenderId: "35105848335",
  appId: "1:35105848335:web:73a052aa8813afe270f77a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;