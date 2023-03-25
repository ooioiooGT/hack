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
const auth = getAuth(app); 