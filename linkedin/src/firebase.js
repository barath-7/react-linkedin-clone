// import firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECTID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGE_ID,
//     appId: process.env.REACT_APP_APPID
//   };

const firebaseConfig = {
    apiKey: "AIzaSyBvkn8xO06ZBmq4lPROVEtl3_ZYqR4ksyo",
    authDomain: "linkedin-clone-a4edf.firebaseapp.com",
    projectId: "linkedin-clone-a4edf",
    storageBucket: "linkedin-clone-a4edf.appspot.com",
    messagingSenderId: "707927160674",
    appId: "1:707927160674:web:0b21b38a49b9e7c0a71e3b"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  export {db,auth}
