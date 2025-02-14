import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";

export const Footer = () => {
  return (
    <>
      <footer
        className="pt-3"
        style={{
          background: "linear-gradient(277.42deg, #54151C 0%, #121212 43.92%)",
        }}
      >
        <div
          className="icontainer-header"
          style={{ paddingTop: "50px"}}
        >
          <Row>
            <Col xs="3">
              <img
                src="https://itviec.com/assets/logo-itviec-4492a2f2577a15a0a1d55444c21c0fa55810822b3b189fc689b450fb62ce0b5b.png"
                alt=""
              />
              <ul className="d-flex gap-3 my-4">
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
              <div className="d-flex justify-content-between footer-list">
                <div class="footer-column">
                  <h5>Về ITviec</h5>
                  <ul>
                    <li>
                      <a href="#">Trang Chủ</a>
                    </li>
                    <li>
                      <a href="#">Về ITviec.com</a>
                    </li>
                    <li>
                      <a href="#">Dịch vụ gợi ý ứng viên</a>
                    </li>
                    <li>
                      <a href="#">Liên Hệ</a>
                    </li>
                    <li>
                      <a href="#">Việc Làm IT</a>
                    </li>
                  </ul>
                </div>

                <div class="footer-column">
                  <h5>Chương trình</h5>
                  <ul>
                    <li>
                      <a href="#">Chuyện IT</a>
                    </li>
                    <li>
                      <a href="#">Cuộc thi viết</a>
                    </li>
                    <li>
                      <a href="#">Việc làm IT nổi bật</a>
                    </li>
                    <li>
                      <a href="#">Khảo sát thường niên</a>
                    </li>
                  </ul>
                </div>

                <div class="footer-column">
                  <h5>Điều khoản chung</h5>
                  <ul>
                    <li>
                      <a href="#">Quy định bảo mật</a>
                    </li>
                    <li>
                      <a href="#">Quy chế hoạt động</a>
                    </li>
                    <li>
                      <a href="#">Giải quyết khiếu nại</a>
                    </li>
                    <li>
                      <a href="#">Thỏa thuận sử dụng</a>
                    </li>
                    <li>
                      <a href="#">Thông cáo báo chí</a>
                    </li>
                  </ul>
                </div>

                <div class="footer-column">
                  <h5>Liên hệ để đăng tin tuyển dụng tại:</h5>
                  <ul>
                    <li>
                      <FontAwesomeIcon
                        icon={faPhone}
                        style={{ color: "#A6A6A6" }}
                      />{" "}
                      <a href="tel:+84977460519">
                        Hồ Chí Minh: (+84) 977 460 519
                      </a>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faPhone}
                        style={{ color: "#A6A6A6" }}
                      />{" "}
                      <a href="tel:+84983131351">Hà Nội: (+84) 983 131 351</a>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faPhone}
                        style={{ color: "#A6A6A6" }}
                      />{" "}
                      <a href="mailto:love@itviec.com">
                        Email: love@itviec.com
                      </a>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faPhone}
                        style={{ color: "#A6A6A6" }}
                      />{" "}
                      <a href="#">Gửi thông tin liên hệ</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
          <div style={{borderTop:"1px solid gray",marginTop:"50px",color:"#A6A6A6"}} className="d-flex py-4 justify-content-center">
            <p>Copyright © IT VIEC JSC</p>
            <p style={{}} className="mx-4">|</p>
            <p>MST: 0373333808</p>
          </div>
        </div>
      </footer>
    </>
  );
};
