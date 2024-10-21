// src/services/personaService.js

import axios from 'axios';

const API_URL = 'http://localhost:8080/api/productos'; // Cambia la URL según tu configuración

const addProduct = async (product) => {
  return await axios.post(API_URL, product);
};

export default {
  addProduct,
};
