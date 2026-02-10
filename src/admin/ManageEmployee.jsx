import AdminSidebar from "../Sidebar/AdminSidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ManageEmployee = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      {/* Header */}
      <Header />

      {/* Middle Section */}
      <div className="flex flex-1">

        {/* Sidebar */}
        <AdminSidebar />

        {/* Right Content */}
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold text-blue-900 mb-6">
            Manage Employee
          </h1>

          {/* Table */}
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-2 text-left">Name</th>
                  <th className="border p-2 text-left">Email</th>
                  <th className="border p-2 text-left">Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="border p-2">John Doe</td>
                  <td className="border p-2">john@example.com</td>
                  <td className="border p-2">
                    <button className="text-blue-600 hover:underline mr-3">
                      Edit
                    </button>
                    <button className="text-red-600 hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
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

export default ManageEmployee;
