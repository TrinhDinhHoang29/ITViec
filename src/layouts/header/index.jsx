import { NavbarComponent } from "../../components/Navbar/index";

export const Header = () => {
  return (
    <>
      <header style={{background:"linear-gradient(269.85deg, #54151C 0%, #121212 54.89%)",borderBottom:" 1px solid #ffffff1a"}}>
        <div className="icontainer-header">
            <NavbarComponent />
        </div>
      </header>
    </>
  );
};