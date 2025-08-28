import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBars,
  FaHome,
  FaUsers,
  FaBell,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const MainDashboard = () => {
  const [isOpen, setIsOpen] = useState(true);

  const sidebarVariants = {
    open: { width: "16rem" }, // expanded
    closed: { width: "4rem" }, // collapsed
  };

  const linkClasses = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors duration-300 ${
      isActive
        ? "bg-indigo-600 text-white"
        : "text-gray-100 hover:bg-gray-700 hover:text-white"
    }`;

  return (
    <div className="flex pt-16 h-screen bg-gray-50">
      {/* Sidebar */}
      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        transition={{ duration: 0.3, type: "tween" }}
        className="bg-gray-800 text-white shadow-lg flex flex-col"
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b">
          {isOpen && (
            <h1 className="text-2xl font-bold text-blue-600">Dashboard</h1>
          )}
          <button
            className="text-gray-200 hover:text-blue-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaBars size={20} />
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="flex-1 space-y-2">
          <NavLink to="/dashboard/home" className={linkClasses}>
            <FaHome /> {isOpen && <span>Home</span>}
          </NavLink>
          <NavLink to="/dashboard/members" className={linkClasses}>
            <FaUsers /> {isOpen && <span>Members</span>}
          </NavLink>
          <NavLink to="/dashboard/notifications" className={linkClasses}>
            <FaBell /> {isOpen && <span>Notices</span>}
          </NavLink>
          <NavLink to="/dashboard/settings" className={linkClasses}>
            <FaCog /> {isOpen && <span>Settings</span>}
          </NavLink>
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t">
          <button className="flex items-center justify-center gap-3 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition w-full">
            <FaSignOutAlt /> {isOpen && <span>Logout</span>}
          </button>
        </div>
      </motion.div>

      {/* Main Content */}
      <main className="flex-1 p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-xl shadow-md p-6 h-full"
        >
          <Outlet />
        </motion.div>
      </main>
    </div>
  );
};

export default MainDashboard;
