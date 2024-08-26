import axios from "axios";

const apiRequest = axios.create({
    baseURL: process.env.REACT_URL,
    withCredentials:true,
});
export default apiRequest;
