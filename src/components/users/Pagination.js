import React from "react";

const Pagination = ({ showPerPage, totalUserPage, paginate }) => {
  const pagenumbers = [];
  for (let i = 1; i <= Math.ceil(totalUserPage / showPerPage); i++) {
    pagenumbers.push(i);
  }

  return (
    <nav className="pagination">
      {pagenumbers.map(number => (
        <li key={number} className="page-item">
          <button onClick={() => paginate(number)} className="page-link">
            {number}
          </button>
        </li>
      ))}
    </nav>
  );
};

export default Pagination;
