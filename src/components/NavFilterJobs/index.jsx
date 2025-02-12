import DropdownCheckBox from "../DropDownCheckbox";

const NavFilterJobs = ()=>{
    return (<>
        <div className="p-3 bg-white">
            <ul className="d-flex gap-2">
            <li>
                    <DropdownCheckBox title={"Level"} options={["Fresher", "Junior", "Senior","Manager"]} />
                </li>
                <li>
                    <DropdownCheckBox title={"Working Model"} options={["At office", "Remote", "Hybrid"]} />
                </li>
                <li></li>
                <li></li>

            </ul>
        </div>
    </>);
}

export default NavFilterJobs;