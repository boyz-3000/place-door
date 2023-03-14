import React from "react";
import AppliedStudentsData from "./AppliedStudentsData";
import CompAppliedStudDetails from "../../components/company/comp-applied-stud/CompAppliedStudDetails";


function CompAppliedStud (){
    return (
        <div>
            {
                AppliedStudentsData.map((x)=>(
                    <CompAppliedStudDetails name={x.name} email={x.email} phone={x.phone} position={x.position} cgpa={x.cgpa} resume={x.resume} roll={x.roll} techstack={x.techstack}/>
                ))
            }
        </div>
    )
}

export default CompAppliedStud;