<template>
    <section id="contact" class="py-20 bg-gray-100 text-gray-800">
      <div class="max-w-3xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-6">Contáctame</h2>
        <p class="mb-4">¿Tienes una idea, proyecto o quieres trabajar conmigo?</p>
        <form class="space-y-4">
          <input type="text" placeholder="Tu nombre" class="w-full p-3 rounded border border-gray-300" />
          <input type="email" placeholder="Tu correo" class="w-full p-3 rounded border border-gray-300" />
          <textarea placeholder="Escribe tu mensaje" rows="4" class="w-full p-3 rounded border border-gray-300"></textarea>
          <button
            type="submit"
            disabled
            class="bg-indigo-500 text-white px-6 py-3 rounded hover:bg-indigo-600 cursor-not-allowed"
          >
            Enviar mensaje (pendiente configurar)
          </button>
        </form>
      </div>
    </section>
  </template>
  
  <script setup>
  </script>