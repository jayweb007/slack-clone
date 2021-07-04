import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAEijQNcGLvy9o_Uq1HbNwksojaqvLRkM",
  authDomain: "slack-clone-49450.firebaseapp.com",
  projectId: "slack-clone-49450",
  storageBucket: "slack-clone-49450.appspot.com",
  messagingSenderId: "1008115122704",
  appId: "1:1008115122704:web:96fbdf36c161ae09040095",
  measurementId: "G-9JTTFL3L8Z",
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
