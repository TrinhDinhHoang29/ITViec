import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faBuilding,
  faLocationDot,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import SpotlightBadge from "../SpotlightBadge";

const JobCard = ({ job ,handleSetJobActive, jobActive}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 991);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  console.log(isMobile)
  return (
    
    isMobile? <a
    className={`card p-3 bg-light-subtle mb-3 position-relative text-dark`} 
    href="#"
    style={{ cursor: "pointer",borderRadius:"15px",boxShadow:"rgba(0, 0, 0, 0.06) 0px 4px 20px",backgroundColor:job.isHot?"#fff4e9":"white" }}
    onClick={()=>handleSetJobActive(job)}
  >
    <SpotlightBadge
      text={
        job.isHot ? (
          <>
            <FontAwesomeIcon icon={faFire} /> SUPER HOT{" "}
          </>
        ) : (
          "HOT"
        )
      }
      borderParent={{
        borderTopLeftRadius: "5px",
        borderBottomLeftRadius: "5px",
      }}
      color={job.isHot ? "#ed1b2f" : "#f7941d"}
      positionParent={{ top: "5%", right: "0" }}
      styleChild={{
        position: "absolute",
        bottom: "-5px",
        width: "40px",
        height: "0",
        borderLeft: "40px solid transparent",
        borderTop: `22px solid ${job.isHot ? "#ed1b2f" : "#f7941d"}`,
        zIndex: 0,
        right: 0,
      }}
    />
    {/* Header */}
    <Card.Header className="d-flex justify-content-between align-items-center bg-transparent border-0 pb-0">
      <div className="text-muted" style={{ fontSize: "20px" }}>
        Posted {job.postedTime}
      </div>
    </Card.Header>

    {/* Job Title */}
    <Card.Body className="pb-0">
      <Card.Title className="fw-bold" style={{ fontSize: "22px" }}>
        {job.title}
      </Card.Title>

      {/* Company Info */}
      <Row className="align-items-center m-1">
        <Col xs="auto" className="border p-2 rounded">
          <img
            src={job.company.logo}
            alt={job.company.name}
            width="40"
            height="40"
            className="rounded"
          />
        </Col>
        <Col>
          <Card.Text className="mb-1 text-muted">{job.company.name}</Card.Text>
        </Col>
      </Row>

      {/* Salary */}
      <Card.Text className="mt-2" style={{ fontSize: "20px" }}>
        <FontAwesomeIcon icon={faDollarSign} className="text-secondary" />{" "}
        <a
          href="#"
          className="text-secondary text-decoration-underline "
          style={{ fontWeight: "500" }}
        >
          {job.salary}
        </a>
      </Card.Text>
      <div className="mt-3" style={{ borderTop: "1px dashed gray" }}></div>

      {/* Job Details */}
      <Card.Text className="mt-3 py-1">
        <FontAwesomeIcon icon={faBuilding} /> {job.workType}
      </Card.Text>
      <Card.Text>
        <FontAwesomeIcon icon={faLocationDot} /> {job.location}
      </Card.Text>

      {/* Tags */}
      <div className="d-flex flex-wrap gap-2 mt-3">
        {job.skills.map((tag, index) => (
          <a
            key={index}
            href="#"
            className="px-3 py-2 border tag-hover"
            style={{ borderRadius: "20px", color: "black" }}
          >
            {tag}
          </a>
        ))}
      </div>
    </Card.Body>
    {job.benefits.length > 0 && (
      <>
        <div className="mt-3" style={{ borderTop: "1px dashed gray" }}></div>
        {/* Job Benefits */}
        <ul className="mt-3">
          {job.benefits.map((benefit, index) => (
            <li
              key={index}
              className="px-3 d-flex align-items-center gap-2"
              style={{ fontSize: "18px" }}
            >
              <span style={{ fontSize: "30px" }} className="text-danger">
                •
              </span>{" "}
              {benefit}
            </li>
          ))}
        </ul>
      </>
    )}
  </a>:<Card
      className={`p-3 bg-light-subtle mb-3 position-relative ${jobActive&&job.id === jobActive.id?"jobCard-active border-danger":""}`} 
      style={{ cursor: "pointer",borderRadius:"15px",boxShadow:"rgba(0, 0, 0, 0.06) 0px 4px 20px",backgroundColor:job.isHot?"#fff4e9":"white" }}
      onClick={()=>handleSetJobActive(job)}
    >
      <SpotlightBadge
        text={
          job.isHot ? (
            <>
              <FontAwesomeIcon icon={faFire} /> SUPER HOT{" "}
            </>
          ) : (
            "HOT"
          )
        }
        borderParent={{
          borderTopLeftRadius: "5px",
          borderBottomLeftRadius: "5px",
        }}
        color={job.isHot ? "#ed1b2f" : "#f7941d"}
        positionParent={{ top: "5%", right: "0" }}
        styleChild={{
          position: "absolute",
          bottom: "-5px",
          width: "40px",
          height: "0",
          borderLeft: "40px solid transparent",
          borderTop: `22px solid ${job.isHot ? "#ed1b2f" : "#f7941d"}`,
          zIndex: 0,
          right: 0,
        }}
      />
      {/* Header */}
      <Card.Header className="d-flex justify-content-between align-items-center bg-transparent border-0 pb-0">
        <div className="text-muted" style={{ fontSize: "20px" }}>
          Posted {job.postedTime}
        </div>
      </Card.Header>

      {/* Job Title */}
      <Card.Body className="pb-0">
        <Card.Title className="fw-bold" style={{ fontSize: "22px" }}>
          {job.title}
        </Card.Title>

        {/* Company Info */}
        <Row className="align-items-center m-1">
          <Col xs="auto" className="border p-2 rounded">
            <img
              src={job.company.logo}
              alt={job.company.name}
              width="40"
              height="40"
              className="rounded"
            />
          </Col>
          <Col>
            <Card.Text className="mb-1 text-muted">{job.company.name}</Card.Text>
          </Col>
        </Row>

        {/* Salary */}
        <Card.Text className="mt-2" style={{ fontSize: "20px" }}>
          <FontAwesomeIcon icon={faDollarSign} className="text-secondary" />{" "}
          <a
            href="#"
            className="text-secondary text-decoration-underline "
            style={{ fontWeight: "500" }}
          >
            {job.salary}
          </a>
        </Card.Text>
        <div className="mt-3" style={{ borderTop: "1px dashed gray" }}></div>

        {/* Job Details */}
        <Card.Text className="mt-3 py-1">
          <FontAwesomeIcon icon={faBuilding} /> {job.workType}
        </Card.Text>
        <Card.Text>
          <FontAwesomeIcon icon={faLocationDot} /> {job.location}
        </Card.Text>

        {/* Tags */}
        <div className="d-flex flex-wrap gap-2 mt-3">
          {job.skills.map((tag, index) => (
            <a
              key={index}
              href="#"
              className="px-3 py-2 border tag-hover"
              style={{ borderRadius: "20px", color: "black" }}
            >
              {tag}
            </a>
          ))}
        </div>
      </Card.Body>
      {job.benefits.length > 0 && (
        <>
          <div className="mt-3" style={{ borderTop: "1px dashed gray" }}></div>
          {/* Job Benefits */}
          <ul className="mt-3">
            {job.benefits.map((benefit, index) => (
              <li
                key={index}
                className="px-3 d-flex align-items-center gap-2"
                style={{ fontSize: "18px" }}
              >
                <span style={{ fontSize: "30px" }} className="text-danger">
                  •
                </span>{" "}
                {benefit}
              </li>
            ))}
          </ul>
        </>
      )}
    </Card>
  );
};

export default JobCard;
