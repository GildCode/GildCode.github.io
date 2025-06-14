<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

export default {
  components: { Swiper, SwiperSlide },
  data() {
    return {
      projects: [],
      loading: true,
      error: null
    }
  },
  mounted() {
    this.fetchProjects()
  },
  methods: {
    async fetchProjects() {
      try {
        const baseUrl = 'https://gestor-proyectos-production.up.railway.app'
        const response = await fetch(`${baseUrl}/api/projects`)

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        console.log('Proyectos recibidos:', data)

        if (!Array.isArray(data)) {
          throw new Error('La respuesta no es un array de proyectos')
        }

        this.projects = data
      } catch (error) {
        console.error('Error al obtener proyectos:', error)
        this.error = error.message
      } finally {
        this.loading = false
      }
    },
    
    
    getTechColor(tech) {
      const colors = {
        'Vue': 'bg-green-100 text-green-800',
        'React': 'bg-blue-100 text-blue-800',
        'Angular': 'bg-red-100 text-red-800',
        'JavaScript': 'bg-yellow-100 text-yellow-700',
        'TypeScript': 'bg-blue-100 text-blue-700',
        'HTML': 'bg-orange-100 text-orange-800',
        'CSS': 'bg-blue-100 text-blue-600',
        'Java': 'bg-red-100 text-red-700',
        'SpringBoot': 'bg-green-100 text-green-700',
        'PostgreSQL': 'bg-blue-100 text-blue-600',
        'MySQL': 'bg-orange-100 text-orange-800',
        'MongoDB': 'bg-green-100 text-green-600',
        'Docker': 'bg-blue-100 text-blue-700',
        'Node.js': 'bg-green-100 text-green-700',
        'Python': 'bg-yellow-100 text-yellow-800',
        'Tailwind': 'bg-cyan-100 text-cyan-800',
        'Bootstrap': 'bg-purple-100 text-purple-800'
      }
      return colors[tech] || 'bg-gray-100 text-gray-700'
    }
  }
}
</script>

<template>
  <section id="projects" class="py-20 bg-white text-gray-800">
    <div class="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl sm:text-4xl font-bold text-center mb-12">Proyectos</h2>

      <!-- Loading State -->
      <div v-if="loading" class="text-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto"></div>
        <p class="mt-4 text-gray-600">Cargando proyectos...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error && projects.length === 0" class="text-center py-12">
        <div class="text-red-500 mb-4">
          <svg class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z"/>
          </svg>
        </div>
        <p class="text-gray-600">Error al cargar proyectos. Intenta nuevamente más tarde.</p>
      </div>

      <!-- Projects Swiper -->
      <Swiper
        v-else
        :slides-per-view="1"
        :space-between="20"
        :pagination="{ clickable: true }"
        :breakpoints="{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }"
        class="pb-10"
      >
        <SwiperSlide
          v-for="(project, index) in projects"
          :key="index"
          class="flex justify-center"
        >
          <div
            class="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300 w-full max-w-sm flex flex-col justify-between"
          >
            <div>
              <img
                v-if="project.imageUrl"
                :src="project.imageUrl"
                alt="Imagen del proyecto"
                class="mb-4 w-full h-40 sm:h-48 md:h-56 object-cover rounded"
                @error="$event.target.src = 'https://via.placeholder.com/400x300/6B7280/ffffff?text=No+Image'"
              />
              <h3 class="text-xl sm:text-2xl font-bold mb-2">{{ project.name }}</h3>
              <p class="text-gray-600 text-sm sm:text-base mb-4">
                {{ project.description }}
              </p>
              
              <!-- Etiquetas de Tecnologías -->
              <div v-if="project.technologies && project.technologies.length > 0" class="mb-4">
                <h4 class="text-sm font-semibold text-gray-700 mb-2">Tecnologías:</h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in project.technologies"
                    :key="tech"
                    :class="getTechColor(tech)"
                    class="px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
            
            <a
              :href="project.projectUrl"
              target="_blank"
              class="text-indigo-500 font-semibold hover:underline mt-4"
              rel="noopener noreferrer"
            >
              Ver más
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>