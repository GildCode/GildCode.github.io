<template>
  <nav class="bg-indigo-900 text-white shadow-md p-5">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-bold">Gildardo Rios</h1>
      <button @click="toggleMenu" class="md:hidden focus:outline-none">
        <!-- Ícono de hamburguesa -->
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
          viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
      <!-- Menú en pantallas grandes -->
      <ul class="hidden md:flex space-x-6">
        <li><router-link to="/" class="hover:text-indigo-300">Inicio</router-link></li>
        <li><router-link to="/projects" class="hover:text-indigo-300">Proyectos</router-link></li>
        <li><router-link to="/about" class="hover:text-indigo-300">Sobre mí</router-link></li>
        <li><a href="#contact" class="hover:text-indigo-300">Contacto</a></li>
      </ul>
    </div>

    <!-- Menú desplegable en móvil -->
    <ul v-if="isMenuOpen" class="mt-4 space-y-3 md:hidden">
      <li><router-link to="/" class="block hover:text-indigo-300">Inicio</router-link></li>
      <li><router-link to="/projects" class="block hover:text-indigo-300">Proyectos</router-link></li>
      <li><router-link to="/about" class="block hover:text-indigo-300">Sobre mí</router-link></li>
      <li><a href="#contact" class="block hover:text-indigo-300">Contacto</a></li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
/* Puedes agregar estilos personalizados si lo deseas */
</style>
