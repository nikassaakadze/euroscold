import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAx1nDkttcvnWV6bADZQPqkkgWvL0HoA9U",
    authDomain: "eurostandard-f5bd5.firebaseapp.com",
    projectId: "eurostandard-f5bd5",
    storageBucket: "eurostandard-f5bd5.appspot.com",
    messagingSenderId: "942430919822",
    appId: "1:942430919822:web:cfef70a46fe0e299d27ddf",
    measurementId: "G-XB2KZQTLCW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db  = firebaseApp.firestore()
  const auth = firebase.auth()
  const storage = firebase.storage()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {db, auth, provider, storage}