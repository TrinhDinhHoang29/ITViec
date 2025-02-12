import React from "react";
import { Form, Dropdown, Button, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
const SearchBar = () => {
  return (
    <div className="d-flex gap-3">
      {/* Dropdown chọn thành phố */}
      <Dropdown style={{lineHeight:"50px"}} >
        <Dropdown.Toggle
          variant="light"
          className="d-flex align-items-center px-3 justify-content-between"
          bsPrefix="toggle"
          style={{width:"300px",padding:"20px",fontSize:"20px"}}
        >
          <div>
            <FontAwesomeIcon
              icon={faLocationDot}
              className="me-2 text-secondary"
            />{" "}
            All Cities
          </div>
          <div>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu style={{width:"100%",fontSize:"20px"}}>
          <Dropdown.Item href="#">Ho Chi Minh</Dropdown.Item>
          <Dropdown.Item href="#">Ha Noi</Dropdown.Item>
          <Dropdown.Item href="#">Da Nang</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* Ô nhập từ khóa */}
      <InputGroup >
        <Form.Control
          type="text"
          placeholder="Enter keyword skill (Java, iOS...), job title, company..."
          style={{fontSize:"20px"}}
        />
      </InputGroup>

      {/* Nút tìm kiếm */}
      <Button style={{fontSize:"20px",padding:"0px 90px"}} variant="danger" className="d-flex align-items-center">
        <FontAwesomeIcon icon={faSearch} className="me-2" />
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
