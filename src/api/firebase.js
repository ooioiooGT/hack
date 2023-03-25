import {initializeApp} from "firebase/app";
import { getAuth, signOut, signInWithEmailAndPassword , createUserWithEmailAndPassword } from "firebase/auth";


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


export function logout(){
  return signOut(auth);
}
export function login(email, password){
  return signInWithEmailAndPassword(auth, email ,password);
}

export function signup(email, password){
  return createUserWithEmailAndPassword(auth, email, password);
}