import React, { useState, useEffect } from "react";
import Header from "../components/Header"; // Import Header
import Footer from "../components/Footer"; // Import Footer
import Sidebar from "../components/Sidebar"; // Import Sidebar
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"; // Import Recharts components

const Analytics = () => {
  // Sample data for analytics (this can be fetched from API)
  const [data, setData] = useState([
    { name: "Jan", posts: 40, appointments: 24, bloodRequests: 30 },
    { name: "Feb", posts: 45, appointments: 30, bloodRequests: 35 },
    { name: "Mar", posts: 50, appointments: 28, bloodRequests: 32 },
    { name: "Apr", posts: 60, appointments: 40, bloodRequests: 50 },
    { name: "May", posts: 70, appointments: 55, bloodRequests: 60 },
    { name: "Jun", posts: 85, appointments: 65, bloodRequests: 75 },
  ]);

  // You can replace the above static data with real-time data fetched from your backend API.

  useEffect(() => {
    // Simulate fetching analytics data (you can fetch from API here)
    // Example: fetchDataFromAPI().then(response => setData(response));
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      {/* <Header /> */}
      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow p-6 bg-gray-100">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold">Health Analytics</h2>
            <p className="text-gray-600">
              Monitor and track health-related statistics.
            </p>

            {/* Analytics Charts */}
            <div className="mt-8 bg-white p-6 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Health Data Overview
              </h3>

              {/* Line Chart for Posts, Appointments, and Blood Requests */}
              <div className="flex justify-center">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="posts"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="appointments"
                      stroke="#82ca9d"
                    />
                    <Line
                      type="monotone"
                      dataKey="bloodRequests"
                      stroke="#ff7300"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Additional analytics sections */}
            <div className="mt-8 bg-white p-6 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-4">Other Insights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-200 p-4 rounded-md shadow-md">
                  <h4 className="text-lg font-semibold">Total Posts</h4>
                  <p className="text-xl">235</p>
                </div>
                <div className="bg-gray-200 p-4 rounded-md shadow-md">
                  <h4 className="text-lg font-semibold">Total Appointments</h4>
                  <p className="text-xl">128</p>
                </div>
                <div className="bg-gray-200 p-4 rounded-md shadow-md">
                  <h4 className="text-lg font-semibold">Blood Requests</h4>
                  <p className="text-xl">72</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Analytics;
