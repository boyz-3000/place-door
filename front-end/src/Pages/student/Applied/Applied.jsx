import React, { useState, useEffect } from "react";
import AppliedJobDetails from "../../../components/student/applied-jobs/AppliedJobDetails";
import TopBar from "../../../components/top-bar/TopBar";
import AppliedJobData from "./AppliedJobsData";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function AppliedJobs() {

  const navigate = useNavigate();

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchCompanies() {
      const response = await axios.get('http://localhost:5001/get-jobs');
      // const response = await fetch('http://localhost:5001/jobs', {
      //   method: 'GET',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   // body: JSON.stringify({ username, password })
      // });
      setJobs(response.data);
    }

    fetchCompanies();
    console.log('waiting');
    console.log(fetchCompanies());
  }, []);

  // if (!loggedIn) {
  //   navigate('/');
  // }

  return (
    <>
      <TopBar />
      <div>
        {console.log(jobs)}
        {jobs?.map((job) => (
          <AppliedJobDetails
            name={job.company}
            position={job.jobRole}
            appliedDate={job.lastDate}
            mode={job.mode}
            package={job.package}
            stipend={job.stipend}
            city={job.city}
            email={job.email}
            />
        ))}
      </div>
    </>
  );
}

export default AppliedJobs;