// Importamos la instancia que ya tiene configurado el Token y la URL base
import api from "../api/axios"; 

// ✅ LOGIN
// Como 'api' ya tiene la base "https://.../api", solo sumamos el resto
export const loginRequest = async (user) => {
  return await api.post("/auth/login", user);
};

// ✅ REGISTER
export const registerRequest = async (user) => {
  return await api.post("/auth/register", user);
};

// ✅ RECOVER
export const recoverPasswordRequest = (email) => {
  return api.post("/auth/recover", { email }); 
};