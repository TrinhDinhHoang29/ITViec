import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

const DropDownMenu = ({ title,categories,width }) => {
  return (
    <>
      <li
        className="menu-dropdown position-relative"
        style={{ padding: "25px 0px" }}
      >
        <a style={{ color: "#a6a6a6" }} href="#">
          {title}
          <span className="px-1">
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </a>
        <div
          className="sub-menu-dropdown position-absolute "
          style={{ backgroundColor: "#121212", top: "100%"
          }}
        >
          <ul>
            {categories.map((category) => (
              <li className="sub-menu-hover">
                <a
                  href=""
                  className="d-flex justify-content-between p-3"
                  style={{
                    width: "350px",
                    fontSize: "17px",
                    color: "rgb(166, 166, 166)",
                    borderBottom:" 1px solid #ffffff1a"
                  }}
                >
                  <span>{category.name}</span>
                  {
                    category.subcategories.length>0 &&<span>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </span>
                  }
                </a>
                <div
                  className=" childSub-menu-dropdown position-absolute"
                  style={{
                    backgroundColor: "#121212",
                    left: "100%",
                    top: 0,
                    width: width,
                    borderLeft:"1px solid #ffffff1a"
                  }}
                >
                  <Row>
                    {category.subcategories
                      .reduce((acc, item, index) => {
                        const colIndex = Math.floor(index / 8); // Mỗi cột chứa 8 phần tử
                        if (!acc[colIndex]) acc[colIndex] = [];
                        acc[colIndex].push(item);
                        return acc;
                      }, [])
                      .map((column, colIndex) => (
                        <Col key={colIndex}>
                          {column.map((item, index) => (
                            <div key={index}>
                              <a
                                href=""
                                className="d-block p-3 menu-item-hover"
                                style={{
                                  color: "rgb(166, 166, 166)",
                                  fontSize: "17px",
                                  borderBottom: "1px solid transparent"
                                }}
                              >
                                {item}
                              </a>
                            </div>
                          ))}
                        </Col>
                      ))}
                  </Row>
                   {category.subcategories.length>8 &&
                    <div className="">
                    <a href="#" className="text-center d-block p-3" style={{ 
                         fontSize: "17px",
                    color: "rgb(166, 166, 166)",
                    borderTop:"1px solid #ffffff1a"
                    }}>
                        Xem tất cả
                        <span className="px-3">
                            <FontAwesomeIcon icon={faAngleRight} />
                        </span>
                    </a>
                  </div>
                   }
                </div>
              </li>
            ))}
          </ul>
        </div>
      </li>
    </>
  );
};

export default DropDownMenu;
