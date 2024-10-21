// src/services/clienteService.js
import axios from 'axios';

const API_URL = '/api/clientes'; // Cambia la URL según tu configuración

const fetchClientes = async (query) => {
  return await axios.get(`${API_URL}?search=${query}`);
};

const addCliente = async (cliente) => {
  return await axios.post(API_URL, cliente);
};

export default {
  fetchClientes,
  addCliente,
};
