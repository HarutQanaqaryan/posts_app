import { NavLink, useLocation } from "react-router-dom";
import "../assets/styles/pagination.css";

export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const url = useLocation();
  const pageNums = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNums.push(i);
  }

  return (
    <div className="pagination">
      <ul className="pagination-block">
        {pageNums.map((num) => (
          <li
            key={num}
            className="pagination-item"
            onClick={() => paginate(num)}
          >
            <NavLink to={`${url.pathname}`} className="pagination-item_link">
              {num}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
