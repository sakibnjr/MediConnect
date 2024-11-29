import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Button from "../components/Button"; // Action button
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
import { motion } from "framer-motion"; // For animations

const PatientHistory = () => {
  const [patientHistory, setPatientHistory] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [medications, setMedications] = useState([]);
  const [diagnoses, setDiagnoses] = useState([]);

  // Mock data for patient history
  useEffect(() => {
    setPatientHistory([
      {
        id: 1,
        condition: "Hypertension",
        dateDiagnosed: "2023-03-15",
        treatment: "Lifestyle changes, Antihypertensive drugs",
      },
      {
        id: 2,
        condition: "Asthma",
        dateDiagnosed: "2022-07-10",
        treatment: "Inhalers, Bronchodilators",
      },
    ]);
    setAppointments([
      {
        id: 1,
        date: "2024-01-15",
        reason: "Follow-up for hypertension",
        status: "Completed",
      },
      {
        id: 2,
        date: "2023-12-01",
        reason: "Asthma check-up",
        status: "Completed",
      },
    ]);
    setMedications([
      {
        id: 1,
        name: "Lisinopril",
        dosage: "10mg daily",
        prescribedDate: "2023-03-20",
      },
      {
        id: 2,
        name: "Albuterol",
        dosage: "2 puffs as needed",
        prescribedDate: "2022-07-15",
      },
    ]);
    setDiagnoses([
      {
        id: 1,
        diagnosis: "Hypertension",
        date: "2023-03-15",
        doctor: "Dr. Smith",
      },
      {
        id: 2,
        diagnosis: "Asthma",
        date: "2022-07-10",
        doctor: "Dr. Adams",
      },
    ]);
  }, []);

  // Data for visualizations
  const chartData = [
    { name: "Hypertension", value: 1 },
    { name: "Asthma", value: 2 },
    { name: "Diabetes", value: 1 },
    { name: "Obesity", value: 3 },
  ];

  // Function to handle adding a new diagnosis or medication
  const handleAddRecord = (type) => {
    toast.success(`${type} record added successfully!`);
  };

  return (
    <motion.div
      className="flex min-h-screen flex-col p-6 bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Patient Medical History
      </h2>

      {/* Medical Conditions */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Medical Conditions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {patientHistory.map((condition) => (
            <motion.div
              key={condition.id}
              className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col space-y-2">
                <span className="font-semibold text-lg">
                  {condition.condition}
                </span>
                <span className="text-gray-500">
                  Diagnosed on: {condition.dateDiagnosed}
                </span>
                <span className="text-gray-500">
                  Treatment: {condition.treatment}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Appointments History */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Appointments History</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {appointments.map((appointment) => (
            <motion.div
              key={appointment.id}
              className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col space-y-2">
                <span className="font-semibold text-lg">
                  Date: {appointment.date}
                </span>
                <span className="text-gray-500">
                  Reason: {appointment.reason}
                </span>
                <span
                  className={`text-${
                    appointment.status === "Completed" ? "green" : "red"
                  }-500 font-semibold`}
                >
                  Status: {appointment.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Medications */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Medications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {medications.map((medication) => (
            <motion.div
              key={medication.id}
              className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col space-y-2">
                <span className="font-semibold text-lg">{medication.name}</span>
                <span className="text-gray-500">
                  Dosage: {medication.dosage}
                </span>
                <span className="text-gray-500">
                  Prescribed on: {medication.prescribedDate}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Past Diagnoses */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Past Diagnoses</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {diagnoses.map((diagnosis) => (
            <motion.div
              key={diagnosis.id}
              className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col space-y-2">
                <span className="font-semibold text-lg">
                  {diagnosis.diagnosis}
                </span>
                <span className="text-gray-500">
                  Diagnosed by: {diagnosis.doctor}
                </span>
                <span className="text-gray-500">Date: {diagnosis.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BarChart Visualization */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">
          Condition Frequency Bar Chart
        </h3>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Add New Record */}
      <div className="flex justify-end mt-6">
        <Button
          text="Add New Record"
          className="bg-blue-500 text-white"
          onClick={() => handleAddRecord("Diagnosis")}
        />
      </div>
    </motion.div>
  );
};

export default PatientHistory;
