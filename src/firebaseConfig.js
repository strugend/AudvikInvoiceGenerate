import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwHz3LzEEDjT0jns9kEwEERTB-pqbDJQc",
  authDomain: "testing-2e82f.firebaseapp.com",
  projectId: "testing-2e82f"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // Retrieve the already initialized app
}

export const firestore = firebase.firestore();
