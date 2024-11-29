import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const HealthRecord = () => {
  const weightData = [
    { month: "Jan", weight: 70 },
    { month: "Feb", weight: 72 },
    { month: "Mar", weight: 71 },
    { month: "Apr", weight: 69 },
    { month: "May", weight: 68 },
    { month: "Jun", weight: 67 },
  ];

  const bloodPressureData = [
    { day: "Mon", systolic: 120, diastolic: 80 },
    { day: "Tue", systolic: 122, diastolic: 82 },
    { day: "Wed", systolic: 118, diastolic: 78 },
    { day: "Thu", systolic: 124, diastolic: 84 },
    { day: "Fri", systolic: 119, diastolic: 79 },
  ];

  const activityData = [
    { activity: "Walking", hours: 5 },
    { activity: "Running", hours: 2 },
    { activity: "Cycling", hours: 3 },
    { activity: "Gym", hours: 4 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-6">
      {/* Personal Info Section */}
      <div className="bg-white p-6 rounded-md shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Health Record</h2>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
            <p className="text-sm text-gray-500">Name:</p>
            <p className="font-medium">John Doe</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
            <p className="text-sm text-gray-500">Age:</p>
            <p className="font-medium">32</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
            <p className="text-sm text-gray-500">Height:</p>
            <p className="font-medium">175 cm</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
            <p className="text-sm text-gray-500">Weight:</p>
            <p className="font-medium">68 kg</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
            <p className="text-sm text-gray-500">Blood Group:</p>
            <p className="font-medium">O+</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
            <p className="text-sm text-gray-500">Allergies:</p>
            <p className="font-medium">None</p>
          </div>
        </div>
      </div>

      {/* Visualization Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Weight Trends */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-4">Weight Trends</h3>
          <LineChart width={400} height={250} data={weightData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="weight" stroke="#8884d8" />
          </LineChart>
        </div>

        {/* Blood Pressure Levels */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-4">Blood Pressure Levels</h3>
          <BarChart width={400} height={250} data={bloodPressureData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="systolic" fill="#82ca9d" />
            <Bar dataKey="diastolic" fill="#8884d8" />
          </BarChart>
        </div>

        {/* Activity Levels */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-4">Activity Levels</h3>
          <PieChart width={400} height={250}>
            <Pie
              data={activityData}
              dataKey="hours"
              nameKey="activity"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {activityData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default HealthRecord;
