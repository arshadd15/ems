const FailedTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-80 p-5 bg-red-50 rounded-xl shadow hover:shadow-lg transition duration-200 transform hover:scale-105">
      <div className="flex justify-between items-center">
        <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">
          {data.category}
        </span>
        <span className="text-gray-600 text-sm">{data.taskDate}</span>
      </div>
      <h2 className="mt-5 text-2xl font-bold text-red-900">{data.taskTitle}</h2>
      <p className="mt-3 text-red-700 h-28 overflow-y-auto">
        {data.taskDescription}
      </p>
      <div className="mt-6">
        <h2 className="w-full text-center text-red-800 text-2xl font-bold">
          ❌ Failed
        </h2>
      </div>
    </div>
  );
};

export default FailedTask;
