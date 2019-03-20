import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyDVBBZ7yhse6T3vNCu5bR8ZORNlf_v43t4",
    authDomain: "the-crop-nation.firebaseapp.com",
    databaseURL: "https://the-crop-nation.firebaseio.com",
    projectId: "the-crop-nation",
    storageBucket: "the-crop-nation.appspot.com",
    messagingSenderId: "880552565003"
  };

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase;