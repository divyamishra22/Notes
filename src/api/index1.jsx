import axios from 'axios';

const api = axios.create({
  baseURL: 'https://notefinal.onrender.com'
});

export default api;