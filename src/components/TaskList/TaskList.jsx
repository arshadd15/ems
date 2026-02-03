import { useContext, useState } from "react";
import ActiveTask from "./ActiveTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import { AuthContext } from "../../contexts/AuthProvider";

const TaskList = ({ data }) => {
  const [userData] = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("");

  const currentEmployee = userData.employees.find(
    (e) => data.firstName === e.firstName && data.email === e.email,
  );
  return (
    <>
      <div className="relative mt-10 group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400 group-focus-within:text-orange-400 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Tasks"
          className="w-full bg-white/5 border border-white/10 text-white pl-10 pr-4 py-2.5 rounded-lg outline-none focus:border-orange-400/50 focus:bg-white/10 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 placeholder:text-gray-500"
        />
      </div>
      <div
        id="taskList"
        className="h-[55%] w-full flex items-center justify-start gap-5 py-5 overflow-x-auto flex-nowrap"
      >
        {currentEmployee?.tasks
          ?.filter((elem) =>
            elem.taskTitle.toLowerCase().includes(searchTerm.toLowerCase()),
          )
          .map((elem, idx) => {
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
    </>
  );
};

export default TaskList;
