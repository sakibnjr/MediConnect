import React, { useState } from "react";
import { toast } from "react-toastify";
import Header from "../components/Header"; // Import Header
import Footer from "../components/Footer"; // Import Footer
import Sidebar from "../components/Sidebar"; // Import Sidebar
import Form from "../components/Form"; // Import Form component
import Button from "../components/Button"; // Import Button component

const Emergency = () => {
  // State management for form inputs
  const [emergencyType, setEmergencyType] = useState("");
  const [location, setLocation] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [description, setDescription] = useState("");

  // Handle emergency request submission
  const handleEmergencySubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!emergencyType || !location || !contactNumber || !description) {
      toast.error("Please fill out all fields.");
      return;
    }

    // Simulate an emergency request submission (replace with actual API call)
    toast.success("Emergency request has been submitted successfully!");

    // Reset form fields after submission
    setEmergencyType("");
    setLocation("");
    setContactNumber("");
    setDescription("");
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow p-6 bg-gray-100">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold">
              Request Emergency Services
            </h2>
            <p className="text-gray-600">
              Fill out the form below to request emergency services.
            </p>
            <form onSubmit={handleEmergencySubmit} className="space-y-4 mt-4">
              <Form
                type="text"
                placeholder="Enter Emergency Type (e.g., Accident, Heart Attack)"
                value={emergencyType}
                onChange={(e) => setEmergencyType(e.target.value)}
              />
              <Form
                type="text"
                placeholder="Enter Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <Form
                type="text"
                placeholder="Enter Contact Number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
              <Form
                type="text"
                placeholder="Describe the Emergency"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Button type="submit" text="Submit Emergency Request" />
            </form>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Emergency;
