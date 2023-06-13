// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpB5stLwGE1qm_MatyyfdMLjo5xGQb90w",
  authDomain: "springylabs-41e65.firebaseapp.com",
  projectId: "springylabs-41e65",
  storageBucket: "springylabs-41e65.appspot.com",
  messagingSenderId: "566995068166",
  appId: "1:566995068166:web:b2ba815da4a9893f042a87",
  measurementId: "G-5NBKZTBGWT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);