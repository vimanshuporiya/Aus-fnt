import axios from "axios";

const apiRequest = axios.create({
    baseURL:"https://aus-estate-back.onrender.com/api",
    withCredentials:true,
});
export default apiRequest;