import React, {useState} from 'react'

export default function Login() {

        const [username,setName]=useState('')
        const [password,setPassword]=useState('')
        const [email,setEmail]=useState('')


        const handleClick=(e)=>{
            e.preventDefault()
            const login={username,password,email}
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

    <form>
        <label for="username">username:</label>
            <input type="text"
             id="username"
             value={username}
             onChange= {(e) => setName(e.target.value)}
              />
        <br />
        <label for="password">password:</label>
            <input type="text"
             id="password"
             value={password}
             onChange= {(e) => setPassword(e.target.value)}
               />
        <br />
        <label for="email">email:</label>
            <input type="text"
             id="email"
             value={email}
             onChange= {(e) => setEmail(e.target.value)}
              />
        <br />
        <button type="submit" value="Submit" onClick={handleClick}>Submit</button>
    </form>


  );
}
