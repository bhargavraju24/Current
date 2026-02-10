import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import SelectRole from "./pages/SelectRole";
import AdminLogin from "./pages/AdminLogin";
import EmployeeLogin from "./pages/EmployeeLogin";
import Signup from "./pages/Signup";


import AdminDashboard from "./admindashboard/Admin_Dashboard";
import EmployeeDashboard from "./employeedashboard/Employee_Dashboard";


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SelectRole />} />
        <Route path="/login/admin" element={<AdminLogin />} />
        <Route path="/login/employee" element={<EmployeeLogin />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/admin-dashboard" element={<AdminDashboard />} />
         <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
