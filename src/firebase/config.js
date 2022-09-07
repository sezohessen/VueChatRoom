import firebase from 'firebase/app'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDPvk2OGv1JAgArPeTggnafl91w8-q-zf4",
    authDomain: "live-chat-af677.firebaseapp.com",
    projectId: "live-chat-af677",
    storageBucket: "live-chat-af677.appspot.com",
    messagingSenderId: "305902637920",
    appId: "1:305902637920:web:99c2c0f5ee017799ea4405"
};
// init firebase
firebase.initializeApp(firebaseConfig)
const projectFireStore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectFireStore,timestamp}