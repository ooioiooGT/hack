import {React, useRef, } from "react";
import Background from "./background";
import signupcss from "./signup.module.css";
import {signup, db, auth} from "../api/firebase";


auth.onAuthStateChanged(user => {
  console.log(user);
})


const Signup = () => {

  const emailRef = useRef();
  const passwordRef = useRef();
  const password2Ref = useRef();

  async function handleSingup(){
    if (password2Ref.current.value === passwordRef.current.value){
      try{
        const cred = await signup(emailRef.current.value, passwordRef.current.value)
        db.collection('users').doc(cred.user.uid).set({email:cred.user.email})
        console.log("success signing up")
        localStorage.setItem("user",JSON.stringify({"email": cred.user.email, "uid": cred.user.uid}))
      }catch{
        alert("The user name aleary exist! ")
      }
    }
    else {
      alert(" The password not match")
    }
    
  }
  return (
    <div class={signupcss.container}>
      <Background />
      <div class={signupcss.logInPortion}>
        <h1 id={signupcss.loginTitle}>SignUp</h1>
        <div class={signupcss.infoSection}>
          <input
            ref={emailRef}
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            class={signupcss.inputBox}
          />
          <br />
          <input
            ref={password2Ref}
            type="text"
            id="password"
            name="password"
            placeholder="Password"
            class={signupcss.inputBox}
          />
          <br />
          <input
            ref={passwordRef}
            type="text"
            id="repassword"
            name="repassword"
            placeholder="Confirm Password"
            class={signupcss.inputBox}
          />
          <br />
          <button class={signupcss.loginButton} onClick={handleSingup}>SIGN UP</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
