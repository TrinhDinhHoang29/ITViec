import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import FilterModal from "../FilterModal";
const FilterButton = ({ totalFilter }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div
        variant="light"
        className="d-flex align-items-center px-3 border position-relative"
        bsPrefix="toggle"
        style={{
          borderRadius: "10px",
          padding: "10px 30px",
          fontSize: "19px",
          cursor: "pointer",
        }}
        onClick={() => setShow(true)}
      >
        <FontAwesomeIcon icon={faFilter} className="me-2" />
        Filter
        {totalFilter > 0 && (
          <span
            className="position-absolute "
            style={{
              top: "-15px",
              right: "-12px",
              borderRadius: "50%",
              padding: "1px 9px",
              backgroundColor: "#ff9119",
              color: "white",
            }}
          >
            {totalFilter}
          </span>
        )}
      </div>
      <FilterModal show={show} handleClose={() =>setShow(false)} />
    </>
  );
};

export default FilterButton;
