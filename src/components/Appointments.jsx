import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // For navigation (optional)
import {
  FaCheckCircle,
  FaCalendarAlt,
  FaRegCalendarAlt,
  FaTimesCircle,
} from "react-icons/fa"; // Icons
import Button from "../components/Button"; // For Action Buttons
import { toast } from "react-toastify"; // For notifications (optional)
import { motion } from "framer-motion"; // For Animations

const Appointments = () => {
  const navigate = useNavigate(); // For navigating to other pages if needed
  const [appointments, setAppointments] = useState([]); // Store appointments data

  // Mock data for appointments (replace with actual API call later)
  useEffect(() => {
    setAppointments([
      {
        id: 1,
        patientName: "John Doe",
        appointmentDate: "2024-12-01",
        appointmentTime: "10:00 AM",
        status: "Scheduled",
      },
      {
        id: 2,
        patientName: "Jane Smith",
        appointmentDate: "2024-12-02",
        appointmentTime: "02:00 PM",
        status: "Scheduled",
      },
      {
        id: 3,
        patientName: "Charlie Brown",
        appointmentDate: "2024-12-03",
        appointmentTime: "09:00 AM",
        status: "Scheduled",
      },
    ]);
  }, []);

  // Handle status updates (Confirm, Reschedule, or Cancel)
  const handleStatusUpdate = (id, action) => {
    const updatedAppointments = appointments.map((appointment) =>
      appointment.id === id ? { ...appointment, status: action } : appointment
    );
    setAppointments(updatedAppointments);
    toast.success(`Appointment ${action} successfully!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-600 p-8 rounded-md">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        Appointments
      </h2>

      {/* Appointment List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {appointments.map((appointment) => (
          <motion.div
            key={appointment.id}
            className="bg-white p-6 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-4 mb-4">
              <FaRegCalendarAlt className="text-xl text-indigo-600" />
              <h3 className="text-xl font-semibold">
                {appointment.patientName}
              </h3>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <FaCalendarAlt className="text-lg text-gray-500" />
              <span className="text-gray-600">
                {appointment.appointmentDate} at {appointment.appointmentTime}
              </span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <span
                className={`${
                  appointment.status === "Scheduled"
                    ? "bg-yellow-200 text-yellow-800"
                    : appointment.status === "Confirmed"
                    ? "bg-green-200 text-green-800"
                    : "bg-red-200 text-red-800"
                } text-sm font-semibold py-1 px-3 rounded-full`}
              >
                {appointment.status}
              </span>
            </div>

            <div className="flex justify-end mt-4 space-x-2">
              {appointment.status === "Scheduled" && (
                <>
                  <Button
                    text="Confirm"
                    className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
                    onClick={() =>
                      handleStatusUpdate(appointment.id, "Confirmed")
                    }
                  />
                  <Button
                    text="Cancel"
                    className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
                    onClick={() =>
                      handleStatusUpdate(appointment.id, "Canceled")
                    }
                  />
                </>
              )}
              {appointment.status === "Confirmed" && (
                <Button
                  text="Reschedule"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                  onClick={() =>
                    handleStatusUpdate(appointment.id, "Rescheduled")
                  }
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Appointments;
