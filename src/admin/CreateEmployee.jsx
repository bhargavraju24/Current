import AdminSidebar from "../Sidebar/AdminSidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CreateEmployee = () => {
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
            Create Employee
          </h1>

          {/* Form */}
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200 max-w-lg">

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Employee Name
              </label>
              <input
                type="text"
                placeholder="Employee Name"
                className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Employee Email
              </label>
              <input
                type="email"
                placeholder="Employee Email"
                className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition">
              Save Employee
            </button>

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

export default CreateEmployee;
