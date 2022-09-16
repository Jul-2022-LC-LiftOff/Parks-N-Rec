import React, { Component } from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function UserLanding() {
    const [userLanding, setUserLanding] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3306/user/add', {
        method: "POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json.data);
            })
            .catch((error) => console.log(error))
    }, []);

    return <div className = "landingPage">
        <h1>Testing</h1>
    </div>;

}