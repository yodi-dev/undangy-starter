<template>
  <div class="bg-red-950 text-red-50">
    <Landing v-if="!showInvitation" :couple="invitation.couple" :bg-image="invitation.assets.landingBg"
      @open="showInvitation = true" />

    <template v-else>
      <Countdown :couple="invitation.couple" :countdown="invitation.countdown"
        :bg-image="invitation.assets.countdownBg" />
      <AyatArRum :quote="invitation.quote" />
      <BrideGroom :couple="invitation.couple" />
      <LoveStory :story="invitation.loveStory" />
      <Event :events="invitation.events" />
      <Gallery :gallery="invitation.gallery" />
      <Gift :gift="invitation.gift" />
      <BlessingForm />
      <ThankYou :couple="invitation.couple" :closing="invitation.closing" />
      <AudioPlayer :audio="invitation.audio" />
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { invitation } from '~/data/invitation'

const showInvitation = ref(false)

useSeoMeta(invitation.seo)
</script>
