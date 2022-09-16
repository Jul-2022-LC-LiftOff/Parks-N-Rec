import React, { Component } from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function UserLanding() {
    const [checked, setChecked] = React.useState([]);
    const [userLanding, setUserLanding] = React.useState([]);

    const handleCheckBox = () => {
              setChecked(!checked);
              handleChange()
         };

    const handleChange=(e)=> {
        e.preventDefault()
        const userInfo = {userLanding}
        console.log(userInfo)
            fetch("http://localhost:8080/user/parkAdded", {
                method: "POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(userInfo)
            }).then(() => {
                setUserLanding(userInfo)
            })
    }

    return (
    <div className = "landingPage">
        <h1>
           TestingTesting
        </h1>

{/*         <label> */}
{/*             <input type = "checkbox" checked={value} onChange = {handleCheckBox} /> */}
{/*         </label> */}
    </div>
);
}

