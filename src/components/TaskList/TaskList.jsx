import React, { useContext } from "react";
import ActiveTask from "./ActiveTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import { AuthContext } from "../../contexts/AuthProvider";

const TaskList = ({ data }) => {
  const [userData] = useContext(AuthContext);

  const currentEmployee = userData.employees.find(
    (e) => data.firstName === e.firstName && data.email === e.email
  );

  return (
    <div
      id="taskList"
      className="h-[40%] lg:h-[55%] w-full flex items-center justify-start gap-5 py-5 mt-10 overflow-x-auto flex-nowrap"
    >
      {currentEmployee.tasks.map((elem, idx) => {
        if (elem.active) {
          return <ActiveTask key={idx} data={elem} />;
        }
        if (elem.newTask) {
          return <NewTask key={idx} data={elem} />;
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />;
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />;
        }
        return null;
      })}
    </div>
  );
};

export default TaskList;
