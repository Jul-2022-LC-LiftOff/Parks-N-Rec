import React, { Component } from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function UserLanding() {
    const [userLanding, setUserLanding] = React.useState([]);

    const handleCheckBox=(e)=> {
        e.preventDefault()
        const userInfo = {userLanding}
        console.log(userInfo)
            fetch("http://localhost:8080/user/parkAdded", {
                method: "POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(userInfo)
            }).then(() => {
                console.log("New Park added")
            })
    }

    return <div className = "landingPage">
                <textarea>
                    Testing
                </textarea>
           </div>;

}

