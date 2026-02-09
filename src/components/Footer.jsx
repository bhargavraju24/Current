const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white mt-20">
      
      <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-bold mb-3">KodeBloom</h3>
          <p className="text-sm text-blue-100">
            KodeBloom is a technology platform focused on building
            modern web applications and digital solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-blue-100">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">Login</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-3">Contact</h3>
          <p className="text-sm text-blue-100">Email: support@kodebloom.com</p>
          <p className="text-sm text-blue-100">Phone: +91 98765 43210</p>
          <p className="text-sm text-blue-100">India</p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-700 text-center py-4 text-sm text-blue-100">
        © {new Date().getFullYear()} KodeBloom. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
