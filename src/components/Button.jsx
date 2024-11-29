import React from "react";

const Button = ({ label, onClick, className, isLoading, icon }) => {
  return (
    <button
      className={`btn ${className}`}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <span className="loading loading-spinner loading-sm"></span>
      ) : (
        <>
          {icon && <span className="mr-2">{icon}</span>}
          {label}
        </>
      )}
    </button>
  );
};

export default Button;
