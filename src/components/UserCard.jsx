import React from "react";
import RoleBadge from "./RoleBadge"; // Import RoleBadge for user role display

const UserCard = ({ name, role, bio, avatar, contactInfo }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 space-y-4">
      <div className="flex items-center space-x-4">
        <img
          src={avatar}
          alt="User Avatar"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <RoleBadge role={role} />
        </div>
      </div>
      <p className="text-gray-600">{bio}</p>
      <div className="space-y-1">
        {contactInfo?.phone && (
          <p className="text-sm text-gray-500">Phone: {contactInfo.phone}</p>
        )}
        {contactInfo?.email && (
          <p className="text-sm text-gray-500">Email: {contactInfo.email}</p>
        )}
      </div>
    </div>
  );
};

export default UserCard;
