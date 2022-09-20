import React, {useEffect, useState} from 'react'
import './login.css';

    export default function GetInfo() {
  const [users, setUsers] = useState([])

//calls on backend controller
  const fetchData = () => {
    fetch("http://localhost:8080/login/getAll")
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log("data", data)
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

    function handleLogin(e) {
        e.preventDefault();

    }


  return (
    <div>
    <p> this is here to show data from the DB: remove line 30-40 </p>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      )}




      <br/>
      <div className="form" onSubmit={handleLogin}>
        <form>
          <label for="username">Email:</label>
            <input
              type="text"
              id="username"
              value="username"
            />
            <br />
           <label for="username">Password:</label>
            <input
              type="text"
              id="username"
              value="password"
            />
            <br />
            <button type="submit" value="Submit" >Login</button>
        </form>
      </div>
    </div>
  )
}
