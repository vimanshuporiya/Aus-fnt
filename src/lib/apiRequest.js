import axios from "axios";

const apiRequest = axios.create({
    baseURL: "https://ausb.onrender.com",
    withCredentials:true,
});
export default apiRequest;
