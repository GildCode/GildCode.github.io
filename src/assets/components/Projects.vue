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
}

  }
}
</script>
