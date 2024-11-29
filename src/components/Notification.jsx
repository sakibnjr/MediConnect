import React, { useState } from "react";
import { FaBell, FaTimes } from "react-icons/fa"; // Notification icon and Close icon
import { motion } from "framer-motion"; // Animation library for smooth transitions

const Notification = ({ message, type = "info", onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  // Define color scheme based on notification type
  const notificationStyles = {
    info: "bg-blue-500 text-white",
    success: "bg-green-500 text-white",
    warning: "bg-yellow-500 text-white",
    error: "bg-red-500 text-white",
  };

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  // Only render notification if visible
  if (!isVisible) return null;

  return (
    <motion.div
      className={`p-4 rounded-lg shadow-lg flex items-center ${notificationStyles[type]} mb-4`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mr-4">
        <FaBell className="text-2xl" />
      </div>
      <div className="flex-grow">{message}</div>
      <button
        onClick={handleClose}
        className="ml-4 p-1 text-white hover:text-gray-300"
      >
        <FaTimes />
      </button>
    </motion.div>
  );
};

export default Notification;
