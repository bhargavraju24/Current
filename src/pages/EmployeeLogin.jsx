import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!username || !password) {
      alert("Please fill all fields");
      return;
    }

    console.log("Username:", username);
    console.log("Password:", password);

    // ✅ Redirect to Employee Dashboard
    navigate("/employee-dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-xs p-5 rounded-xl shadow-lg border border-gray-200">
        
        <h2 className="text-lg font-bold text-center text-gray-800 mb-4">
          Employee Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          
          {/* Username */}
          <div>
            <label className="block text-gray-600 mb-1 text-sm">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-1.5 border border-gray-300 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-600 mb-1 text-sm">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-1.5 border border-gray-300 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-1.5 rounded-lg
                       hover:bg-blue-800 transition font-semibold text-sm"
          >
            Login
          </button>

        </form>

        {/* Signup */}
        <p className="text-center text-xs text-gray-500 mt-3">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-blue-900 font-medium cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>

      </div>
    </div>
  );
};

export default Login;
