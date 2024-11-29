import React from "react";
import { useUser } from "../contexts/UserContext";

const UserAuthControl = () => {
  const { isAuthenticated, userRole, login, logout } = useUser();

  const handleLogin = (role) => {
    login(role);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 rounded-lg">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">
            {isAuthenticated ? "Welcome Back!" : "Please Log In"}
          </h2>
          {isAuthenticated && (
            <p className="mt-2 text-gray-500">Hello, {userRole}!</p>
          )}
        </div>

        {/* If authenticated, show logout, else show login buttons */}
        <div className="space-y-4">
          {isAuthenticated ? (
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={logout}
                className="btn btn-outline btn-error w-full"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={() => handleLogin("patient")}
                className="btn btn-neutral w-full"
              >
                Login as User
              </button>
              <button
                onClick={() => handleLogin("doctor")}
                className="btn btn-success w-full"
              >
                Login as Doctor
              </button>
              <button
                onClick={() => handleLogin("blood-donor")}
                className="btn btn-accent w-full"
              >
                Login as Blood Donor
              </button>
              <button
                onClick={() => handleLogin("admin")}
                className="btn btn-warning w-full"
              >
                Login as Admin
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserAuthControl;
