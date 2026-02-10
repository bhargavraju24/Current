import AdminSidebar from "../Sidebar/AdminSidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      {/* Header */}
      <Header />

      {/* Middle Section */}
      <div className="flex flex-1">

        {/* Sidebar */}
        <AdminSidebar />

        {/* Main Content */}
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold text-blue-800 mb-4">
            Admin Dashboard
          </h1>

          <p className="text-gray-600 mb-8">
            This content appears on the RIGHT side
          </p>

          {/* Example Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-white border-l-4 border-blue-800 p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold text-blue-800 mb-2">
                Create Employee
              </h2>
              <p className="text-gray-600 text-sm">
                Add new employees to the system.
              </p>
            </div>

            <div className="bg-white border-l-4 border-blue-800 p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold text-blue-800 mb-2">
                Employees
              </h2>
              <p className="text-gray-600 text-sm">
                View, edit, or remove employees.
              </p>
            </div>

            <div className="bg-white border-l-4 border-blue-800 p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold text-blue-800 mb-2">
                Attendance
              </h2>
              <p className="text-gray-600 text-sm">
                Monitor employee attendance.
              </p>
            </div>

          </div>
        </main>
      </div>

      {/* Footer */}
      <div className="mt-auto">
        <Footer />
      </div>

    </div>
  );
};

export default AdminDashboard;
