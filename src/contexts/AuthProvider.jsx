import { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedEmployees = localStorage.getItem("employees");
    const storedAdmin = localStorage.getItem("admin");
    if (!storedEmployees || !storedAdmin) {
      setLocalStorage();
    }
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);

  useEffect(() => {
    if (userData && userData.employees) {
      localStorage.setItem("employees", JSON.stringify(userData.employees));
    }
  }, [userData]);

  return (
    <>
      <AuthContext.Provider value={[userData, setUserData]}>
        <div>{children}</div>
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
