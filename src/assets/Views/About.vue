<template>
  <section class="min-h-screen bg-gray-100 text-gray-800 py-12 px-6">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
      
      <!-- Columna Izquierda -->
      <div class="md:w-1/3 bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
        <!-- Foto Redonda -->
        <div class="w-100 h-80 mb-7">
          <img
            src="C:\Users\GILD\Desktop\Portafolio\src\assets\foto.png"
            alt="Foto de Gildardo"
            class="w-80 h-80 object-cover rounded-full border-4 border-indigo-600 scale-140"
          />
        </div>

   

        <!-- Habilidades Técnicas -->
         <div>
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
     <br /><br />
    <h3 class="text-xl font-semibold mb-4 text-center">Habilidades Personales</h3>
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
     <div class="md:w-3/5 bg-white p-8 rounded-xl shadow-md">
        <h2 class="text-3xl font-bold mb-6 text-center md:text-left">Sobre mí</h2>
        <p class="text-gray-700 mb-6 leading-relaxed">
          Soy Gildardo Ríos, estudiante de Ingeniería Informática con una profunda pasión por la tecnología, el desarrollo de software y la creación de soluciones que realmente marquen la diferencia. Me considero una persona curiosa por naturaleza, proactiva y con un enfoque constante hacia el aprendizaje. Disfruto explorar nuevas tecnologías, experimentar con el código y enfrentar desafíos que me reten a crecer profesionalmente.
          <br /><br />
          Tengo experiencia en soporte técnico y desarrollo con lenguajes como Java, Python y frameworks como Vue.js. Actualmente me enfoco en crear aplicaciones web útiles y funcionales, buscando siempre mejorar la experiencia del usuario. Para mí, programar no es solo escribir líneas de código: es jugar, descubrir y construir soluciones que generen impacto.
        </p>

        <h2 class="text-3xl font-bold mb-6 text-center md:text-left">Experiencia Laboral</h2>
       
        <p class="text-gray-700 mb-6 leading-relaxed">
          Cuento con experiencia en el área de soporte técnico remoto, enfocado en la resolución de incidentes tecnológicos y atención al usuario en mesa de ayuda. He brindado soporte a través de canales como teléfono, web y chat, solucionando problemas relacionados con sistemas operativos, software de oficina y hardware.

Entre mis fortalezas destacan la identificación y diagnóstico de fallas, así como el seguimiento y escalamiento de incidentes a otros niveles de soporte. Además, tengo conocimientos en procesos de tecnología, infraestructura y comunicaciones.

Actualmente estoy orientando mi carrera hacia el desarrollo de software, combinando mi experiencia técnica con formación en programación. Me interesa participar en proyectos que permitan crear soluciones prácticas, mejorar procesos y aportar valor a los usuarios a través del desarrollo de aplicaciones.
        </p>
        <br /><br />

        <!-- Habilidades Personales -->
        
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>
