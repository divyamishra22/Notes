import axios from 'axios';

const api = axios.create({
  baseURL: 'https://y1ewrstt8d.execute-api.eu-north-1.amazonaws.com'
});

export default api;