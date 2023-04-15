import React, { useState, useEffect } from "react";
import DetailsData from "./DetailsData";
import "./DetailsTable.css";
import axios from "axios";

function DetailsTable() {

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

  return (
    <>
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
            </tr>
            <tr className="filter-row">
              <td className="icon">
                {/* <button onClick={handleRefresh}>
                </button> */}
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
            {filteredStudents?.map((student, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{student.studentName}</td>
                <td>{student.rollNo}</td>
                <td>{student.emailID}</td>
                <td>{student.phoneNo}</td>
                <td>{student.department}</td>
                <td>{student.stream}</td>
                <td>{student.cgpa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div >
    </>
  );
}

export default DetailsTable;
