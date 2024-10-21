<template>
    <div>
      <h2>Añadir Persona</h2>
      <form @submit.prevent="addPersona">
        <label for="nombre">Nombre:</label>
        <input type="text" v-model="persona.nombre" required />
  
        <label for="apellido">Apellido:</label>
        <input type="text" v-model="persona.apellido" required />
  
        <label for="documento">Documento:</label>
        <input type="text" v-model="persona.documento" required />
  
        <button type="submit">Guardar</button>
      </form>
    </div>
  </template>
  
  <script>
  import personaService from "@/services/personaService";
  
  export default {
    data() {
      return {
        persona: {
          nombre: "",
          apellido: "",
          documento: ""
        }
      };
    },
    methods: {
      async addPersona() {
        try {
          const response = await personaService.addPersona(this.persona);
          console.log(response.data);
          alert("Persona añadida con éxito");
          this.$router.push("/");
        } catch (error) {
          console.error(error);
          alert("Error al añadir la persona");
        }
      }
    }
  };
  </script>
  