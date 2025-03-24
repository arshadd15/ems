import React, { useContext } from "react";
import Header from "../Others/Header";
import TaskListNumbers from "../Others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";
import { AuthContext } from "../../contexts/AuthProvider";

const EmployeeDashboard = (props) => {
  return (
    <div className="h-screen w-screen bg-[#1c1c1c] p-10">
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumbers data={props.data} />
      <TaskList data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;
