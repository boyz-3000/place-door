import axios from "axios";

async function fetchStudent(username) {
    const response = await axios.get(`http://localhost:5001/get-student?username=${username}`);

    if (response.data['message'] === null) {
        navigate('/profile');
    }
}

async function updateStudent() {
    try {
        const response = await axios.post(
            `http://localhost:5001/update-student`,
            student
        );
        alert("Student profile updated successfully!");
    } catch (error) {
        console.error(error);
        // setLoggedIn(false);
    }
}