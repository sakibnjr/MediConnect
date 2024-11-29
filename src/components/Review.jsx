import React from "react";

const Review = ({ user, rating, comment, date }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-4">
      <div className="flex items-center space-x-2">
        <img
          src="https://avatar.iran.liara.run/public/7"
          alt=""
          className="size-10"
        />
        <div>
          <h4 className="font-semibold">{user}</h4>
          <p className="text-yellow-500">{Array(rating).fill("★").join("")}</p>
        </div>
      </div>
      <p className="text-gray-600 mt-2">{comment}</p>
      <p className="text-gray-400 text-sm mt-1">Reviewed on: {date}</p>
    </div>
  );
};

export default Review;
