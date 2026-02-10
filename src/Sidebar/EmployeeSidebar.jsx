import { useNavigate } from "react-router-dom";

const EmployeeSidebar = () => {
  const navigate = useNavigate();

  return (
   <aside className="w-53 bg-blue-900 text-white p-6 h-full">


      {/* Title */}
  <h2 className="text-lg font-semibold tracking-wide text-white text-center
               border-b border-white/30 pb-4 mb-8">
  Employee Panel
</h2>




      {/* Menu */}
      <nav className="flex flex-col space-y-4">

        <button
          onClick={() => navigate("/employee-dashboard")}
          className="text-left px-4 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
        >
          Dashboard
        </button>

        <button
          onClick={() => navigate("/")}
          className="text-left px-4 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
        >
          Attendence
        </button>
        <button
          onClick={() => navigate("/")}
          className="text-left px-4 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
        >
          Leave Requests
        </button>
        <button
          onClick={() => navigate("/")}
          className="text-left px-4 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
        >
          Notifications
        </button>
        <button
          onClick={() => navigate("/")}
          className="text-left px-4 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
        >
          Profile
        </button>

        <hr className="border-blue-600 my-2" />

        <button
          onClick={() => navigate("/")}
          className="text-left px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition font-medium"
        >
          Logout
        </button>

      </nav>

    </aside>
  );
};

export default EmployeeSidebar;
