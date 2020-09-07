import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCZscTbOJUrYm9sPjYhFs-cCaNzXlpbgRA",
    authDomain: "keijiban-57674.firebaseapp.com",
    databaseURL: "https://keijiban-57674.firebaseio.com",
    projectId: "keijiban-57674",
    storageBucket: "keijiban-57674.appspot.com",
    messagingSenderId: "210421390119",
    appId: "1:210421390119:web:f8672d0cd0a6579c5b2702"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;