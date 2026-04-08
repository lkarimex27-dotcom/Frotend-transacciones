import axios from "axios";

// Configura la URL base de tu backend (ajusta el puerto si es necesario)
const API_URL = "http://localhost:3000/api/auth";

// ✅ EXPORTAR LOGIN
export const loginRequest = async (user) => {
  return await axios.post(`${API_URL}/login`, user);
};

// ✅ EXPORTAR REGISTER (Esta es la que te falta)
export const registerRequest = async (user) => {
  return await axios.post(`${API_URL}/register`, user);
};

// En src/features/auth/services/auth.service.js
export const recoverPasswordRequest = (email) => {
    return axios.post(`${API_URL}/auth/recover`, { email }); 
    // Ajusta la URL según como la tenga tu profesor o equipo de backend
};