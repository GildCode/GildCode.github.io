<template>
  <section id="contact" class="py-20 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white shadow-xl rounded-2xl overflow-hidden">
        <!-- Header -->
        <div class="bg-gradient-to-r from-indigo-800 to-blue-600 text-white p-8 text-center">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <h2 class="text-3xl font-bold mb-2">Contáctame</h2>
          <p class="text-lg opacity-90">
            ¿Tienes una oportunidad laboral o proyecto? ¡Hablemos!
          </p>
        </div>

        <!-- Form -->
        <div class="p-8 sm:p-10">
          <form @submit.prevent="sendEmail" class="space-y-6">
            <!-- Name and Email -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label for="name" class="block text-sm font-semibold text-gray-700">
                  Nombre completo *
                </label>
                <input
                  id="name"
                  v-model="name"
                  type="text"
                  placeholder="Tu nombre"
                  class="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <div class="space-y-2">
                <label for="email" class="block text-sm font-semibold text-gray-700">
                  Correo electrónico *
                </label>
                <input
                  id="email"
                  v-model="email"
                  type="email"
                  placeholder="tu@correo.com"
                  class="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
            </div>

            <!-- Company and Position -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label for="company" class="block text-sm font-semibold text-gray-700">
                  Empresa/Organización
                </label>
                <input
                  id="company"
                  v-model="company"
                  type="text"
                  placeholder="Nombre de la empresa (opcional)"
                  class="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div class="space-y-2">
                <label for="position" class="block text-sm font-semibold text-gray-700">
                  Tu cargo/rol
                </label>
                <input
                  id="position"
                  v-model="position"
                  type="text"
                  placeholder="Ej: Reclutador, CTO, etc. (opcional)"
                  class="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            <!-- Subject -->
            <div class="space-y-2">
              <label for="subject" class="block text-sm font-semibold text-gray-700">
                Motivo de contacto *
              </label>
              <select
                id="subject"
                v-model="subject"
                class="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                required
              >
                <option value="">Selecciona el motivo</option>
                <option value="Oportunidad laboral">💼 Oportunidad laboral</option>
                <option value="Proyecto freelance">🚀 Proyecto freelance</option>
                <option value="Consulta técnica">💡 Consulta técnica</option>
                <option value="Colaboración">🤝 Colaboración</option>
                <option value="Networking">🌐 Networking</option>
                <option value="Otro">❓ Otro</option>
              </select>
            </div>

            <!-- Message -->
            <div class="space-y-2">
              <label for="message" class="block text-sm font-semibold text-gray-700">
                Mensaje *
              </label>
              <textarea
                id="message"
                v-model="message"
                placeholder="Cuéntame sobre la oportunidad, proyecto o consulta..."
                rows="5"
                class="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none"
                required
              ></textarea>
            </div>

            <!-- Submit Button -->
            <div class="pt-4">
              <button
                type="submit"
                :disabled="sending || !isFormValid"
                class="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-indigo-700 hover:to-blue-700 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span v-if="sending" class="flex items-center justify-center">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando mensaje...
                </span>
                <span v-else class="flex items-center justify-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                  </svg>
                  Enviar mensaje
                </span>
              </button>
            </div>
          </form>

          <!-- Success/Error Messages -->
          <div v-if="success" class="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div class="flex items-center">
              <svg class="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <div>
                <p class="text-green-800 font-semibold">¡Mensaje enviado correctamente!</p>
                <p class="text-green-700 text-sm">Te responderé lo antes posible. ¡Gracias por contactarme!</p>
              </div>
            </div>
          </div>

          <div v-if="error" class="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div class="flex items-center">
              <svg class="w-6 h-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <div>
                <p class="text-red-800 font-semibold">Error al enviar el mensaje</p>
                <p class="text-red-700 text-sm">Por favor, inténtalo nuevamente o contáctame directamente por email.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import emailjs from 'emailjs-com'

// Form fields
const name = ref('')
const email = ref('')
const company = ref('')
const position = ref('')
const subject = ref('')
const message = ref('')

// Form states
const sending = ref(false)
const success = ref(false)
const error = ref(false)

// EmailJS configuration
const serviceID = 'service_z2b0v7e'
const templateID = 'template_tvx177y'
const userID = 'hhc9ZYOpJ7JiusH4s'

// Form validation
const isFormValid = computed(() => {
  return name.value.trim() && 
         email.value.trim() && 
         subject.value.trim() && 
         message.value.trim()
})

function sendEmail() {
  sending.value = true
  success.value = false
  error.value = false

  const templateParams = {
    from_name: name.value,
    from_email: email.value,
    from_company: company.value || 'No especificada',
    from_position: position.value || 'No especificado',
    subject: subject.value,
    message: message.value,
    to_email: 'gild.codes@gmail.com',
    reply_to: email.value
  }

  emailjs.send(serviceID, templateID, templateParams, userID)
    .then(() => {
      success.value = true
      sending.value = false
      // Reset form
      name.value = ''
      email.value = ''
      company.value = ''
      position.value = ''
      subject.value = ''
      message.value = ''
    })
    .catch((err) => {
      console.error('Error sending email:', err)
      error.value = true
      sending.value = false
    })
}
</script>