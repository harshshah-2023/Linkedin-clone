// i
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';




const firebaseConfig = {
    apiKey: "AIzaSyDQBHAbZ_y2cahGIxLc1DWT_WVj5TkWELM",
    authDomain: "linkedinclone-72f31.firebaseapp.com",
    projectId: "linkedinclone-72f31",
    storageBucket: "linkedinclone-72f31.appspot.com",
    messagingSenderId: "867685176899",
    appId: "1:867685176899:web:b5d09d47f4b0ec580a66f6"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // const firebaseApp = initializeApp(firebaseConfig); 
//   const firebaseApp=firebase.initializeApp(firebaseConfig); 
const db = firebaseApp.firestore();
const auth = firebase.auth();
export{auth,db};
