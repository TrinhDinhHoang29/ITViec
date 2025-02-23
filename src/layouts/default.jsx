import { Footer } from "./footer";
import { Header } from "./header";
import Container from "react-bootstrap/Container";
import SearchBar from "../components/SearchBar";
import SpotLight from "../components/SpotLight";
import FilterJobs from "../components/FilterJobs";
import { Col, Row } from "react-bootstrap";
import JobCard from "../components/JobCard";
import JobDetail from "../components/JobDetail";
import { createContext, useContext, useEffect, useState } from "react";
import CustomPagination from "../components/CustomPagination";


const FilterContext = createContext();

export const DefaultLayout = () => {
  const [jobs, setJobs] = useState([]);
  const [jobActive, setJobActive] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  //
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedModels, setSelectedModels] = useState([]);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [salaryRange, setSalaryRange] = useState([500, 10000]);
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  // search
  const [searchValue,setSearchValue] = useState({
    type:"",
    value:""
  });
  // end search

  const totalPages = 52; // Số trang tổng cộng
  const handleSetJobActive = (job) => {
    setJobActive(job);
  };
  useEffect(() => {
    fetch(
      `https://67af317adffcd88a6785df5d.mockapi.io/job?location=${searchValue.type!=="All Cities"?searchValue.type:""}&title=${searchValue.value}&page=${currentPage}&limit=5`
    )
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, [currentPage,searchValue]);


  return (
  <>
      <Header />
      <div className="main" style={{ marginTop: "80px" }}>
        <div
          className="search-bar"
          style={{
            background:
              "linear-gradient(269.85deg, #54151C 0%, #121212 54.89%)",
          }}
        >
          <div style={{ paddingTop: "24px", paddingBottom: "124px" }} className="searchBar-wrap">
            <Container>
              <SearchBar value={setSearchValue}/>
            </Container>
          </div>
        </div>
        <div className="d-sm-flex d-flex d-lg-block flex-column-reverse">
        <div className="icontainer-header height-sm-spotlight" style={{ height: "200px" }}>
          <SpotLight />
        </div>
        <div className="icontainer-header">
        <FilterContext.Provider value={{
        selectedLevels, setSelectedLevels,
        selectedModels, setSelectedModels,
        selectedCompanies, setSelectedCompanies,
        salaryRange, setSalaryRange,
        selectedIndustries, setSelectedIndustries,
      }}>
            <FilterJobs />
          </FilterContext.Provider>
          <Row>
            <Col xs="12" sm="12" lg="5">
              <div className="d-flex flex-column mt-4">
                {jobs!=="Not found"&&jobs.map((job) => (
                  <JobCard
                    job={job}
                    handleSetJobActive={handleSetJobActive}
                    jobActive={jobActive}
                  />
                ))}
              </div>
            </Col>
            <Col className="d-none d-sm-none d-lg-block" style={{ position: "sticky", top: "80px", height: "100vh" }}>
              <JobDetail job={jobActive} />
            </Col>
          </Row>

          <div className="my-4 d-flex justify-content-center">
        <CustomPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
        </div>

        </div>

      </div>
     

      <div style={{ borderTop: "1px solid #a6a6a6a6" }} className="mt-4 ">
        <div className="icontainer-header">
          <div className="py-4 d-flex gap-2" style={{ fontSize: "20px" }}>
            <a href="" className="text-secondary">
              Trang chủ
            </a>
            <p className="text-secondary">{">"}</p>
            <a href="" className="text-secondary">
              Tất cả việc làm IT
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export const useFilter = () => useContext(FilterContext);
 