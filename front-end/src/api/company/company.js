import axios from "axios";

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