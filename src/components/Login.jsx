import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { redirect } from "react-router-dom";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const usernameHandler = (e) => {
    setUserName(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const authenticateDetails = (e) => {
    e.preventDefault();
    if(username.length === 0 || password.length === 0){
      //do something to show validation
      if(username.length === 0){
        //show that username needs to have an input
      }else if(password.length === 0){
        //show that password needs to have an input
      }else{
        //show that both needs to have an input
      }
    }else if(username.length !== 0 && password.length !== 0){
      //validate email here
       const userAuthentication = (async () => {
        const response = await axios.get('https://qk-app-backend.vercel.app/record/count');
        const data = response.data;
        if(data.access_email === username && data.access_password === password){
          redirect(`/dashboard`);
          return data;
        }
      })();
      /* 
      
      MAKE SURE THE VALIDATION OR AUTHENTICATION IS CORRECT HERE
      TEST THE ACCESS EMAIL AND PASS
      
      */
    }
    console.log("username", username);
    console.log("password", password);
  }
  
  return (
    <div className="w-full mt-20 flex flex-col items-center justify-center ">
      <div className="px-20 py-14 bg-blue-400 flex flex-1 flex-col justify-center items-center rounded-3xl">
        <form onSubmit={authenticateDetails} className="flex flex-col justify-around items-center">
          <label htmlFor="username">Username:</label>
          <br />
          <input
            type="text"
            name="username"
            id="username"
            placeholder="John Doe"
            onChange={usernameHandler}
            value={username}
          />
          <br />
          <label htmlFor="password">Password:</label>
          <br />
          <input type="password" name="password" id="password" onChange={passwordHandler}
            value={password}/>
          <br />
          <button
            className="w-full py-3 rounded-full bg-white text-black border border-purple-500 hover:opacity-80"
            type="submit"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
