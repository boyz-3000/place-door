import React, { useState, useEffect, useContext } from "react";
import Card from "../../../components/card/Card";
import "./Jobs.css";
import TopBar from "../../../components/top-bar/TopBar";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Jobs() {
  const username = localStorage.getItem('username');
  const navigate = useNavigate();

  const [companies, setCompanies] = useState([]);

  useEffect(() => {

    if (localStorage.getItem('isLoggedIn') === 'false') {
      navigate('/');
    }

    async function fetchCompanies() {
      axios
        .get(`http://localhost:5001/get-jobs/`)
        .then(response => {
          setCompanies(response.data);
          console.log("done!!");
        })
        .catch(error => {
          console.log(error);
        });
    }

    fetchCompanies();
    console.log('waiting');
    console.log('done 2!!');
  }, []);

  return (
    <>
      <TopBar />
      <div className="container text-center dashboard">
        <div className="row">
          {companies?.map((company) => (
            <div className="col-lg-4 col-md-6 col-sm-12 card-item">
              <Card
                // name={company.companyName}
                // email={company.emailID}
                // job_profile={company.jobRole}
                // lastDate={company.lastDate}
                // mode={company.mode}
                // location={company.state + ", " + company.city}
                company={company}
              />
            </div>
          ))}
        </div>
      </div>
    </>

  );
}

export default Jobs;
