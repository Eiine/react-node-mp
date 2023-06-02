import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';


const useQr = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useSelector((state) => state.auth);
    const { token } = user.token;
    const API_URL = import.meta.env.VITE_PUBLIC_API_URL;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_URL}${url}`, {
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `${token}`,
                    }
                });
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, isLoading, error };
};

export default useQr;