<template>
  <section id="love-story" class="py-20 font-[Inter,sans-serif] text-red-50">
    <div class="max-w-3xl mx-auto px-4">
      <h2
        class="text-4xl font-bold font-heading text-center tracking-wide mb-12 text-red-100 border-b border-rose-500 pb-2">
        Love Story
      </h2>
      <div class="relative border-l-2 border-gradient-to-b pl-6 space-y-10">
        <div v-for="(event, idx) in timeline" :key="idx" data-aos="fade-up" class="relative group">
          <!-- Timeline dot -->
          <div
            class="absolute -left-4 top-0 w-8 h-8 bg-gradient-to-tr from-rose-400 to-pink-300 border-[3px] border-white rounded-full flex items-center justify-center shadow-lg ring-2 ring-rose-200/30 group-hover:scale-110 transition-all duration-300 overflow-hidden z-10">
            <img :src="event.icon" alt="Icon" class="w-4 h-4 object-contain" />
          </div>

          <!-- Content -->
          <div
            class="bg-red-900/30 backdrop-blur-sm border border-rose-400/30 rounded-xl p-5 shadow-md hover:shadow-pink-500/30 transition duration-300">
            <p class="text-xs text-rose-300 font-semibold uppercase tracking-wide">
              {{ event.date }}
            </p>
            <p class="text-red-50 font-body text-base mt-2 leading-relaxed">
              {{ event.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({ duration: 800, once: true })
})

const timeline = ref([
  {
    date: 'Pertemuan',
    description: 'Tidak ada yang kebetulan di dunia ini. Semua sudah mempunyai porsi masing2 dan telah disusun rapi oleh sang maha kuasa. Pertemuan kami bermula dari tempat kerja sebuah restoran di kota teh obeng (batam), akhir tahun 2021.',
    icon: '/icons/icon1.png'
  },
  {
    date: 'Pendekatan',
    description: 'Katanya cinta dapat tumbuh dengan kebersamaan, seiring berjalannya waktu kami semakin dekat walau tidak ada kata pacaran dan terus berlanjut.',
    icon: '/icons/icon2.png'
  },
  {
    date: 'Tunangan',
    description: 'Hingga akhirnya di tahun ke-3 (awal tahun 2024) kami memutuskan untuk cuti bersama ke kampung halamanku dan mengenal lebih dekat keluarga besar kami berdua. Di ikat dengan sebuah cincin, kami dan keluarga meresmikan hubungan dengan tujuan ke jenjang yang lebih serius.',
    icon: '/icons/icon3.png'
  },
  {
    date: 'Pernikahan',
    description: 'Alhamdulillah tidak ada usaha yang mengkhianati hasil, dengan penuh perjuangan di tanah perantauan kami mengusahakan untuk bisa mengikrarkan janji suci pernikahan di tahun ini.',
    icon: '/icons/icon4.png'
  }
])
</script>

<style scoped>
.border-gradient-to-b {
  border-image: linear-gradient(to bottom, #fb7185, #fecdd3);
  /* rose to soft pink */
  border-image-slice: 1;
}
</style>
