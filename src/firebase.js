// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCJkBF1PSiC6skk4nwhGeukkbTm67ktcrw",
  authDomain: "discord-clone-5836c.firebaseapp.com",
  projectId: "discord-clone-5836c",
  storageBucket: "discord-clone-5836c.appspot.com",
  messagingSenderId: "314092032578",
  appId: "1:314092032578:web:fa9bb90cd1d85da88e53db",
  measurementId: "G-3ZY66ZVYC0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;
