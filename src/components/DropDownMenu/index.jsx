import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

const DropDownMenu = ({ title,categories,width }) => {
  const subMenuDropdown = useRef(0);
  const getOriginHeight = useRef(0);
  const [originHeight,setOriginHeight] = useState(0);
  const [subMenuActive,setSubMenuActive] = useState(0);
  const [heightSubMenu,setHeightSubMenu] = useState("auto");

  const handleHover = (index)=>{
    setSubMenuActive(index);
  }
  useEffect(()=>{

    setHeightSubMenu(originHeight<=subMenuDropdown.current.clientHeight?subMenuDropdown.current.clientHeight:originHeight)
  },[subMenuActive])

  useEffect(() => {
    getOriginHeight.current.style.display = "block";
    setOriginHeight(getOriginHeight.current.clientHeight);
    setHeightSubMenu(getOriginHeight.current.clientHeight<subMenuDropdown.current.clientHeight&&subMenuDropdown.current.clientHeight)
    getOriginHeight.current.style.display = "none";

}, []);
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
          ref={getOriginHeight}
          className="sub-menu-dropdown position-absolute "
          style={{ backgroundColor: "#121212", top: "100%"
          }}
        >
          <ul style={{height:heightSubMenu}} >
            {categories.map((category,indexParent) => (
              <li className="sub-menu-hover" onMouseEnter={()=>handleHover(indexParent)}>
                <a
                  href=""
                  className="d-flex justify-content-between"
                  style={{
                    width: "250px",
                    fontSize: "14px",
                    color: "rgb(166, 166, 166)",
                    borderBottom:" 1px solid #ffffff1a",
                    padding:"15px 20px"
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
                  ref={indexParent==subMenuActive?subMenuDropdown:null}
                  
                  className={`childSub-menu-dropdown position-absolute ${indexParent==subMenuActive&&"menu-active"}`}
                  style={{
                    backgroundColor: "#121212",
                    left: "100%",
                    top: 0,
                    width: width,
                    borderLeft:"1px solid #ffffff1a"
                  }}
                >
                  <Row >
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
                                className="d-block menu-item-hover"
                                style={{
                                  color: "rgb(166, 166, 166)",
                                  fontSize: "14px",
                                  borderBottom: "1px solid transparent",
                                  padding:"15px 20px"
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
                         fontSize: "14px",
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
