import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 mt-10">
      <div className="max-w-[1200px] mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo & Description */}
        <div>
          <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-white">
            EliteLux Homes
          </Link>
          <p className="mt-4 text-sm">
            Discover premium real estate properties that match your luxury lifestyle. From beachfront villas to city penthouses — we’ve got it all.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-indigo-600">Home</Link></li>
            <li><Link to="/properties" className="hover:text-indigo-600">Properties</Link></li>
            <li><Link to="/about" className="hover:text-indigo-600">About</Link></li>
            <li><Link to="/contact" className="hover:text-indigo-600">Contact</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm mb-2">Email: contact@eliteluxhomes.com</p>
          <p className="text-sm mb-4">Phone: +1 (800) 123-4567</p>

          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-indigo-600"><FaFacebookF /></a>
            <a href="#" className="hover:text-indigo-600"><FaTwitter /></a>
            <a href="#" className="hover:text-indigo-600"><FaInstagram /></a>
            <a href="#" className="hover:text-indigo-600"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-sm py-4 border-t border-gray-300 dark:border-gray-700">
        © {new Date().getFullYear()} EliteLux Homes. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
