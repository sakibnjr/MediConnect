import React from "react";

const DoctorCard = ({ name, specialty, location, rating, onClick }) => {
  return (
    <div
      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <h4 className="text-lg font-semibold">{name}</h4>
      <p className="text-sm text-gray-600">{specialty}</p>
      <p className="text-sm text-gray-600">{location}</p>
      <div className="flex items-center mt-2">
        <span className="text-yellow-500">★</span>
        <span className="ml-1 text-sm text-gray-600">{rating}</span>
      </div>
    </div>
  );
};

export default DoctorCard;
