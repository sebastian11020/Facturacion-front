<template>
  <nav>
    <ul>
      <li><router-link to="/" class="nav-button">Inicio</router-link></li>
      <li><router-link to="/add-persona" class="nav-button">Añadir Persona</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background-color: #3498db; /* Fondo atractivo */
  padding: 10px;
}

nav ul {
  list-style-type: none;
  display: flex;
  justify-content: center;
}

nav ul li {
  margin: 0 15px;
}

.nav-button {
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.nav-button:hover {
  background-color: #2980b9; /* Efecto de hover */
}
</style>
