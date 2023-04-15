import React, { useState, useEffect } from "react";
import './CompanyDetails.css';
import TopBar from "../../../components/top-bar/TopBar";
import axios from 'axios';

function CompanyDetails() {
    const [companies, setCompanies] = useState([]);

    const handleRefresh = () => {
        setFilters({
            companyName: "",
            emailID: "",
            contactNo: "",
            city: "",
            state: "",
        });
    };

    const [filters, setFilters] = useState({
        companyName: "",
        emailID: "",
        contactNo: "",
        city: "",
        state: "",
    });

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    };

    const filteredCompanies = companies.filter((company) => {
        // Filter the companies based on the current filter values
        return (
            company.companyName.toLowerCase().includes(filters.companyName.toLowerCase()) &&
            company.rollNo.toLowerCase().includes(filters.rollNo.toLowerCase()) &&
            company.emailID.toLowerCase().includes(filters.emailID.toLowerCase()) &&
            company.phoneNo.toLowerCase().includes(filters.phoneNo.toLowerCase()) &&
            company.department.toLowerCase().includes(filters.department.toLowerCase()) &&
            company.stream.toLowerCase().includes(filters.stream.toLowerCase()) &&
            company.cgpa.toLowerCase().includes(filters.cgpa.toLowerCase())
        );
    });

    useEffect(() => {
        async function fetchStudents() {
            const response = await axios.get('http://localhost:5001/company-details');
            console.log(response);
            setCompanies(response.data);
        }

        fetchStudents();
        console.log('waiting');
        console.log(fetchStudents());
    }, []);

    return (
        <>
            <TopBar />
            <div className="alert alert-secondary" role="alert">
                Student Details
            </div>
            <div className="table-container table-responsive-sm table-responsive-md">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">S.No.</th>
                            <th scope="col">Company Name</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">Contact No</th>
                            <th scope="col">City</th>
                            <th scope="col">State</th>
                        </tr>
                        <tr className="filter-row">
                            <td className="icon">
                                <i class="fa fa-refresh" aria-hidden="true" onClick={handleRefresh}></i>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="studentName"
                                    value={filters.studentName}
                                    onChange={handleFilterChange}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="rollNo"
                                    value={filters.rollNo}
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
                                    name="phoneNo"
                                    value={filters.phoneNo}
                                    onChange={handleFilterChange}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="department"
                                    value={filters.department}
                                    onChange={handleFilterChange}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="stream"
                                    value={filters.stream}
                                    onChange={handleFilterChange}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="cgpa"
                                    value={filters.cgpa}
                                    onChange={handleFilterChange}
                                />
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCompanies?.map((company, i) => (
                            <tr key={i}>
                                <th scope="row">{i + 1}</th>
                                <td>{company.studentName}</td>
                                <td>{company.rollNo}</td>
                                <td>{company.emailID}</td>
                                <td>{company.phoneNo}</td>
                                <td>{company.department}</td>
                                <td>{company.stream}</td>
                                <td>{company.cgpa}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >
        </>
    );
}

export default CompanyDetails;