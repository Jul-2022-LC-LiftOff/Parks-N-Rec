import React, {useEffect, useState} from 'react'
import './login.css';

    export default function GetInfo() {
        const [data, setData] = React.useState([])
        React.useEffect(() => {
            const url = 'http://localhost:8080/login/getAll'
            fetch(url).then((data) => {
                return data.json();
            }).then((json) => {
                console.log("data",json)
            })


        })

        const handleSubmit= () => {

        }


        return(
            <div>
                <form>
                   <label htmlFor="username">email:</label>
                     <input
                       type="text"
                       id="username"
                     />
                     <br />
                   <label htmlFor="username">Password:</label>
                     <input
                       type="text"
                       id="username"
                     />

                   <button type="submit" value="Submit" onSubmit={handleSubmit}>sign in</button>
                </form>
            </div>
        )
    }