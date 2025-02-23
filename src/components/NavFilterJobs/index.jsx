import DropdownCheckBox from "../DropDownCheckbox";
import { useState } from "react";
import SalaryFilter from "../SalaryFilter";
import IndustryFilter from "../IndustryFilter";
import FilterButton from "../FilterButton";
import { useFilter } from "../../layouts/default";
const NavFilterJobs = ()=>{
const {
    selectedLevels,
    setSelectedLevels,
    selectedModels,
    setSelectedModels,
    salaryRange,
    setSalaryRange,
    selectedCompanies,
    setSelectedCompanies,
    selectedIndustries,
    setSelectedIndustries,
  } = useFilter();

    const deleteAllClick = ()=>{
        setSalaryRange([500,10000]);
        setSelectedLevels([]);
        setSelectedModels([]);
        setSelectedIndustries([]);
        setSelectedCompanies([]);
    }
    const lengthFilter = selectedModels.length + selectedLevels.length + (salaryRange[0]!==500||salaryRange[1]!==10000?1:0) +selectedIndustries.length+selectedCompanies.length;

return (<>
        <div className="p-3 bg-white my-3 d-flex justify-content-between filterButton-parent" style={{boxShadow:"0px 4px 20px rgba(0, 0, 0, .06)"}}>
            <ul className="d-none d-sm-none d-lg-flex gap-2">
            <li>
                    <DropdownCheckBox title={"Level"} selectedOptions={selectedLevels} setSelectedOptions={setSelectedLevels} options={["Fresher", "Junior", "Senior","Manager"]} />
                </li>
                <li>
                    <DropdownCheckBox title={"Working Model"} selectedOptions={selectedModels} setSelectedOptions={setSelectedModels} options={["At office", "Remote", "Hybrid"]} />
                </li>
                <li>
                    <SalaryFilter onApply={setSalaryRange} salaryRange={salaryRange} />
                </li>
                <li>
                    <IndustryFilter selectedIndustries={selectedIndustries} setSelectedIndustries={setSelectedIndustries} />
                </li>
                <li>
                    {selectedCompanies.length>0&& <span className="d-block border border-danger text-danger" style={{padding:"10px 25px",cursor:"pointer",fontSize:"19px",borderRadius:"25px"}} >+ {selectedCompanies.length} filter</span>}
                </li>
                <li>
                    {lengthFilter>0&& <span onClick={deleteAllClick} className="d-block text-dark" style={{padding:"10px 25px",cursor:"pointer",textDecoration:"underline"}} >Xóa</span>}
                </li>
            </ul>
            <div className="filterButton">
                <FilterButton totalFilter={lengthFilter} />
            </div>
        </div>
    </>);
}

export default NavFilterJobs;