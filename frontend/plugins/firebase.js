import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export default (context, inject) => {
  let fireApp;

  if (!firebase.apps.length) {
    fireApp = firebase.initializeApp({
      apiKey: FIREBASE_API_KEY,
      authDomain: FIREBASE_AUTH_DOMAIN,
      databaseURL: FIREBASE_DATABASE_URL,
      projectId: FIREBASE_PROJECT_ID,
      storageBucket: FIREBASE_STORAGE_BUCKET,
      messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
      appId: FIREBASE_APP_ID,
      measurementId: FIREBASE_MEASUREMENT_ID
    })
  } else {
    fireApp = firebase.app();
  }

  inject("fireApp", fireApp);
};
