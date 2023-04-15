import axios from "axios";


export async function getCompanies() {
  try {
    const response = await axios.get(`http://localhost:5001/get-jobs`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}