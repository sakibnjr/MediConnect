import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserMd,
  FaHandHoldingHeart,
  FaFileAlt,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <aside
      className={`bg-gray-800 text-white w-64 p-6 flex flex-col space-y-6 rounded-md ${
        isSidebarCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Sidebar Toggle Button */}
      <button
        className="text-white mb-4"
        onClick={() => setSidebarCollapsed(!isSidebarCollapsed)}
      >
        {isSidebarCollapsed ? ">" : "<"}
      </button>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-4">
        <Link to="/" className="flex items-center gap-2">
          <FaTachometerAlt /> {!isSidebarCollapsed && "Dashboard"}
        </Link>
        <Link to="/user-management" className="flex items-center gap-2">
          <FaUserMd /> {!isSidebarCollapsed && "User Management"}
        </Link>
        <Link to="/analytics" className="flex items-center gap-2">
          <FaFileAlt /> {!isSidebarCollapsed && "Analytics"}
        </Link>
        <Link to="/donation-requests" className="flex items-center gap-2">
          <FaHandHoldingHeart /> {!isSidebarCollapsed && "Donation Requests"}
        </Link>
        <Link to="/settings" className="flex items-center gap-2">
          <FaCog /> {!isSidebarCollapsed && "Settings"}
        </Link>
        <Link to="/logout" className="flex items-center gap-2">
          <FaSignOutAlt /> {!isSidebarCollapsed && "Logout"}
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
