import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAlrHRw1DOQfOJtheR88wKgUKdxDw3kshM",
  authDomain: "hyeyeon-project.firebaseapp.com",
  projectId: "hyeyeon-project",
  storageBucket: "hyeyeon-project.appspot.com",
  messagingSenderId: "50633952858",
  appId: "1:50633952858:web:e907891260d50ec019d263",
  measurementId: "G-XDRSQ04K4T"
};

export default firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();