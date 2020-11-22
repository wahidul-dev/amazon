import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm6DQKzD1W_3NzTjgLZ7XpnW7As3Ix2ps",
  authDomain: "clone-3c25a.firebaseapp.com",
  databaseURL: "https://clone-3c25a.firebaseio.com",
  projectId: "clone-3c25a",
  storageBucket: "clone-3c25a.appspot.com",
  messagingSenderId: "737608294068",
  appId: "1:737608294068:web:8027af6df07838435fc1e1",
  measurementId: "G-V6Z6F1LCY5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };