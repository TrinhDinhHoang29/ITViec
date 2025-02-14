import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";



const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageItems = [];

  if (totalPages > 5) {
    pageItems.push(
      <div className={`page ${currentPage ===1&&"current-page"}`} onClick={() => onPageChange(1)}>
        1
      </div>
    );

    if (currentPage > 4) {
      pageItems.push(<div className="page">...</div>);
    }

    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) {
      pageItems.push(
        <div className={`page ${currentPage ===i&&"current-page"}`} onClick={() => onPageChange(i)}>
        {i}
      </div>
      );
    }

    if (currentPage < totalPages - 2) {
      pageItems.push(<div className="page">...</div>);
    }

    pageItems.push(
        <div className={`page ${currentPage ===totalPages&&"current-page"}`} onClick={() => onPageChange(totalPages)}>
        {totalPages}
      </div>
    );
  } else {
    for (let i = 1; i <= totalPages; i++) {
      pageItems.push(
        <div className={`page ${currentPage ===i&&"current-page"}`} onClick={() => onPageChange(i)}>
        {i}
      </div>
      );
    }
  }

    return (
    <>
        <nav className="d-flex gap-2">
        {currentPage >1 &&(
            <div className="page" onClick={()=>onPageChange(currentPage-1)}>
                <FontAwesomeIcon icon={faAngleLeft}/>
            </div>
        )}
        {
            pageItems
        }
         {currentPage <totalPages &&(
            <div className="page" onClick={()=>onPageChange(currentPage+1)}>
                <FontAwesomeIcon icon={faAngleRight}/>
            </div>
        )}
        </nav>
    </>
  );
};

export default CustomPagination;
