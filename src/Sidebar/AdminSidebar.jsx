import { useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const navigate = useNavigate();

  return (
    <aside className="w-53 bg-blue-900 text-white p-6 h-full">

      {/* Title */}
      <h2
        className="text-lg font-semibold tracking-wide text-white text-center
                   border-b border-white/30 pb-4 mb-8"
      >
        Admin Panel
      </h2>

      {/* Menu */}
      <nav className="flex flex-col space-y-4">

        <button
          onClick={() => navigate("/admin-dashboard")}
          className="text-left px-4 py-2 rounded-lg
                     hover:bg-blue-700 transition font-medium"
        >
          Dashboard
        </button>

        <button
          onClick={() => navigate("/admin/create-employee")}
          className="text-left px-4 py-2 rounded-lg
                     hover:bg-blue-700 transition font-medium"
        >
          Create Employee
        </button>

        <button
          onClick={() => navigate("/admin/manage-employee")}
          className="text-left px-4 py-2 rounded-lg
                     hover:bg-blue-700 transition font-medium"
        >
        Employee
        </button>

        <button
          onClick={() => navigate("/admin/attendance")}
          className="text-left px-4 py-2 rounded-lg
                     hover:bg-blue-700 transition font-medium"
        >
          Attendance
        </button>

        <button
          onClick={() => navigate("/admin/leave-requests")}
          className="text-left px-4 py-2 rounded-lg
                     hover:bg-blue-700 transition font-medium"
        >
          Leave Requests
        </button>

        <hr className="border-blue-600 my-2" />

        <button
          onClick={() => navigate("/")}
          className="text-left px-4 py-2 rounded-lg
                     bg-red-600 hover:bg-red-700 transition font-medium"
        >
          Logout
        </button>

      </nav>

    </aside>
  );
};

export default AdminSidebar;
