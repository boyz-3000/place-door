import React, { useState, useEffect }  from "react";
import DetailsData from "./DetailsData";
import "./DetailsTable.css";
import axios from "axios";

function DetailsTable() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetchStudents() {
      const response = await axios.get('http://localhost:5001/student-details');
      // const response = await fetch('http://localhost:5001/jobs', {
      //   method: 'GET',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   // body: JSON.stringify({ username, password })
      // });
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
              <th scope="col">Batch</th>
              <th scope="col">Stream</th>
              <th scope="col">CGPA</th>
            </tr>
          </thead>
          <tbody>
            {students?.map((student, i)=>(
              <tr key={i}>
                <th scope="row">{i+1}</th>
                <td>{student.name}</td>
                <td>{student.roll}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.batch}</td>
                <td>{student.stream}</td>
                <td>{student.cgpa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DetailsTable;
