import React from "react";
import {
  LayoutDashboard,
  User,
  ClipboardList,
  CalendarCheck,
  Settings,
  LogOut
} from "lucide-react";

const EmployeeDashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col">
        <div className="p-6 text-xl font-bold border-b border-blue-800">
          Employee Panel
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-800 cursor-pointer">
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-800 cursor-pointer transition">
            <User size={18} />
            <span>My Profile</span>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-800 cursor-pointer transition">
            <ClipboardList size={18} />
            <span>My Tasks</span>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-800 cursor-pointer transition">
            <CalendarCheck size={18} />
            <span>Attendance</span>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-800 cursor-pointer transition">
            <Settings size={18} />
            <span>Settings</span>
          </div>
        </nav>

        <div className="p-4 border-t border-blue-800">
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-800 cursor-pointer transition">
            <LogOut size={18} />
            <span>Logout</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-semibold text-blue-900 mb-6">
          Employee Dashboard
        </h1>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-lg border hover:shadow-md transition">
            <p className="text-sm text-gray-500">My Tasks</p>
            <h2 className="text-3xl font-bold text-blue-900 mt-2">5</h2>
          </div>

          <div className="bg-white p-6 rounded-lg border hover:shadow-md transition">
            <p className="text-sm text-gray-500">Attendance</p>
            <h2 className="text-3xl font-bold text-blue-900 mt-2">98%</h2>
          </div>

          <div className="bg-white p-6 rounded-lg border hover:shadow-md transition">
            <p className="text-sm text-gray-500">Performance</p>
            <h2 className="text-3xl font-bold text-blue-900 mt-2">Good</h2>
          </div>
        </div>

        {/* Employee Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border hover:border-blue-900 transition">
            <h3 className="font-semibold text-blue-900 mb-2">
              My Profile
            </h3>
            <p className="text-gray-600 text-sm">
              View and update your personal information.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border hover:border-blue-900 transition">
            <h3 className="font-semibold text-blue-900 mb-2">
              Task Updates
            </h3>
            <p className="text-gray-600 text-sm">
              Track assigned tasks and project progress.
            </p>
          </div>
        </div>
      </main>

    </div>
  );
};

export default EmployeeDashboard;
