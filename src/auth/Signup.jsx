import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-xs p-5 rounded-xl shadow-lg border border-gray-200">

        <h2 className="text-lg font-bold text-center text-gray-800 mb-4">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-1.5 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-1.5 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            required
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-1.5 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            required
          />

          {/* Role */}
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-3 py-1.5 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            required
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="employee">Employee</option>
          </select>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-1.5 rounded-lg
                       hover:bg-blue-800 transition font-semibold text-sm"
          >
            Sign Up
          </button>

        </form>

        {/* Login link */}
        <p className="text-center text-xs text-gray-500 mt-3">
          Already have an account?{" "}
          <a href="/login" className="text-blue-900 font-medium hover:underline">
            Login
          </a>
        </p>

      </div>
    </div>
  );
};

export default Signup;
