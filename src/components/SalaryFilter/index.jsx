import React, { useState } from "react";
import { Dropdown, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import RangeFilter from "../RangeFilter";
import RangeValue from "../RangeValue";
const SalaryFilter = ({ onApply }) => {
  const [values, setValues] = useState([2500, 5000]);
  const handleSetValues = (value) => setValues(value);
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="light"
        className="d-flex align-items-center px-3 border"
        bsPrefix="toggle"
        style={{ borderRadius: "25px", padding: "10px 25px", fontSize: "19px" }}
      >
        Salary
        <span style={{ marginLeft: "10px" }}>
          <FontAwesomeIcon icon={faAngleDown} />
        </span>
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ padding: "15px", minWidth: "280px" }}>
        <div style={{ padding: "10px 1px 15px", fontSize: "20px" }}>
          <RangeValue values={values} />
        </div>
        <div className="px-3 mt-3">
          <RangeFilter values={values} handleSetValues={handleSetValues} />
        </div>

        {/* Nút Apply */}
        <Button
          variant="outline-danger"
          className="w-100 mt-3"
          onClick={() => onApply(values)}
        >
          Apply
        </Button>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SalaryFilter;
