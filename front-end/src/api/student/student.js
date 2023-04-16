import axios from "axios";

export async function getStudent(username) {
    const response = await axios.get(`http://localhost:5001/get-student?username=${username}`);

    if (response.data['message'] === null) {
        return false;
    }
    return response.data;
}

export async function updateStudent(student) {
    try {
        const response = await axios.post(
            `http://localhost:5001/update-student`,
            student
        );
        alert("Student profile updated successfully!");
    } catch (error) {
        console.error(error);
    }
}