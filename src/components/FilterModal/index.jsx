import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import RangeFilter from "../RangeFilter";
import RangeValue from "../RangeValue";
import { useFilter } from "../../layouts/default";

const FilterModal = ({ show, handleClose }) => {
  const {
    selectedLevels,
    setSelectedLevels,
    selectedModels,
    setSelectedModels,
    selectedCompanies,
    setSelectedCompanies,
    salaryRange,
    setSalaryRange,
    selectedIndustries,
    setSelectedIndustries,
  } = useFilter();
  const [selectedLevels1, setSelectedLevels1] = useState([]);
  const [selectedModels1, setSelectedModels1] = useState([]);
  const [selectedCompanies1, setSelectedCompanies1] = useState([]);
  const [salaryRange1, setSalaryRange1] = useState([500, 10000]);
  const [selectedIndustries1, setSelectedIndustries1] = useState([]);

  useEffect(() => {
    setSelectedLevels1(selectedLevels);
    setSelectedModels1(selectedModels);
    setSalaryRange1(salaryRange);
    setSelectedCompanies1(selectedCompanies);
    setSelectedIndustries1(selectedIndustries);
  }, [
    selectedLevels,
    selectedModels,
    selectedCompanies,
    salaryRange,
    selectedIndustries,
  ]);
  const handleApply = () => {
    handleClose();
    setSelectedLevels(selectedLevels1);
    setSelectedModels(selectedModels1);
    setSelectedCompanies(selectedCompanies1);
    setSalaryRange(salaryRange1);
    setSelectedIndustries(selectedIndustries1);
  };
  const [searchIndustry, setSearchIndustry] = useState("");

  const handleHide = () => {
    handleClose();
    setSelectedLevels1(selectedLevels);
    setSelectedModels1(selectedModels);
    setSalaryRange1(salaryRange);
    setSelectedCompanies1(selectedCompanies);
    setSelectedIndustries1(selectedIndustries);
  };

  const sumfilter =
    selectedLevels1.length +
    selectedModels1.length +
    selectedCompanies1.length +
    (salaryRange1[0]!==500||salaryRange1[1]!==10000?1:0)+
    selectedIndustries1.length;
  const handleSetSalaryRange = (value) => setSalaryRange1(value);
  const levels = ["Fresher", "Junior", "Senior", "Manager"];
  const workModels = ["At office", "Remote", "Hybrid"];
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
    <Modal show={show} onHide={handleHide} centered className="model-filter ">
      <Modal.Header closeButton style={{ padding: "15px 30px" }}>
        <Modal.Title>Filter</Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          maxHeight: "60vh",
          overflowY: "auto",
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
                  selectedLevels1.includes(level)
                    ? "outline-danger"
                    : "outline-secondary"
                }
                onClick={() => toggleSelection(level, [], setSelectedLevels1)}
                className="rounded-pill px-3"
              >
                {level}
                <span style={{ marginLeft: "10px" }}>
                  {selectedLevels1.includes(level) ? (
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
                  selectedModels1.includes(model)
                    ? "outline-danger"
                    : "outline-secondary"
                }
                onClick={() =>
                  toggleSelection(model, selectedModels1, setSelectedModels1)
                }
                className="rounded-pill px-3"
              >
                {model}
                <span style={{ marginLeft: "10px" }}>
                  {selectedModels1.includes(model) ? (
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
              <RangeValue values={salaryRange1} />
            </Col>
            <Col
              style={{
                border: "1px solid gray",
                padding: "30px 30px 0px",
                borderRadius: "30px",
              }}
            >
              <RangeFilter
                values={salaryRange1}
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
                    checked={selectedIndustries1.includes(industry)}
                    onChange={() =>
                      toggleSelection(
                        industry,
                        selectedIndustries1,
                        setSelectedIndustries1
                      )
                    }
                    className="me-2"
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
                    selectedCompanies1.includes(Company)
                      ? "outline-danger"
                      : "outline-secondary"
                  }
                  onClick={() =>
                    toggleSelection(
                      Company,
                      selectedCompanies1,
                      setSelectedCompanies1
                    )
                  }
                  className="rounded-pill px-3"
                >
                  {Company}
                  <span style={{ marginLeft: "10px" }}>
                    {selectedCompanies1.includes(Company) ? (
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
          style={{ textDecoration: "none" }}
          className="p-0"
          onClick={resetFilters}
        >
          Reset filter {sumfilter > 0 ? `(${sumfilter})` : ""}
        </Button>
        <Button
          variant="danger"
          onClick={handleApply}
        >
          Apply
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FilterModal;
