import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ec2-16-171-177-112.eu-north-1.compute.amazonaws.com:3000',
});

export default api;