import React from "react";

const RoleBadge = ({ role }) => {
  let roleStyle = "bg-gray-300 text-gray-800"; // Default role

  if (role === "admin") roleStyle = "bg-red-500 text-white";
  if (role === "doctor") roleStyle = "bg-blue-500 text-white";
  if (role === "donor") roleStyle = "bg-green-500 text-white";
  if (role === "user") roleStyle = "bg-yellow-500 text-black";

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-semibold ${roleStyle}`}
    >
      {role}
    </span>
  );
};

export default RoleBadge;
