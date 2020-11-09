import firebase, { firestore } from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnC_Bf8BMjOoXEPA0ndiJZQLJzDlsgcM0",
  authDomain: "codesprintb.firebaseapp.com",
  databaseURL: "https://codesprintb.firebaseio.com",
  projectId: "codesprintb",
  storageBucket: "codesprintb.appspot.com",
  messagingSenderId: "425749474419",
  appId: "1:425749474419:web:0dc27d423fb4961ba8ce06"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const moviesCollection = db.collection("Movies");
const gamesCollection = db.collection("Games");
const tvCollection = db.collection("TV");
const m4gCollection = db.collection("M4G");

export default db;
export {moviesCollection, gamesCollection, tvCollection,m4gCollection};