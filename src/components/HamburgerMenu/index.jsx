import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

const HamburgerMenu = ({ showMenu, setShowMenu, data }) => {
  const menuRef = useRef(null);
  const [showSubMenu,setShowSubMenu] = useState(true);
  const [dataSubMenu,setDataSubMenu] = useState([]);
  const handleOnclickMenu = (category)=>{
    setDataSubMenu(category.subcategories)
    setShowSubMenu(false);
  }
  useEffect(() => {
    function handleClickOutside(event) {
      if (!menuRef.current.contains(event.target)) {
        setShowMenu(false); // Đóng menu nếu click ra ngoài
      }
    }

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);
  return (
    <>
      <div
        className={
          showMenu
            ? `position-absolute `
            : "d-none"
        }
        ref={menuRef}
        style={{
          width: "330px",
          left: "0",
          top: "0",
          height: "100vh",
          zIndex: "1000",
          backgroundColor: "#121212",


        }}
      >
        <div
         className={
            showMenu
              ? `d-xs-flex d-lg-none d-sm-flex flex-column `
              : "d-none"
          }
        style={{
            maxHeight: "100vh",
            overflowY:"auto"
        }}>
        <div className="d-flex justify-content-between align-items-center">
        <div
            onClick={() => setShowSubMenu(true)}
            style={{
              cursor: "pointer",
              color: "gray",
              fontSize: "20px",
              padding: "25px 0px",
            }}
          >
           {!showSubMenu&&<><span className="px-2"><FontAwesomeIcon icon={faAngleLeft} /></span>
            Back</>} 
          </div>
          <div
            onClick={() => setShowMenu(false)}
            style={{
              cursor: "pointer",
              color: "gray",
              fontSize: "20px",
              padding: "25px 0px",
            }}
          >
            Close
            <span className="px-2">X</span>
          </div>
        </div>
        {showSubMenu?
        <ul className={`d-flex flex-column hamburger__menu--border `} >
          {data.map((category) => (
            <li onClick={()=>handleOnclickMenu(category)}>
              <div
                className="p-3 text-light d-flex justify-content-between"
                style={{ cursor: "pointer", fontSize: "20px" }}
              >
                <span>{category.name}</span>
                <span>
                  {category.subcategories.length > 0&&<FontAwesomeIcon icon={faAngleRight} />}
                </span>
              </div>
            </li>
          ))}
          <li>
            <div
              className="p-3 text-light d-flex justify-content-center"
              style={{ cursor: "pointer", fontSize: "20px" }}
            >
              <span>EN</span>
              <span className="px-3">|</span>
              <span className="text-muted">VI</span>
            </div>
          </li>
        </ul>:
          <ul className={`d-flex flex-column hamburger__menu--border `}>
          {dataSubMenu.map((category) => (
            <li>
              <div
                className="p-3 text-light d-flex justify-content-between"
                style={{ cursor: "pointer", fontSize: "20px" }}
              >
                <span>{category}</span>
                <span>
                </span>
              </div>
            </li>
          ))}
        </ul>
        }
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
