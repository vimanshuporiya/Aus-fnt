import axios from "axios";

const apiRequest = axios.create({
    baseURL: "https://debugserver-54vw.onrender.com/api",
    withCredentials:true,
});
export default apiRequest;
