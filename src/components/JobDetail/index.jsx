import React, { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faClock,
  faDollarSign,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
const JobDetail = ({ job }) => {

  return (
    job&&<>
    <Card className="mt-4 rounded border-0 dropdown-filter mb-3"
      style={{position:"sticky",
        top: "100px"}}
    >
      <Card.Body className="p-0">
        <div className="px-4 mt-4">
        <div className="d-flex gap-3">
          <img
            src={job.company.logo}
            alt="Company Logo"
            width={"98px"}
            height={"98px"}
            className="border"
          />
          <div className="d-flex flex-column justify-content-between">
            <h5 style={{fontWeight:"700"}}>
              <a href="" className="text-dark">
                {job.title}
              </a>
            </h5>
            <Card.Subtitle>
              <a href="" className="text-muted">
                {job.company.name}
              </a>
            </Card.Subtitle>

            <div >
              <FontAwesomeIcon icon={faDollarSign} className="text-secondary" />{" "}
              <a
                href="#"
                className="text-secondary text-decoration-underline "
                style={{ fontWeight: "600" }}
              >
                {job.salary}
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center gap-2 mb-3">
          <Button
            variant="danger"
            className="w-100 mt-3"
          >
            Apply now
          </Button>
          <div>
            <a href="" className="text-danger">
              <FontAwesomeIcon
                style={{ fontSize: "26px", transform: "translateY(10px)" }}
                icon={faHeart}
              />
            </a>
          </div>
        </div>
        <div
          className="my-3 py-2"
          style={{ borderBottom: "1px solid gray" }}
        ></div>
        </div>
       
        <div className="scroll px-4 mb-4" style={{overflowY:"scroll",maxHeight:"360px",maxWidth:"100%"}}>

        <div>
          <div className="mt-3 d-flex gap-2 text-muted">
            <div>
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div>{job.location}</div>
          </div>
          <div className="mt-3 d-flex gap-2 text-muted">
            <div>
              <FontAwesomeIcon icon={faBuilding} />
            </div>
            <div>{job.workType}</div>
          </div>
          <div className="mt-3 d-flex gap-2 text-muted">
            <div>
              <FontAwesomeIcon icon={faClock} />
            </div>
            <div>{job.postedTime}</div>
          </div>
          <div className="mt-3 d-flex align-items-center gap-2 text-muted" >
            <div>Skills:</div>
            <div className="d-flex align-items-center gap-2">
              {job.skills.map((tag, index) => (
                <a
                  key={index}
                  href="#"
                  className="px-3 py-2 border tag-hover text-muted"
                  style={{ borderRadius: "20px", color: "black" }}
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-3" style={{ borderTop: "1px dashed gray" }}></div>
        {/* Toggle Company Info */}
        {job.benefits.length > 0 && (
        <div className="my-3">
          {/* Job Benefits */}
          <h5 style={{fontWeight:"700"}}>Top 3 reasons to join us</h5>
          <ul className="mt-3">
            {job.benefits.map((benefit, index) => (
              <li
                key={index}
                className="px-3 d-flex align-items-center gap-2"
                style={{ fontSize: "14px" }}
              >
                <span style={{ fontSize: "26px" }} className="text-danger">
                  •
                </span>{" "}
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      )}
        {/*Job Description */}
        <div className="mt-3" style={{ borderTop: "1px dashed gray" }}></div>

        <div className="my-3">
          <h5 style={{fontWeight:"700"}} className="mb-3">Job Desciption</h5>
          <div 
      dangerouslySetInnerHTML={{ __html: job.jobDescription }} 
      className="job-description"
    />
        </div>
          <div id="company-info" className="mt-3 border-top pt-3">
            <div className="d-flex justify-content-between my-3">
            <h5 style={{fontWeight:"700"}}>{job.company.name}</h5>
            <a href="#" style={{fontSize:"14px"}} >
                View company
            </a>
            </div>
            <div className="">
                {job.company.description}
            </div>
            <Row className="my-3">
                <Col xs="4" className="my-3">
                    <div className="text-muted">
                        Company Type
                    </div>
                    <div >
                        {job.company.type}
                    </div>
                </Col>
                <Col xs="4"  className="my-3">
                    <div className="text-muted">
                    Company Industry
                    </div>
                    <div >
                        {job.company.industry}
                    </div>
                </Col><Col xs="4"  className="my-3">
                    <div className="text-muted">
                        Company Size
                    </div>
                    <div >
                        {job.company.size}
                    </div>
                </Col>
                <Col xs="4"  className="my-3">
                    <div className="text-muted">
                        Country
                    </div>
                    <div >
                        {job.company.country}
                    </div>
                </Col>
                <Col xs="4"  className="my-3">
                    <div className="text-muted">
                    Working days
                    </div>
                    <div >
                        {job.company.workingDays}
                    </div>
                </Col>
                <Col xs="4"  className="my-3">
                    <div className="text-muted">
                    Overtime policy
                    </div>
                    <div >
                        {job.company.policy}
                    </div>
                </Col>
            </Row>
          </div>
        </div>
      </Card.Body>
    </Card> 
    </>
   
  );
};

export default JobDetail;
