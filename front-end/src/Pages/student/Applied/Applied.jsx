import React, { useState, useEffect } from "react";
import AppliedJobDetails from "../../../components/student/applied-jobs/AppliedJobDetails";
import TopBar from "../../../components/top-bar/TopBar";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function AppliedJobs() {

  const username = localStorage.getItem('username');

  const navigate = useNavigate();

  const [applications, setApplications] = useState([]);

  const handleRefresh = () => {
    setFilters({
      jobRole: "",
      companyName: "",
      emailID: "",
      stipend: "",
      _package: "",
      mode: "",
      state: "",
      city: "",
    });
  };

  const [filters, setFilters] = useState({
    jobRole: "",
    companyName: "",
    emailID: "",
    stipend: "",
    _package: "",
    mode: "",
    state: "",
    city: "",
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const filteredApplications = applications.filter((application) => {
    // Filter the applications based on the current filter values
    return (
      application.jobRole.toLowerCase().includes(filters.jobRole.toLowerCase()) &&
      application.companyName.toLowerCase().includes(filters.companyName.toLowerCase()) &&
      application.stipend.toLowerCase().includes(filters.stipend.toLowerCase()) &&
      application._package.toLowerCase().includes(filters._package.toLowerCase()) &&
      application.mode.toLowerCase().includes(filters.mode.toLowerCase()) &&
      application.state.toLowerCase().includes(filters.state.toLowerCase()) &&
      application.city.toLowerCase().includes(filters.city.toLowerCase())
    );
  });

  useEffect(() => {

    if (localStorage.getItem('isLoggedIn') === 'false') {
      navigate('/');
    }

    async function fetchCompanies() {
      const response = await axios.get(`http://localhost:5001/get-applied-companies/${username}`);
      setApplications(response.data);
      console.log(response.data);
      console.log(username);
    }

    fetchCompanies();
    console.log('waiting');
    console.log(applications);
  }, []);

  // if (!loggedIn) {
  //   navigate('/');
  // }

  return (
    <>
      <TopBar />
      <div className="alert alert-secondary" role="alert">
        Applied Companies List
      </div>
      <div className="table-container table-responsive-sm table-responsive-md">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">Job Role</th>
              <th scope="col">Company Name</th>
              <th scope="col">Email</th>
              <th scope="col">Stipend</th>
              <th scope="col">Package</th>
              <th scope="col">Mode</th>
              <th scope="col">State</th>
              <th scope="col">City</th>
            </tr>
            <tr className="filter-row">
              <td className="icon">
                <i class="fa fa-refresh" aria-hidden="true" onClick={handleRefresh}></i>
              </td>
              <td>
                <input
                  type="text"
                  name="jobRole"
                  value={filters.jobRole}
                  onChange={handleFilterChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="companyName"
                  value={filters.companyName}
                  onChange={handleFilterChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="emailID"
                  value={filters.emailID}
                  onChange={handleFilterChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="stipend"
                  value={filters.stipend}
                  onChange={handleFilterChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="_package"
                  value={filters._package}
                  onChange={handleFilterChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="mode"
                  value={filters.mode}
                  onChange={handleFilterChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="state"
                  value={filters.state}
                  onChange={handleFilterChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="city"
                  value={filters.city}
                  onChange={handleFilterChange}
                />
              </td>
            </tr>
          </thead>
          <tbody>
            {filteredApplications.map((application, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{application.jobRole}</td>
                  <td>{application.companyName}</td>
                  <td>{application.emailID}</td>
                  <td>{application.stipend}</td>
                  <td>{application._package+ " LPA"}</td>
                  <td>{application.mode}</td>
                  <td>{application.state}</td>
                  <td>{application.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div >
    </>
  );
}

export default AppliedJobs;