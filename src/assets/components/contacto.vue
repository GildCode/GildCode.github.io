<template>
  <section id="contact" class="py-20 bg-gray-100 text-gray-800">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white shadow-lg rounded-xl p-6 sm:p-10 text-center">
        <h2 class="text-3xl font-bold mb-4">Contáctame</h2>
        <p class="mb-6 text-gray-600 text-base sm:text-lg">
          ¿Tienes una idea, proyecto o quieres trabajar conmigo?
        </p>
        <form @submit.prevent="sendEmail" class="space-y-4">
          <input
            v-model="name"
            type="text"
            placeholder="Tu nombre"
            class="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            v-model="email"
            type="email"
            placeholder="Tu correo"
            class="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <textarea
            v-model="message"
            placeholder="Escribe tu mensaje"
            rows="4"
            class="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          ></textarea>
          <button
            type="submit"
            :disabled="sending || !name || !email || !message"
            class="bg-indigo-500 text-white px-6 py-3 rounded hover:bg-indigo-600 disabled:cursor-not-allowed disabled:opacity-50 transition"
          >
            {{ sending ? 'Enviando...' : 'Enviar mensaje' }}
          </button>
        </form>
        <p v-if="success" class="mt-4 text-green-600">¡Mensaje enviado correctamente! Gracias.</p>
        <p v-if="error" class="mt-4 text-red-600">Error al enviar el mensaje. Inténtalo nuevamente.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from 'emailjs-com'

const name = ref('')
const email = ref('')
const message = ref('')

const sending = ref(false)
const success = ref(false)
const error = ref(false)

const serviceID = 'service_z2b0v7e'      
const templateID = 'template_tvx177y'    
const userID = 'hhc9ZYOpJ7JiusH4s'            

function sendEmail() {
  sending.value = true
  success.value = false
  error.value = false

  const templateParams = {
    from_name: name.value,
    from_email: email.value,
    message: message.value,
    to_email: 'gild.codes@gmail.com',
  }

  emailjs.send(serviceID, templateID, templateParams, userID)
    .then(() => {
      success.value = true
      sending.value = false
      name.value = ''
      email.value = ''
      message.value = ''
    })
    .catch(() => {
      error.value = true
      sending.value = false
    })
}
</script>
