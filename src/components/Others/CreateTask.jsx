import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

export const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      active: false,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle,
      taskDescription,
      taskDate,
      category,
    };

    userData.employees.forEach((elem) => {
      if (assignTo === elem.firstName) {
        elem.tasks.push(newTask);
        elem.taskCounts.newTask++;
      }
    });

    setUserData({ ...userData });

    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
  };

  return (
    <div className="p-2 lg:p-5 bg-[#1c1c1c] mt-5 rounded-lg shadow-xl">
      <form
        onSubmit={submitHandler}
        className="flex w-full items-start justify-between flex-wrap lg:px-5"
      >
        <div className="w-full lg:w-1/2 space-y-4 mb-4">
          <div className="flex flex-col">
            <label className="font-medium mb-2" htmlFor="title">
              Task Title
            </label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="tracking-wider py-1.5 px-3 w-full lg:w-4/5 rounded-lg outline-none bg-gray-800 text-white placeholder-gray-400 border border-gray-700 duration-200 focus:scale-[102%] focus:ring-2 focus:ring-blue-500 transition-all"
              type="text"
              id="title"
              placeholder="Add the title of task"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-2" htmlFor="date">
              Date
            </label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="tracking-wider py-1.5 px-3 w-full lg:w-4/5 rounded-lg outline-none bg-gray-800 text-white placeholder-gray-400 border border-gray-700 duration-200 focus:scale-[102%] focus:ring-2 focus:ring-blue-500 transition-all"
              type="date"
              id="date"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-2" htmlFor="assignTo">
              Assign to
            </label>
            <select
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              id="assignTo"
              className="tracking-wider py-1.5 px-3 w-full lg:w-4/5 rounded-lg outline-none bg-gray-800 text-white border border-gray-700 duration-200 focus:scale-[102%] focus:ring-2 focus:ring-blue-500 transition-all"
            >
              <option value="">Select an employee</option>
              {userData?.employees?.map((emp) => (
                <option key={emp.id} value={emp.firstName}>
                  {emp.firstName}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-2" htmlFor="category">
              Category
            </label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="tracking-wider py-1.5 px-3 w-full lg:w-4/5 rounded-lg outline-none bg-gray-800 text-white placeholder-gray-400 border border-gray-700 duration-200 focus:scale-[102%] focus:ring-2 focus:ring-blue-500 transition-all"
              type="text"
              id="category"
              placeholder="design, dev, etc"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col space-y-4">
          <label className="font-medium mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="tracking-wider py-1.5 px-3 w-full rounded-lg outline-none bg-gray-800 text-white placeholder-gray-400 border border-gray-700 duration-200 focus:scale-[102%] focus:ring-2 focus:ring-blue-500 transition-all"
            cols="30"
            rows="8"
            id="description"
            placeholder="Add description of task"
          ></textarea>
          <button
            className="py-2 px-4 mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-200 transform hover:scale-105 active:scale-90 focus:outline-none"
            type="submit"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
