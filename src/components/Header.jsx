import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        
        <h1 className="text-xl font-bold">KODEBLOOM</h1>

        <nav className="flex gap-8 font-medium">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="#" className="hover:underline">About Us</Link>
          <Link to="#" className="hover:underline">Contact</Link>
          <Link to="/login" className="hover:underline">Login</Link>
        </nav>

      </div>
    </header>
  );
};

export default Header;
