<template>
  <div class="venta-card">
    <h2>Generar Venta</h2>
    <form @submit.prevent="generateFactura">
      <div class="cliente-input">
        <input
          type="text"
          v-model="clienteInput"
          @input="buscarCliente"
          placeholder="Ingrese el nombre del cliente"
          required
        />
      </div>
      
      <div v-for="(producto, index) in productos" :key="index" class="producto-item">
        <select v-model="producto.id" required>
          <option value="">Seleccione un producto</option>
          <option v-for="prod in todosLosProductos" :key="prod.idProducto" :value="prod.idProducto">
            {{ prod.nombre }}
          </option>
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
import productoService from '@/services/productService'; // Asegúrate de tener este servicio
import personaService from '@/services/personaService'; // Asegúrate de tener este servicio

export default {
  data() {
    return {
      clienteInput: '', // Input del cliente
      productos: [{ id: '', cantidad: 1 }],
      todosLosProductos: [], // Aquí almacenaremos todos los productos
      clientes: [], // Aquí almacenaremos los clientes encontrados
    };
  },
  methods: {
    addProducto() {
      this.productos.push({ id: '', cantidad: 1 });
    },
    async buscarCliente() {
      try {
        if (this.clienteInput.length >= 3) { // Solo buscar si hay al menos 3 caracteres
          const response = await personaService.fetchClientes(this.clienteInput);
          this.clientes = response.data; // Actualiza la lista de clientes encontrados
        } else {
          this.clientes = []; // Reinicia la lista si el texto es corto
        }
      } catch (error) {
        console.error('Error al buscar clientes:', error);
      }
    },
    async generateFactura() {
      let cliente;
      const encontrado = this.clientes.find(c => 
        `${c.nombres} ${c.apellidos}`.toLowerCase() === this.clienteInput.toLowerCase()
      );

      if (encontrado) {
        cliente = encontrado.documento; // Si se encontró, utiliza su documento
      } else {
        // Si no se encontró, crea un nuevo cliente
        const nuevoCliente = {
          nombres: this.clienteInput.split(' ')[0], // Asumiendo el primer nombre
          apellidos: this.clienteInput.split(' ').slice(1).join(' '), // El resto como apellidos
          // Agrega otros campos que sean necesarios
        };
        const response = await personaService.addPersona(nuevoCliente);
        cliente = response.data.documento; // Obtén el documento del nuevo cliente
      }

      const factura = {
        cliente: cliente,
        fecha: new Date(),
        detalles: this.productos.map(p => ({
          idProducto: p.id,
          cantidad: p.cantidad,
        })),
      };

      try {
        await this.$http.post('/api/facturas', factura);
        alert('Factura generada con éxito!');
      } catch (error) {
        console.error('Error generando la factura:', error);
      }
    },
    async fetchProductos() {
      try {
        const response = await productoService.fetchProductos();
        this.todosLosProductos = response.data;
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    }
  },
  created() {
    this.fetchProductos(); // Llama a este método para llenar la lista de productos
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

h2 {
  text-align: center;
  color: #333;
}

input, select {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.producto-item {
  margin-bottom: 15px; /* Espacio entre los productos */
}

.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 15px; /* Espacio entre los botones y el formulario */
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
