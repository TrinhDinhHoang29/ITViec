import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const InfoCompanySpotlight = () => {
  return (
    <>
      <div
        className="d-flex gap-4 position-absolute"
        style={{ top: "50%", transform: "translateY(-50%)", left: "22%" }}
      >
        <div
          style={{ width: "150px", height: "150px", borderRadius: "5px" }}
          className="d-flex align-items-center bg-white border"
        >
          <img src="/images/GrabLogo.webp" alt="" width={"100%"} />
        </div>
        <div className="d-flex  flex-column justify-content-between">
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
      </div>
    </>
  );
};

export default InfoCompanySpotlight;