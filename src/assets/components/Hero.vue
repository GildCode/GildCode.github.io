<template>
  <section
    id="hero"
    class="text-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-800 to-indigo-900"
  >
    <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">¡Hola mundo! Soy</h2>
    <h1
      class="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 text-indigo-300"
    >
      Gildardo Rios
    </h1>
    <p class="text-lg sm:text-xl md:text-2xl mb-5 sm:mb-6">
      Desarrollador de software 🚀
    </p>
    <router-link
      to="/about"
      class="bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-6 rounded-full transition"
    >
      Sobre mí
    </router-link>
  </section>
</template>

<script setup>
</script>

<style scoped>
</style>
