import React, { useState } from "react";
import basestyle from "./Base.module.css";
import loginstyle from "./Login.module.css";
import { NavLink } from "react-router-dom";
export default function Login() {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    email: "",
    password: "",
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
      if (!values.fname) {
          error.fname = "First Name is required";
        }
    if (!values.email) {
      error.email = "Email is required";
    } else if (!regex.test(values.email)) {
      error.email = "Please enter a valid email address";
    }
    if (!values.password) {
      error.password = "Password is required";
    }
    return error;
  };

  const loginHandler = (e) => {
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
    <div className={loginstyle.login}>
      <form className="login-form">
         <h1>Login</h1>

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
        <button className={basestyle.button_common} onClick={loginHandler}>
          Login
        </button>
      </form>
      <NavLink to="/register">Not yet registered? Register Now</NavLink>
    </div>
  );
};
