import firebase from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCYXMhcQedHpSgY0LHpyAYhygN2SFmIqus",
    authDomain: "fir-test-c2d15.firebaseapp.com",
    projectId: "fir-test-c2d15",
    storageBucket: "fir-test-c2d15.appspot.com",
    messagingSenderId: "770587407446",
    appId: "1:770587407446:web:1bf685605cef75989477f7",
    measurementId: "G-GXF4JFX79M"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase authentication and get a reference to the service 
const auth = getAuth(app);