import * as firebase from "firebase/app"
import "firebase/firestore"
import firebaseConfig from "./firebase-config.json"
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
export default db