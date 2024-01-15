import React from "react";
import "../App.css";

function Login() {
  return (
    <div className="w-full mt-20 flex flex-col items-center justify-center ">
      <div className="h-[400px] w-[700px] bg-blue-400 flex flex-col justify-center items-center rounded-3xl">
        <form className="flex flex-col justify-around">
          <label htmlFor="username">Username:</label>
          <br />
          <input
            type="text"
            name="username"
            id="username"
            placeholder="John Doe"
          />
          <br />
          <label htmlFor="password">Password:</label>
          <br />
          <input type="password" name="password" id="password" />
          <br />
          <button
            className="w-full bg-white text-black border border-purple-500"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
