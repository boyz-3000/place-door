import React from "react";
import DetailsData from "./DetailsData";
import "./DetailsTable.css";

function DetailsTable() {
  return (
    <>
      <div className="alert alert-secondary" role="alert">
        Student Details
      </div>
      <div className="table-container">
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
            {DetailsData.map((x)=>(
              <tr>
              <th scope="row">{x.id}</th>
              <td>{x.Name}</td>
              <td>{x.Roll}</td>
              <td>{x.Email}</td>
              <td>{x.Phone}</td>
              <td>{x.Batch}</td>
              <td>{x.Stream}</td>
              <td>{x.CGPA}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DetailsTable;
