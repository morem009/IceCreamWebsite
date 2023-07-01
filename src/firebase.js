// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6j2D-RkR8tdJcaV9srbhqq0GC0prNCBI",
  authDomain: "icecreamwebsite-984e7.firebaseapp.com",
  projectId: "icecreamwebsite-984e7",
  storageBucket: "icecreamwebsite-984e7.appspot.com",
  messagingSenderId: "279566080262",
  appId: "1:279566080262:web:86c92fa837ccbbb22a2687",
  measurementId: "G-K4EZWBRE82",
  databaseURL: "https://icecreamwebsite-984e7-default-rtdb.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);






// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {getAuth} from 'firebase/auth';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBS5SzZw9poLJfn-IHEd5qMzF6KU6EFC0k",
//   authDomain: "icecream-web-89e2b.firebaseapp.com",
//   databaseURL: "https://icecream-web-89e2b-default-rtdb.firebaseio.com/",
//   projectId: "icecream-web-89e2b",
//   storageBucket: "icecream-web-89e2b.appspot.com",
//   messagingSenderId: "1093426830660",
//   appId: "1:1093426830660:web:eb4e2d7ced7df8457f8b11",
//   measurementId: "G-WVLK4NWKMY"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
// export const auth = getAuth(app);
