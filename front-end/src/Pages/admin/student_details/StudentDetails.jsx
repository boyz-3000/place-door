import React, { useState, useEffect } from "react";
import './StudentDetails.css';
import TopBar from "../../../components/top-bar/TopBar";
import axios from 'axios';

function StudentDetails() {
    const [students, setStudents] = useState([]);

    const handleRefresh = () => {
        setFilters({
            studentName: "",
            rollNo: "",
            emailID: "",
            phoneNo: "",
            department: "",
            stream: "",
            cgpa: ""
        });
    };

    const [filters, setFilters] = useState({
        studentName: "",
        rollNo: "",
        emailID: "",
        phoneNo: "",
        department: "",
        stream: "",
        cgpa: "",
    });

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    };

    const filteredStudents = students.filter((student) => {
        // Filter the students based on the current filter values
        return (
            student.studentName.toLowerCase().includes(filters.studentName.toLowerCase()) &&
            student.rollNo.toLowerCase().includes(filters.rollNo.toLowerCase()) &&
            student.emailID.toLowerCase().includes(filters.emailID.toLowerCase()) &&
            student.phoneNo.toLowerCase().includes(filters.phoneNo.toLowerCase()) &&
            student.department.toLowerCase().includes(filters.department.toLowerCase()) &&
            student.stream.toLowerCase().includes(filters.stream.toLowerCase()) &&
            student.cgpa.toLowerCase().includes(filters.cgpa.toLowerCase())
        );
    });

    useEffect(() => {
        async function fetchStudents() {
            const response = await axios.get('http://localhost:5001/student-details');
            console.log(response);
            setStudents(response.data);
        }

        fetchStudents();
        console.log('waiting');
        console.log(fetchStudents());
    }, []);

    const [editIndex, setEditIndex] = useState(-1);

    const handleSaveClick = (i, newData) => {
        const updatedStudents = [...filteredStudents];
        updatedStudents[i] = newData;
        console.log(newData === updatedStudents[i]);
        if (!(newData === updatedStudents[i])) {

        }
        setStudents(updatedStudents);

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
                Student Details
            </div>
            <div className="table-container table-responsive-sm table-responsive-md">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">S.No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Roll no.</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone no.</th>
                            <th scope="col">Department</th>
                            <th scope="col">Stream</th>
                            <th scope="col">CGPA</th>
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
                        {filteredStudents.map((student, i) => {
                            if (i === editIndex) {
                                // Render an editable row for the currently selected row
                                return (
                                    <EditableRow
                                        key={i}
                                        i={i}
                                        data={student}
                                        onSave={(newData) => handleSaveClick(i, newData)}
                                        onCancel={handleCancelClick}
                                    />
                                );
                            } else {
                                // Render a regular row for all other rows
                                return (
                                    <tr key={i}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{student.studentName}</td>
                                        <td>{student.rollNo}</td>
                                        <td>{student.emailID}</td>
                                        <td>{student.phoneNo}</td>
                                        <td>{student.department}</td>
                                        <td>{student.stream}</td>
                                        <td>{student.cgpa}</td>
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
                    name="rollNo"
                    value={editedData.rollNo}
                    onChange={handleInputChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    name="emailID"
                    value={editedData.emailID}
                    onChange={handleInputChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    name="phoneNo"
                    value={editedData.phoneNo}
                    onChange={handleInputChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    name="department"
                    value={editedData.department}
                    onChange={handleInputChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    name="stream"
                    value={editedData.stream}
                    onChange={handleInputChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    name="cgpa"
                    value={editedData.cgpa}
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

export default StudentDetails;