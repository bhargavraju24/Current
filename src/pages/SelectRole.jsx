import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield, faUsers } from "@fortawesome/free-solid-svg-icons";

const SelectRole = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">

      <h2 className="text-3xl font-bold mb-20">
        Select Your Role
      </h2>

      <div className="flex gap-20">

        {/* Admin */}
        <div
          onClick={() => navigate("/login/admin")}
          className="w-72 h-72 border border-gray-300 rounded-xl shadow-md
                     flex flex-col items-center justify-center cursor-pointer
                     hover:shadow-lg transition"
        >
          <FontAwesomeIcon icon={faUserShield} className="text-6xl mb-6" />
          <p className="text-xl font-semibold">Admin</p>
        </div>

        {/* Employee */}
        <div
          onClick={() => navigate("/login/employee")}
          className="w-72 h-72 border border-gray-300 rounded-xl shadow-md
                     flex flex-col items-center justify-center cursor-pointer
                     hover:shadow-lg transition"
        >
          <FontAwesomeIcon icon={faUsers} className="text-6xl mb-6" />
          <p className="text-xl font-semibold">Employee</p>
        </div>

      </div>
    </div>
  );
};

export default SelectRole;
