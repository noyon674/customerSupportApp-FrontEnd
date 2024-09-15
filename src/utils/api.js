// src/utils/api.js
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_BACKEND_API;

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "multipart/form-data",
    },
});

export const registerUser = async (userData) => {
    const response = await apiClient.post('register/', userData);
    return response.data;
};

export const logInUser = async (userData) => {
    const response = await apiClient.post('login/', userData);
    return response.data;
};

export const getTickets = async () =>{
    const response = await apiClient.get('/tickets')
    return response.data
}
// You can add more API functions here as needed
