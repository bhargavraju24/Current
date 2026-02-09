import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill all fields");
      return;
    }

    console.log("Username:", username);
    console.log("Password:", password);

    alert("Login successful (demo)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg border border-gray-200">
        
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Username */}
          <div>
            <label className="block text-gray-600 mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-lg
                       hover:bg-gray-700 transition font-semibold"
          >
            Login
          </button>

        </form>

        {/* Signup redirect */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-gray-800 font-medium cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>

      </div>
    </div>
  );
};

export default Login;
