import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setPassword("");
    handleLogin(email, password);
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="bg-zinc-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-white text-center mb-4">
          Login
        </h2>

        <form className="space-y-4" onSubmit={submitHandler}>
          <div>
            <label className="text-white block mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border border-red-400 bg-gray-700 text-white rounded-lg duration-200 focus:scale-[102%] focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>

          <div className="relative pb-2">
            <label className="text-white block mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border border-red-400 bg-gray-700 text-white rounded-lg duration-200 focus:scale-[102%] focus:outline-none focus:ring-2 focus:ring-red-500 pr-14"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-red-400 text-white rounded-lg duration-200 focus:scale-[102%] hover:scale-105 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-300 active:scale-90"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
