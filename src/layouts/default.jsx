import { Footer } from "./footer";
import { Header } from "./header";
import Container from "react-bootstrap/Container";
import SearchBar from "../components/SearchBar";
import SpotLight from "../components/SpotLight";
import FilterJobs from "../components/FilterJobs";

export const DefaultLayout = () => {
  return (
    <>
      <Header />
      <div className="main">
        <div
          className="search-bar"
          style={{
            background:
              "linear-gradient(269.85deg, #54151C 0%, #121212 54.89%)",
          }}
        >
          <div style={{ paddingTop: "24px", paddingBottom: "124px" }}>
            <Container>
              <SearchBar />
            </Container>
          </div>
        </div>
        <div className="icontainer-header" style={{height:"200px"}}>
          <SpotLight />
        </div>
        <div className="icontainer-header">
          <FilterJobs />
        </div>
      </div>
      <Footer />
    </>
  );
};
