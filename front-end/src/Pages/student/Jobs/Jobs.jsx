import React, { useState, useEffect, useContext } from "react";
import Card from "../../../components/card/Card";
import "./Jobs.css";
import TopBar from "../../../components/top-bar/TopBar";
import axios from "axios";
import UserContext from "../../../UserContext";
import { useNavigate } from 'react-router-dom';

function Jobs() {

  const { user, userType } = useContext(UserContext);
  const { loggedIn, setLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function fetchCompanies() {
      const response = await axios.get('http://localhost:5001/jobs');
      // const response = await fetch('http://localhost:5001/jobs', {
      //   method: 'GET',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   // body: JSON.stringify({ username, password })
      // });
      setCompanies(response.data);
    }

    fetchCompanies();
    console.log('waiting');
    console.log(fetchCompanies());
  }, []);

  if (!loggedIn) {
    navigate('/');
  } 

  return (
    <>
    <TopBar/>
    <div className="container text-center dashboard">
      <div className="row">
        {console.log(userType)}
        {companies?.map((company) => (
          <div className="col-lg-4 col-md-6 col-sm-12 card-item">
            <Card
              name={company.name}
              email={company.email}
              job_profile={company.job_profile}
              lastDate={company.lastDate}
              mode={company.mode}
              location={company.location}
            />
          </div>
        ))}
      </div>
    </div>
    </>

  );
}

export default Jobs;
