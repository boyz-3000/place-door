import React from "react";
import AppliedStudentsData from "./AppliedStudentsData";
import CompAppliedStudDetails from "../../../components/company/comp-applied-stud/CompAppliedStudDetails";

function CompAppliedStud (){
    return (
        <>
            {
                AppliedStudentsData.map((x)=>(
                    <CompAppliedStudDetails name={x.name} email={x.email} phone={x.phone} position={x.position} cgpa={x.cgpa} resume={x.resume} roll={x.roll} techstack={x.techstack}/>
                ))
            }
        </>
    )
}

export default CompAppliedStud;