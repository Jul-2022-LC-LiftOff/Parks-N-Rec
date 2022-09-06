import React, { useState } from 'react';
export default function Login() {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    email: '',
    password: ''
  });

  const changeHandler = (e) => {
    console.log('changeHandler clicked');
  };
  const validateForm = (values) => {
    const error = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fname) {
      error.fname = 'First Name is required';
    }
    if (!values.email) {
      error.email = 'Email is required';
    } else if (!regex.test(values.email)) {
      error.email = 'Please enter a valid email address';
    }
    if (!values.password) {
      error.password = 'Password is required';
    }
    return error;
  };

  const loginHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);
  };

  return (
    <div>
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
        <p>{formErrors.email}</p>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={changeHandler}
          value={user.password}
        />
        <p>{formErrors.password}</p>
        <button onClick={loginHandler}>Login</button>
      </form>
    </div>
  );
}
