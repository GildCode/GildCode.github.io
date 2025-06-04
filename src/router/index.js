import { createRouter, createWebHistory } from 'vue-router'
import Home from '../assets/Views/Home.vue'
import About from '../assets/Views/About.vue'
import ProjectsView from '../assets/Views/ProjectsView.vue'

const routes = [
  {
    path: '/', // Ruta principal
    name: 'about',
    component: Home
  },
  {
    path: '/about', // Ruta para "Sobre mí"
    name: 'About',
    component: About
  },
  {
    path: '/projects', // Ruta para proyectos
    name: 'Projects',
    component: ProjectsView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router