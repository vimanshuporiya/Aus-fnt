import axios from "axios";

const apiRequest = axios.create({
    baseURL:"https://aus-estate-back2.onrender.com/api",
    withCredentials:true,
});
export default apiRequest;
