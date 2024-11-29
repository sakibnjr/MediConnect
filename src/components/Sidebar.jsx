import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserMd,
  FaHandHoldingHeart,
  FaFileAlt,
} from "react-icons/fa";

const Sidebar = ({ userRole }) => {
  const location = useLocation();

  const menuItems = {
    patient: [
      { label: "Dashboard", path: "/dashboard", icon: <FaTachometerAlt /> },
      { label: "Find Doctors", path: "/doctor-search", icon: <FaUserMd /> },
      {
        label: "Blood Requests",
        path: "/blood-request",
        icon: <FaHandHoldingHeart />,
      },
      { label: "Health Records", path: "/health-records", icon: <FaFileAlt /> },
    ],
    doctor: [
      { label: "Dashboard", path: "/dashboard", icon: <FaTachometerAlt /> },
      { label: "Appointments", path: "/appointments", icon: <FaFileAlt /> },
      {
        label: "Patient History",
        path: "/patient-history",
        icon: <FaUserMd />,
      },
    ],
    "blood-donor": [
      { label: "Dashboard", path: "/dashboard", icon: <FaTachometerAlt /> },
      {
        label: "Donation Requests",
        path: "/donation-requests",
        icon: <FaHandHoldingHeart />,
      },
    ],
    admin: [
      { label: "Dashboard", path: "/dashboard", icon: <FaTachometerAlt /> },
      { label: "Analytics", path: "/analytics", icon: <FaTachometerAlt /> },
    ],
  };

  return (
    <aside className="w-64 bg-gray-800 text-white h-auto shadow-lg m-2 rounded-md">
      <nav className="py-4 px-4">
        <ul className="flex flex-col gap-4 justify-center items-start">
          {menuItems[userRole]?.map((item) => (
            <li
              key={item.path}
              className={`${
                location.pathname === item.path
                  ? "bg-gray-800 text-white"
                  : "text-gray-300"
              } hover:bg-gray-700 hover:text-white rounded-lg transition-all duration-300`}
            >
              <Link
                to={item.path}
                className="flex items-center gap-4 p-3 text-lg font-medium"
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
