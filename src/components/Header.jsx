import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-900 text-white border-b border-white">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        
        <h1 className="text-xl font-bold">
          KODEBLOOM
        </h1>

        <nav className="flex gap-8 font-medium">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="#" className="hover:underline">
            About Us
          </Link>
          <Link to="#" className="hover:underline">
            Contact
          </Link>
          <Link to="/select-role" className="font-semibold hover:underline">
            Login
          </Link>
        </nav>

      </div>
    </header>
  );
};

export default Header;
