import * as firebase from "firebase";

// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyBv710eZ7EhoaTgmp_xoB9yA-8DrFVO9v4",
    authDomain: "reactfirebasecrud-5ff57.firebaseapp.com",
    databaseURL: "https://reactfirebasecrud-5ff57.firebaseio.com",
    projectId: "reactfirebasecrud-5ff57",
    storageBucket: "reactfirebasecrud-5ff57.appspot.com",
    messagingSenderId: "528011613506",
    appId: "1:528011613506:web:e1904c3a700d46207ae4db"
};
// Initialize Firebase
let fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref()
