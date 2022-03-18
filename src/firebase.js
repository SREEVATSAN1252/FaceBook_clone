import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';




const firebaseConfig = {
  apiKey: "AIzaSyBzfzBW8cJo6W5N_zdLcMnDoXfA0mW3FIA",
  authDomain: "facebook-clone-57abf.firebaseapp.com",
  projectId: "facebook-clone-57abf",
  storageBucket: "facebook-clone-57abf.appspot.com",
  messagingSenderId: "577659143266",
  appId: "1:577659143266:web:6907ec263a97d6c540bd3b"
};




// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db