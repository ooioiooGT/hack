import { React, useRef, useState } from "react";
import Background from "./background";
import { Link } from "react-router-dom";
import logincss from "./login.module.css";
import { login } from "../api/firebase";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [authentication, setAuthentication] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();



  async function hadleLogin(){
    try{
      const cred = await login(emailRef.current.value, passwordRef.current.value)
      console.log("scueess login")
      setAuthentication(true);
      localStorage.setItem("user",JSON.stringify({"email": cred.user.email, "uid": cred.user.uid}))
    }catch{
      alert("password wrong or not singup yet!")
    }
  }
  if (!authentication) {
    return (
      <div class={logincss.container}>
        <Background />
        <div class={logincss.logInPortion}>
          <h1 id={logincss.loginTitle}>Login</h1>
          <div class={logincss.infoSection}>
            <input
              ref={emailRef}
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              class={logincss.inputBox}
            />
            <br />
            <input
              ref={passwordRef}
              type="text"
              id="password"
              name="password"
              placeholder="Password"
              class={logincss.inputBox}
            />
            <br />

            <button class={logincss.loginButton} onClick={hadleLogin}>
              LOGIN
            </button>

            <p>
              Don't have an account?{" "}
              <Link to="/Signup">
                <span id={login.signUpLink}>Sign Up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/ModalFirst" />;
  }
};

export default Login;
