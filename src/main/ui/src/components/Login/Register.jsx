import React, {  useState } from "react";
import basestyle from "./Base.module.css";
import registerstyle from "./Register.module.css";

import { NavLink } from "react-router-dom";
export default function Register (){

  const [formErrors, setFormErrors] = useState({});
  const [setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    email: "",
    password: "",
    veryPassword: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };

  const validateForm = (values) => {
    const error = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      error.email = "Email is required";
    } else if (!regex.test(values.email)) {
      error.email = "This is not a valid email format!";
    }
    if (!values.password) {
      error.password = "Password is required";
    } else if (values.password.length < 4) {
      error.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      error.password = "Password cannot exceed more than 10 characters";
    }
    if (!values.veryPassword) {
      error.veryPassword = "Confirm Password is required";
    } else if (values.veryPassword !== values.password) {
      error.veryPassword = "Confirm password and password should be same";
    }
    return error;
  };
  const signupHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);
    fetch("http://localhost:8080/user/add", {
                       method: "POST",
                       headers:{"Content-Type":"application/json"},
                       body: JSON.stringify(user)

                   }).then(() => {
                       console.log("New user added")
                   })
  }

  return (
    <>
      <div className={registerstyle.register}>
        <form>
          <h1>Create a New Account</h1>


          <p className={basestyle.error}>{formErrors.lname}</p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={changeHandler}
            value={user.email}
          />
          <p className={basestyle.error}>{formErrors.email}</p>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={changeHandler}
            value={user.password}
          />
          <p className={basestyle.error}>{formErrors.password}</p>
          <input
            type="password"
            name="veryPassword"
            id="veryPassword"
            placeholder="Confirm Password"
            onChange={changeHandler}
            value={user.veryPassword}
          />
          <p className={basestyle.error}>{formErrors.veryPassword}</p>
          <button className={basestyle.button_common} onClick={signupHandler}>
            Register
          </button>
        </form>
        <NavLink to="/login">Already registered? Login</NavLink>
      </div>
    </>
  );
};
