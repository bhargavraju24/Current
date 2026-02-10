import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import SelectRole from "./pages/SelectRole";

// Auth
import AdminLogin from "./auth/AdminLogin";
import EmployeeLogin from "./auth/EmployeeLogin";
import Signup from "./auth/Signup";

// Admin
import AdminDashboard from "./admin/AdminDashboard";
import CreateEmployee from "./admin/CreateEmployee";
import ManageEmployee from "./admin/ManageEmployee";

// Employee
import EmployeeDashboard from "./employee/EmployeeDashboard";
import EmployeeProfile from "./employee/EmployeeProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/select-role" element={<SelectRole />} />

        {/* Auth */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/employee-login" element={<EmployeeLogin />} />
        <Route path="/signup" element={<Signup />} />

        {/* Admin */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin/create-employee" element={<CreateEmployee />} />
        <Route path="/admin/manage-employee" element={<ManageEmployee />} />

        {/* Employee */}
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
        <Route path="/employee/profile" element={<EmployeeProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
