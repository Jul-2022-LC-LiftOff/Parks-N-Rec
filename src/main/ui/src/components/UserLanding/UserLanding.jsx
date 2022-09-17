import React, { Component } from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function UserLanding() {
    const [checked, setChecked] = React.useState([]);
    const [userLanding, setUserLanding] = React.useState([]);


    const handleCheckBox = () => {
              setChecked(!checked);
         };

    const handleChange=(e)=> {
        handleCheckBox()
        e.preventDefault()
        const userInfo = {userLanding}
        console.log(userInfo)
            fetch("http://localhost:3000/user/parkAdded", {
                method: "POST",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify(userInfo)
            }).then(() => {
                setUserLanding(userInfo)
                console.log(userInfo)
            })
            .catch((error) => console.log(error))
    }


    return (
    <div className = "landingPage">
        <h1>
           TestingTesting
        </h1>

        <label>
            <input type = "checkbox" checked={checked} onChange = {handleChange} />
        </label>
    </div>
);
}

