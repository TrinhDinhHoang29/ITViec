import { NavbarComponent } from "../../components/Navbar/index";

export const Header = () => {
  return (
    <>
      <header style={{position:"fixed",top:0,zIndex:"99",width:"100%",background:"linear-gradient(269.85deg, #54151C 0%, #121212 54.89%)",height:"80px",borderBottom:" 1px solid #ffffff1a"}}>
        <div className="icontainer-header">
            <NavbarComponent />
        </div>
      </header>
    </>
  );
};