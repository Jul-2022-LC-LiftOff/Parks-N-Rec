import React, {  useState } from "react";
import basestyle from "./Base.module.css";
import registerstyle from "./Register.module.css";

import { NavLink } from "react-router-dom";
export default function Register (){
       const [password,setPassword]=useState('')
       const [email,setEmail]=useState('')
       const [veryPassword,setVeryPassword]=useState('')


       const handleClick=(e)=>{
           e.preventDefault()
           const register={password,email}
           console.log(register)
               fetch("http://localhost:8080/register/add", {
                   method: "POST",
                   headers:{"Content-Type":"application/json"},
                   body: JSON.stringify(register)

               }).then(() => {
                   console.log("New user added")
               })
       }

 return (
   <>
     <div className={registerstyle.register}>
       <form>
         <h1>Create a New Account</h1>

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
         <input
           type="password"
           name="veryPassword"
           id="veryPassword"
           placeholder="Confirm Password"
           value={veryPassword}
            onChange= {(e) => setVeryPassword(e.target.value)}
         />
         <button className={basestyle.button_common} onClick={handleClick}>
           Register
         </button>
       </form>
       <NavLink to="/login">Already registered? Login</NavLink>
     </div>
   </>
 );
};

