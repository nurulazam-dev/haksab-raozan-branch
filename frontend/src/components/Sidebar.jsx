import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-full">
      <div className="border-b border-gray-400 mt-10 text-center">
        <h2 className="text-3xl font-bold py-4 text-yellow-600">Dashboard</h2>
      </div>
      <nav className="mt-3">
        <ul>
          <li>
            <NavLink
              to="/dashboard/admin"
              className="block py-2 px-4 hover:bg-gray-700"
              activeClassName="bg-gray-600"
            >
              Admin Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/accountant"
              className="block py-2 px-4 hover:bg-gray-700"
              activeClassName="bg-gray-600"
            >
              Accountant Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/finance/income"
              className="block py-2 px-4 hover:bg-gray-700"
              activeClassName="bg-gray-600"
            >
              Income Management
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/finance/expenses"
              className="block py-2 px-4 hover:bg-gray-700"
              activeClassName="bg-gray-600"
            >
              Expense Management
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/attendance"
              className="block py-2 px-4 hover:bg-gray-700"
              activeClassName="bg-gray-600"
            >
              Attendance
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className="block py-2 px-4 hover:bg-gray-700"
              activeClassName="bg-gray-600"
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/members"
              className="block py-2 px-4 hover:bg-gray-700"
              activeClassName="bg-gray-600"
            >
              Members
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/notices"
              className="block py-2 px-4 hover:bg-gray-700"
              activeClassName="bg-gray-600"
            >
              Notices
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reports"
              className="block py-2 px-4 hover:bg-gray-700"
              activeClassName="bg-gray-600"
            >
              Reports
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
