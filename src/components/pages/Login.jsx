import React, { useState } from "react";

function Login() {
  const [currentState, setCurrentState] = useState("Login");

  const changeSubmit = (e) =>{
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={changeSubmit} className="flex flex-col w-[90%] gap-5 sm:max-w-96 mt-14 text-gray-700 m-auto">
        <div className="flex gap-2 mb-2 mt-10  items-center justify-center">
          <p className="prata-regular text-4xl">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800"/>
        </div>
        {currentState === "Login" ? (
          ""
        ) : (
          <input
            type="text"
            className="w-full px-3 border py-2 border-gray-800"
            placeholder="Name"
            required
          />
        )}
        <input
          type="email"
          className="w-full px-3 border py-2 border-gray-800 rounded-sm"
          placeholder="Email"
          required
        />
        <input
          type="password"
          className="w-full px-3 border py-2 border-gray-800"
          placeholder="Password"
          required
        />
        <div className="flex justify-between text-sm mt-[-8px]">
          <p className="cursor-p">Forget your password?</p>
          {
            currentState === 'Login'
             ? <p className="cursor-pointer" onClick={()=> setCurrentState('sign Up')}>Create account</p>
            : <p className="cursor-pointer" onClick={()=> setCurrentState('Login')}>Login Here</p>
            }
        </div>
        <button className="bg-black text-white flex justify-center w-1/4 m-auto py-2">
          {currentState === 'Login' ? "Sign in" : "Sign Up"}
        </button>
      </form>
    </div>
  );
}

export default Login;
