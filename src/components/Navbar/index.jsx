import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export const NavbarComponent = () => {
  return (
    <>
      <Row className="align-items-center">
        <Col xs={1}>
          <img
            src="/images/logo-itviec.webp"
            alt="Logo"
            width={82}
            height={32}
          />
        </Col>
        <Col >
          <div className="d-flex justify-content-between">
            <ul style={{ padding: "25px 0px", fontSize: "20px"  }} className="d-flex gap-4">
              <li>
                <a style={{ color: "#a6a6a6"}} href="#">
                  All Jobs
                  <span className="px-1"><FontAwesomeIcon icon={faAngleDown} /></span>
                </a>
              </li>
              <li>
                <a style={{ color: "#a6a6a6"}} href="#">
                  IT Companies
                  <span className="px-1"><FontAwesomeIcon icon={faAngleDown} /></span>
                </a>
              </li>
              <li>
                <a style={{ color: "#a6a6a6"}} href="#">
                  Blog
                </a>
              </li>
            </ul>
            <ul style={{ padding: "25px 0px",fontSize:"20px" }} className="d-flex gap-4">
              <li>
                <a style={{ color: "white"}} href="#">
                  For Employers
                </a>
              </li>
              <li>
                <a style={{ color: "white"}} href="#">
                  Sign in/Sign up
                </a>
              </li>
              <li >
                <a href="#" style={{color:"white"}}>EN</a>
                <span className="px-2"  style={{color:"white"}}>|</span>
                <a href="#" style={{color: "#a6a6a6"}}>VI</a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </>
  );
};

// //  default Navbar;

