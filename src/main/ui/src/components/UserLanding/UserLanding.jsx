import React, { Component } from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function UserLanding() {
    const [checked, setChecked] = React.useState([]);
    const [userLanding, setUserLanding] = React.useState([]);
    const [visited, setVisited] = React.useState("");




    const handleCheckBox = (e) => {
    e.preventDefault()
        const userInfo = {visited}
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

         };

//     const handleChange=(e)=> {
//         e.preventDefault()
//         const userInfo = {visited}
//         console.log(userInfo)
//             fetch("http://localhost:8080/user/parkAdded", {
//                 method: "POST",
//                 headers:{"Content-Type": "application/json"},
//                 body: JSON.stringify(userInfo)
//             }).then(() => {
//                 setUserLanding(userInfo)
//                 console.log(userInfo)
//             })
//             .catch((error) => console.log(error))
//     }



    return (
    <div className="landingPage">
        <h1>
           TestingTesting
        </h1>

    <form method="post">
        <label>
{/*             <input type="checkbox" onClick={(e)=>setVisited(e.target.value)} /> */}
<input type="checkbox" onClick={handleCheckBox} />
        </label>
    </form>
    </div>
);
}


