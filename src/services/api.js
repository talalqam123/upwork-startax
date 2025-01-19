import axios from 'axios';

const BASE_URL = 'https://start-backend.vercel.app/api';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

export const clientAPI = {
    getAllClients: async () => {
        try {
            const response = await api.get('/clients');
            console.log('API Response:', response); // Debug log
            return response;
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    },
    addClient: (data) => api.post('/clients', data),
    updateClient: (id, data) => api.put(`/clients/${id}`, data),
    deleteClient: (id) => api.delete(`/clients/${id}`),
};

// Add response interceptor
api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error);
        return Promise.reject(error);
    }
);

export default api;
