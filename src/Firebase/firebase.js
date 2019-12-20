import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCBj7drqkKj-HELTcgQVBgtQOxA6VHwNKc",
    authDomain: "lo-restaurant-orders.firebaseapp.com",
    databaseURL: "https://lo-restaurant-orders.firebaseio.com",
    projectId: "lo-restaurant-orders",
    storageBucket: "lo-restaurant-orders.appspot.com",
    messagingSenderId: "970179798808",
    appId: "1:970179798808:web:01f9c58276098ca204606d",
    measurementId: "G-F466DKQKJM"
});

const db = firebaseApp.firestore();

export { db };