import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBlR_9YovW6T5wYlSdI1exFyLMMKQN0-ss",
  authDomain: "clone-2ccbe.firebaseapp.com",
  databaseURL: "https://clone-2ccbe.firebaseio.com",
  projectId: "clone-2ccbe",
  storageBucket: "clone-2ccbe.appspot.com",
  messagingSenderId: "64023229667",
  appId: "1:64023229667:web:e02e2b875863a4992d41d6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
