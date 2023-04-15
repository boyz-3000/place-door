import React, { useState, useEffect, useContext } from "react";
import Card from "../../../components/card/Card";
import "./Jobs.css";
import TopBar from "../../../components/top-bar/TopBar";
import { useNavigate } from 'react-router-dom';
import { getStudent } from "../../../api/student/student";
import { getCompanies } from "../../../api/company/company";

function Jobs() {
  const username = localStorage.getItem('username');
  const navigate = useNavigate();

  const [companies, setCompanies] = useState([]);

  useEffect(() => {

    if (localStorage.getItem('isLoggedIn') === 'false') {
      navigate('/');
    }

    if (!getStudent()) {
      navigate('/profile');
    }

    async function getCompaniesData() {
      const result = await getCompanies();
      setCompanies(result);
    }
    getCompaniesData();

  }, []);

  return (
    <>
      <TopBar />
      <div className="container text-center dashboard">
        <div className="row">
          {companies?.map((company) => (
            <div className="col-lg-4 col-md-6 col-sm-12 card-item">
              <Card
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
