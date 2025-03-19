import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/',
  withCredentials: true,  // Important to include cookies (sessionid & csrftoken)
});

export default axiosInstance;