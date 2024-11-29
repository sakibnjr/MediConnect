import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaUserCircle,
  FaCalendarAlt,
  FaFileMedical,
  FaHeartbeat,
} from "react-icons/fa";
import Button from "./Button"; // Assume Button component exists

// Animation variants for Framer Motion
const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Example of a component to display the patient's profile
const PatientProfile = ({ profile }) => (
  <motion.div
    variants={cardVariant}
    initial="hidden"
    animate="visible"
    transition={{ duration: 0.5 }}
    className="bg-white p-6 rounded-lg shadow-md"
  >
    <div className="flex items-center mb-4">
      <FaUserCircle className="text-blue-500 text-3xl mr-2" />
      <h2 className="text-xl font-semibold">Patient Profile</h2>
    </div>
    <div className="space-y-2">
      <p>
        <strong>Name:</strong> {profile.name}
      </p>
      <p>
        <strong>Email:</strong> {profile.email}
      </p>
      <p>
        <strong>Age:</strong> {profile.age}
      </p>
      <p>
        <strong>Phone:</strong> {profile.phone}
      </p>
    </div>
    <div className="mt-4">
      <Link to="/edit-profile">
        <Button text="Edit Profile" />
      </Link>
    </div>
  </motion.div>
);

// Example of a component to display appointments
const Appointments = ({ appointments }) => (
  <motion.div
    variants={cardVariant}
    initial="hidden"
    animate="visible"
    transition={{ duration: 0.5, delay: 0.2 }}
    className="bg-white p-6 rounded-lg shadow-md"
  >
    <div className="flex items-center mb-4">
      <FaCalendarAlt className="text-green-500 text-3xl mr-2" />
      <h2 className="text-xl font-semibold">Upcoming Appointments</h2>
    </div>
    {appointments.length > 0 ? (
      <ul className="space-y-4">
        {appointments.map((appointment) => (
          <li key={appointment.id} className="border-b pb-4">
            <p>
              <strong>Doctor:</strong> Dr. {appointment.doctorName}
            </p>
            <p>
              <strong>Date:</strong> {appointment.date}
            </p>
            <p>
              <strong>Time:</strong> {appointment.time}
            </p>
          </li>
        ))}
      </ul>
    ) : (
      <p>No upcoming appointments.</p>
    )}
  </motion.div>
);

// Example of a component to display health records
const HealthRecords = ({ records }) => (
  <motion.div
    variants={cardVariant}
    initial="hidden"
    animate="visible"
    transition={{ duration: 0.5, delay: 0.4 }}
    className="bg-white p-6 rounded-lg shadow-md"
  >
    <div className="flex items-center mb-4">
      <FaFileMedical className="text-yellow-500 text-3xl mr-2" />
      <h2 className="text-xl font-semibold">Health Records</h2>
    </div>
    {records.length > 0 ? (
      <ul className="space-y-4">
        {records.map((record, index) => (
          <li key={index} className="border-b pb-4">
            <p>
              <strong>Date:</strong> {record.date}
            </p>
            <p>
              <strong>Details:</strong> {record.details}
            </p>
          </li>
        ))}
      </ul>
    ) : (
      <p>No health records available.</p>
    )}
  </motion.div>
);

// Example of a component for blood donation requests
const BloodDonationRequests = ({ requests }) => (
  <motion.div
    variants={cardVariant}
    initial="hidden"
    animate="visible"
    transition={{ duration: 0.5, delay: 0.6 }}
    className="bg-white p-6 rounded-lg shadow-md"
  >
    <div className="flex items-center mb-4">
      <FaHeartbeat className="text-red-500 text-3xl mr-2" />
      <h2 className="text-xl font-semibold">Blood Donation Requests</h2>
    </div>
    {requests.length > 0 ? (
      <ul className="space-y-4">
        {requests.map((request) => (
          <li key={request.id} className="border-b pb-4">
            <p>
              <strong>Location:</strong> {request.location}
            </p>
            <p>
              <strong>Required Type:</strong> {request.bloodType}
            </p>
            <p>
              <strong>Urgency:</strong> {request.urgency}
            </p>
            <Button text="Donate Now" />
          </li>
        ))}
      </ul>
    ) : (
      <p>No blood donation requests at the moment.</p>
    )}
  </motion.div>
);

// Main Patient Dashboard component
const PatientDashboard = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30,
    phone: "+1234567890",
  });

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctorName: "Jane Smith",
      date: "2024-12-01",
      time: "10:00 AM",
    },
    {
      id: 2,
      doctorName: "Samuel Jackson",
      date: "2024-12-10",
      time: "2:00 PM",
    },
  ]);

  const [healthRecords, setHealthRecords] = useState([
    {
      date: "2024-10-25",
      details: "Routine Checkup: All vitals normal.",
    },
    {
      date: "2024-09-15",
      details: "Blood test: Normal results.",
    },
  ]);

  const [bloodDonationRequests, setBloodDonationRequests] = useState([
    {
      id: 1,
      location: "New York",
      bloodType: "O+",
      urgency: "High",
    },
    {
      id: 2,
      location: "Los Angeles",
      bloodType: "A-",
      urgency: "Medium",
    },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gray-100 p-6"
    >
      <h1 className="text-3xl font-bold mb-6 text-center">
        Welcome to Your Dashboard, {profile.name}
      </h1>

      <div className="grid grid-cols-2 gap-20">
        <PatientProfile profile={profile} />
        <Appointments appointments={appointments} />
        <HealthRecords records={healthRecords} />
        <BloodDonationRequests requests={bloodDonationRequests} />
      </div>
    </motion.div>
  );
};

export default PatientDashboard;
