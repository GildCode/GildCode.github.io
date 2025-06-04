// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Importa tu configuración de enrutador
import './assets/main.css'
const app = createApp(App)

app.use(router) // Dile a la aplicación que use el enrutador
app.mount('#app')