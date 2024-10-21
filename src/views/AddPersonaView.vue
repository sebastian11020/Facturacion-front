<template>
  <div class="form-card">
    <h2>Añadir Persona</h2>
    <form @submit.prevent="addPersona">
      <input type="text" v-model="persona.nombres" placeholder="Nombres" required />
      <input type="text" v-model="persona.apellidos" placeholder="Apellidos" required />
      <input type="email" v-model="persona.correo" placeholder="Correo" required />
      <input type="text" v-model="persona.direccion" placeholder="Dirección" required />
      <input type="text" v-model="persona.telefono" placeholder="Teléfono" required />
      <select v-model="persona.tipoDocumento" required>
        <option value="">Seleccione tipo de documento</option>
        <option value="CC">Cédula de Ciudadanía</option>
        <option value="CE">Cédula de Extranjería</option>
      </select>
      <select v-model="persona.genero" required>
        <option value="">Seleccione género</option>
        <option value="M">Masculino</option>
        <option value="F">Femenino</option>
      </select>
      <button type="submit" class="submit-button">Guardar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      persona: {
        nombres: '',
        apellidos: '',
        correo: '',
        direccion: '',
        telefono: '',
        tipoDocumento: '',
        genero: ''
      }
    };
  },
  methods: {
    addPersona() {
      // Lógica para añadir la persona (ej. hacer una llamada a la API)
      console.log("Persona añadida:", this.persona);
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
