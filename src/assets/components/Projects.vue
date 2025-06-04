<template>
  <section id="projects" class="py-20 bg-white text-gray-800">
    <h2 class="text-4xl font-bold text-center mb-12">Proyectos</h2>

    <Swiper
      :slides-per-view="1"
      :space-between="30"
      :pagination="{ clickable: true }"
      :breakpoints="{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }"
      class="px-10"
    >
      <SwiperSlide v-for="(project, index) in projects" :key="index">
        <div class="bg-gray-100 p-6 rounded-lg shadow-md hover:scale-105 transition h-full flex flex-col justify-between">
          <div>
            <img v-if="project.imageUrl" :src="project.imageUrl" alt="Imagen del proyecto" class="mb-4 w-full h-48 object-cover rounded" />
            <h3 class="text-2xl font-bold mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
          </div>
          <a :href="project.link" target="_blank" class="text-indigo-500 font-semibold hover:underline mt-4">
            Ver más
          </a>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

const projects = ref([])

const fetchProjects = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/projects')
    projects.value = response.data.map(project => ({
      title: project.name,
      description: project.description,
      link: project.projectUrl,
      imageUrl: project.imageUrl,
    }))
  } catch (error) {
    console.error('Error al obtener proyectos:', error)
  }
}

onMounted(() => {
  fetchProjects()
})
</script>
