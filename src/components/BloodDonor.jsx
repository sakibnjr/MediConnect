import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button"; // Assuming Button component exists
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"; // For the bar chart

// Donor Profile Section
const DonorProfile = ({ profile }) => (
  <motion.div
    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
    whileHover={{ scale: 1.05 }}
  >
    <h2 className="text-2xl font-semibold mb-4">Donor Profile</h2>
    <div className="space-y-2">
      <p>
        <strong>Name:</strong> {profile.name}
      </p>
      <p>
        <strong>Email:</strong> {profile.email}
      </p>
      <p>
        <strong>Blood Type:</strong> {profile.bloodType}
      </p>
      <p>
        <strong>Phone:</strong> {profile.phone}
      </p>
    </div>
    <div className="mt-4">
      <Button text="Edit Profile" className="bg-blue-500 text-white" />
    </div>
  </motion.div>
);

// Blood Donation Opportunities Section
const BloodDonationOpportunities = ({ opportunities }) => (
  <motion.div
    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
    whileHover={{ scale: 1.05 }}
  >
    <h2 className="text-2xl font-semibold mb-4">
      Upcoming Blood Donation Drives
    </h2>
    {opportunities.length > 0 ? (
      <ul className="space-y-4">
        {opportunities.map((opportunity) => (
          <li key={opportunity.id} className="border-b pb-4">
            <p>
              <strong>Location:</strong> {opportunity.location}
            </p>
            <p>
              <strong>Date:</strong> {opportunity.date}
            </p>
            <p>
              <strong>Blood Type Required:</strong> {opportunity.bloodType}
            </p>
            <Button
              text="Register to Donate"
              className="bg-red-500 text-white"
            />
          </li>
        ))}
      </ul>
    ) : (
      <p>No upcoming blood donation drives.</p>
    )}
  </motion.div>
);

// Donation History Section
const DonationHistory = ({ donations }) => (
  <motion.div
    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
    whileHover={{ scale: 1.05 }}
  >
    <h2 className="text-2xl font-semibold mb-4">Donation History</h2>
    {donations.length > 0 ? (
      <ul className="space-y-4">
        {donations.map((donation) => (
          <li key={donation.id} className="border-b pb-4">
            <p>
              <strong>Date:</strong> {donation.date}
            </p>
            <p>
              <strong>Location:</strong> {donation.location}
            </p>
            <p>
              <strong>Blood Type Donated:</strong> {donation.bloodType}
            </p>
            <p>
              <strong>Amount Donated:</strong> {donation.amount}
            </p>
          </li>
        ))}
      </ul>
    ) : (
      <p>No past donations available.</p>
    )}
  </motion.div>
);

// Notifications Section
const Notifications = ({ notifications }) => (
  <motion.div
    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
    whileHover={{ scale: 1.05 }}
  >
    <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
    {notifications.length > 0 ? (
      <ul className="space-y-4">
        {notifications.map((notification) => (
          <li key={notification.id} className="border-b pb-4">
            <p>
              <strong>Message:</strong> {notification.message}
            </p>
            <Button text="Respond" className="bg-yellow-500 text-white" />
          </li>
        ))}
      </ul>
    ) : (
      <p>No notifications.</p>
    )}
  </motion.div>
);

// Blood Donor Dashboard Main Component
const BloodDonorDashboard = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    bloodType: "O+",
    phone: "+1234567890",
  });

  const [donationOpportunities, setDonationOpportunities] = useState([
    { id: 1, location: "New York", date: "2024-12-05", bloodType: "O+" },
    { id: 2, location: "Los Angeles", date: "2024-12-15", bloodType: "A-" },
  ]);

  const [donationHistory, setDonationHistory] = useState([
    {
      id: 1,
      date: "2024-11-10",
      location: "New York",
      bloodType: "O+",
      amount: "500 ml",
    },
    {
      id: 2,
      date: "2024-09-15",
      location: "Los Angeles",
      bloodType: "A-",
      amount: "450 ml",
    },
  ]);

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "Urgent blood donation request for O+ blood in your area!",
    },
    { id: 2, message: "New blood drive scheduled near you. Sign up now!" },
  ]);

  // Chart data (for visualization)
  const chartData = [
    { name: "O+", value: 2 },
    { name: "A-", value: 1 },
    { name: "B+", value: 3 },
    { name: "AB-", value: 1 },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold mb-6 text-center">
        Welcome to Your Dashboard, {profile.name}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Donor Profile */}
        <div className="lg:col-span-1">
          <DonorProfile profile={profile} />
        </div>

        {/* Blood Donation Opportunities */}
        <div className="lg:col-span-1">
          <BloodDonationOpportunities opportunities={donationOpportunities} />
        </div>

        {/* Donation History */}
        <div className="lg:col-span-1">
          <DonationHistory donations={donationHistory} />
        </div>
      </div>

      {/* Notifications Section */}
      <div className="mt-8">
        <Notifications notifications={notifications} />
      </div>

      {/* Donation Statistics (BarChart) */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Donation Statistics</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BloodDonorDashboard;
