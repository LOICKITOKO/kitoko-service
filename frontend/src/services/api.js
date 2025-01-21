import axios from "axios";

const API_BASE_URL = 'http://127.0.0.1:8000/api/services/';

export const fetchServices = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}services/`);
        return response.data;
    } catch (error) {
        console.error("Erreur lors du chargement des services", error);
        throw error;
    }
};
