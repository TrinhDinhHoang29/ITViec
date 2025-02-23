import React, { useEffect, useReducer, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faBars } from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropDownMenu from "../DropDownMenu";
import HamburgerMenu from "../HamburgerMenu";
export const NavbarComponent = () => {
  const [categoriesJob, setCategoriesJob] = useState([]);
  const categoriesCompany = [
    {
      name: "Vietnam Best IT Companies",
      subcategories: [
        "Best IT Companies 2024",
        "Best IT Companies 2023",
        "Best IT Companies 2022",
        "Best IT Companies 2021",
        "Best IT Companies 2020",
        "Best IT Companies 2019"
      ]
    },
    {
      name: "Company Reviews",
      subcategories: []
    }
  ];
  const categoriesBlog = [
      {
        name: "IT Salary Report",
        subcategories: [
          "IT Salary Report 2024-2025",
          "IT Salary Report 2023-2024",
          "IT Salary Report 2022-2023"
        ]
      },
      {
        name: "IT Career",
        subcategories: []
      },
      {
        name: "Applying & Career Up",
        subcategories: []
      },
      {
        name: "IT Expertise",
        subcategories: []
      }
    ];
  const [showMenu,setShowMenu] = useState(false);

  const [dataAll,setData] = useState([]);
  useEffect(() => {
    fetch(`https://67af317adffcd88a6785df5d.mockapi.io/CategoryJob`)
      .then((res) => res.json())
      .then((data) => {
        setCategoriesJob(data);
        setData([{
          name: "All Jobs",
          subcategories: []
        },...data,{
          name: "IT Companies",
          subcategories: [
            "Best IT Companies 2024",
            "Best IT Companies 2023",
            "Best IT Companies 2022",
            "Best IT Companies 2021",
            "Best IT Companies 2020",
            "Best IT Companies 2019",
            "Company Reviews",
          ]
        },{
          name: "Blog",
          subcategories: [
            "IT Salary Report 2024-2025",
            "IT Salary Report 2023-2024",
            "IT Salary Report 2022-2023",
            "IT Career",
            "Applying & Career Up",
            "IT Expertise"
          ]
        } ,{
          name: "For Employers",
          subcategories: []
        }]);
      });
  }, []);
  return (
    categoriesJob.length>0 &&<>
      <Row className="align-items-center">
        <Col className="d-none d-sm-none d-lg-block" lg={1}>
          <img
            src="./images/logo-itviec.webp"
            alt="Logo"
            width={82}
            height={32}
          />
        </Col>
        <Col className="d-none d-sm-none d-lg-block">
          <div className="d-flex justify-content-between">
            <ul style={{ fontSize: "20px" }} className="d-flex gap-4">
              <DropDownMenu title={"All Jobs"} categories={categoriesJob} width={"800px"}/>
              <DropDownMenu title={"IT Companies"} categories={categoriesCompany} width={"300px"} />
              <DropDownMenu title={"Blog"} categories={categoriesBlog} width={"300px"} />
             
            </ul>
            <ul
              style={{ padding: "25px 0px", fontSize: "20px" }}
              className="d-flex gap-4"
            >
              <li>
                <a style={{ color: "white" }} href="#">
                  For Employers
                </a>
              </li>
              <li>
                <a style={{ color: "white" }} href="#">
                  Sign in/Sign up
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "white" }}>
                  EN
                </a>
                <span className="px-2" style={{ color: "white" }}>
                  |
                </span>
                <a href="#" style={{ color: "#a6a6a6" }}>
                  VI
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col className="d-sm-block d-block d-lg-none">
          <ul className="d-flex justify-content-between align-items-center">
            <li style={{ padding: "25px 0px" }} className="" >  
            <FontAwesomeIcon icon={faBars} className="text-muted" onClick={()=>setShowMenu(true)} style={{fontSize:"20px",cursor:"pointer"}}/>
            <HamburgerMenu showMenu={showMenu} setShowMenu = {setShowMenu} data={[...dataAll]} />
            </li>
            <li style={{ padding: "25px 0px" }}>
              <a href="">
              <img
            src="/images/logo-itviec.webp"
            alt="Logo"
            width={82}
            height={32}
          />
              </a>
            
            </li>
            <li style={{ padding: "25px 0px" }}>
              <a href=""style={{fontSize:"20px",color:"white"}}>
                Sign In
              </a>
            
            </li>
          </ul>
        </Col>
      </Row>
    </>
  );
};

// //  default Navbar;
