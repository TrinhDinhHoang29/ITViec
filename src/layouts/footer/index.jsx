import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faAngleDown, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";

export const Footer = () => {
  const footerData = [
    {
      title: "About Us",
      links: [
        "Home",
        "About Us",
        "AI Match Service",
        "Contact Us",
        "All Jobs",
        "FAQ",
      ],
    },
    {
      title: "Campaign",
      links: [
        "IT Story",
        "Writing Contest",
        "Featured IT Jobs",
        "Annual Survey",
      ],
    },
    {
      title: "Terms & Conditions",
      links: [
        "Privacy Policy",
        "Operating Regulation",
        "Complaint Handling",
        "Terms & Conditions",
        "Press",
      ],
    },
    {
      title: "Want to post a job? Contact us at:",
      links: [
          "Ho Chi Minh: (+84) 977 460 519",
          "Ha Noi: (+84) 983 131 351",
          "Email: love@itviec.com",
          "Submit contact information"
      ]
  }
  ];

  return (
    <>
      <footer
        className="pt-3"
        style={{
          background: "linear-gradient(177.12deg, #121212 48.81%, #54151C 98.26%)",
        }}
      >
        <div className="icontainer-header" style={{ paddingTop: "50px" }}>
          <Row>
            <Col
              xs="12"
              sm="12"
              lg="3"
              className="d-sm-flex d-xs-flex d-lg-block flex-column justify-content-center"
            >
              <div className="text-center-sm">
                <img
                  src="https://itviec.com/assets/logo-itviec-4492a2f2577a15a0a1d55444c21c0fa55810822b3b189fc689b450fb62ce0b5b.png"
                  alt=""
                  width={150}
                />
                <div className="text-light" style={{ fontSize: "20px" }}>
                  Ít nhưng mà chất
                </div>
              </div>
              <ul className="d-flex justify-content-center-sm gap-3 my-4">
                <li>
                  <a
                    href=""
                    className="rounded-circle text-muted border px-2 py-1"
                    style={{ fontSize: "30px" }}
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="rounded-circle text-muted border px-2 py-1"
                    style={{ fontSize: "30px" }}
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="rounded-circle text-muted border px-2 py-1"
                    style={{ fontSize: "30px" }}
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </a>
                </li>
              </ul>
            </Col>
            <Col>
              <div className="d-sm-none d-xs-none d-lg-flex justify-content-between footer-list">
                {footerData.map((item) => (
                  <div class="footer-column">
                    <h5>{item.title}</h5>
                    <ul>
                      {item.links.map((i) => (
                        <li>
                          <a href="#">{i}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="d-sm-flex d-xs-flex d-lg-none flex-column align-items-center position-relative" style={{zIndex:"10"}}>
                {footerData.map((item,index) => (index<3&&
                  <>
                    <div
                      className="d-flex justify-content-between py-3"
                      style={{
                        borderBottom: "1px solid rgba(255, 255, 255, .1)",
                        fontSize: "20px",
                        width: "100%",
                        cursor: "pointer",
                      }}
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapseExample-${index}`}
                      aria-expanded="false"
                      aria-controls={`collapseExample`}
                    >
                      <h5 className="text-light">{item.title}</h5>
                      <div className="text-muted">
                        <FontAwesomeIcon icon={faAngleDown} />
                      </div>
                    </div>
                    {item.links.map((i,index) => (
                      <div class="collapse p-2" id={`collapseExample-${index}`} style={{width:"100%"}}>
                        <div className="text-muted" style={{fontSize:"18px"}}>{i}</div>
                      </div>
                    ))}
                  </>
                ))}
                 <div
                      className="d-flex justify-content-between py-3"
                      style={{
                        fontSize: "20px",
                        width: "100%",
                        cursor: "pointer",
                      }}
                    >
                      <h5 className="text-light">Want to post a job? Contact us at:</h5>
                      <div className="text-muted">
                      </div>
                    </div>
                    <ul style={{width:"100%"}} className="mb-4" >
                      
                        <li>
                          <a href="#" className="text-muted" style={{fontSize:"18px"}}>Ho Chi Minh: (+84) 977 460 519</a>
                        </li>
                        <li>
                        <a href="#" className="text-muted" style={{fontSize:"18px"}}>Ha Noi: (+84) 983 131 351</a>
                        </li><li>
                        <a href="#" className="text-muted" style={{fontSize:"18px"}}>Email: love@itviec.com</a>
                        </li><li>
                        <a href="#" className="text-muted" style={{fontSize:"18px"}}>Submit contact information</a>
                        </li>
                    </ul>
              </div>
            </Col>
          </Row>
          <div
            style={{
              borderTop: "1px solid gray",
              marginTop: "50px",
              color: "#A6A6A6",
            }}
            className="d-flex py-4 justify-content-center"
          >
            <p>Copyright © IT VIEC JSC</p>
            <p style={{}} className="mx-4">
              |
            </p>
            <p>MST: 0373333808</p>
          </div>
        </div>
      </footer>
    </>
  );
};
