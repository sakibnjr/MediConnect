import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/Button"; // Assuming Button component exists
import { toast } from "react-toastify"; // For notifications (optional)
import { FiCheckCircle, FiXCircle } from "react-icons/fi"; // Icons for Accept/Reject

const DonationRequestPage = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      bloodType: "O+",
      quantity: "500 ml",
      location: "New York, NY",
      urgency: "Urgent",
      status: "Pending",
    },
    {
      id: 2,
      name: "Robert Smith",
      bloodType: "A-",
      quantity: "450 ml",
      location: "Los Angeles, CA",
      urgency: "Normal",
      status: "Pending",
    },
    {
      id: 3,
      name: "Lisa Brown",
      bloodType: "B+",
      quantity: "500 ml",
      location: "Chicago, IL",
      urgency: "Critical",
      status: "Pending",
    },
  ]);

  const handleAcceptRequest = (id) => {
    setRequests(
      requests.map((request) =>
        request.id === id ? { ...request, status: "Accepted" } : request
      )
    );
    toast.success("You have accepted the blood donation request.");
  };

  const handleRejectRequest = (id) => {
    setRequests(
      requests.map((request) =>
        request.id === id ? { ...request, status: "Rejected" } : request
      )
    );
    toast.error("You have rejected the blood donation request.");
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-r from-blue-100 to-indigo-200 p-6">
      <h1 className="text-4xl font-bold text-center text-indigo-800 mb-8">
        Active Blood Donation Requests
      </h1>

      {/* List of Requests */}
      <section className="space-y-6">
        {requests.map((request) => (
          <motion.div
            key={request.id}
            className="bg-white p-6 rounded-xl shadow-lg transition-all hover:shadow-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-gray-800">
                {request.name}
              </h2>
              <span
                className={`px-3 py-1 rounded-full text-white font-semibold ${
                  request.urgency === "Critical"
                    ? "bg-red-500"
                    : request.urgency === "Urgent"
                    ? "bg-yellow-500"
                    : "bg-green-500"
                }`}
              >
                {request.urgency}
              </span>
            </div>

            <div className="mt-4 space-y-2 text-gray-600">
              <p>
                <strong>Blood Type:</strong> {request.bloodType}
              </p>
              <p>
                <strong>Quantity Needed:</strong> {request.quantity}
              </p>
              <p>
                <strong>Location:</strong> {request.location}
              </p>
            </div>

            {/* Buttons for Accept/Reject */}
            <div className="mt-6 flex justify-between items-center">
              <div className="flex space-x-4">
                <Button
                  text="Accept Request"
                  className="bg-green-600 text-white rounded-lg py-2 px-4 shadow-lg transition-transform transform hover:scale-105"
                  onClick={() => handleAcceptRequest(request.id)}
                  disabled={request.status !== "Pending"}
                >
                  <FiCheckCircle className="mr-2" />
                  Accept
                </Button>

                <Button
                  text="Reject Request"
                  className="bg-red-600 text-white rounded-lg py-2 px-4 shadow-lg transition-transform transform hover:scale-105"
                  onClick={() => handleRejectRequest(request.id)}
                  disabled={request.status !== "Pending"}
                >
                  <FiXCircle className="mr-2" />
                  Reject
                </Button>
              </div>

              {/* Status */}
              {request.status !== "Pending" && (
                <div className="text-lg font-semibold text-gray-800">
                  Status:{" "}
                  <span
                    className={`${
                      request.status === "Accepted"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {request.status}
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default DonationRequestPage;
