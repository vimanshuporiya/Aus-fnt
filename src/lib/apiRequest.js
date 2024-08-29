import axios from "axios";

const apiRequest = axios.create({
    baseURL: "https://ausb.onrender.com/api",
    withCredentials:true,
});
export default apiRequest;
