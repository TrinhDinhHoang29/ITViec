import React, { useState } from "react";
import { Dropdown, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faXmark } from "@fortawesome/free-solid-svg-icons";
const industries = [
  "Software Development Outsourcing",
  "Software Products and Web Services",
  "Agriculture",
  "Sports and Fitness",
  "Apparel and Fashion",
  "Banking",
  "E-Commerce",
  "Education",
];

const IndustryFilter = ({ onApply }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustries, setSelectedIndustries] = useState([]);

  // Lọc ngành theo tìm kiếm
  const filteredIndustries = industries.filter((industry) =>
    industry.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Xử lý chọn checkbox
  const handleSelect = (industry) => {
    setSelectedIndustries((prev) =>
      prev.includes(industry)
        ? prev.filter((i) => i !== industry)
        : [...prev, industry]
    );
  };

  return (

    <Dropdown className="dropdown-filter">
      <Dropdown.Toggle
        variant="light"
        className={
          "d-flex align-items-center px-3 border bg-white " +
          (selectedIndustries.length > 0 ? " border-danger text-danger" : "")
        }
        bsPrefix="toggle"
        style={{ borderRadius: "25px", padding: "10px 25px", fontSize: "19px" }}
      >
        Industry
        <span style={{ marginLeft: "10px" }}>
          {selectedIndustries.length > 0 ? (
            <FontAwesomeIcon
              icon={faXmark}
              onClick={() => setSelectedIndustries([])}
            />
          ) : (
            <FontAwesomeIcon icon={faAngleDown} />
          )}
        </span>
      </Dropdown.Toggle>

      <Dropdown.Menu
        style={{
          padding: "15px",
          minWidth: "280px",
          maxHeight: "300px",
          overflowY: "auto",
        }}
      >
        {/* Ô tìm kiếm */}
        <Form.Control
          type="text"
          placeholder="Search industry"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-2"
          style={{ fontSize: "20px" }}
        />

        {/* Danh sách ngành nghề */}
        {filteredIndustries.map((industry, index) => (
          <Form.Group key={index} className="mb-2 d-flex align-items-center">
            <Form.Check
              type="checkbox"
              key={industry}
              id={`checkboxIndustry-${index}`}
              value={industry}
              checked={selectedIndustries.includes(industry)}
              onChange={() => handleSelect(industry)}
              className="me-2"
              style={{ fontSize: "20px" }}
            />
            <label
              htmlFor={`checkboxIndustry-${index}`}
              style={{ cursor: "pointer" }}
            >
              {industry}
            </label>
          </Form.Group>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default IndustryFilter;
