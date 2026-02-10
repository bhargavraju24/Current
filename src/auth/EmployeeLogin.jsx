import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

const EmployeeLogin = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill all fields");
      return;
    }

    navigate("/employee-dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      <Header />

      {/* CENTER WITH GAP */}
      <main className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="bg-white w-full max-w-xs p-6 rounded-xl shadow-lg border border-gray-200">

          <h2 className="text-xl font-bold text-center text-gray-800 mb-5">
            Employee Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="block text-gray-700 text-sm mb-1">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 rounded-lg
                         hover:bg-blue-800 transition font-semibold"
            >
              Login
            </button>

          </form>

          <p className="text-center text-sm text-gray-500 mt-4">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-blue-900 font-medium cursor-pointer hover:underline"
            >
              Sign up
            </span>
          </p>

        </div>
      </main>

      <Footer />

    </div>
  );
};

export default EmployeeLogin;
