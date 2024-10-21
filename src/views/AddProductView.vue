<template>
  <div class="form-card">
    <h2>Añadir Producto</h2>
    <form @submit.prevent="addProduct">
      <input type="text" v-model="producto.nombre" placeholder="Nombre del Producto" required />
      <input type="text" v-model="producto.unidadMedida" placeholder="Unidad de Medida" required />
      <button type="submit" class="submit-button">Guardar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      producto: {
        nombre: '',
        unidadMedida: ''
      }
    };
  },
  methods: {
    addProduct() {
      // Lógica para añadir el producto (ej. hacer una llamada a la API)
      console.log("Producto añadido:", this.producto);
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

input {
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
