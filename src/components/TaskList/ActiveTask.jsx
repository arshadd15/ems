import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const ActiveTask = ({ data }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const completeTask = () => {
    const updatedEmployees = userData.employees.map((emp) => {
      let hasUpdatedTask = false;
      const updatedTasks = emp.tasks.map((task) => {
        if (JSON.stringify(task) === JSON.stringify(data)) {
          hasUpdatedTask = true;
          return {
            ...task,
            completed: true,
            active: false,
          };
        }
        return task;
      });

      if (hasUpdatedTask) {
        return {
          ...emp,
          tasks: updatedTasks,
          taskCounts: {
            ...emp.taskCounts,
            active: emp.taskCounts.active > 0 ? emp.taskCounts.active - 1 : 0,
            completed: emp.taskCounts.completed + 1,
          },
        };
      }
      return emp;
    });

    setUserData({ ...userData, employees: updatedEmployees });
  };

  const rejectTask = () => {
    const updatedEmployees = userData.employees.map((emp) => {
      let hasUpdatedTask = false;
      const updatedTasks = emp.tasks.map((task) => {
        if (JSON.stringify(task) === JSON.stringify(data)) {
          hasUpdatedTask = true;
          return {
            ...task,
            failed: true,
            active: false,
          };
        }
        return task;
      });

      if (hasUpdatedTask) {
        return {
          ...emp,
          tasks: updatedTasks,
          taskCounts: {
            ...emp.taskCounts,
            active: emp.taskCounts.active > 0 ? emp.taskCounts.active - 1 : 0,
            failed: emp.taskCounts.failed + 1,
          },
        };
      }
      return emp;
    });

    setUserData({ ...userData, employees: updatedEmployees });
  };

  return (
    <div className="h-full w-80 flex-shrink-0 bg-purple-200 rounded-xl shadow hover:shadow-lg transition duration-200 p-5 transform hover:scale-105">
      <div className="flex items-center justify-between">
        <span className="bg-purple-400 text-white text-sm px-3 py-1 rounded-full">
          {data.category}
        </span>
        <span className="text-gray-700 text-sm">{data.taskDate}</span>
      </div>
      <h2 className="mt-5 text-2xl font-bold text-purple-800">
        {data.taskTitle}
      </h2>
      <p className="mt-3 text-purple-700">{data.taskDescription}</p>
      <div className="flex justify-between mt-6">
        <button
          onClick={completeTask}
          className="bg-purple-600 hover:bg-purple-700 py-2 px-3 text-sm font-medium rounded transition duration-200 transform hover:scale-105 active:scale-90"
        >
          Mark as complete
        </button>
        <button
          onClick={rejectTask}
          className="bg-red-600 hover:bg-red-700 py-2 px-3 text-sm font-medium rounded transition duration-200 transform hover:scale-105 active:scale-90"
        >
          Mark as failed
        </button>
      </div>
    </div>
  );
};

export default ActiveTask;
