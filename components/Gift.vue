<template>
  <section id="gift" class="py-20">
    <div class="max-w-2xl mx-auto px-4 text-center space-y-10">
      <div>
        <h2 class="text-4xl font-bold mb-5 font-heading">Wedding Gift</h2>
        <p class="text-base font-body">
          Doa dan restu Anda adalah hadiah terbaik. Namun jika berkenan berbagi kasih, berikut adalah informasi rekening
          kami:
        </p>
      </div>

      <!-- Daftar Rekening -->
      <div class="space-y-5">
        <div v-for="(bank, idx) in banks" :key="idx"
          class="relative overflow-hidden rounded-2xl shadow-lg bg-red-100 p-5 border border-rose-100">
          <div class="absolute -top-10 -right-10 w-32 h-32 bg-rose-200 rounded-full"></div>

          <div class="relative z-10 text-left space-y-1">
            <p class="text-lg font-semibold text-red-900">{{ bank.name }}</p>
            <p class="text-gray-800 tracking-wider text-base font-mono">{{ bank.account }}</p>
            <p class="text-sm text-gray-500 italic">a.n. {{ bank.owner }}</p>
          </div>

          <div class="mt-4 flex justify-end">
            <button @click="copyToClipboard(bank.account)"
              class="px-4 py-2 text-sm rounded-md bg-red-900 text-white font-medium hover:bg-rose-600 transition-all shadow">
              Salin Nomor
            </button>
          </div>
        </div>
      </div>

      <!-- Toast Notif -->
      <transition name="fade">
        <div v-if="toast.visible"
          class="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-rose-500 text-white px-6 py-2.5 rounded-full shadow-lg text-sm">
          {{ toast.message }}
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const banks = ref([
  { name: 'Bank BCA', account: '7455190011', owner: 'Desti Amalia' },
])

const toast = ref({
  visible: false,
  message: ''
})

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    toast.value.message = 'Nomor rekening disalin!'
    toast.value.visible = true
    setTimeout(() => (toast.value.visible = false), 2000)
  })
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
