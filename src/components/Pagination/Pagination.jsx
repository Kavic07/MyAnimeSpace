import React from "react";
import "./Pagination.css";

const Pagination = ({ currentPage, lastPage, onPageChange }) => {
  return (
    <div className="pagination-container">
      <button
        className="pagination-btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>
        Page {currentPage} of {lastPage}
      </span>
      <button
        className="pagination-btn2"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === lastPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
