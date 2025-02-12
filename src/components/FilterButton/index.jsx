import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import FilterModal from "../FilterModal";
const FilterButton = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div
       variant="light"
       className="d-flex align-items-center px-3 border"
       bsPrefix="toggle"
       style={{ borderRadius: "10px", padding: "10px 30px", fontSize: "19px" ,cursor:"pointer"}}
      onClick={() => setShow(true)}>
        <FontAwesomeIcon icon={faFilter} className="me-2" />
        Filter
      </div>
      <FilterModal show={show} handleClose={() => setShow(false)} />
    </>
  );
};

export default FilterButton;
