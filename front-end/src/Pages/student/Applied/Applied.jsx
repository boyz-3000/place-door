import React, { useState, useEffect } from "react";
import AppliedJobDetails from "../../../components/student/applied-jobs/AppliedJobDetails";
import TopBar from "../../../components/top-bar/TopBar";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function AppliedJobs() {

  const navigate = useNavigate();

  const [applications, setApplications] = useState([]);

  useEffect(() => {

    if (localStorage.getItem('isLoggedIn') === 'false') {
      navigate('/');
    }

    async function fetchCompanies() {
      const response = await axios.get('http://localhost:5001/get-applications');
      setApplications(response.data);
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
        {console.log(applications)}
        {applications?.map((application) => (
          <AppliedJobDetails
            name={application.company}
            position={application.jobRole}
            appliedDate={application.lastDate}
            mode={application.mode}
            package={application.package}
            stipend={application.stipend}
            city={application.city}
            email={application.email}
          />
        ))}
      </div>
    </>
  );
}

export default AppliedJobs;