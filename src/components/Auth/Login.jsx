import React, { useEffect, useState } from "react";
import { getLocalStorage } from "../../utils/localStorage";

const Login = ({ handleLogin, handleSignUp }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signorlog, setSignorlog] = useState("SignUp");
  const [signorloghead, setSignorloghead] = useState("Login");

  const [error, setError] = useState("");

  const [showDemo, setShowDemo] = useState(false);
  const [demoAccounts, setDemoAccounts] = useState({
    employees: [],
    admin: [],
  });

  useEffect(() => {
    const data = getLocalStorage();
    if (data) {
      setDemoAccounts(data);
    }
  }, []);

  const handleAutoFill = (demoEmail, demoPassword) => {
    setEmail(demoEmail);
    setPassword(demoPassword);

    if (signorloghead !== "Login") {
      changeToSignUp();
    }
  };

  const loginHandler = (e) => {
    e.preventDefault();
    setError("");

    const cleanEmail = email.trim();
    const cleanPassword = password.trim();

    if (!cleanEmail || !cleanPassword) {
      setError("Please enter both email and password.");
      return;
    }

    const loginSuccess = handleLogin(email, password);

    if (!loginSuccess) {
      setError("Invalid email or password");
    }

    setPassword("");
  };

  const signUpHandler = (e) => {
    e.preventDefault();
    setError("");

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanPassword = password.trim();

    if (!cleanName || !cleanEmail || !cleanPassword) {
      setError("Please fill out all fields.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 3) {
      setError("Password must be at least 3 characters long.");
      return;
    }

    const signupSuccess = handleSignUp(cleanName, cleanEmail, cleanPassword);

    if (!signupSuccess) {
      setError("This email is already registered. Please login.");
      return false;
    }

    setPassword("");
    setName("");
    setEmail("");
  };

  const changeToSignUp = () => {
    setError("");

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

        {error && (
          <div className="mb-4 py-2 px-3 bg-red-500/20 border border-red-500 rounded-md text-red-400 text-sm text-center">
            {error}
          </div>
        )}

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
            <p className="text-white">
              {signorloghead === "Login"
                ? "Don't have an account? "
                : "Already have an account? "}
              <span
                onClick={changeToSignUp}
                className="text-red-400 hover:text-red-500 cursor-pointer pl-1"
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

        <div className="mt-6 border-t border-gray-600 pt-4">
          <button
            onClick={() => setShowDemo(!showDemo)}
            className="w-full text-sm text-gray-400 hover:text-white transition-colors flex justify-center items-center gap-2"
          >
            {showDemo ? "Hide Test Accounts" : "View Test Accounts"}
          </button>

          {showDemo && (
            <div className="mt-4 flex flex-col gap-2 max-h-48 overflow-y-auto pr-1 custom-scrollbar">
              {/* Map through Admin Accounts */}
              {demoAccounts.admin?.map((adminAcc) => (
                <div
                  key={`admin-${adminAcc.id}`}
                  onClick={() =>
                    handleAutoFill(adminAcc.email, adminAcc.password)
                  }
                  className="bg-gray-700/50 p-2 rounded-md border border-gray-600 cursor-pointer hover:border-red-400 hover:bg-gray-700 transition-all group"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-red-400 font-semibold text-sm">
                      {adminAcc.firstName} (Admin)
                    </span>
                    <span className="text-xs text-gray-400 group-hover:text-white">
                      Autofill
                    </span>
                  </div>
                  <div className="text-xs text-gray-300">{adminAcc.email}</div>
                </div>
              ))}

              {/* Map through Employee Accounts */}
              {demoAccounts.employees?.map((emp) => (
                <div
                  key={`emp-${emp.id}`}
                  onClick={() => handleAutoFill(emp.email, emp.password)}
                  className="bg-gray-700/50 p-2 rounded-md border border-gray-600 cursor-pointer hover:border-red-400 hover:bg-gray-700 transition-all group"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-blue-400 font-semibold text-sm">
                      {emp.firstName} (Employee)
                    </span>
                    <span className="text-xs text-gray-400 group-hover:text-white">
                      Autofill
                    </span>
                  </div>
                  <div className="text-xs text-gray-300">{emp.email}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
