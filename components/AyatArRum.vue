<template>
  <section class="relative py-16 text-center px-6">
    <div class="relative max-w-xl mx-auto space-y-6">
      <figure>
        <img
          :src="quote?.icon"
          alt="Ikon Undangan"
          class="w-16 h-16 mx-auto opacity-90 drop-shadow-sm"
          loading="lazy"
        >

        <blockquote class="italic text-md font-serif leading-relaxed tracking-wide my-5">
          "{{ quote?.text }}"
        </blockquote>

        <figcaption class="text-sm text-red-200 font-medium tracking-wide uppercase">
          {{ quote?.source }}
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<script setup>
defineProps({
  quote: {
    type: Object,
    default: null,
  },
})
</script>
