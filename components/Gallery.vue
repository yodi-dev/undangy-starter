<template>
  <section id="gallery" class="py-20 font-body bg-gradient-to-b from-red-950 to-white">
    <h2 class="text-4xl font-bold font-heading text-center mb-12 tracking-wide">
      Galeri Kami
    </h2>
    <div class="max-w-6xl mx-auto px-4">

      <!-- Portrait Carousel -->
      <Splide :options="{
        type: 'loop',
        autoplay: true,
        interval: 3000,
        arrows: false,
        pagination: false,
        drag: true,
        gap: '1rem'
      }" class="w-full">
        <SplideSlide v-for="(group, index) in portraitSlides" :key="index">
          <div class="flex gap-2">
            <div v-for="(img, i) in group" :key="i" :class="[
              'overflow-hidden shadow-md group cursor-pointer transition-all rounded-lg',
              group.length === 1 ? 'w-full' : 'w-1/2'
            ]" @click="showLightboxFromPortrait(index * 2 + i)">
              <img loading="lazy" :src="img.src" :alt="img.alt"
                class="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-105" />
            </div>
          </div>
        </SplideSlide>
      </Splide>

      <vue-easy-lightbox :visible="lightbox.visible" :imgs="portraitImages.map(i => i.src)" :index="lightbox.index"
        @hide="lightbox.visible = false" />

      <!-- Landscape Section -->
      <div class="mt-4">
        <div class="columns-1 sm:columns-2 gap-4 space-y-4">
          <div v-for="(img, index) in landscapeImages" :key="index"
            class="overflow-hidden rounded-lg shadow-md group cursor-pointer break-inside-avoid"
            @click="showLightboxFromLandscape(index)">
            <img loading="lazy" :src="img.src" :alt="img.alt"
              class="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-105" />
          </div>
        </div>
      </div>

      <vue-easy-lightbox :visible="landscapeLightbox.visible" :imgs="landscapeImages.map(i => i.src)"
        :index="landscapeLightbox.index" @hide="landscapeLightbox.visible = false" />
    </div>
  </section>
</template>

<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
import { ref } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'

// Portrait images (grouped into slides of 2)
const portraitImages = [
  { src: '/images/2.webp', alt: 'Potret Mempelai' },
  { src: '/images/3.webp', alt: 'Potret Mempelai' },
  { src: '/images/4.webp', alt: 'Potret Mempelai' },
  { src: '/images/5.webp', alt: 'Potret Mempelai' },
  { src: '/images/6.webp', alt: 'Potret Mempelai' },
  { src: '/images/10.webp', alt: 'Potret Mempelai' },
  { src: '/images/13.webp', alt: 'Potret Mempelai' },
  { src: '/images/14.webp', alt: 'Potret Mempelai' },
]
const portraitSlides = []
for (let i = 0; i < portraitImages.length; i += 2) {
  portraitSlides.push(portraitImages.slice(i, i + 2))
}
const lightbox = ref({ visible: false, index: 0 })
const showLightboxFromPortrait = (index) => {
  lightbox.value.index = index
  lightbox.value.visible = true
}

// Landscape images
const landscapeImages = [
  { src: '/images/1.webp', alt: 'Potret Mempelai' },
  { src: '/images/7.webp', alt: 'Potret Mempelai' },
  { src: '/images/8.webp', alt: 'Potret Mempelai' },
]
const landscapeLightbox = ref({ visible: false, index: 0 })
const showLightboxFromLandscape = (index) => {
  landscapeLightbox.value.index = index
  landscapeLightbox.value.visible = true
}
</script>
