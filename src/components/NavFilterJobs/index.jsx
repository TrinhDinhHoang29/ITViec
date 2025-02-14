import DropdownCheckBox from "../DropDownCheckbox";
import { useState } from "react";
import SalaryFilter from "../SalaryFilter";
import IndustryFilter from "../IndustryFilter";
import FilterButton from "../FilterButton";
const NavFilterJobs = ()=>{
    const [salaryRange, setSalaryRange] = useState([500, 10000]);
    // const [salaryRange, setSalaryRange] = useState([500, 10000]);

    return (<>
        <div className="p-3 bg-white my-3 d-flex justify-content-between" style={{boxShadow:"0px 4px 20px rgba(0, 0, 0, .06)"}}>
            <ul className="d-flex gap-2">
            <li>
                    <DropdownCheckBox title={"Level"} options={["Fresher", "Junior", "Senior","Manager"]} />
                </li>
                <li>
                    <DropdownCheckBox title={"Working Model"} options={["At office", "Remote", "Hybrid"]} />
                </li>
                <li>
                    <SalaryFilter onApply={setSalaryRange} />
                </li>
                <li>
                    <IndustryFilter />
                </li>

            </ul>
            <div>
                <FilterButton />
            </div>
        </div>
    </>);
}

export default NavFilterJobs;