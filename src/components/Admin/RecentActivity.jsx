import React from "react";

const RecentActivity = ({ activities }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold mb-4 border-b pb-2">
      Recent Activities
    </h2>
    {activities.length > 0 ? (
      <ul className="space-y-4">
        {activities.map((activity) => (
          <li key={activity.id} className="border-b pb-2 text-sm text-gray-700">
            <p>
              <strong>Activity:</strong> {activity.message}
            </p>
            <p>
              <strong>Time:</strong> {activity.time}
            </p>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-500">No recent activities found.</p>
    )}
  </div>
);

export default RecentActivity;
