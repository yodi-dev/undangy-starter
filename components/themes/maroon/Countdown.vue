<template>
  <section
    class="relative h-screen w-full overflow-hidden bg-cover custom-position"
    :style="{ backgroundImage: `url(${bgImage || '/images/7.webp'})` }"
  >
    <!-- overlay gelap tipis -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/10 to-red-950 z-0" />

    <div class="relative grid place-content-between justify-center h-full text-center px-4 py-20">
      <div>
        <p class="font-second text-xl">
          {{ couple?.title }}
        </p>
        <h1 class="font-heading text-5xl font-semibold sm:text-6xl mt-5">
          {{ couple?.shortName }}
        </h1>
        <p class="font-second text-base sm:text-lg">
          {{ countdown?.dateText }}
        </p>
      </div>
      <div>
        <p class="font-heading text-3xl mb-3">
          Countdown Timer
        </p>
        <div class="flex space-x-2 sm:space-x-4 font-second justify-center">
          <div
            v-for="(item, i) in countdownItems"
            :key="i"
            class="flex flex-col items-center"
          >
            <div class="font-bold bg-red-50 text-red-950 rounded-full px-4 py-2 text-md">
              {{ item.value }}
            </div>
            <div class="mt-1 text-xs sm:text-sm">
              {{ item.label }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useCountdown } from '~/composables/useCountdown'

const props = defineProps({
  couple: {
    type: Object,
    default: null,
  },
  countdown: {
    type: Object,
    default: null,
  },
  bgImage: {
    type: String,
    default: '',
  },
})

const { days, hours, minutes, seconds } = useCountdown(() => props.countdown?.targetDate)

const countdownItems = computed(() => [
  { label: 'Hari', value: days.value },
  { label: 'Jam', value: hours.value },
  { label: 'Menit', value: minutes.value },
  { label: 'Detik', value: seconds.value },
])
</script>

<style scoped>
.custom-position {
  background-position: 37% 50%;
}
</style>
