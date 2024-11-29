import React, { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import {
  FaTint,
  FaMapMarkerAlt,
  FaPhone,
  FaExclamationTriangle,
  FaCalendarAlt,
} from "react-icons/fa";

const BloodRequest = () => {
  // State management for form inputs
  const [bloodType, setBloodType] = useState("");
  const [location, setLocation] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [reason, setReason] = useState("");
  const [isEmergency, setIsEmergency] = useState(false);
  const [date, setDate] = useState("");

  // Handle blood request submission
  const handleRequestSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!bloodType || !location || !contactNumber || !reason || !date) {
      toast.error("Please fill out all fields.");
      return;
    }

    // Simulate a request submission (replace with an actual API call)
    toast.success("Blood request has been submitted successfully!");

    // Reset form fields after submission
    setBloodType("");
    setLocation("");
    setContactNumber("");
    setReason("");
    setIsEmergency(false);
    setDate("");
  };

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-grow">
        <main className="flex-grow p-6 bg-gray-100">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">
              Request Blood Donation
            </h2>
            <p className="text-gray-600 mb-6">
              Fill out the form below to request blood. Mark as emergency if
              needed.
            </p>
            <form onSubmit={handleRequestSubmit} className="space-y-6">
              {/* Blood Type */}
              <div className="flex items-center space-x-3">
                <FaTint className="text-red-600 text-xl" />
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex-grow"
                >
                  <input
                    type="text"
                    placeholder="Enter Blood Type (e.g., O+, A-)"
                    value={bloodType}
                    onChange={(e) => setBloodType(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-red-200"
                  />
                </motion.div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-green-600 text-xl" />
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex-grow"
                >
                  <input
                    type="text"
                    placeholder="Enter Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-green-200"
                  />
                </motion.div>
              </div>

              {/* Contact Number */}
              <div className="flex items-center space-x-3">
                <FaPhone className="text-blue-600 text-xl" />
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex-grow"
                >
                  <input
                    type="text"
                    placeholder="Enter Contact Number"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                  />
                </motion.div>
              </div>

              {/* Date */}
              <div className="flex items-center space-x-3">
                <FaCalendarAlt className="text-purple-600 text-xl" />
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex-grow"
                >
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  />
                </motion.div>
              </div>

              {/* Reason */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <textarea
                    placeholder="Reason for Blood Request"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-gray-200"
                    rows="4"
                  ></textarea>
                </motion.div>
              </div>

              {/* Emergency Checkbox */}
              <div className="flex items-center space-x-3">
                <FaExclamationTriangle className="text-yellow-600 text-xl" />
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={isEmergency}
                      onChange={() => setIsEmergency(!isEmergency)}
                      className="mr-2"
                    />
                    <span className="text-gray-700">Mark as Emergency</span>
                  </label>
                </motion.div>
              </div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white font-semibold py-3 rounded-md shadow-lg hover:bg-red-700 transition"
                >
                  Submit Request
                </button>
              </motion.div>
            </form>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default BloodRequest;
