// src/services/productoLoteService.js

import axios from 'axios';

const API_URL = 'http://localhost:8080/api/producto-lotes'; // Cambia la URL según tu configuración

const addProductoLote = async (productoLote) => {
  return await axios.post(API_URL, productoLote);
};

const fetchProductos = async () => {
  return await axios.get('http://localhost:8080/api/productos'); // Cambia la URL según tu configuración
};

const fetchLotes = async () => {
  return await axios.get('http://localhost:8080/api/lotes'); // Cambia la URL según tu configuración
};

export default {
  addProductoLote,
  fetchProductos,
  fetchLotes,
};
