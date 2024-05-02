"use client"
import React, { useState } from 'react';
import Head from 'next/head';
import "../styles/signup.css"
import {login, register} from "../config/firebase"

const RegistrationForm = () => {
  // Define state variables for form inputs
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Handle form submission
  const handleSubmit = async(event) => {
    event.preventDefault();
    // Perform form validation and submit data
    console.log({
      firstName,
      lastName,
      username,
      email,
      gender,
      password,
      confirmPassword
    });

    try {
        await register({
            firstName,
            lastName,
            username,
            email,
            gender,
            password,
          
          });
        console.log("User registered successfully!");
        // Redirect to another page, show a success message, etc.
      } catch (error) {
        console.error("Registration error:", error);
        // Display an error message to the user
        alert("Registration failed: " + error.message);
      }
  };

  return (
    <>
      <Head>
        <title>RegistrationForm_v1 by Colorlib</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         Include Material Design Iconic Font CSS 
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/material-design-iconic-font@2.2.0/css/material-design-iconic-font.min.css" />
      </Head>

    <div className="wrapper" style={{ backgroundImage: 
  "url('https://plainbackground.com/plain1024/f8f8ff.png')" }}>
        <div className="inner">
          <div className="image-holder">
            <img src="https://img.lovepik.com/photo/45009/7683.jpg_wh860.jpg" alt="" />
          </div>
          <form onSubmit={handleSubmit}>
            <h3>Signup Form</h3>
            <div className="form-group">
              <input
              style={{fontWeight:"400", fontSize:"30px" , fontStyle:'initial'  }}
                type="text"
                placeholder="First Name"
                className="form-control"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
              style={{fontWeight:"400" , fontSize:"30px" , fontStyle:'initial'   }}
                type="text"
                placeholder="Last Name"
                className="form-control"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="formWrapper">
              <input
              style={{fontWeight:"400" , fontSize:"30px" , fontStyle:'initial' }}
                type="text"
                placeholder="Username"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <i className="zmdi zmdi-account"></i>
            </div>
            <div className="formWrapper">
              <input
              style={{fontWeight:"400" , fontSize:"30px" , fontStyle:'initial' }}
              
                type="text"
                placeholder="Email Address"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <i className="zmdi zmdi-email"></i>
            </div>
            <div className="formWrapper">
              <select
                name=""
                id=""
                className="form-control"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="" disabled selected>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <i className="zmdi zmdi-caret-down" style={{ fontSize: '400px', fontSize:"30px" , fontStyle:'initial' }}></i>
            </div>
            <div className="formWrapper">
              <input
              style={{fontWeight:"900" , fontSize:"30px" , fontStyle:'initial' }}
                type="password"
                placeholder="Password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i className="zmdi zmdi-lock"></i>
            </div>
            <div className="formWrapper">
              <input
              style={{fontWeight:"400" , fontSize:"30px" , fontStyle:'initial' }}
                type="password"
                placeholder="Confirm Password"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <i className="zmdi zmdi-lock"></i>
            </div>
            <button style={{backgroundColor:'blue'}} type="button" onClick={handleSubmit}>
              Register

             <i className="zmdi zmdi-arrow-right"></i></button>
             <p style={{backgroundColor:"plum" , fontFamily:"sans-serif" }}
               className="text-center">Have An Account? 
             <a style={{Color:'blue' , fontWeight:"bolder" , fontSize:"30px" }}
              href="login">Login</a></p>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
