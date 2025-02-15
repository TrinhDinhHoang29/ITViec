import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

const DropDownMenu = ({categories})=>{

    return (<>
        <li className="menu-dropdown position-relative" style={{ padding: "25px 0px"}}>
            <a style={{ color: "#a6a6a6"}} href="#">
                All Jobs
                <span className="px-1"><FontAwesomeIcon icon={faAngleDown} /></span>
            </a>
            <div className="sub-menu-dropdown bg-dark position-absolute " style={{top:"100%"}}>
                <ul>
                    {categories.map(category =><li className="sub-menu-hover">
                        <a href="" className="d-flex justify-content-between p-3" style={{width:"350px"}}>
                        <span>{category.name}</span>
                        <span><FontAwesomeIcon icon={faAngleRight}/></span> 
                        </a>
                        <div className=" childSub-menu-dropdown bg-dark position-absolute" style={{left:"100%",top:0,width:"800px"}}>
                            <Row >
                                {
                                    category.subcategories.map(item=><Col xs="3"><a href="$" className="d-block p-2">{item}</a></Col>)
                                }
                            </Row>
                        </div>
                        </li>
)}
                </ul>
            </div>
        </li>
    </>);
}


export default DropDownMenu;