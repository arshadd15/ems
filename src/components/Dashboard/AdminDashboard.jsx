import Header from "../Others/Header";
import { CreateTask } from "../Others/CreateTask";
import AllTask from "../Others/AllTask";

const AdminDashboard = (props) => {
  const data = props.data[0];
  return (
    <div className="h-screen w-full px-2 lg:px-10 py-5">
      <Header changeUser={props.changeUser} data={data} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
