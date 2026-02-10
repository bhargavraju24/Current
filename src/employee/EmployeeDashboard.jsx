import EmployeeSidebar from "../Sidebar/EmployeeSidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const EmployeeDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      {/* Header */}
      <Header />

      {/* Middle Section */}
      <div className="flex flex-1">

        {/* Sidebar */}
        <EmployeeSidebar />

        {/* Main Content */}
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold text-blue-800 mb-8">
            Employee Dashboard
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* cards stay same */}
          </div>
        </main>
      </div>

      {/* Footer pushed automatically */}
      <div className="mt-auto">
        <Footer />
      </div>

    </div>
  );
};

export default EmployeeDashboard;
