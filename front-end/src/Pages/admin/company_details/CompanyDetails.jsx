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
            company.emailID.toLowerCase().includes(filters.emailID.toLowerCase()) &&
            company.contactNo.toLowerCase().includes(filters.contactNo.toLowerCase()) &&
            company.city.toLowerCase().includes(filters.city.toLowerCase()) &&
            company.state.toLowerCase().includes(filters.state.toLowerCase())
        );
    });

    useEffect(() => {
        async function fetchCompanies() {
            const response = await axios.get('http://localhost:5001/get-companies');
            console.log(response);
            setCompanies(response.data);
            console.log(companies);
        }

        fetchCompanies();
        console.log('waiting');
        console.log(fetchCompanies());
    }, []);

    return (
        <>
            <TopBar />
            <div className="alert alert-secondary" role="alert">
                Company Details
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
                                    name="contactNo"
                                    value={filters.contactNo}
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
                            <td>
                                <input
                                    type="text"
                                    name="state"
                                    value={filters.state}
                                    onChange={handleFilterChange}
                                />
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCompanies?.map((company, i) => (
                            <tr key={i}>
                                <th scope="row">{i + 1}</th>
                                <td>{company.companyName}</td>
                                <td>{company.emailID}</td>
                                <td>{company.contactNo}</td>
                                <td>{company.city}</td>
                                <td>{company.state}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >
        </>
    );
}

export default CompanyDetails;