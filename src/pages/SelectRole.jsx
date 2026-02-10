import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield, faUsers } from "@fortawesome/free-solid-svg-icons";

import Header from "../components/Header";
import Footer from "../components/Footer";

const SelectRole = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      
      {/* Header */}
      <Header />

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 pb-20">
        
        <h2 className="text-3xl font-bold mb-16">
          Select Your Role
        </h2>

        <div className="flex gap-20 flex-wrap justify-center">

          {/* Admin */}
          <div
            onClick={() => navigate("/admin-login")}
            className="w-60 h-60 border border-gray-300 rounded-xl shadow-md
                       flex flex-col items-center justify-center cursor-pointer
                       hover:shadow-lg transition"
          >
            <FontAwesomeIcon
              icon={faUserShield}
              className="text-6xl mb-6 text-blue-700"
            />
            <p className="text-xl font-semibold">Admin</p>
          </div>

          {/* Employee */}
          <div
            onClick={() => navigate("/employee-login")}
            className="w-60 h-60 border border-gray-300 rounded-xl shadow-md
                       flex flex-col items-center justify-center cursor-pointer
                       hover:shadow-lg transition"
          >
            <FontAwesomeIcon
              icon={faUsers}
              className="text-6xl mb-6 text-green-700"
            />
            <p className="text-xl font-semibold">Employee</p>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default SelectRole;
