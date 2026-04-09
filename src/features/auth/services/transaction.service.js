import api from "../api/axios";

// Cambiamos a 'listTransactions' y apuntamos al endpoint de transacciones
export const listTransactions = (params = {}) => 
    api.get("/transacciones", { params }); 

export const createTransaction = (data) => api.post("/transacciones", data);

export const getTransaction = (id) => 
    api.get(`/transacciones/${id}`);

export const deleteTransaction = (id) => 
    api.delete(`/transacciones/${id}`);