import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample data for demonstration
const sampleData = [
  {
    date: "2024-01-01",
    patients: 400,
    donors: 240,
    appointments: 300,
    visits: 150,
    donations: 100,
  },
  {
    date: "2024-01-02",
    patients: 300,
    donors: 139,
    appointments: 200,
    visits: 120,
    donations: 90,
  },
  {
    date: "2024-01-03",
    patients: 200,
    donors: 980,
    appointments: 250,
    visits: 180,
    donations: 150,
  },
  {
    date: "2024-01-04",
    patients: 278,
    donors: 390,
    appointments: 350,
    visits: 200,
    donations: 120,
  },
  {
    date: "2024-01-05",
    patients: 189,
    donors: 480,
    appointments: 400,
    visits: 220,
    donations: 200,
  },
];

const Analytics = ({ data = sampleData }) => {
  return (
    <div className="bg-base-100 p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-bold mb-4">Analytics Overview</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="patients"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="donors" stroke="#82ca9d" />
          <Line type="monotone" dataKey="appointments" stroke="#ff7300" />
          <Line type="monotone" dataKey="visits" stroke="#ff0000" />
          <Line type="monotone" dataKey="donations" stroke="#00ff00" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Analytics;
