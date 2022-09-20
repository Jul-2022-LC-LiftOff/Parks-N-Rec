import React, {useEffect, useState} from 'react'
import './login.css';

    export default function GetInfo() {
        const [data, setData] = React.useState([]);
         React.useEffect(() => {
           let url = `http://localhost:8080/login/getAll`;
           fetch(url)
             .then((response) => response.json())
             .then((json) => {
                console.log(json)
               setData(json.data);
             })
             .catch((error) => console.log(error));
         }, [setData]);






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

                   <button type="submit" value="Submit">sign in</button>
                </form>
            </div>
        )
    }