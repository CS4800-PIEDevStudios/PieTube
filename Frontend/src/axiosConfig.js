import axios from 'axios';

export const host = 'http://127.0.0.1:8000' // Change host here

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  withCredentials: true,  // Important to include cookies (sessionid & csrftoken)
});

export default axiosInstance;