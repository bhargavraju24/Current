import EmployeeSidebar from "../Sidebar/EmployeeSidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      {/* Header */}
      <Header />

      {/* Main Section */}
      <div className="flex flex-1">

        {/* Left Sidebar */}
        <EmployeeSidebar />

        {/* Right Content */}
        <main className="flex-1 p-8">

          <h1 className="text-2xl font-bold text-blue-800 mb-4">
            My Profile
          </h1>

          <div className="bg-white rounded-lg shadow p-6 max-w-xl">
            <p className="text-gray-600 mb-2">
              This is your profile information.
            </p>

            <div className="mt-4 space-y-2 text-sm">
              <p><span className="font-semibold">Name:</span> John Doe</p>
              <p><span className="font-semibold">Email:</span> john@example.com</p>
              <p><span className="font-semibold">Role:</span> Employee</p>
            </div>
          </div>

        </main>
      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default Profile;
