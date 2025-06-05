<template>
  <section class="min-h-screen bg-gray-100 text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
      
      <!-- Columna Izquierda -->
      <div class="md:w-1/3 bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
        <!-- Foto Redonda -->
        <div class="w-48 h-48 sm:w-64 sm:h-64 mb-6">
          <img
            src="foto"
            alt="Foto de Gildardo"
            class="w-full h-full object-cover rounded-full border-4 border-indigo-600"
          />
        </div>

        <!-- Habilidades Técnicas -->
        <div class="w-full">
          <h3 class="text-xl font-semibold mb-4 text-center">Habilidades Técnicas</h3>
          <div class="flex flex-wrap justify-center gap-2 text-white">
            <span class="bg-indigo-600 px-3 py-1 rounded-full text-sm">Java</span>
            <span class="bg-indigo-600 px-3 py-1 rounded-full text-sm">Spring Boot</span>
            <span class="bg-indigo-600 px-3 py-1 rounded-full text-sm">Git</span>
            <span class="bg-indigo-600 px-3 py-1 rounded-full text-sm">GitHub</span>
            <span class="bg-indigo-600 px-3 py-1 rounded-full text-sm">SQL</span>
            <span class="bg-indigo-600 px-3 py-1 rounded-full text-sm">Vue.js</span>
            <span class="bg-indigo-600 px-3 py-1 rounded-full text-sm">Python</span>
          </div>

          <h3 class="text-xl font-semibold mt-8 mb-4 text-center">Habilidades Personales</h3>
          <div class="flex flex-wrap justify-center gap-2 text-white">
            <span class="bg-indigo-600 px-3 py-1 rounded-full text-sm">Proactividad y compromiso</span>
            <span class="bg-indigo-600 px-3 py-1 rounded-full text-sm">Aprendizaje rápido</span>
            <span class="bg-indigo-600 px-3 py-1 rounded-full text-sm">Curiosidad por nuevas tecnologías</span>
            <span class="bg-indigo-600 px-3 py-1 rounded-full text-sm">Resolución de problemas</span>
            <span class="bg-indigo-600 px-3 py-1 rounded-full text-sm">Comunicación efectiva</span>
            <span class="bg-indigo-600 px-3 py-1 rounded-full text-sm">Trabajo en equipo</span>
          </div>
        </div>
      </div>

      <!-- Columna Derecha -->
      <div class="md:w-2/3 bg-white p-6 md:p-8 rounded-xl shadow-md">
        <h2 class="text-3xl font-bold mb-6 text-center md:text-left">Sobre mí</h2>
        <p class="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
        Soy Gildardo Ríos, estudiante de Ingeniería Informática con una profunda pasión por la tecnología, el desarrollo de software y la creación de soluciones que realmente marquen la diferencia. Me considero una persona curiosa por naturaleza, proactiva y con un enfoque constante hacia el aprendizaje. Disfruto explorar nuevas tecnologías, experimentar con el código y enfrentar desafíos que me reten a crecer profesionalmente.
        </p>

        <h2 class="text-3xl font-bold mb-6 text-center md:text-left">Experiencia Laboral</h2>
        <p class="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
         Tengo experiencia en soporte técnico y desarrollo con lenguajes como Java, Python y frameworks como Vue.js. Actualmente me enfoco en crear aplicaciones web útiles y funcionales, buscando siempre mejorar la experiencia del usuario. Para mí, programar no es solo escribir líneas de código: es jugar, descubrir y construir soluciones que generen impacto.
        </p>
      </div>
    </div>
  </section>
</template>

<script>

import foto from '@/assets/foto.png'
export default {
  name: 'About'
}
</script>
