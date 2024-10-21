<template>
  <div class="venta-card">
    <h2>Generar Venta</h2>
    <form @submit.prevent="generateFactura">
      <input
        type="text"
        v-model="clienteInput"
        @input="searchClientes"
        placeholder="Buscar cliente"
        required
      />
      <div v-if="clientes.length">
        <ul class="clientes-list">
          <li v-for="cliente in clientes" :key="cliente.id" @click="selectCliente(cliente)">
            {{ cliente.nombres }} {{ cliente.apellidos }}
          </li>
        </ul>
      </div>
      
      <div v-if="!clientes.length && clienteInput" class="nuevo-cliente">
        <p>No se encontró el cliente. ¿Desea crear uno nuevo?</p>
        <button type="button" @click="addNewCliente">Crear Cliente</button>
      </div>
      
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
import clienteService from '@/services/clienteService';

export default {
  data() {
    return {
      clienteInput: '',
      selectedCliente: null,
      clientes: [], // Almacena clientes encontrados
      productos: [{ id: '', cantidad: 1 }], // Almacena productos seleccionados
    };
  },
  methods: {
    async searchClientes() {
      if (this.clienteInput.length > 2) { // Realiza la búsqueda si hay más de 2 caracteres
        try {
          const response = await clienteService.fetchClientes(this.clienteInput);
          this.clientes = response.data; // Asigna los clientes encontrados
        } catch (error) {
          console.error("Error buscando clientes:", error);
        }
      } else {
        this.clientes = []; // Limpiar la lista si hay menos de 3 caracteres
      }
    },
    selectCliente(cliente) {
      this.selectedCliente = cliente.id; // Establece el cliente seleccionado
      this.clienteInput = `${cliente.nombres} ${cliente.apellidos}`; // Muestra el nombre del cliente
      this.clientes = []; // Limpiar la lista de clientes
    },
    async addNewCliente() {
      const newCliente = {
        nombres: this.clienteInput, // Puedes agregar más campos según tu modelo
      };

      try {
        const response = await clienteService.addCliente(newCliente);
        this.selectedCliente = response.data.id; // Asigna el ID del nuevo cliente
        alert('Cliente creado con éxito!');
        this.clientes = []; // Limpiar la lista de clientes
        this.clienteInput = ''; // Limpiar el campo de entrada
      } catch (error) {
        console.error("Error creando cliente:", error);
      }
    },
    addProducto() {
      this.productos.push({ id: '', cantidad: 1 });
    },
    async generateFactura() {
      const factura = {
        cliente: this.selectedCliente || { nombres: this.clienteInput }, // Usar el nuevo cliente si no hay uno seleccionado
        fecha: new Date(),
        detalles: this.productos.map(p => ({
          idProducto: p.id,
          cantidad: p.cantidad,
          // Agrega otros campos necesarios, como el IVA
        })),
      };

      try {
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

.clientes-list {
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #ccc;
  background: white;
  position: absolute;
  z-index: 1000;
}

.clientes-list li {
  padding: 10px;
  cursor: pointer;
}

.clientes-list li:hover {
  background-color: #f0f0f0;
}

.nuevo-cliente {
  margin-top: 10px;
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
  flex: 1;
  margin-right: 10px; 
}

.button:last-child {
  margin-right: 0; 
}

.button:hover {
  background-color: #219653;
}
</style>
