import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyCFl12MJiOIySjFBpNVVWL_7Wnm7p9-pg0',
  authDomain: 'linkedin-clone-6222c.firebaseapp.com',
  projectId: 'linkedin-clone-6222c',
  storageBucket: 'linkedin-clone-6222c.appspot.com',
  messagingSenderId: '847436863146',
  appId: '1:847436863146:web:230cf6afd6b83ca0f162d3',
}
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
