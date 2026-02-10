import React from "react";
import {
  Users,
  Settings,
  LayoutDashboard,
  Briefcase,
  LogOut
} from "lucide-react";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col">
        <div className="p-6 text-xl font-bold border-b border-blue-800">
          Admin Panel
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-800 cursor-pointer">
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-800 cursor-pointer transition">
            <Users size={18} />
            <span>Manage Employees</span>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-800 cursor-pointer transition">
            <Briefcase size={18} />
            <span>Projects</span>
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
          Admin Dashboard
        </h1>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-lg border hover:shadow-md transition">
            <p className="text-sm text-gray-500">Total Employees</p>
            <h2 className="text-3xl font-bold text-blue-900 mt-2">120</h2>
          </div>

          <div className="bg-white p-6 rounded-lg border hover:shadow-md transition">
            <p className="text-sm text-gray-500">Departments</p>
            <h2 className="text-3xl font-bold text-blue-900 mt-2">8</h2>
          </div>

          <div className="bg-white p-6 rounded-lg border hover:shadow-md transition">
            <p className="text-sm text-gray-500">Active Projects</p>
            <h2 className="text-3xl font-bold text-blue-900 mt-2">15</h2>
          </div>
        </div>

        {/* Admin Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border hover:border-blue-900 transition">
            <h3 className="font-semibold text-blue-900 mb-2">
              Manage Employees
            </h3>
            <p className="text-gray-600 text-sm">
              Add, edit, and remove employee records.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border hover:border-blue-900 transition">
            <h3 className="font-semibold text-blue-900 mb-2">
              System Settings
            </h3>
            <p className="text-gray-600 text-sm">
              Control application configuration and permissions.
            </p>
          </div>
        </div>
      </main>

    </div>
  );
};

export default AdminDashboard;
