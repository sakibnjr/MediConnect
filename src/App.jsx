import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home"; // Home page
import Login from "./pages/Login"; // Login page
import Register from "./pages/Register"; // Register page
import Profile from "./pages/Profile"; // Profile page
import Dashboard from "./pages/Dashboard"; // Dashboard page
import DoctorSearch from "./pages/DoctorSearch"; // Doctor Search page
import BloodRequest from "./pages/BloodRequest"; // Blood Request page
import Emergency from "./pages/Emergency"; // Emergency page
import Community from "./pages/Community"; // Community page
import Analytics from "./pages/Analytics"; // Analytics page
import Header from "./components/Header"; // Header component
import Footer from "./components/Footer"; // Footer component
import Sidebar from "./components/Sidebar"; // Sidebar component
import Appointments from "./components/Appointments";
import PatientHistory from "./components/PatientHistory";
import DoctorProfile from "./pages/DoctorProfile";
import HealthRecord from "./pages/HealthRecords";
import BloodDonationRequest from "./pages/BloodDonationRequest";
import UserManagement from "./components/Admin/UserManagement";
import { UserProvider, useUser } from "./contexts/UserContext"; // UserContext

const App = () => {
  return (
    <UserProvider>
      <Router>
        <ToastContainer />

        <Layout />
      </Router>
    </UserProvider>
  );
};

// Layout component to structure Header, Sidebar, and Content area
const Layout = () => {
  const { isAuthenticated, userRole } = useUser(); // Get the context values for authentication and role

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header isAuthenticated={isAuthenticated} userRole={userRole} />

      <div className="flex flex-grow">
        {/* Sidebar */}
        {isAuthenticated && <Sidebar userRole={userRole} />}

        {/* Main Content */}
        <main className="flex-grow p-6 bg-gray-100 rounded-md m-4">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected User-Specific Routes */}
            {isAuthenticated && (
              <>
                <Route path="/profile" element={<Profile />} />
                <Route
                  path="/dashboard"
                  element={<Dashboard userRole={userRole} />}
                />
                <Route path="/doctor-search" element={<DoctorSearch />} />
                <Route path="/doctor-profile/:id" element={<DoctorProfile />} />
                <Route path="/blood-request" element={<BloodRequest />} />
                <Route path="/emergency" element={<Emergency />} />
                <Route path="/appointments" element={<Appointments />} />
                <Route path="/patient-history" element={<PatientHistory />} />
                <Route path="/health-records" element={<HealthRecord />} />
                <Route
                  path="/donation-requests"
                  element={<BloodDonationRequest />}
                />
              </>
            )}
            <Route path="/community" element={<Community />} />

            {/* Admin Route */}
            {userRole === "admin" && (
              <>
                <Route path="/analytics" element={<Analytics />} />

                <Route path="/user-management" element={<UserManagement />} />
              </>
            )}
          </Routes>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
