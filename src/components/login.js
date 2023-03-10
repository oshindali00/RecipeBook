import React from "react";
import { useState, useEffect } from "react";
import '../css/login.css';
import { redirect, useNavigate } from "react-router-dom";
// import { Route } from "react-router-dom";


const Login=()=>{
  const initialValues={username:"", password:""};
  const [formValues, setFormValues]= useState(initialValues); //changes values and displays
  const [formErrors, setFormErrors]= useState({});
  const [isSubmit, setIsSubmit]= useState(false);
  const handleChange=(e)=>
  {
  const {name, value}=e.target;
  setFormValues({...formValues, [name]: value});
  console.log(formValues);
  }

  const handleSubmit=(e)=>{
    e.preventDefault(); 
    // {prevent page from being refreshed}
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }
  const navigate=useNavigate();
  useEffect(()=>{
    console.log(formErrors);
    if(Object.keys(formErrors).length=== 0 && isSubmit)
    {
      console.log(formValues);
      navigate('/recipeFeed')
      // window.alert("Signed in Successful");
      // displays true value
    }
  }, [formErrors])
  const validate=(values)=>{ 
    // values is the value gained from form
    const errors = {};
    if(!values.username)
    {
      errors.username="Username cannot be empty";
    }
    if(!values.password)
    {
      errors.password="Password cannot be empty";
    }
    else if(values.password.length<8)
    {
      errors.password="Password should be more than 8 characters";
    }
    return errors;
  }
  return(
      <div className="form-container">
        <div className="form">
        <form className="loginForm" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className='ui divider'></div>
        <div className='login-form'>
          <div className='field'>
            {/* <label>Username</label> */}
            <input className="userInput" type='text' placeholder="username" name='username' value={formValues.username} onChange={handleChange}/> 
            {/* binding the values of formValues with input fields */}
          </div>
          <p className="username-error">{formErrors.username}</p>
          <div className='field'>
            {/* <label>Password</label> */}
            <input className="passwordInput" type='text' placeholder="password" name='password' value={formValues.password} onChange={handleChange}/> 
            {/* to update whenever we write value */}
          </div>
          <p className="pwerror">{formErrors.password}</p>
          <button className='submit-button'>Submit</button>
        </div>
      </form>
        </div>
       
    </div>
  )
}
export default Login;