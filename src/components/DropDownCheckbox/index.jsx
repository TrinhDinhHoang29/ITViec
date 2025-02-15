import React, { useState } from "react";
import { Dropdown, Form, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faCancel, faTimes, faXmark } from "@fortawesome/free-solid-svg-icons";

const DropDownCheckbox = ({ title, options ,selectedOptions,setSelectedOptions }) => {

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedOptions((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  return (
    <div className="dropdown-filter">
      <Dropdown>
        <Dropdown.Toggle
          variant="light"
          className={"d-flex align-items-center px-3 border bg-white "+(selectedOptions.length>0? " border-danger text-danger":"")}
          bsPrefix="toggle"

          style={{borderRadius:"25px",padding:"10px 25px",fontSize:"19px"
          }}

        >
          {selectedOptions.length<1?title:selectedOptions.length>1?selectedOptions[0]+", +"+(selectedOptions.length-1).toString():selectedOptions[0]}
          <span style={{marginLeft:"10px"}}>
          {selectedOptions.length>0 ?<FontAwesomeIcon icon={faXmark} onClick={()=>setSelectedOptions([])} /> : <FontAwesomeIcon icon={faAngleDown} />}
          </span>
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ padding: "10px", minWidth: "200px",fontSize:"19px" }}>
          {options.map((option, index) => (
            <Form.Group key={index} className="mb-2 d-flex align-items-center">
              <Form.Check
                type="checkbox"
                id={`checkbox-${title}-${index}`}
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={handleCheckboxChange}
                className="me-2"
              />
              <label
                htmlFor={`checkbox-${title}-${index}`}
                style={{ cursor: "pointer" }}
              >
                {option}
              </label>
            </Form.Group>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropDownCheckbox;
