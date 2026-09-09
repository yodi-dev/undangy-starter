<template>
  <div class="bg-red-950 text-red-50">
    <Landing v-if="!showInvitation" @open="showInvitation = true" />

    <template v-else>
      <Countdown />
      <AyatArRum />
      <BridgeGroum />
      <LoveStory />
      <Event />
      <Gallery />
      <Gift />
      <BlessingForm />
      <ThankYou />
      <AudioPlayer />
    </template>
  </div>
</template>

<script setup>
import Landing from '~/components/Landing.vue'
import Countdown from '~/components/Countdown.vue'
import AyatArRum from '@/components/AyatArRum.vue'
import BridgeGroum from '~/components/BridgeGroum.vue'
import LoveStory from '@/components/LoveStory.vue'
import Event from '@/components/Event.vue'
import Gallery from '@/components/Gallery.vue'
import Gift from '@/components/Gift.vue'
import BlessingForm from '@/components/BlessingForm.vue'
import ThankYou from '~/components/ThankYou.vue'
import AudioPlayer from '~/components/AudioPlayer.vue'

import { ref } from 'vue'

const showInvitation = ref(false)

useSeoMeta({
  title: 'Desti & Reza Wedding - awan-dev.site',
  description: 'Undangan pernikahan resmi Reza & Desti. Temukan informasi acara, RSVP, lokasi, dan hitung mundur pernikahan kami.',
  ogTitle: 'Desti & Reza Wedding - awan-dev.site',
  ogDescription: 'Kami mengundang Anda untuk hadir di hari bahagia kami.',
  ogImage: 'https://undangan-reza.vercel.app/images/1.jpg',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogUrl: 'https://undangan-reza.vercel.app',
  twitterCard: 'summary_large_image'
})

</script>

<style scoped>
body {
  font-family: 'Lato', sans-serif;
}
</style>
