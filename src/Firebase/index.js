import firebase from "firebase/app";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ4xQXULFhh51CV7VPgNnuOEZy3jsVaQQ",
  authDomain: "react-drawer-1.firebaseapp.com",
  databaseURL: "https://react-drawer-1.firebaseio.com",
  projectId: "react-drawer-1",
  storageBucket: "react-drawer-1.appspot.com",
  messagingSenderId: "177095687889",
  appId: "1:177095687889:web:05c8c913de0ba493"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { firebase, storage as default };
