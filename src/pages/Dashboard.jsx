import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PatientDashboard from "../components/PatientDashboard";
import DoctorDashboard from "../components/DoctorDashboard";
import AdminDashboard from "../components/Admin/AdminDashboard";
import BloodDonorDashboard from "../components/BloodDonor";
import { toast } from "react-toastify";

const Dashboard = ({ userRole }) => {
  const navigate = useNavigate(); // For navigating to other pages
  const [userData, setUserData] = useState(null); // Store user data

  useEffect(() => {
    if (!userRole) {
      // Redirect to login if no user role is provided
      toast.error("User role is not defined. Redirecting to login...");
      navigate("/login");
      return;
    }

    // Simulate API call or data fetch to populate user data
    setUserData({
      name: "John Doe", // Example static data
      role: userRole, // Set role dynamically
    });
  }, [userRole, navigate]);

  // Function to render the appropriate dashboard
  const renderDashboard = () => {
    if (!userData) {
      return <div className="text-center text-lg">Loading...</div>; // Loading state
    }

    switch (userData.role) {
      case "patient":
        return <PatientDashboard />;
      case "doctor":
        return <DoctorDashboard />;
      case "blood-donor":
        return <BloodDonorDashboard />;
      case "admin":
        return <AdminDashboard />;
      default:
        return (
          <div className="text-center text-lg">
            Role not recognized. Please contact support.
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow p-6 bg-gray-100">
        {/* <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">
            Welcome back, {userData?.name || "User"}
          </h2>
        </div> */}

        {/* Render the appropriate dashboard */}
        {renderDashboard()}
      </main>
    </div>
  );
};

export default Dashboard;
