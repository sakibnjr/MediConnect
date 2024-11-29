import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import { FaCalendarCheck, FaBell, FaUserMd, FaChartLine } from "react-icons/fa";
import Button from "./Button"; // Import Button component
import Notification from "./Notification"; // Import Notification component
import Analytics from "./Analytics"; // Import Analytics component
import { toast } from "react-toastify"; // For notifications (optional)
import { motion } from "framer-motion"; // For animations

const DoctorDashboard = () => {
  const navigate = useNavigate(); // For navigation

  // State to hold data
  const [appointments, setAppointments] = useState([]);
  const [patients, setPatients] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [recentActivities, setRecentActivities] = useState([]);

  // Mock data for doctor dashboard (replace with real API calls later)
  useEffect(() => {
    setAppointments([
      {
        id: 1,
        patientName: "John Doe",
        date: "2024-01-15",
        reason: "Check-up",
        status: "Scheduled",
      },
      {
        id: 2,
        patientName: "Jane Smith",
        date: "2024-01-20",
        reason: "Consultation",
        status: "Scheduled",
      },
    ]);

    setPatients([
      {
        id: 1,
        name: "John Doe",
        age: 45,
        medicalHistory: "Hypertension, Asthma",
      },
      {
        id: 2,
        name: "Jane Smith",
        age: 30,
        medicalHistory: "Diabetes, Obesity",
      },
    ]);

    setNotifications([
      { id: 1, message: "New patient consultation request." },
      { id: 2, message: "Patient John Doe has a new check-up appointment." },
    ]);

    setRecentActivities([
      { id: 1, activity: "Completed consultation with patient John Doe." },
      { id: 2, activity: "Prescribed medication for patient Jane Smith." },
    ]);
  }, []);

  // Handle view patient details
  const viewPatientDetails = (patientId) => {
    navigate(`/patient/${patientId}`);
  };

  // Handle appointment scheduling
  const scheduleAppointment = () => {
    toast.success("Appointment scheduled successfully!");
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-md">
      <h2 className="text-3xl font-semibold text-white mb-8">
        Doctor Dashboard
      </h2>

      {/* Upcoming Appointments */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <motion.div
          className="bg-white text-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">
            Upcoming Appointments
          </h3>
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="flex justify-between bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200 transition"
              >
                <div className="flex flex-col">
                  <span className="font-semibold text-blue-600">
                    {appointment.patientName}
                  </span>
                  <span className="text-sm text-gray-500">
                    Date: {appointment.date}
                  </span>
                  <span className="text-sm text-gray-500">
                    Reason: {appointment.reason}
                  </span>
                  <span className="text-sm text-gray-500">
                    Status: {appointment.status}
                  </span>
                </div>
                <Button
                  text="View Details"
                  onClick={() => viewPatientDetails(appointment.id)}
                  className="bg-blue-500 text-white"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Notifications */}
        <motion.div
          className="bg-white text-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">
            Notifications
          </h3>
          <div className="space-y-4">
            {notifications.map((notification) => (
              <Notification
                key={notification.id}
                message={notification.message}
                className="bg-gray-100 p-4 rounded-lg shadow-md"
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Recent Activities */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <motion.div
          className="bg-white text-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">
            Recent Activities
          </h3>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="bg-gray-100 p-4 rounded-lg shadow-md"
              >
                <span>{activity.activity}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Patient Health Analytics */}
        <motion.div
          className="bg-white text-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">
            Patient Health Analytics
          </h3>
          <Analytics />
        </motion.div>
      </section>

      {/* Schedule New Appointment */}
      <div className="flex justify-end mt-6">
        <Button
          text="Schedule New Appointment"
          className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
          onClick={scheduleAppointment}
        />
      </div>
    </div>
  );
};

export default DoctorDashboard;
