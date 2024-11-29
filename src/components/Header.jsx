import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUserCircle,
  FaSignOutAlt,
  FaHome,
  FaUserMd,
  FaHandHoldingHeart,
  FaCog,
} from "react-icons/fa";

import UserAuthControl from "./UserAuthControl";

const Header = ({ isAuthenticated, userRole }) => {
  const [showLoginRole, setShowLoginRole] = useState(false);
  function showLogin() {
    setShowLoginRole((showLoginRole) => !showLoginRole);
  }
  function hideLogin() {
    setShowLoginRole(false);
  }
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-md rounded-b-lg">
      <div className="container mx-auto w-4/5 flex items-center justify-between py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-semibold hover:text-gray-200">
            <span className="text-2xl font-bold text-yellow-400">
              MediConnect
            </span>
          </Link>
        </div>
        <button
          onClick={showLogin}
          className="border-l-2 text-rose-500 px-2 border-x-2 rounded-md absolute right-10"
        >
          Bypass Login
        </button>

        {showLoginRole && (
          <div className="absolute z-auto top-20 right-10">
            <UserAuthControl />

            <button
              className="absolute z-10 border-2 rounded-full px-2 text-4xl text-blue-500 hover:text-rose-600 top-10 left-48"
              onClick={hideLogin}
            >
              X
            </button>
          </div>
        )}

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/"
                className="flex items-center gap-2 text-lg font-medium hover:text-yellow-200 transition"
              >
                <FaHome size={20} />
                Home
              </Link>
            </li>

            {userRole === "patient" && (
              <li>
                <Link
                  to="/doctor-search"
                  className="flex items-center gap-2 text-lg font-medium hover:text-yellow-200 transition"
                >
                  <FaUserMd size={20} />
                  Find Doctors
                </Link>
              </li>
            )}

            {userRole === "blood-donor" && (
              <li>
                <Link
                  to="/blood-request"
                  className="flex items-center gap-2 text-lg font-medium hover:text-yellow-200 transition"
                >
                  <FaHandHoldingHeart size={20} />
                  Request Blood
                </Link>
              </li>
            )}

            {userRole === "doctor" && (
              <li>
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 text-lg font-medium hover:text-yellow-200 transition"
                >
                  <FaUserMd size={20} />
                  My Dashboard
                </Link>
              </li>
            )}

            {userRole === "admin" && (
              <li>
                <Link
                  to="/analytics"
                  className="flex items-center gap-2 text-lg font-medium hover:text-yellow-200 transition"
                >
                  <FaCog size={20} />
                  Analytics
                </Link>
              </li>
            )}

            <li>
              <Link
                to="/community"
                className="text-lg font-medium hover:text-yellow-200 transition"
              >
                Community
              </Link>
            </li>
          </ul>
        </div>

        {/* User Section */}
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <FaUserCircle size={30} />
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow-xl menu menu-compact dropdown-content bg-white text-black rounded-lg w-52"
              >
                <li>
                  <Link
                    to="/profile"
                    className="text-gray-700 hover:text-blue-500"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => logout()}
                    className="flex items-center gap-2 text-red-500 hover:text-red-600"
                  >
                    <FaSignOutAlt size={18} />
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link
                to="/login"
                className="btn btn-outline btn-light hover:bg-blue-500 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn btn-primary hover:bg-yellow-400 transition"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
