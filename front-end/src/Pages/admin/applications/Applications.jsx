import React, { useState, useEffect } from "react";
import './Applications.css';
import TopBar from "../../../components/top-bar/TopBar";
import axios from 'axios';

function Applications() {
    const [applications, setApplications] = useState([]);

    const handleRefresh = () => {
        setFilters({
            studentName: "",
            studentEmail: "",
            rollNo: "",
            jobRole: "",
            companyName: "",
            companyEmail: "",
        });
    };

    const [filters, setFilters] = useState({
        studentName: "",
        studentEmail: "",
        rollNo: "",
        jobRole: "",
        companyName: "",
        companyEmail: "",
    });

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    };

    const filteredApplications = applications.filter((application) => {
        // Filter the applications based on the current filter values
        return (
            application.studentName.toLowerCase().includes(filters.studentName.toLowerCase()) &&
            application.studentEmail.toLowerCase().includes(filters.studentEmail.toLowerCase()) &&
            application.rollNo.toLowerCase().includes(filters.rollNo.toLowerCase()) &&
            application.jobRole.toLowerCase().includes(filters.jobRole.toLowerCase()) &&
            application.companyName.toLowerCase().includes(filters.companyName.toLowerCase()) &&
            application.companyEmail.toLowerCase().includes(filters.companyEmail.toLowerCase())
        );
    });

    useEffect(() => {
        async function fetchApplications() {
            let response = await axios.get('http://localhost:5001/get-applications');
            setApplications(response.data);
        }

        fetchApplications();
    }, []);

    const [editIndex, setEditIndex] = useState(-1);

    const handleSaveClick = (i, newData) => {
        const updatedApplications = [...filteredApplications];
        updatedApplications[i] = newData;
        console.log(newData===updatedApplications[i]);
        if (!(newData===updatedApplications[i])) {
            
        }
        setApplications(updatedApplications);

        // Clear the edit state
        setEditIndex(-1);
    };

    const handleCancelClick = () => {
        // Clear the edit state
        setEditIndex(-1);
    };

    const handleEditClick = (i) => {
        setEditIndex(i);
    };

    return (
        <>
            <TopBar />
            <div className="alert alert-secondary" role="alert">
                Application Details
            </div>
            <div className="table-container table-responsive-sm table-responsive-md">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">S.No.</th>
                            <th scope="col">Student Name</th>
                            <th scope="col">Student Email</th>
                            <th scope="col">Roll No.</th>
                            <th scope="col">Job Role</th>
                            <th scope="col">Company Name</th>
                            <th scope="col">Company Email</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
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
                                    name="studentEmail"
                                    value={filters.studentEmail}
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
                                    name="companyEmail"
                                    value={filters.companyEmail}
                                    onChange={handleFilterChange}
                                />
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredApplications.map((application, i) => {
                            if (i === editIndex) {
                                // Render an editable row for the currently selected row
                                return (
                                    <EditableRow
                                        key={i}
                                        i={i}
                                        data={application}
                                        onSave={(newData) => handleSaveClick(i, newData)}
                                        onCancel={handleCancelClick}
                                    />
                                );
                            } else {
                                // Render a regular row for all other rows
                                return (
                                    <tr key={i}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{application.studentName}</td>
                                        <td>{application.studentEmail}</td>
                                        <td>{application.rollNo}</td>
                                        <td>{application.jobRole}</td>
                                        <td>{application.companyName}</td>
                                        <td>{application.companyEmail}</td>
                                        <td>
                                            <div onClick={() => handleEditClick(i)}>
                                                <i className="fa-regular fa-pen-to-square fa-xl"></i>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <i className="fa-solid fa-trash fa-xl"></i>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            }
                        })}
                    </tbody>
                </table>
            </div >
        </>
    );
}

function EditableRow({ i, data, onSave, onCancel }) {
    const [editedData, setEditedData] = useState(data);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <tr className="filter-row">
            <th scope="row">{i + 1}</th>
            <td>
                <input
                    type="text"
                    name="studentName"
                    value={editedData.studentName}
                    onChange={handleInputChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    name="studentEmail"
                    value={editedData.studentEmail}
                    onChange={handleInputChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    name="rollNo"
                    value={editedData.rollNo}
                    onChange={handleInputChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    name="jobRole"
                    value={editedData.jobRole}
                    onChange={handleInputChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    name="companyName"
                    value={editedData.companyName}
                    onChange={handleInputChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    name="companyEmail"
                    value={editedData.companyEmail}
                    onChange={handleInputChange}
                />
            </td>
            <td>
                <div onClick={() => onSave(editedData)}>
                    <i class="fa-regular fa-circle-check fa-xl"></i>
                </div>
            </td>
            <td>
                <div onClick={onCancel}>
                    <i class="fa-solid fa-xmark fa-2xl"></i>
                </div>
            </td>
        </tr>
    );
}

export default Applications;