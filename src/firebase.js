import firebase from "firebase/app";
import database from "firebase/database";

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: "https://portfolio-blog-5b686.firebaseio.com",
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
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