<template>
  <section id="event-detail" class="font-body py-20 bg-red-950">
    <div class="max-w-4xl mx-auto px-4">
      <div class="bg-white/90 text-red-950 py-12 rounded-xl shadow-lg">
        <h2 class="text-4xl font-bold font-heading text-center tracking-wide mb-8">
          {{ mainEvent?.title }}
        </h2>

        <!-- Card Gabungan -->
        <div
          class="p-6 shadow-sm md:flex md:items-start md:space-x-6 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02] rounded-lg"
          data-aos="fade-up">
          <!-- Info dan Map -->
          <div class="md:w-1/2 space-y-4">
            <h3 class="text-2xl font-semibold">{{ mainEvent?.subTitle }}</h3>

            <p class="flex items-center gap-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                class="w-5 h-5 text-rose-500">
                <path d="M5.75 2a.75...Z" /> <!-- kalender -->
              </svg>
              {{ mainEvent?.dateText }}
            </p>

            <p class="flex items-center gap-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                class="w-5 h-5 text-rose-500">
                <path d="M10 18a8...Z" /> <!-- jam -->
              </svg>
              {{ mainEvent?.timeText }}
            </p>

            <p class="flex items-start gap-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                class="w-5 h-5 text-rose-500">
                <path d="M9.69 18...Z" /> <!-- lokasi -->
              </svg>
              {{ mainEvent?.locationName }}
            </p>
          </div>

          <div class="mt-6 md:mt-0 md:w-1/2 overflow-hidden rounded-lg shadow-md border border-rose-200">
            <iframe
              :src="mainEvent?.googleMapsEmbedUrl"
              width="100%" height="260" style="border:0;" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  events: {
    type: Array,
    default: () => []
  }
})

const mainEvent = computed(() => props.events?.[0])
</script>