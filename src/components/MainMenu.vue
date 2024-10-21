<template>
    <nav>
      <ul>
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/add-persona">Añadir Persona</router-link></li>
        <li><router-link to="/add-product">Añadir Producto</router-link></li> 
        <li><router-link to="/add-product-lote">Añadir Producto a lote</router-link></li> 
      </ul>
    </nav>
  </template>
  
  <style scoped>
  nav ul {
    list-style-type: none;
  }
  nav ul li {
    display: inline;
    margin-right: 10px;
  }
  </style>
  