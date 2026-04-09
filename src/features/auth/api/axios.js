import axios from 'axios';
const api = axios.create({
  // Eliminamos el localhost para que no haya dudas
  baseURL: import.meta.env.VITE_API_URL || 'https://backend-transacciones.onrender.com/api/auth',
  headers: { 'Content-Type': 'application/json' },
});
// Interceptor para adjuntar el token si existe:
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  
  // AÑADE ESTO PARA DEPURAR:
  console.log("¿Hay token en el interceptor?", !!token);
  
  if (token) {
    // Asegúrate de que haya un ESPACIO después de 'Bearer'
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export default api;