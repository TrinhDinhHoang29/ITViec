import React, { useEffect, useState } from "react";
import { Dropdown, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faXmark } from "@fortawesome/free-solid-svg-icons";
import RangeFilter from "../RangeFilter";
import RangeValue from "../RangeValue";
const SalaryFilter = ({ onApply ,salaryRange}) => {
  console.log(salaryRange)
  const [values, setValues] = useState(salaryRange);
  useEffect(()=>{
    setValues(salaryRange);
  },[salaryRange])
  const handleSetValues = (value) => setValues(value);
  const handleCancel = (value)=>{
    handleSetValues(value);
    onApply(value);
  }
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="light"
        className={"d-flex align-items-center px-3 border bg-white "+(salaryRange[0]!==500||salaryRange[1]!==10000? " border-danger text-danger":"")}
        bsPrefix="toggle"
        style={{ borderRadius: "25px", padding: "10px 25px", fontSize: "19px" }}
      >
        Salary
        <span style={{marginLeft:"10px"}}>
          {salaryRange[0]!==500||salaryRange[1]!==10000 ?<FontAwesomeIcon icon={faXmark} onClick={()=>handleCancel([500,10000])} /> : <FontAwesomeIcon icon={faAngleDown} />}
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
