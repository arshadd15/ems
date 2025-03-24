import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const NewTask = ({ data }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const acceptTask = () => {
    const updatedEmployees = userData.employees.map((emp) => {
      let hasUpdatedTask = false;
      const updatedTasks = emp.tasks.map((task) => {
        if (JSON.stringify(task) === JSON.stringify(data)) {
          hasUpdatedTask = true;
          return {
            ...task,
            active: true,
            newTask: false,
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
            newTask:
              emp.taskCounts.newTask > 0 ? emp.taskCounts.newTask - 1 : 0,
            active: emp.taskCounts.active + 1,
          },
        };
      }
      return emp;
    });

    setUserData({ ...userData, employees: updatedEmployees });
  };

  return (
    <div className="flex-shrink-0 h-full w-80 p-5 bg-indigo-200 rounded-xl shadow hover:shadow-lg transition transform hover:scale-105">
      <div className="flex justify-between items-center">
        <span className="bg-indigo-500 text-white text-sm px-3 py-1 rounded-full">
          {data.category}
        </span>
        <span className="text-gray-600 text-sm">{data.taskDate}</span>
      </div>
      <h2 className="mt-5 text-2xl font-bold text-gray-800">
        {data.taskTitle}
      </h2>
      <p className="mt-3 text-gray-700">{data.taskDescription}</p>
      <div className="mt-6">
        <button
          onClick={acceptTask}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium py-2 transition duration-200 transform hover:scale-105 active:scale-90"
        >
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
