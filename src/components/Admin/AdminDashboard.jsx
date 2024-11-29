import React, { useState } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import Analytics from "./Analytics";
import UserManagement from "./UserManagement";
import RecentActivity from "./RecentActivity";

const AdminDashboard = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", role: "patient" },
    { id: 2, name: "Jane Smith", role: "donor" },
    { id: 3, name: "Dr. Mike", role: "doctor" },
  ]);

  const [activities, setActivities] = useState([
    {
      id: 1,
      message: "User John Doe created a blood donation request.",
      time: "2024-11-27 14:20",
    },
    {
      id: 2,
      message: "Blood donation drive scheduled in New York.",
      time: "2024-11-26 10:00",
    },
  ]);

  const [analytics, setAnalytics] = useState({
    totalUsers: 1200,
    totalDonations: 4500,
    activeDonors: 800,
  });

  const handleDeleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <div className="min-h-screen flex flex-row bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <TopBar />

        {/* Main Content */}
        <main className="p-6 space-y-8">
          {/* Analytics and User Management Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 border-b pb-2">
                Platform Analytics
              </h2>
              <Analytics data={analytics} />
            </div>
            <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 border-b pb-2">
                User Management
              </h2>
              <UserManagement users={users} onDeleteUser={handleDeleteUser} />
            </div>
          </section>

          {/* Recent Activity Section */}
          <section>
            <RecentActivity activities={activities} />
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
