import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const useTranfer = ({
    onSuccess = (_data) => { },
    onError = (_error) => { },
    onFinally = () => { },
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const API_URL = import.meta.env.VITE_PUBLIC_API_URL;
    const { user } = useSelector((state) => state.auth);
    const { token } = user.token;

    const postData = (url, tranferData) => {
        setIsLoading(true);
        axios.post(`${API_URL}${url}`, tranferData, {

            headers: {
                "Content-Type": "application/json",
                authorization: `${token}`,
            }

        })
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

export default useTranfer;