import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;


export const sendData = async (data: string): Promise<string> => {
    try {
        const response = await axios.post(`${API_URL}`, { question: data }, {
            headers: {
                'Content-Type': 'application/json'
            },
        });
        return response.data.answer as string;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};
