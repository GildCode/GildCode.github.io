<template>
  <Navbar />
  <router-view />
  <Footer />

  <a
    href="https://wa.me/+573193922775"
    target="_blank"
    rel="noopener noreferrer"
    class="fixed bottom-5 right-5 z-50 whatsapp-icon"
  >
    <img
      src="https://cdn-icons-png.flaticon.com/128/1384/1384023.png"
      alt="WhatsApp"
      class="w-12 h-12"
    />
  </a>
</template>

<script setup>
import Navbar from './assets/components/Navbar.vue'
import Footer from './assets/components/Footer.vue'
</script>

<style scoped>
.whatsapp-icon img {
  filter: invert(34%) sepia(91%) saturate(2453%) hue-rotate(224deg) brightness(97%) contrast(97%);
}
</style>