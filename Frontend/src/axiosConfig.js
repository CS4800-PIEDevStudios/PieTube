import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  withCredentials: true,  // Important to include cookies (sessionid & csrftoken)
});

axiosInstance.interceptors.request.use(
config => {
	const csrfToken = Cookies.get('csrftoken');
	console.log("SETTING CSRF TOKEN: " + csrfToken)
	const cookies = document.cookie.split(';');
    console.log(cookies);  
	if (csrfToken) {
	config.headers['X-CSRFToken'] = csrfToken;  // Add CSRF token to request header
	}
	return config;
},
error => Promise.reject(error)
);

export default axiosInstance;