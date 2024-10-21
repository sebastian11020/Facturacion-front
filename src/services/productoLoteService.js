// src/services/productoLoteService.js

import axios from 'axios';

const API_URL = 'http://localhost:8080/api/producto-lotes'; 

const addProductoLote = async (productoLote) => {
  return await axios.post(API_URL, productoLote);
};

const fetchProductos = async () => {
  return await axios.get('http://localhost:8080/api/productos'); 
};

const fetchLotes = async () => {
  return await axios.get('http://localhost:8080/api/lotes'); 
};

export default {
  addProductoLote,
  fetchProductos,
  fetchLotes,
};
