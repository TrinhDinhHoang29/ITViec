import { Col, Row } from "react-bootstrap";
import InfoCompanySpotlight from "../InfoCompanySpotLight";
import SpotlightBadge from "../SpotlightBadge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight, faLocation, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const SpotLight = () => {
  const jobsSpotlight = [
    "Chuyên viên Đảm bảo chất lượng - Quality Assurance",
    "Chuyên viên Quản lý dự án - Project Manager - Khối CNTT",
    "CV/CVCC Quản trị Mạng kết nối - Network Administrator",
  ];
  return (
    <>
      <div
        className="d-lg-flex d-sm-block position-relative position-sm-spotlight"
        style={{ backgroundColor: "white", top: "-90px", borderRadius: "10px" }}
      >
        <div className="position-relative">
          <img
            src="./images/GrabBusiness.webp"
            alt=""
            className="img-sm-spotlight"
            style={{
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
              width: "400px",
              height: "100%",
            }}
          />
          <SpotlightBadge
            text={"Company Spotlight"}
            borderParent={{
              borderTopRightRadius: "5px",
              borderBottomRightRadius: "5px",
            }}
            color={"#f7941d"}
            positionParent={{ top: "5%" }}
            styleChild={{
              position: "absolute",
              bottom: "-5px",
              width: "40px",
              height: "0",
              borderRight: "40px solid transparent",
              borderTop: "22px solid #f7941d",
              zIndex: 0,
            }}
          />
          <InfoCompanySpotlight />
        </div>
        <Row style={{ width: "100%" }}>
          <Col lg="6" className="d-flex align-items-center  infoSpotLight-sm">
          <div className="d-flex  flex-column justify-content-between align-items-center-sm ml-sm-0" style={{marginLeft:"100px"}}>
          <h4>Grab (Vietnam) Ltd.</h4>
          <div>
            <FontAwesomeIcon
              icon={faLocationDot}
              className="me-2 text-secondary"
            />{" "}
            Ho Chi Minh
          </div>
          <div className="py-3" style={{ color: "#414042" }}>
            Driving Southeast Asia Forward Together
          </div>
          <a href="#">
            View company
            <span className="px-2">
              <FontAwesomeIcon
                style={{ color: "#0d6efd !important" }}
                icon={faAngleRight}
                className="me-2"
              />
            </span>
          </a>
        </div>
          </Col>
          <Col
            lg="6"
            style={{ borderLeft: "1px dashed #dedede" }}
            className="jobSpotlight-border d-flex align-items-center"
          >
            <ul className="p-3 d-flex flex-column gap-3 my-3">
              {jobsSpotlight.map((item) => (
                <li>
                  <a href="#" style={{ fontSize: "18px", color: "black" }}>
                    <span className="mx-2 text-danger">
                      <FontAwesomeIcon icon={faArrowAltCircleRight} />
                    </span>
                    {item}
                  </a>{" "}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SpotLight;
