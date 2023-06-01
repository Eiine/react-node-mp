import axios from 'axios';
import { useState } from 'react';

const useLogin = ({
    onSuccess = (_data) => { },
    onError = (_error) => { },
    onFinally = () => { },
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const API_URL = import.meta.env.VITE_PUBLIC_API_URL;

    const postData = (url, loginData) => {
        setIsLoading(true);
        axios.post(`${API_URL}${url}`, loginData)
            .then((res) => {
                setData(res.data);
                onSuccess(res.data);
            })
            .catch((err) => {
                setError(err.message);
                onError(err.message);
            })
            .finally(() => {
                setIsLoading(false);
                onFinally();
            })
    };

    return { data, isLoading, error, postData };
};

export default useLogin;