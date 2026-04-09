import axios from "axios";

// 1. Quitamos la barra final de la URL base
const API_URL = "https://backend-transacciones.onrender.com/api";

// ✅ EXPORTAR LOGIN
export const loginRequest = async (user) => {
  // 2. Agregamos /auth antes de /login
  return await axios.post(`${API_URL}/auth/login`, user);
};

// ✅ EXPORTAR REGISTER
export const registerRequest = async (user) => {
  // 2. Agregamos /auth antes de /register
  return await axios.post(`${API_URL}/auth/register`, user);
};

// ✅ EXPORTAR RECOVER
export const recoverPasswordRequest = (email) => {
    // Aquí ya tenías el /auth, solo quitamos la barra doble
    return axios.post(`${API_URL}/auth/recover`, { email }); 
};