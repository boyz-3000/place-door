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

    // async function fetchStudent() {
    //   axios
    //     .get(`http://localhost:5001/get-jobs/`)
    //     .then(response => {
    //       setCompanies(response.data);
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    async function fetchStudent() {
      const response = await axios.get(`http://localhost:5001/get-student?username=${username}`);

      if (response.data['message'] === null) {
        navigate('/profile');
      }
    }

    async function fetchCompanies() {
      axios
        .get(`http://localhost:5001/get-jobs/`)
        .then(response => {
          setCompanies(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
    fetchStudent();
    fetchCompanies();
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
