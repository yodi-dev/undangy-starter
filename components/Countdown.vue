<template>
  <section class="relative h-screen w-full overflow-hidden bg-[url('/images/7.webp')] bg-cover custom-position">
    <!-- overlay gelap tipis -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/10 to-red-950 z-0"></div>

    <div class="relative grid place-content-between justify-center h-full text-center px-4 py-20">
      <div>
        <p class="font-second text-xl">The Wedding Of</p>
        <h1 class="font-heading text-5xl font-semibold sm:text-6xl mt-5">Desti & Reza</h1>
        <p class="font-second text-base sm:text-lg">Sabtu, 26 Juli 2025</p>
      </div>
      <div>
        <p class="font-heading text-3xl mb-3">Countdown Timer</p>
        <div class="flex space-x-2 sm:space-x-4 font-second justify-center">
          <div v-for="(item, i) in countdownItems" :key="i" class="flex flex-col items-center">
            <div class="font-bold bg-red-50 text-red-950 rounded-full px-4 py-2 text-md">
              {{ item.value }}
            </div>
            <div class="mt-1 text-xs sm:text-sm">{{ item.label }}</div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const target = new Date('2025-07-26T09:00:00+07:00').getTime()
const days = ref(0), hours = ref(0), minutes = ref(0), seconds = ref(0)
let timer

function update() {
  const diff = target - Date.now()
  days.value = Math.max(Math.floor(diff / (1000 * 60 * 60 * 24)), 0)
  hours.value = Math.max(Math.floor((diff / (1000 * 60 * 60)) % 24), 0)
  minutes.value = Math.max(Math.floor((diff / (1000 * 60)) % 60), 0)
  seconds.value = Math.max(Math.floor((diff / 1000) % 60), 0)
}

const countdownItems = computed(() => [
  { label: 'Hari', value: days.value },
  { label: 'Jam', value: hours.value },
  { label: 'Menit', value: minutes.value },
  { label: 'Detik', value: seconds.value },
])

onMounted(() => {
  update()
  timer = setInterval(update, 1000)
})
onUnmounted(() => clearInterval(timer))
</script>

<style scoped>
.custom-position {
  background-position: 37% 50%;
}
</style>