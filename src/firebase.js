import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAtCbfHgLeJya5fiXqGgymBbkfAQREfjnY",
    authDomain: "clone-app-3995f.firebaseapp.com",
    databaseURL: "https://clone-app-3995f.firebaseio.com",
    projectId: "clone-app-3995f",
    storageBucket: "clone-app-3995f.appspot.com",
    messagingSenderId: "470286539087",
    appId: "1:470286539087:web:dc4c8fb1b58ad3c19d8d3a",
    measurementId: "G-6GS1SM6ZQZ"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };