<template>
  <section class="bg-red-950 text-red-100 text-center py-20 px-6">
    <!-- Header Undangan -->
    <div class="max-w-2xl mx-auto mb-12 space-y-4">
      <h2 class="font-heading text-red-200 text-3xl font-semibold">{{ couple?.greeting?.title }}</h2>
      <p class="text-sm text-red-100">
        {{ couple?.greeting?.text }}
      </p>
    </div>

    <!-- Card Gabungan Mempelai -->
    <div
      class="max-w-4xl mx-auto bg-red-900/60 backdrop-blur-md rounded-2xl border border-red-300 shadow-[0_0_20px_#fca5a5] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
      <!-- Mempelai Wanita -->
      <div class="flex-1 text-center space-y-3">
        <img :src="couple?.bride?.photo" :alt="couple?.bride?.fullName"
          class="w-64 h-64 object-cover rounded-full mx-auto border-4 border-red-300 shadow-lg hover:scale-105 transition" />
        <h3 class="text-xl font-heading font-semibold mt-4">{{ couple?.bride?.fullName }}</h3>
        <div class="w-16 h-[2px] bg-red-300 mx-auto mb-1"></div>
        <p class="text-xs">{{ couple?.bride?.parents }}</p>
        <a :href="couple?.bride?.instagramUrl" target="_blank"
          class="text-xs underline text-red-200 hover:text-white transition">
          {{ couple?.bride?.instagram }}
        </a>
      </div>


      <!-- Penghubung -->
      <div class="flex items-center text-4xl font-heading text-red-300">.......<img :src="couple?.dividerIcon" alt="ring"
          class="w-8 h-8 mx-3">.......
      </div>

      <!-- Mempelai Pria -->
      <div class="flex-1 text-center space-y-3">
        <img :src="couple?.groom?.photo" :alt="couple?.groom?.fullName"
          class="w-64 h-64 object-cover rounded-full mx-auto border-4 border-red-300 shadow-lg hover:scale-105 transition" />
        <h3 class="text-xl font-heading font-semibold mt-4">{{ couple?.groom?.fullName }}</h3>
        <div class="w-16 h-[2px] bg-red-300 mx-auto mb-1"></div>
        <p class="text-xs">{{ couple?.groom?.parents }}</p>
        <a :href="couple?.groom?.instagramUrl" target="_blank"
          class="text-xs underline text-red-200 hover:text-white transition">
          {{ couple?.groom?.instagram }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  couple: {
    type: Object,
    default: null
  }
})
</script>
