<template>
  <div class="bg-red-950 text-red-50">
    <Landing
      v-if="!showInvitation"
      :couple="invitation.couple"
      :bg-image="invitation.assets.landingBg"
      @open="showInvitation = true"
    />

    <template v-else>
      <Countdown
        :couple="invitation.couple"
        :countdown="invitation.countdown"
        :bg-image="invitation.assets.countdownBg"
      />
      <AyatArRum :quote="invitation.quote" />
      <BridgeGroum :couple="invitation.couple" />
      <LoveStory :story="invitation.loveStory" />
      <Event :events="invitation.events" />
      <Gallery :gallery="invitation.gallery" />
      <Gift :gift="invitation.gift" />
      <BlessingForm />
      <ThankYou
        :couple="invitation.couple"
        :closing="invitation.closing"
      />
      <AudioPlayer :audio="invitation.audio" />
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
import { invitation } from '~/data/invitation'

const showInvitation = ref(false)

useSeoMeta(invitation.seo)

</script>

<style scoped>
body {
  font-family: 'Lato', sans-serif;
}
</style>
