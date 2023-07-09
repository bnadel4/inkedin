import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBENuyC0i-wwzwlmcV108llE42ceAvQrRA",
  authDomain: "inkedin-3bdf1.firebaseapp.com",
  projectId: "inkedin-3bdf1",
  storageBucket: "inkedin-3bdf1.appspot.com",
  messagingSenderId: "642620946975",
  appId: "1:642620946975:web:fd306c3925e3a817a9732a",
  measurementId: "G-CPZ65V934V",
};

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
