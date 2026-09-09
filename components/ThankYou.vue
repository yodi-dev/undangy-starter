<template>
  <section class="bg-rose-100 text-red-950 py-16 px-6 text-center space-y-8" id="closing">
    <!-- Judul Terima Kasih -->
    <div class="space-y-2">
      <h2 class="text-3xl md:text-4xl font-heading font-bold">{{ closing?.title }}</h2>
      <p class="max-w-xl mx-auto text-sm md:text-base text-red-800">
        {{ closing?.message }}
      </p>
    </div>

    <!-- Foto Mempelai -->
    <div class="max-w-md mx-auto">
      <img :src="closing?.photo" alt="Foto Mempelai" class="rounded-xl shadow-lg w-full object-cover" />
    </div>

    <!-- Kalimat "Kami yang Berbahagia" -->
    <div class="space-y-1">
      <p class="text-xs uppercase tracking-widest text-red-600">{{ closing?.coupleText }}</p>
      <h2 class="text-2xl md:text-3xl font-heading font-bold">{{ couple?.shortName }}</h2>
    </div>

    <!-- Footer -->
    <footer class="mt-12 text-xs text-red-700 space-y-2">
      <!-- Atribusi Musik -->
      <p class="italic whitespace-pre-line">
        {{ closing?.musicAttribution }}
      </p>

      <!-- Atribusi Icon -->
      <p>
        {{ closing?.iconAttribution?.text }} <a :href="closing?.iconAttribution?.url" target="_blank" rel="noopener noreferrer"
          class="underline hover:text-red-900">{{ closing?.iconAttribution?.author }}</a>
      </p>

      <!-- Credit Developer -->
      <p class="text-red-800 font-medium">
        {{ closing?.developerCredit?.text }} <a :href="closing?.developerCredit?.url" class="underline hover:text-red-900"
          target="_blank">{{ closing?.developerCredit?.author }}</a>
      </p>
    </footer>
  </section>
</template>

<script setup>
defineProps({
  couple: {
    type: Object,
    default: null
  },
  closing: {
    type: Object,
    default: null
  }
})
</script>

<style scoped>
#closing {
  border-top-left-radius: 3rem;
  border-top-right-radius: 3rem;
}
</style>
