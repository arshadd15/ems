import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./contexts/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email == "admin@example.com" && password == "123") {
      setUser("admin");
      setLoggedInUserData("admin");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: authData[0].admin }),
      );
    } else if (authData[0]) {
      const employee = authData[0].employees.find(
        (e) => email == e.email && password == e.password,
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee }),
        );
      }
    } else {
      alert("Invalid credentials");
    }
  };

  const handleSignUp = (name, email, password) => {
    let employees = authData[0].employees;
    const exists = employees.some((emp) => emp.email === email);
    if (email === "admin@example.com") {
      alert("Email already exists");
    }
    if (exists) {
      alert("Email already exists");
    }

    const newFirstName = name;
    const newEmail = email;
    const newPassword = password;

    const lastId =
      employees.length > 0 ? employees[employees.length - 1].id : 0;

    const newEmployee = {
      id: lastId + 1,
      firstName: newFirstName,
      email: newEmail,
      password: newPassword,
      taskCounts: {
        active: 2,
        newTask: 1,
        completed: 1,
        failed: 0,
      },
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Prepare presentation",
          taskDescription: "Prepare slides for upcoming client presentation",
          taskDate: "2024-10-13",
          category: "Presentation",
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Code review",
          taskDescription: "Review the codebase for optimization",
          taskDate: "2024-10-12",
          category: "Development",
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Testing",
          taskDescription: "Test the latest build for bugs",
          taskDate: "2024-10-08",
          category: "QA",
        },
      ],
    };

    employees.push(newEmployee);
    localStorage.setItem("employees", JSON.stringify(authData[0].employees));
    handleLogin(email, password);
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} handleSignUp={handleSignUp} />
      ) : null}
      {user == "admin" ? (
        <AdminDashboard changeUser={setUser} data={loggedInUserData} />
      ) : user == "employee" ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
