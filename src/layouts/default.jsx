import { Footer } from "./footer";
import { Header } from "./header";
import Container from "react-bootstrap/Container";
import SearchBar from "../components/SearchBar";
import SpotLight from "../components/SpotLight";
import FilterJobs from "../components/FilterJobs";
import { Col, Row } from "react-bootstrap";
import JobCard from "../components/JobCard";
import JobDetail from "../components/JobDetail";

export const DefaultLayout = () => {
  const jobData = {
    title: "Junior/Senior Business Analyst",
    salary: "Sign in to view salary",
    location: "Ho Chi Minh",
    workType: "At office",
    postedTime: "1 hour ago",
    skills: ["Business Analyst", "English"],
    isHot: true,
    company: {
      name: "TPISoftware Co., Ltd",
      type:"IT Outsourcing",
      country:"Viet Nam",
      industry: "IT Services and Consulting",
      size: "1-50",
      workingDays: "Monday - Friday",
      policy: "No OT",
      logo: "/images/GrabLogo.webp",
      description:"bbv Vietnam stands for top quality in consulting, first class software engineering"
    },
    benefits: [
      "Professional and international working environment",
      "Golden career path",
      "Attractive salary",
    ],
    jobDescription: "<h4>WHAT YOU WILL LOVE DOING</h4> <ul> <li>Participate in requirement analysis, implementation, code review, unit test, test and deployment process.</li> <li>Write technical documents.</li> <li>Collaborate daily with a cross-functional team in a distributed environment.</li> <li>Work as part of a team and participate in customer support activities as needed.</li> <li>Research technologies and share knowledge to colleagues.</li> </ul>"
    
  };
  
  return (
    <>
      <Header />
      <div className="main" style={{marginTop:"80px"}}>
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
        <div className="icontainer-header" style={{ height: "200px" }}>
          <SpotLight />
        </div>
        <div className="icontainer-header">
          <FilterJobs />
        </div>
        <div className="icontainer-header">
          <Row>
            <Col xs="5">
              <div className="d-flex flex-column mt-4">
                <JobCard job={jobData} />
                <JobCard job={jobData} />
                <JobCard job={jobData} />
                <JobCard job={jobData} />
                <JobCard job={jobData} />
                <JobCard job={jobData} /> 

              </div>
            </Col>
            <Col style={{position: "sticky",
  top: "80px" ,
  height: "100vh",}}>
              <JobDetail job={jobData}/>
            </Col>
          </Row>
        </div>
      </div>
      <div className="my-4 text-center">
              pagination
      </div>
      <div style={{borderTop:"1px solid #a6a6a6a6"}} className="mt-4 ">
        <div className="icontainer-header">
          <div className="py-4 d-flex gap-2" style={{fontSize:"20px"}}>
          <a href="" className="text-secondary">Trang chủ</a>
          <p className="text-secondary">{">"}</p>
          <a href="" className="text-secondary">Tất cả việc làm IT</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
