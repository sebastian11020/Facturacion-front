<template>
  <nav>
    <ul>
      <li><router-link to="/" class="nav-button">Inicio</router-link></li>
      <li><router-link to="/add-persona" class="nav-button">Añadir Persona</router-link></li>
      <li><router-link to="/add-product" class="nav-button">Añadir Producto</router-link></li>
      <li><router-link to="/add-producto-lote" class="nav-button">Añadir Producto a Lote</router-link></li>
      <li><router-link to="/VentaView" class="nav-button">Vender</router-link></li> 
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background-color: #3498db; /* Fondo atractivo */
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Sombra para dar profundidad */
}

nav ul {
  list-style-type: none;
  display: flex;
  justify-content: center;
  margin: 0; /* Eliminar margen para un mejor alineamiento */
  padding: 0; /* Eliminar padding para un mejor alineamiento */
}

nav ul li {
  margin: 0 15px;
}

.nav-button {
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.2s; /* Añadido efecto de transformación */
}

.nav-button:hover {
  background-color: #2980b9; /* Efecto de hover */
  transform: scale(1.05); /* Efecto de aumento en el hover */
}
</style>
