import React from "react";

const Loader = ({ size = "medium", message = "Loading..." }) => {
  let loaderSizeClass = "w-8 h-8"; // Default size

  if (size === "large") loaderSizeClass = "w-16 h-16";
  if (size === "small") loaderSizeClass = "w-4 h-4";

  return (
    <div className="flex justify-center items-center space-x-2">
      <div className={`loading-spinner ${loaderSizeClass}`}></div>
      <span>{message}</span>
    </div>
  );
};

export default Loader;
