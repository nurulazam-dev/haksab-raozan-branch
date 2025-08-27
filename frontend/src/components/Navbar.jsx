import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegWindowClose } from "react-icons/fa";
import logo from "../assets/images/logo/HAKSAB_logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Events", path: "/events" },
    { name: "Members", path: "/members" },
    { name: "Finance", path: "/finance" },
    { name: "Notices", path: "/notices" },
    { name: "Reports", path: "/reports" },
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
  ];

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-10">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link to="/" className="text-xl font-bold tracking-wide">
          <img
            src={logo}
            alt="HAKSAB-Raozan-Branch Logo"
            className="inline-block w-10 h-8 mr-2 rounded-full"
          />
          HAKSAB-Raozan
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link?.path}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {link?.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FaRegWindowClose size={28} />
          ) : (
            <GiHamburgerMenu size={28} />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-3 space-y-2">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="block text-gray-300 hover:text-white transition-colors duration-200"
              onClick={() => setIsOpen(false)} // close menu on click
            >
              {link?.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
