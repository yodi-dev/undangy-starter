<template>
  <section class="relative bg-[#F6EFE5] text-[#2C2021] py-20 sm:py-24 md:py-28 px-6 text-center transition-colors">
    <div class="relative max-w-2xl mx-auto">
      <!-- Top Subtle Ornament Divider -->
      <div
        class="flex items-center justify-center gap-3 text-[#C4A46C]/70 mb-8"
        data-aos="fade-in"
        data-aos-duration="800"
      >
        <div class="h-px w-12 sm:w-20 bg-[#C4A46C]/40" />
        <span class="text-[10px] tracking-widest">◆</span>
        <div class="h-px w-12 sm:w-20 bg-[#C4A46C]/40" />
      </div>

      <figure>
        <!-- Optional Icon (restrained, visible on Warm Ivory) -->
        <div
          v-if="quote?.icon"
          class="mb-6 flex justify-center"
          data-aos="fade-in"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <img
            :src="quote.icon"
            alt="Ikon Undangan"
            class="w-8 h-8 object-contain opacity-50 filter brightness-90 contrast-125 saturate-125 drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]"
            loading="lazy"
          >
        </div>

        <!-- Editorial Verse Text -->
        <blockquote
          class="font-serif text-lg sm:text-xl md:text-2xl font-normal leading-relaxed text-[#2C2021] italic max-w-xl mx-auto px-2"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="200"
        >
          "{{ quote?.text }}"
        </blockquote>

        <!-- Source Reference -->
        <figcaption
          class="font-body text-xs sm:text-sm text-[#5A1724] font-medium tracking-[0.25em] uppercase mt-8"
          data-aos="fade-in"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          {{ quote?.source }}
        </figcaption>
      </figure>

      <!-- Bottom Subtle Ornament Divider -->
      <div
        class="flex items-center justify-center gap-3 text-[#C4A46C]/70 mt-8"
        data-aos="fade-in"
        data-aos-duration="800"
        data-aos-delay="350"
      >
        <div class="h-px w-12 sm:w-20 bg-[#C4A46C]/40" />
        <span class="text-[10px] tracking-widest">◆</span>
        <div class="h-px w-12 sm:w-20 bg-[#C4A46C]/40" />
      </div>
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
