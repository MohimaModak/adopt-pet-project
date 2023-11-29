import axios from 'axios';

const usePublicAxios = axios.create({
    baseURL: "http://localhost:2000/"
})

const AxiosPublic = () => {
    return usePublicAxios
};

export default AxiosPublic;