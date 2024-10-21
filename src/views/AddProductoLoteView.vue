<template>
  <div class="form-card">
    <h2>Añadir Producto a Lote</h2>
    <form @submit.prevent="addProductoLote">
      <select v-model="productoLote.id.idProducto" required>
        <option value="">Seleccione Producto</option>
        <option v-for="producto in productos" :key="producto.idProducto" :value="producto.idProducto">
          {{ producto.nombre }}
        </option>
      </select>

      <select v-model="productoLote.id.idLote" required>
        <option value="">Seleccione Lote</option>
        <option v-for="lote in lotes" :key="lote.idLote" :value="lote.idLote">
          {{ lote.fecha }}
        </option>
      </select>

      <input type="number" v-model="productoLote.cantidad" placeholder="Cantidad" required />
      <input type="number" v-model="productoLote.valorUnitario" placeholder="Valor Unitario" required />
      <input type="date" v-model="productoLote.fechaVencimiento" placeholder="Fecha Vencimiento" required />

      <button type="submit" class="submit-button">Guardar</button>
    </form>
  </div>
</template>

<script>
import productoLoteService from '@/services/productoLoteService';

export default {
  data() {
    return {
      productos: [],
      lotes: [],
      productoLote: {
        id: {
          idProducto: '',
          idLote: ''
        },
        cantidad: '',
        valorUnitario: '',
        fechaVencimiento: ''
      }
    };
  },
  created() {
    this.fetchProductos();
    this.fetchLotes();
  },
  methods: {
    async fetchProductos() {
      try {
        const response = await productoLoteService.fetchProductos();
        this.productos = response.data;
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    },
    async fetchLotes() {
      try {
        const response = await productoLoteService.fetchLotes();
        this.lotes = response.data;
      } catch (error) {
        console.error("Error al obtener lotes:", error);
      }
    },
    async addProductoLote() {
      try {
        await productoLoteService.addProductoLote(this.productoLote);
        console.log("Producto-Lote añadido:", this.productoLote);
      } catch (error) {
        console.error("Error al añadir Producto-Lote:", error);
      }
    }
  }
};
</script>

<style scoped>
.form-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 400px;
  margin: 20px auto;
}

input, select {
  width: 95%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.submit-button {
  background-color: #27ae60;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #219653;
}
</style>
