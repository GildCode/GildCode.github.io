<template>
  <section id="contact" class="py-20 bg-gray-100 text-gray-800">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white shadow-lg rounded-xl p-6 sm:p-10 text-center">
        <h2 class="text-3xl font-bold mb-4">Contáctame</h2>
        <p class="mb-6 text-gray-600 text-base sm:text-lg">
          ¿Tienes una idea, proyecto o quieres trabajar conmigo?
        </p>
        <form class="space-y-4">
          <input
            type="text"
            placeholder="Tu nombre"
            class="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Tu correo"
            class="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            placeholder="Escribe tu mensaje"
            rows="4"
            class="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
          <button
            type="submit"
            disabled
            class="bg-indigo-500 text-white px-6 py-3 rounded hover:bg-indigo-600 cursor-not-allowed transition"
          >
            Enviar mensaje (pendiente configurar)
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
