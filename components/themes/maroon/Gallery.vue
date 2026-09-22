<template>
  <section id="gallery" class="relative bg-[#F6EFE5] text-[#2C2021] py-20 sm:py-24 md:py-28 px-6 transition-colors">
    <div class="max-w-5xl mx-auto">
      <!-- Top Subtle Ornament Divider -->
      <div class="flex items-center justify-center gap-3 text-[#C4A46C]/70 mb-6" data-aos="fade-in"
        data-aos-duration="800">
        <div class="h-px w-10 sm:w-16 bg-[#C4A46C]/40" />
        <span class="text-[10px] tracking-widest text-[#C4A46C]">◆</span>
        <div class="h-px w-10 sm:w-16 bg-[#C4A46C]/40" />
      </div>

      <!-- Section Header -->
      <div class="text-center mb-14 sm:mb-18">
        <span class="font-heading text-2xl sm:text-3xl text-[#C4A46C] block mb-2" data-aos="fade-up"
          data-aos-duration="800">
          Our Moments
        </span>
        <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl text-[#5A1724] font-normal tracking-wide"
          data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
          {{ gallery?.title || 'Galeri Kami' }}
        </h2>
      </div>

      <!-- EDITORIAL ALBUM COMPOSITION (Varied Rhythm & Visual Scales) -->
      <div class="space-y-6 sm:space-y-8">
        <!-- 1. Opening Asymmetric Feature Spread (Hero Portrait + Stacked Duo) -->
        <div v-if="heroImage" class="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-stretch" data-aos="fade-up"
          data-aos-duration="800" data-aos-delay="150">
          <!-- Dominant Grand Hero Portrait -->
          <div
            class="md:col-span-7 relative overflow-hidden rounded-sm border border-[#C4A46C]/35 shadow-[0_4px_24px_rgba(42,13,20,0.07)] cursor-pointer group aspect-[3/4] sm:aspect-[4/5] bg-[#EDE0D0]/50"
            @click="showLightbox(getGlobalIndex(heroImage))">
            <img loading="lazy" :src="heroImage.src" :alt="heroImage.alt"
              class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105">
            <div
              class="absolute inset-0 bg-[#2A0D14]/0 group-hover:bg-[#2A0D14]/15 transition-colors duration-300 pointer-events-none" />
            <div class="absolute inset-0 ring-1 ring-inset ring-[#C4A46C]/20 pointer-events-none" />
            <div
              class="absolute bottom-3 left-3 bg-[#2A0D14]/65 backdrop-blur-xs px-2.5 py-1 rounded-xs border border-[#C4A46C]/30 text-[10px] font-body uppercase tracking-[0.2em] text-[#F6EFE5]">
              Featured
            </div>
          </div>

          <!-- Stacked Curated Duo on Right Column -->
          <div v-if="duoImages.length" class="md:col-span-5 grid grid-cols-2 md:grid-cols-1 gap-4 sm:gap-6">
            <div v-for="(img, idx) in duoImages" :key="idx"
              class="relative overflow-hidden rounded-sm border border-[#C4A46C]/35 shadow-[0_4px_20px_rgba(42,13,20,0.06)] cursor-pointer group aspect-[3/4] md:aspect-[4/3] bg-[#EDE0D0]/50"
              @click="showLightbox(getGlobalIndex(img))">
              <img loading="lazy" :src="img.src" :alt="img.alt"
                class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105">
              <div
                class="absolute inset-0 bg-[#2A0D14]/0 group-hover:bg-[#2A0D14]/15 transition-colors duration-300 pointer-events-none" />
              <div class="absolute inset-0 ring-1 ring-inset ring-[#C4A46C]/20 pointer-events-none" />
            </div>
          </div>
        </div>

        <!-- 2. Cinematic Panoramic Focus Crop (Breaks the vertical-only monotony) -->
        <div v-if="bannerImage"
          class="relative overflow-hidden rounded-sm border border-[#C4A46C]/35 shadow-[0_4px_24px_rgba(42,13,20,0.07)] cursor-pointer group w-full aspect-[16/8] sm:aspect-[21/9] bg-[#EDE0D0]/50"
          data-aos="fade-up" data-aos-duration="800" data-aos-delay="200"
          @click="showLightbox(getGlobalIndex(bannerImage))">
          <img loading="lazy" :src="bannerImage.src" :alt="bannerImage.alt"
            class="w-full h-full object-cover object-[center_35%] transition-transform duration-700 ease-out group-hover:scale-105">
          <div
            class="absolute inset-0 bg-gradient-to-t from-[#2A0D14]/60 via-transparent to-transparent pointer-events-none" />
          <div class="absolute inset-0 ring-1 ring-inset ring-[#C4A46C]/20 pointer-events-none" />
          <div class="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-[#F6EFE5]">
            <span class="font-heading text-lg sm:text-2xl text-[#C4A46C] block leading-none">
              Forever &amp; Always
            </span>
            <p class="font-serif italic text-xs sm:text-sm text-[#F6EFE5]/90 tracking-widest uppercase mt-1">
              Sebuah Cerita Dalam Bingkai
            </p>
          </div>
        </div>

        <!-- 3. Staggered Editorial Triptych (Dynamic Rhythmic Heights) -->
        <div v-if="triptychImages.length" class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 items-center"
          data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
          <div v-for="(img, idx) in triptychImages" :key="idx" :class="[
            'relative overflow-hidden rounded-sm border border-[#C4A46C]/35 shadow-[0_4px_20px_rgba(42,13,20,0.06)] cursor-pointer group bg-[#EDE0D0]/50 transition-all duration-300',
            idx === 1
              ? 'aspect-[4/5] sm:scale-[1.02] sm:border-[#C4A46C]/50 shadow-md sm:-translate-y-2'
              : 'aspect-[3/4]',
          ]" @click="showLightbox(getGlobalIndex(img))">
            <img loading="lazy" :src="img.src" :alt="img.alt"
              class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105">
            <div
              class="absolute inset-0 bg-[#2A0D14]/0 group-hover:bg-[#2A0D14]/15 transition-colors duration-300 pointer-events-none" />
            <div class="absolute inset-0 ring-1 ring-inset ring-[#C4A46C]/20 pointer-events-none" />
          </div>
        </div>

        <!-- 4. Interactive Editorial Filmstrip Reel (Splide Continuous Slider) -->
        <div v-if="carouselImages.length" class="pt-6 sm:pt-8" data-aos="fade-up" data-aos-duration="800"
          data-aos-delay="250">
          <!-- Reel Header with Minimal Controls -->
          <div class="flex items-center justify-between mb-3 px-1">
            <div class="flex items-center gap-2">
              <span class="font-body text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#772638] font-semibold">
                Film Reel Moments
              </span>
              <span class="hidden sm:inline-block text-[#C4A46C] text-[10px]">•</span>
              <span class="hidden sm:inline-block font-body text-[10px] sm:text-xs text-[#2C2021]/60 tracking-wider">
                Geser untuk melihat
              </span>
            </div>

            <!-- Manual Arrow Navigation Buttons -->
            <div class="flex items-center gap-1.5">
              <span class="sm:hidden font-body text-[10px] text-[#2C2021]/60 tracking-wider mr-1">
                Geser &rarr;
              </span>
              <button type="button" aria-label="Previous Slide"
                class="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#C4A46C]/40 bg-[#F6EFE5] hover:bg-[#5A1724] hover:text-[#F6EFE5] hover:border-[#5A1724] text-[#5A1724] flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 shadow-xs"
                @click="slidePrev">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button type="button" aria-label="Next Slide"
                class="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#C4A46C]/40 bg-[#F6EFE5] hover:bg-[#5A1724] hover:text-[#F6EFE5] hover:border-[#5A1724] text-[#5A1724] flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 shadow-xs"
                @click="slideNext">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Carousel Container with Touch & Drag Conflict Prevention -->
          <div class="relative select-none" @touchstart.passive="onPointerDownCapture" @mousedown="onPointerDownCapture"
            @touchend="onPointerUpCapture" @mouseup="onPointerUpCapture">
            <Splide ref="splideRef" :options="splideOptions" class="w-full" @splide:drag="onSplideDrag"
              @splide:dragged="onSplideDragged">
              <SplideSlide v-for="(img, idx) in carouselImages" :key="idx">
                <div
                  class="relative overflow-hidden rounded-sm border border-[#C4A46C]/35 shadow-[0_4px_18px_rgba(42,13,20,0.06)] cursor-grab active:cursor-grabbing group aspect-[3/4] bg-[#EDE0D0]/50 select-none"
                  @click="handleSlideClick(img)">
                  <img loading="lazy" :src="img.src" :alt="img.alt" draggable="false"
                    class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 select-none pointer-events-none">
                  <div
                    class="absolute inset-0 bg-[#2A0D14]/0 group-hover:bg-[#2A0D14]/15 transition-colors duration-300 pointer-events-none" />
                  <div class="absolute inset-0 ring-1 ring-inset ring-[#C4A46C]/20 pointer-events-none" />
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>

        <!-- 5. View Fullscreen Lightbox Button -->
        <div class="text-center pt-8" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
          <button type="button"
            class="inline-flex items-center gap-2 border border-[#C4A46C]/60 hover:bg-[#5A1724] hover:border-[#5A1724] hover:text-[#F6EFE5] text-[#5A1724] font-body text-xs uppercase tracking-[0.2em] px-6 py-3 rounded-full transition-all duration-300 shadow-sm cursor-pointer active:scale-[0.98]"
            @click="showLightbox(0)">
            <svg class="w-4 h-4 text-[#C4A46C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            <span>Lihat Semua Foto ({{ allGalleryImages.length }})</span>
          </button>
        </div>
      </div>

      <!-- Unified Fullscreen Lightbox -->
      <vue-easy-lightbox :visible="lightbox.visible" :imgs="allImages" :index="lightbox.index"
        @hide="lightbox.visible = false" />
    </div>
  </section>
</template>

<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
import { ref, computed, onBeforeUnmount } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'

const props = defineProps({
  gallery: {
    type: Object,
    default: null,
  },
})

const allGalleryImages = computed(() => {
  const p = props.gallery?.portrait || []
  const l = props.gallery?.landscape || []
  return [...p, ...l]
})

const allImages = computed(() => allGalleryImages.value.map(i => i.src))

// 1. Opening Feature: Hero (0) + Stacked Duo (1, 2)
const heroImage = computed(() => allGalleryImages.value[0])
const duoImages = computed(() => allGalleryImages.value.slice(1, 3))

// 2. Panoramic Interlude: Banner (3)
const bannerImage = computed(() => allGalleryImages.value[3])

// 3. Staggered Triptych: (4, 5, 6)
const triptychImages = computed(() => allGalleryImages.value.slice(4, 7))

// 4. Filmstrip Carousel: (All moments in album for smooth continuous loop buffer)
const carouselImages = computed(() => allGalleryImages.value)

const getGlobalIndex = (img) => {
  if (!img) return 0
  const idx = allGalleryImages.value.findIndex(item => item.src === img.src)
  return idx >= 0 ? idx : 0
}

const lightbox = ref({ visible: false, index: 0 })

const showLightbox = (index) => {
  lightbox.value.index = index
  lightbox.value.visible = true
}

// Splide & Autoplay Gesture Coordination
const splideRef = ref(null)
const isDragging = ref(false)
let dragEndTimeout = null
let idleResumeTimeout = null
let startPointerX = 0
let startPointerY = 0

const splideOptions = {
  type: 'loop',
  autoplay: true,
  interval: 4000,
  pauseOnHover: true,
  pauseOnFocus: true,
  resetProgress: false,
  perPage: 3,
  gap: '1rem',
  arrows: false,
  pagination: false,
  drag: true,
  speed: 700,
  flickPower: 300,
  flickMaxPages: 1,
  waitForTransition: false,
  breakpoints: {
    768: {
      perPage: 2,
      gap: '0.75rem',
    },
    540: {
      perPage: 1.35,
      gap: '0.75rem',
    },
  },
}

const pauseAutoplay = () => {
  splideRef.value?.splide?.Components?.Autoplay?.pause()
  if (idleResumeTimeout) {
    clearTimeout(idleResumeTimeout)
    idleResumeTimeout = null
  }
}

const scheduleAutoplayResume = (delay = 4500) => {
  if (idleResumeTimeout) {
    clearTimeout(idleResumeTimeout)
  }
  idleResumeTimeout = setTimeout(() => {
    splideRef.value?.splide?.Components?.Autoplay?.play()
  }, delay)
}

const onSplideDrag = (splideInstance) => {
  isDragging.value = true
  if (dragEndTimeout) {
    clearTimeout(dragEndTimeout)
    dragEndTimeout = null
  }
  splideInstance?.Components?.Autoplay?.pause()
}

const onSplideDragged = () => {
  if (dragEndTimeout) {
    clearTimeout(dragEndTimeout)
  }
  dragEndTimeout = setTimeout(() => {
    isDragging.value = false
  }, 250)

  // Wait for 4.5s idle after drag before resuming autoplay
  scheduleAutoplayResume(4500)
}

const onPointerDownCapture = (e) => {
  const point = e.touches && e.touches.length > 0 ? e.touches[0] : e
  startPointerX = point.clientX || 0
  startPointerY = point.clientY || 0
  pauseAutoplay()
}

const onPointerUpCapture = (e) => {
  const point = e.changedTouches && e.changedTouches.length > 0 ? e.changedTouches[0] : e
  const dx = Math.abs((point.clientX || 0) - startPointerX)
  const dy = Math.abs((point.clientY || 0) - startPointerY)

  // If moved noticeably, flag as drag to prevent accidental click-through
  if (dx > 8 || dy > 8) {
    isDragging.value = true
    if (dragEndTimeout) {
      clearTimeout(dragEndTimeout)
    }
    dragEndTimeout = setTimeout(() => {
      isDragging.value = false
    }, 250)
  }

  scheduleAutoplayResume(4500)
}

const handleSlideClick = (img) => {
  if (isDragging.value) return
  showLightbox(getGlobalIndex(img))
}

const slidePrev = () => {
  splideRef.value?.go('<')
  pauseAutoplay()
  scheduleAutoplayResume(5000)
}

const slideNext = () => {
  splideRef.value?.go('>')
  pauseAutoplay()
  scheduleAutoplayResume(5000)
}

onBeforeUnmount(() => {
  if (dragEndTimeout) {
    clearTimeout(dragEndTimeout)
  }
  if (idleResumeTimeout) {
    clearTimeout(idleResumeTimeout)
  }
})
</script>
