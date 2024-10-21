// src/services/facturaService.js
import axios from 'axios';

const API_URL = '/api/facturas';

export default {
  async crearFactura(factura) {
    const response = await axios.post(API_URL, factura);
    return response.data;
  },
};
