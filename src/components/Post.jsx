import React from "react";

const Post = ({ title, content, author, date, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
      {image && (
        <img
          src={image}
          alt="Post image"
          className="w-full h-48 object-cover rounded-t-lg"
        />
      )}
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm">
          By {author} on {date}
        </p>
        <p className="text-gray-800">{content}</p>
      </div>
    </div>
  );
};

export default Post;
