import React from "react";
import AppliedJobDetails from "../../../components/student/applied-jobs/AppliedJobDetails";
import AppliedJobData from "./AppliedJobsData";

function AppliedJobs() {
  return (
    <>
      {AppliedJobData.map((x) => (
        <AppliedJobDetails
          name={x.name}
          position={x.position}
          appliedDate={x.appliedOn}
          mode={x.mode}
          package={x.package}
          stipend={x.stipend}
          city={x.city}
          email={x.email}
        />
      ))}
    </>
  );
}

export default AppliedJobs;