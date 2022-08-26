import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001/api'
});

axiosInstance.interceptors.request.use((req) => {
  req.headers = {
    Authorization: `Bearer ${localStorage.getItem('access_token')}`
  };
  return req;
});

// Uncomment code if you are using access token/refresh token
axiosInstance.interceptors.response.use(
  (res) => res,
  //   async (error) => {
  //     const status = error.response ? error.response.status : null;
  //     if (status === 401) {
  //       const { data } = await axiosInstance.post('/refreshAccessToken', {
  //         refreshToken: localStorage.getItem('refresh_token')
  //       });
  //       localStorage.setItem('access_token', data.accessToken);
  //       error.config.headers['Authorization'] = `Bearer ${data.accessToken}`;
  //       return axiosInstance.request(error.config);
  //     }
  //     return Promise.reject(error);
  //   }
  async (error) => Promise.reject(error)
);

export default axiosInstance;
