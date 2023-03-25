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

  async function handleSingup(){
    try{
      await signup(emailRef.current.value, passwordRef.current.value).then(cred => {
        return db.collection('users').doc(cred.user.uid)})
      console.log("success signing up")
    }catch{
      alert("The username already exists!")
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
