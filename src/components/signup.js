import {React, useRef} from "react";
import Background from "./background";
import signupcss from "./signup.module.css";
import {signup} from "../api/firebase";

const Signup = () => {

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSingup(){
    try{
      await signup(emailRef.current.value, passwordRef.current.value)
      console.log("scueess singin")
    }catch{
      alert("The user name aleary exist! ")
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
