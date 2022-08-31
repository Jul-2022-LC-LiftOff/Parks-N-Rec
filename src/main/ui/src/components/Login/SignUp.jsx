import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function SignUp(){

    const[user, setUser] = useState({

        firstName:'',
        lastName:'',
         email:'',
        password:'',

    });

   const navigate = useNavigate();


    const changeHandler =(event) =>{
        const name = event.target.name;
        const value = event.target.value;
        const tempUser = {...user};
        tempUser[name] = value;
        setUser(tempUser);
    }



    const signUpSubmitHandler = () =>{
            axios.post('http://localhost:8081/save',user).then(response =>{
                navigate.push('/thank-you')//("in the future add logic to navigate to a confirmation page")
            }).catch(error =>{console.log('/sorry')}); //("n the future add logic to navigate to a confirmation page")

        }

    return(<form class="row g-3">
  <h2> Sign up below to earn points.</h2>
<div class="col-md-6">
    <label for="inputFirstName" class="form-label">FirstName</label>
    <input onChange={changeHandler} value={user.firstName} type="firstName" class="form-control" id="inputFirstName" name="firstName" />
  </div>
  <div class="col-md-6">
    <label for="inputLastName" class="form-label">LastName</label>
     <input onChange={changeHandler} value={user.lastName}  type="lastName" class="form-control" id="inputLastName" name ="lastName" />
  </div>

  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input onChange={changeHandler} value={user.email} type="email" class="form-control" id="inputEmail" name ="email"  />
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input onChange={changeHandler} value={user.password} type="password" class="form-control" id="inputPassword" name ="password"  />
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck" />
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
    <div class="d-grid gap-2 ">
      <button onClick={signUpSubmitHandler} class="bg-dark btn btn-outline-success" type="button">Sign up</button>
</div>
</form>

);
}

export default SignUp;