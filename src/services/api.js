import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-filmes-e-series.herokuapp.com',
  // baseURL: 'http://192.168.1.117:3333',
});

export default api;
