import React from "react";
import AppliedJobDetails from "../../components/applied-jobs/AppliedJobDetails";
import TopBar from "../../components/top-bar/TopBar";
import AppliedJobData from "./AppliedJobsData";

function AppliedJobs() {
  return (
    <>
    <TopBar />
    <div>
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
    </div>
    </>
  );
}

export default AppliedJobs;
