// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDI9j5L8B4N08M8hb4GU0e507mPLz7jAXI",
    authDomain: "sakhamanch.firebaseapp.com",
    projectId: "sakhamanch",
    storageBucket: "sakhamanch.appspot.com",
    messagingSenderId: "412145097610",
    appId: "1:412145097610:web:bf1fa0046e42afeb464673",
    measurementId: "G-15WFQRDC24"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  console.log(firebaseApp);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  export {auth, provider};
  export default db;