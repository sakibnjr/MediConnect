import React from "react";

const TopBar = () => {
  return (
    <header className="bg-white shadow-md flex justify-between items-center p-4">
      <div className="text-xl font-semibold text-gray-800">
        MediConnect Admin
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="font-medium">Welcome, Admin</span>
        </div>
        <button className="btn btn-primary">Logout</button>
      </div>
    </header>
  );
};

export default TopBar;
