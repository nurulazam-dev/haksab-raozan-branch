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
    open: { width: "14.5rem" }, // expanded
    closed: { width: "3.3rem" }, // collapsed
  };

  const linkClasses = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 transition-colors duration-300 ${
      isActive
        ? "text-blue-600"
        : "text-white hover:bg-slate-700 hover:text-yellow-600"
    }`;

  return (
    <div className="flex pt-16 bg-gray-50">
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
            <h1 className="text-2xl font-bold text-yellow-600">Dashboard</h1>
          )}
          <button
            className="text-yellow-600 hover:text-blue-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaBars size={20} />
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="flex-1">
          <NavLink to="/dashboard/admin" className={linkClasses}>
            <FaHome /> {isOpen && <span>Admin Dashboard</span>}
          </NavLink>
          <NavLink to="/dashboard/giyarbi-sharif" className={linkClasses}>
            <FaHome /> {isOpen && <span>Giyarbi Sharif</span>}
          </NavLink>
          <NavLink
            to="/dashboard/add-giyarbi-sharif-balance"
            className={linkClasses}
          >
            <FaHome /> {isOpen && <span>Add GS Balance</span>}
          </NavLink>
          <NavLink to="/dashboard/accountant" className={linkClasses}>
            <FaHome /> {isOpen && <span>Accountant Dashboard</span>}
          </NavLink>
          <NavLink to="/dashboard/finance/income" className={linkClasses}>
            <FaHome /> {isOpen && <span>Income List</span>}
          </NavLink>
          <NavLink to="/dashboard/finance/add-income" className={linkClasses}>
            <FaHome /> {isOpen && <span>Add Income</span>}
          </NavLink>
          <NavLink to="/dashboard/finance/expenses" className={linkClasses}>
            <FaHome /> {isOpen && <span>Expense List</span>}
          </NavLink>
          <NavLink to="/dashboard/finance/add-expense" className={linkClasses}>
            <FaHome /> {isOpen && <span>Add Expense</span>}
          </NavLink>
          <NavLink to="/dashboard/attendance" className={linkClasses}>
            <FaUsers /> {isOpen && <span>Attendance</span>}
          </NavLink>
          <NavLink to="/dashboard/attendance/mark" className={linkClasses}>
            <FaUsers /> {isOpen && <span>Mark Attendance</span>}
          </NavLink>
          <NavLink to="/dashboard/events" className={linkClasses}>
            <FaUsers /> {isOpen && <span>Events</span>}
          </NavLink>
          <NavLink to="/dashboard/events/add" className={linkClasses}>
            <FaUsers /> {isOpen && <span>Add Event</span>}
          </NavLink>
          <NavLink to="/dashboard/members" className={linkClasses}>
            <FaUsers /> {isOpen && <span>Members</span>}
          </NavLink>
          <NavLink to="/dashboard/notices" className={linkClasses}>
            <FaBell /> {isOpen && <span>Notices</span>}
          </NavLink>
          <NavLink to="/dashboard/notices/add" className={linkClasses}>
            <FaBell /> {isOpen && <span>Add Notice</span>}
          </NavLink>
          <NavLink to="/dashboard/reports" className={linkClasses}>
            <FaBell /> {isOpen && <span>Reports</span>}
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
