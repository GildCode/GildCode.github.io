import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../assets/Views/Home.vue'
import About from '../assets/Views/About.vue'
import ProjectsView from '../assets/Views/ProjectsView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsView
  }
]

const router = createRouter({
  history: createWebHashHistory(),  // <--- Aquí está el cambio
  routes
})

export default router
