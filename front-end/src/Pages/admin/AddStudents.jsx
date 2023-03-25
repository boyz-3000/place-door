import React, { useEffect } from "react";
import "../../components/admin/add-student/AddStudentForm";
import "./AddStudents.css";

function AddStudents(props) {
  useEffect(() => {
    document.body.style.background = "#645cbb";
  })
  return (
      <div className="page">
        <div className="card">{props.children}</div>
      </div>
  );
}

export default AddStudents;
