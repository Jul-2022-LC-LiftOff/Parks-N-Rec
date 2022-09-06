import React, { useState } from "react";
import basestyle from "./Base.module.css";
import loginstyle from "./Login.module.css";
import { NavLink } from "react-router-dom";

export default function Login() {

       const [password,setPassword]=useState('')
       const [email,setEmail]=useState('')



       const handleClick=(e)=>{
           e.preventDefault()
           const login={password,email}
           console.log(login)
               fetch("http://localhost:8080/login/add", {
                   method: "POST",
                   headers:{"Content-Type":"application/json"},
                   body: JSON.stringify(login)

               }).then(() => {
                   console.log("New user added")
               })
       }



 return (
   <div className={loginstyle.login}>
     <form className="login-form">
        <h1>Login</h1>

       <input
         type="email"
         name="email"
         id="email"
         placeholder="Email"
        value={email}
        onChange= {(e) => setEmail(e.target.value)}
       />
       <input
         type="password"
         name="password"
         id="password"
         placeholder="Password"
            value={password}
            onChange= {(e) => setPassword(e.target.value)}
       />
       <button className={basestyle.button_common} onClick={handleClick}>
         Login
       </button>
     </form>
     <NavLink to="/register">Not yet registered? Register Now</NavLink>
   </div>
 );
};
