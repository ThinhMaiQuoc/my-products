import axios from 'axios';
const axiosConfig = axios.create({
  baseURL: 'https://api.airtable.com/v0/apppEuXVVoYReUqej',
});

axiosConfig.defaults.headers.common['Authorization'] =
  'Bearer keyA7UQyT1UeEAUKd';

export default axiosConfig;
