import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAV65li9yGrgrzuYuMzCKcwGeDadKaCjQc",
  authDomain: "live-chat-with-vue-capi.firebaseapp.com",
  projectId: "live-chat-with-vue-capi",
  storageBucket: "live-chat-with-vue-capi.appspot.com",
  messagingSenderId: "881221903846",
  appId: "1:881221903846:web:7c0d9c26dd1f8254516227",
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, auth, timestamp };
