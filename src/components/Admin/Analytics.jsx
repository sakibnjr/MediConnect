import React from "react";

const Analytics = ({ data }) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>Total Users</div>
        <div className="font-semibold text-2xl">{data.totalUsers}</div>
      </div>
      <div className="flex justify-between items-center">
        <div>Active Donors</div>
        <div className="font-semibold text-2xl">{data.activeDonors}</div>
      </div>
      <div className="flex justify-between items-center">
        <div>Total Donations</div>
        <div className="font-semibold text-2xl">{data.totalDonations}</div>
      </div>
    </div>
  );
};

export default Analytics;
