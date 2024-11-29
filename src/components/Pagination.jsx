import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex justify-center space-x-2">
      <button
        className="btn btn-ghost"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`btn ${
            page === currentPage ? "btn-primary" : "btn-ghost"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className="btn btn-ghost"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
