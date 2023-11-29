import axios from 'axios';

const usePublicAxios = axios.create({
    baseURL: "https://final-project-server-eight.vercel.app/"
})

const AxiosPublic = () => {
    return usePublicAxios
};

export default AxiosPublic;