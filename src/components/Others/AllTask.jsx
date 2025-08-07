import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div
      id="allTask"
      className="bg-[#1e1e2e] px-5 py-3 lg:py-5 mt-3 overflow-auto rounded-lg shadow-lg"
    >
      <div className="bg-fuchsia-800 flex justify-between items-center mb-2 py-3 p-1 lg:px-4 rounded-lg text-white">
        <h2 className="font-medium text-sm lg:text-lg w-1/6 lg:w-1/5">
          Employee Name
        </h2>
        <h2 className="font-medium text-sm lg:text-lg w-[1/8] lg:w-1/5">
          New Task
        </h2>
        <h2 className="font-medium text-sm lg:text-lg w-[1/8] lg:w-1/5">
          Active Task
        </h2>
        <h2 className="font-medium text-sm lg:text-lg w-1/4 lg:w-1/5">
          Completed Task
        </h2>
        <h2 className="font-medium text-sm lg:text-lg w-1/4 lg:w-0">
          Failed Task
        </h2>
      </div>
      <div>
        {userData?.employees?.map((elem, idx) => (
          <div
            key={idx}
            className="border border-orange-400 bg-white/10 flex justify-between items-center mb-2 py-3 px-4 rounded-lg transition-all duration-200 hover:scale-[102%] hover:bg-white/20 hover:shadow-md hover:shadow-orange-400/50"
          >
            <h2 className="text-lg font-medium w-1/5 text-white">
              {elem.firstName}
            </h2>
            <h3 className="text-lg font-medium w-1/5 text-blue-400">
              {elem.taskCounts.newTask}
            </h3>
            <h5 className="text-lg font-medium w-1/5 text-yellow-400">
              {elem.taskCounts.active}
            </h5>
            <h5 className="text-lg font-medium w-1/5 text-green-400">
              {elem.taskCounts.completed}
            </h5>
            <h5 className="text-lg font-medium text-red-500">
              {elem.taskCounts.failed}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
