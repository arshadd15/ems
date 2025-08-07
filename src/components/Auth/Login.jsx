import React, { useState } from "react";

const Login = ({ handleLogin, handleSignUp }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signorlog, setSignorlog] = useState("SignUp");
  const [signorloghead, setSignorloghead] = useState("Login");

  const loginHandler = (e) => {
    e.preventDefault();
    setPassword("");
    handleLogin(email, password);
  };

  const signUpHandler = (e) => {
    e.preventDefault();
    setPassword("");
    setName("");
    setEmail("");
    handleSignUp(name, email, password);
  };

  const changeToSignUp = () => {
    if (signorlog === "SignUp") {
      setSignorlog("Login");
      setSignorloghead("SignUp");
    } else {
      setSignorlog("SignUp");
      setSignorloghead("Login");
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="bg-zinc-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-white text-center mb-4">
          {signorloghead}
        </h2>

        <form className="space-y-4">
          {signorloghead == "Login" ? null : (
            <div>
              <label className="text-white block mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-2 border border-red-400 bg-gray-700 text-white rounded-lg duration-200 focus:scale-[102%] focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </div>
          )}

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
          <div className="relative pb-2">
            <p>
              Don't have an account?{" "}
              <span
                onClick={changeToSignUp}
                className="text-red-400 hover:text-red-500 cursor-pointer pl-3"
              >
                {signorlog}
              </span>
            </p>
          </div>
          {signorloghead == "Login" ? (
            <button
              onClick={loginHandler}
              className="w-full py-2 bg-red-400 text-white rounded-lg duration-200 focus:scale-[102%] hover:scale-105 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-300 active:scale-90"
            >
              Login
            </button>
          ) : (
            <button
              onClick={signUpHandler}
              className="w-full py-2 bg-red-400 text-white rounded-lg duration-200 focus:scale-[102%] hover:scale-105 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-300 active:scale-90"
            >
              SignUp
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
