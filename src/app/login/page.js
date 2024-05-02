
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { logIn , FacebookAuthButtonClicked } from "../config/firebase";
import { useRouter } from "next/navigation";
import "./login.css";



function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginFunc = async (e) => {
    e.preventDefault();
    try {
      if (email.trim() === "" || password.trim() === "") {
        alert("Please fill all the fields");
        return;
      }
      await logIn({ email, password });
      router.push("/mainDashboard");
    } catch (error) {
      alert(error.message);
    }
  };


  // async function FacebookAuth(){
  //   const user = await FacebookAuth();
  //   console.log("facebook user: ", user);
  // }


const facebookAuth =async () => {
try {
  console.log("chla")
  await FacebookAuthButtonClicked()
  
} catch (error) {
  console.log(error.message)
}}

  return (
    <div>
      <div className="container">
        <div className="imageContainer">
          <img
            src="https://img.lovepik.com/photo/45009/7677.jpg_wh860.jpg "
            alt="Instagram"
            className="image"
          />
        </div>
        <div className="formContainer">
          <h2 style={{ display:"flex" , fontFamily:"sans-serif" , fontWeight:"bolder"  }}  >Login Form </h2>

          <form>
            <input
              type="text"
              placeholder=" Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={loginFunc} className="btn">
              Log in
            </button>
      
            <button style={{backgroundColor:"blue"}}  type="button"
             onClick={facebookAuth}
           
   className="form-control btn btn-primary rounded submit px-3">Login with Facebook</button>
          </form>
         
          <div className="separator">
          <span style={{backgroundColor:"plum"}} >Don't Have An Account?</span>
          <a  style={{ width: "20%",
    backgroundColor: "plum",
    color: "black",
    fontFamily:"sans-serif" , 
    fontSize:"30px"
    }} href="/signup" >Signup</a>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Login;

