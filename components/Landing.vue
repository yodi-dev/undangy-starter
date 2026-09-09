<template>
  <section ref="landingRef"
    class="relative flex justify-center h-screen bg-no-repeat bg-cover bg-[center_80%] md:bg-[center_35%]"
    style="background-image: url('/images/landing.webp')">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/10 to-red-950/90 z-0"></div>

    <!-- Content -->
    <div class="relative grid place-content-between text-center rounded-3xl max-w-lg animate-fade-in py-20">
      <div>
        <p class="font-second text-xl">The Wedding Of</p>
        <h1 class="text-5xl font-heading font-bold tracking-wide mt-5">
          Desti & Reza
        </h1>
      </div>
      <div>
        <p class="text-sm md:text-lg font-second font-light">
          Kepada Yth:
        </p>
        <p class="font-second font-semibold text-lg">{{ guestName }}</p>
        <button @click="openInvitation"
          class="mt-4 inline-flex items-center gap-2 px-6 py-2 bg-red-50 text-gray-800 font-second font-semibold rounded-3xl shadow-md hover:bg-gray-100 transition">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
              <path fill-rule="evenodd"
                d="M2.106 6.447A2 2 0 0 0 1 8.237V16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.236a2 2 0 0 0-1.106-1.789l-7-3.5a2 2 0 0 0-1.788 0l-7 3.5Zm1.48 4.007a.75.75 0 0 0-.671 1.342l5.855 2.928a2.75 2.75 0 0 0 2.46 0l5.852-2.927a.75.75 0 1 0-.67-1.341l-5.853 2.926a1.25 1.25 0 0 1-1.118 0l-5.856-2.928Z"
                clip-rule="evenodd" />
            </svg>
          </span>
          <span>Buka Undangan</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const guestName = ref('Tamu Undangan')
const emit = defineEmits(['open'])
const landingRef = ref(null)

onMounted(() => {
  if (typeof window !== 'undefined' && window.location.hash) {
    const hash = decodeURIComponent(window.location.hash.substring(1))
    if (hash) {
      guestName.value = hash
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase())
    }
  }
})

const openInvitation = () => {
  landingRef.value.classList.add('opacity-0')
  setTimeout(() => {
    emit('open')
    window.dispatchEvent(new Event('play-music'))
  }, 100)
}
</script>

<style scoped>
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1.2s ease-out;
}
</style>
