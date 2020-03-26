import firebase from "firebase/app";
import database from "firebase/database";

const config = {
    apiKey: "AIzaSyCe63XVSt_libg4Yc7wVtXcrmi0lrUpN0g",
    authDomain: "portfolio-blog-5b686.firebaseapp.com",
    databaseURL: "https://portfolio-blog-5b686.firebaseio.com",
    projectId: "portfolio-blog-5b686",
    storageBucket: "portfolio-blog-5b686.appspot.com",
    messagingSenderId: "356178033189",
    appId: "1:356178033189:web:159622c7412de7a2795dcc",
};

let firebaseCache;

export const getFirebase = () => {
    if (firebaseCache) {
        return firebaseCache;
    }

    firebase.initializeApp(config);
    firebaseCache = firebase;
    return firebase;
};