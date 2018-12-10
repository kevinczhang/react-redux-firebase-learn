import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCBCN0Zd5CkHVgHkJVkMpmU7ETQltffX50",
    authDomain: "net-ninja-marionplan-b242d.firebaseapp.com",
    databaseURL: "https://net-ninja-marionplan-b242d.firebaseio.com",
    projectId: "net-ninja-marionplan-b242d",
    storageBucket: "net-ninja-marionplan-b242d.appspot.com",
    messagingSenderId: "680405783772"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
