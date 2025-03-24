import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const TaskListNumbers = ({ data }) => {
  const [userData] = useContext(AuthContext);

  const currentEmployee = userData.employees.find(
    (e) => data.firstName === e.firstName && data.email === e.email
  );
  if (currentEmployee) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        <div className="bg-blue-600 rounded-xl py-5 px-6 shadow hover:shadow-lg transition duration-200 transform hover:scale-105">
          <h2 className="text-3xl font-bold text-white">
            {currentEmployee.taskCounts.newTask}
          </h2>
          <h3 className="text-xl font-medium text-blue-300">New Task</h3>
        </div>
        <div className="bg-green-600 rounded-xl py-5 px-6 shadow hover:shadow-lg transition duration-200 transform hover:scale-105">
          <h2 className="text-3xl font-bold text-white">
            {currentEmployee.taskCounts.completed}
          </h2>
          <h3 className="text-xl font-medium text-green-300">Completed Task</h3>
        </div>
        <div className="bg-yellow-600 rounded-xl py-5 px-6 shadow hover:shadow-lg transition duration-200 transform hover:scale-105">
          <h2 className="text-3xl font-bold text-white">
            {currentEmployee.taskCounts.active}
          </h2>
          <h3 className="text-xl font-medium text-yellow-300">Accepted Task</h3>
        </div>
        <div className="bg-red-600 rounded-xl py-5 px-6 shadow hover:shadow-lg transition duration-200 transform hover:scale-105">
          <h2 className="text-3xl font-bold text-white">
            {currentEmployee.taskCounts.failed}
          </h2>
          <h3 className="text-xl font-medium text-red-300">Failed Task</h3>
        </div>
      </div>
    );
  }
};

export default TaskListNumbers;
