<template>
  <div class="venta-card">
    <h2>Generar Venta</h2>
    <form @submit.prevent="generateFactura">
      <select v-model="selectedCliente" required>
        <option value="">Seleccione un cliente</option>
        <!-- Aquí puedes cargar los clientes disponibles -->
      </select>
      
      <div v-for="(producto, index) in productos" :key="index">
        <select v-model="producto.id" required>
          <option value="">Seleccione un producto</option>
          <!-- Aquí puedes cargar los productos disponibles -->
        </select>
        <input type="number" v-model="producto.cantidad" placeholder="Cantidad" required min="1" />
      </div>
      
      <div class="button-container">
        <button @click="addProducto" type="button" class="button">Agregar Producto</button>
        <button type="submit" class="button">Generar Factura</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCliente: '',
      productos: [{ id: '', cantidad: 1 }], // Almacena productos seleccionados
    };
  },
  methods: {
    addProducto() {
      this.productos.push({ id: '', cantidad: 1 });
    },
    async generateFactura() {
      const factura = {
        cliente: this.selectedCliente,
        fecha: new Date(),
        detalles: this.productos.map(p => ({
          idProducto: p.id,
          cantidad: p.cantidad,
          // Agrega otros campos necesarios, como el IVA
        })),
      };

      try {
        // Aquí llamas a tu servicio para guardar la factura
        await this.$http.post('/api/facturas', factura);
        alert('Factura generada con éxito!');
      } catch (error) {
        console.error('Error generando la factura:', error);
      }
    },
  },
};
</script>

<style scoped>
.venta-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 600px;
  margin: 20px auto;
}

input, select {
  width: 95%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 10px; /* Espacio entre los botones y el formulario */
}

.button {
  background-color: #27ae60;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  flex: 1; /* Asegura que los botones ocupen el mismo espacio */
  margin-right: 10px; /* Espacio entre los botones */
}

.button:last-child {
  margin-right: 0; /* Elimina el margen derecho del último botón */
}

.button:hover {
  background-color: #219653;
}
</style>
