<template>
  <nav class="flex justify-between items-center p-5 bg-indigo-900 text-white shadow-md">
    <h1 class="text-2xl font-bold">Gildardo Rios</h1>
    <ul class="flex space-x-6">
      <li><router-link to="/" class="hover:text-indigo-300">Inicio</router-link></li>
      <li><router-link to="/projects" class="hover:text-indigo-300">Proyectos</router-link></li>
      <li><router-link to="/about" class="hover:text-indigo-300">Sobre mí</router-link></li>
      <li><a href="#contact" class="hover:text-indigo-300">Contacto</a></li> <!-- Esto sí puede seguir así -->
    </ul>
  </nav>
</template>

<script setup>
// No necesitas importar nada si usas <router-link>
</script>

<style scoped>
</style>
