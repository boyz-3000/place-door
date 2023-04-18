import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import Card from "../../../components/card/Card";
import "./Jobs.css";
import TopBar from "../../../components/top-bar/TopBar";
import { getStudent } from "../../../api/student/student";
import { getCompanies } from "../../../api/company/company";

function Jobs() {
  const username = localStorage.getItem('username');
  const navigate = useNavigate();

  const [companies, setCompanies] = useState([]);
  const [student, setStudent] = useState([]);

  useEffect(() => {

    if (localStorage.getItem('isLoggedIn') === 'false') {
      navigate('/');
    }
    console.log(getStudent(username));
    getStudent(username)
      .then(response => {
        setStudent(response['message']);
      })
      .catch(error => {
        console.error('Error fetching student:', error);
      });
    console.log(student);
    if (student===[]) {
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
          {companies?.map((company, i) => (
            <div className="col-lg-4 col-md-6 col-sm-12 card-item">
              <Card
                company={company}
                key={i}
              />
            </div>
          ))}
        </div>
      </div>
    </>

  );
}

export default Jobs;
