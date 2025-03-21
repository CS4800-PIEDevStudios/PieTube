import axios from 'axios';
import Cookies from 'js-cookie';
// FOR BASE URL: USE 'http://localhost:8000' DURING DEVELOPMENT AND USE PUBLIC IP DURING PRODUCTION
const axiosInstance = axios.create({
  baseURL: 'https://ec2-23-20-205-143.compute-1.amazonaws.com',
  withCredentials: true,  // Important to include cookies (sessionid & csrftoken)
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFToken'
});

axiosInstance.interceptors.request.use(
config => {
	const csrfToken = Cookies.get('csrftoken');
	console.log("SETTING CSRF TOKEN: " + csrfToken)
	if (csrfToken) 
	{
		config.headers['X-CSRFToken'] = csrfToken;  // Add CSRF token to request header
	}
	return config;
},
error => Promise.reject(error)
);

export default axiosInstance;