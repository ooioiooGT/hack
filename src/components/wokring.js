import React from 'react'
import Workingcss from "./working.module.css";
import Logoimage from "../components/loginpage/logo.svg";

function working() {
  return (
    <div className={Workingcss.working}>
        <img src={Logoimage} alt=''/>
        <p> 
            We are coming soon ...
        </p>
        
      
    </div>
  )
}

export default working
