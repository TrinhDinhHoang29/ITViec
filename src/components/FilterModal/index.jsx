import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import RangeFilter from "../RangeFilter";
import RangeValue from "../RangeValue";

const FilterModal = ({ show, handleClose }) => {
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedModels, setSelectedModels] = useState([]);
  const [selectedCompanies, setSelectedCompanies] = useState([]);

  const [salaryRange, setSalaryRange] = useState([500, 10000]);
  const [searchIndustry, setSearchIndustry] = useState("");
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const sumfilter =
    selectedLevels.length +
    selectedModels.length +
    selectedCompanies.length +
    selectedIndustries.length;
  const handleSetSalaryRange = (value) => setSalaryRange(value);
  const levels = ["Fresher", "Junior", "Senior", "Manager"];
  const workModels = ["At office", "Remote", "Hybrid"];
  const industries = [
    "Cyber Security",
    "Trading and Commercial",
    "Network and Infrastructure",
    "Software Development",
    "Software Products and Web Services",
  ];
  const companyType = [
    "IT Outsourcing",
    "IT Product",
    "Headhunt",
    "IT Service and IT Consulting",
    "Non-IT",
  ];
  const toggleSelection = (item, list, setList) => {
    setList((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const resetFilters = () => {
    setSelectedLevels([]);
    setSelectedModels([]);
    setSalaryRange([500, 10000]);
    setSelectedIndustries([]);
    setSelectedCompanies([]);
  };

  return (
    <Modal show={show} onHide={handleClose} centered className="model-filter">
      <Modal.Header closeButton style={{ padding: "15px 30px" }}>
        <Modal.Title>Filter</Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          maxHeight: "60vh",
          overflowY: "auto",
          fontSize: "20px",
          paddingLeft: "30px",
        }}
        className="dropdown-filter"
      >
        {/* Level */}
        <div style={{ marginTop: "32px" }}>
          <strong>Level</strong>
          <div className="d-flex flex-wrap gap-2 mt-2">
            {levels.map((level) => (
              <Button
                key={level}
                variant={
                  selectedLevels.includes(level)
                    ? "outline-danger"
                    : "outline-secondary"
                }
                onClick={() =>
                  toggleSelection(level, selectedLevels, setSelectedLevels)
                }
                className="rounded-pill px-3"
              >
                {level}
                <span style={{ marginLeft: "10px" }}>
                  {selectedLevels.includes(level) ? (
                    <FontAwesomeIcon icon={faCheck} />
                  ) : (
                    <FontAwesomeIcon icon={faPlus} />
                  )}
                </span>
              </Button>
            ))}
          </div>
        </div>

        {/* Working Model */}
        <div style={{ marginTop: "32px" }}>
          <strong>Working Model</strong>
          <div className="d-flex flex-wrap gap-2 mt-2">
            {workModels.map((model) => (
              <Button
                key={model}
                variant={
                  selectedModels.includes(model)
                    ? "outline-danger"
                    : "outline-secondary"
                }
                onClick={() =>
                  toggleSelection(model, selectedModels, setSelectedModels)
                }
                className="rounded-pill px-3"
              >
                {model}
                <span style={{ marginLeft: "10px" }}>
                  {selectedModels.includes(model) ? (
                    <FontAwesomeIcon icon={faCheck} />
                  ) : (
                    <FontAwesomeIcon icon={faPlus} />
                  )}
                </span>
              </Button>
            ))}
          </div>
        </div>

        {/* Salary */}
        <div style={{ marginTop: "32px" }}>
          <strong>Salary</strong>
          <Row className="mt-2">
            <Col xs="4" style={{ marginTop: "20px" }}>
              <RangeValue values={salaryRange} />
            </Col>
            <Col
              style={{
                border: "1px solid gray",
                padding: "30px 30px 0px",
                borderRadius: "30px",
              }}
            >
              <RangeFilter
                values={salaryRange}
                handleSetValues={handleSetSalaryRange}
              />
            </Col>
          </Row>
        </div>

        {/* Industry */}
        <div style={{ marginTop: "32px" }}>
          <strong>Industry</strong>
          <Form.Control
            type="text"
            placeholder="Search industry"
            value={searchIndustry}
            onChange={(e) => setSearchIndustry(e.target.value)}
            className="mt-2"
            style={{ fontSize: "20px" }}
          />
          <div className="mt-2 border p-3">
            {industries
              .filter((industry) =>
                industry.toLowerCase().includes(searchIndustry.toLowerCase())
              )
              .map((industry, index) => (
                <Form.Group
                  key={index}
                  className="mb-2 d-flex align-items-center"
                >
                  <Form.Check
                    type="checkbox"
                    key={industry}
                    id={`checkboxModelIndustry-${index}`}
                    value={industry}
                    checked={selectedIndustries.includes(industry)}
                    onChange={() =>
                      toggleSelection(
                        industry,
                        selectedIndustries,
                        setSelectedIndustries
                      )
                    }
                    className="me-2"
                    style={{ fontSize: "20px" }}
                  />
                  <label
                    htmlFor={`checkboxModelIndustry-${index}`}
                    style={{ cursor: "pointer" }}
                  >
                    {industry}
                  </label>
                </Form.Group>
              ))}
          </div>
          <div style={{ margin: "32px 0px" }}>
            <strong>Company Type</strong>
            <div className="d-flex flex-wrap gap-2 mt-2">
              {companyType.map((Company) => (
                <Button
                  key={Company}
                  variant={
                    selectedCompanies.includes(Company)
                      ? "outline-danger"
                      : "outline-secondary"
                  }
                  onClick={() =>
                    toggleSelection(
                      Company,
                      selectedCompanies,
                      setSelectedCompanies
                    )
                  }
                  className="rounded-pill px-3"
                >
                  {Company}
                  <span style={{ marginLeft: "10px" }}>
                    {selectedCompanies.includes(Company) ? (
                      <FontAwesomeIcon icon={faCheck} />
                    ) : (
                      <FontAwesomeIcon icon={faPlus} />
                    )}
                  </span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Modal.Body>

      {/* Footer */}
      <Modal.Footer
        className="d-flex justify-content-between"
        style={{ padding: "15px 30px" }}
      >
        <Button
          variant="link"
          style={{ fontSize: "20px", textDecoration: "none" }}
          className="p-0"
          onClick={resetFilters}
        >
          Reset filter {sumfilter > 0 ? `(${sumfilter})` : ""}
        </Button>
        <Button
          variant="danger"
          style={{ fontSize: "20px" }}
          onClick={handleClose}
        >
          Apply
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FilterModal;
