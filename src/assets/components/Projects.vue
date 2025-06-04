<template>
  <section id="projects" class="py-20 bg-white text-gray-800">
    <div class="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl sm:text-4xl font-bold text-center mb-12">Proyectos</h2>

      <Swiper
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
              />
              <h3 class="text-xl sm:text-2xl font-bold mb-2">{{ project.title }}</h3>
              <p class="text-gray-600 text-sm sm:text-base mb-4">
                {{ project.description }}
              </p>
            </div>
            <a
              :href="project.link"
              target="_blank"
              class="text-indigo-500 font-semibold hover:underline mt-4"
            >
              Ver más
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
