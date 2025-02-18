import React, { useState } from "react";
import { Form, Dropdown, Button, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
const SearchBar = () => {
  
  const [typeSearch,setTypeSearch] = useState("All Cities");

  return (
    <div className="d-sm-block d-xs-block d-lg-flex  gap-3">
      {/* Dropdown chọn thành phố */}
      <Dropdown style={{lineHeight:"50px",width:"500px"}} className="dropdownSearch-toggle-custom">
        <Dropdown.Toggle
          variant="light"
          className="d-flex align-items-center px-3 justify-content-between"
          bsPrefix="toggle"
          style={{width:"100%",padding:"20px",fontSize:"20px"}}
        >
          <div>
            <FontAwesomeIcon
              icon={faLocationDot}
              className="me-2 text-secondary"
            />{" "}
            {typeSearch}
          </div>
          <div>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu style={{width:"100%",fontSize:"20px"}}>
        <Dropdown.Item onClick={()=>setTypeSearch("All City")} >All City</Dropdown.Item>
          <Dropdown.Item onClick={()=>setTypeSearch("Ho Chi Minh")} >Ho Chi Minh</Dropdown.Item>
          <Dropdown.Item onClick={()=>setTypeSearch("Ha Noi")} >Ha Noi</Dropdown.Item>
          <Dropdown.Item onClick={()=>setTypeSearch("Da Nang")} >Da Nang</Dropdown.Item>
          <Dropdown.Item onClick={()=>setTypeSearch("Others")} >Others</Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>
      <InputGroup className="mb-3 d-xs-flex d-sm-flex d-lg-none my-3">
      <Form.Control
        type="text"
        placeholder="Enter keywords (e.g., Java, CSS, job title, company)"
        aria-label="Search"
        style={{fontSize:"20px",lineHeight:"50px"}}

      />
      <Button variant="danger" style={{fontSize:"20px",padding:"0px 20px"}}>
        <FontAwesomeIcon icon={faSearch} />
      </Button>
    </InputGroup>


      {/* Ô nhập từ khóa */}
      <InputGroup className="d-xs-none d-sm-none d-lg-flex">
        <Form.Control
          type="text"
          placeholder="Enter keyword skill (Java, iOS...), job title, company..."
          style={{fontSize:"20px"}}
        />
      </InputGroup>

      {/* Nút tìm kiếm */}
      <Button  style={{fontSize:"20px",padding:"0px 90px"}} variant="danger" className="d-xs-none d-sm-none d-lg-flex align-items-center">
        <FontAwesomeIcon icon={faSearch} className="me-2" />
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
