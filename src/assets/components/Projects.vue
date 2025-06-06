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
        this.projects = data
      } catch (error) {
        console.error('Error al obtener proyectos:', error)
        this.error = 'No se pudieron cargar los proyectos desde la API.'
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
