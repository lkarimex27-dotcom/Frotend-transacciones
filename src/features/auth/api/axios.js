import axios from 'axios';

const api = axios.create({
  // Base limpia sin barra al final
  baseURL: 'https://backend-transacciones.onrender.com/api', 
  headers: { 'Content-Type': 'application/json' },
});

// Interceptor para el token (necesario para las transacciones)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;