<template>
  <section
    id="rsvp-blessing"
    class="py-20 bg-red-950 text-red-50 font-body"
  >
    <div class="max-w-2xl mx-auto space-y-20 px-4">
      <!-- Form Kehadiran -->
      <div class="bg-red-100 p-6 md:p-8 rounded-2xl shadow-lg border border-red-100 text-red-950">
        <h2 class="text-3xl font-heading font-bold text-center text-red-900 mb-6">
          Konfirmasi Kehadiran & Ucapan
        </h2>
        <form
          class="space-y-5"
          @submit.prevent="submitForm"
        >
          <div>
            <label
              for="name"
              class="block text-sm font-medium mb-1"
            >Nama</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              placeholder="Masukkan nama Anda"
              class="w-full rounded-xl border border-red-200 focus:ring-2 focus:ring-rose-300 focus:outline-none px-4 py-2 text-red-950 placeholder-red-400 shadow-sm"
            >
          </div>
          <div>
            <label
              for="attending"
              class="block text-sm font-medium mb-1"
            >Hadir?</label>
            <select
              id="attending"
              v-model="form.attending"
              required
              class="w-full rounded-xl border border-red-200 focus:ring-2 focus:ring-rose-300 focus:outline-none px-4 py-2 text-red-950 shadow-sm"
            >
              <option
                disabled
                value=""
              >
                Pilih status kehadiran
              </option>
              <option value="yes">
                Ya, saya akan hadir
              </option>
              <option value="no">
                Maaf, tidak bisa hadir
              </option>
            </select>
          </div>
          <div>
            <label
              for="message"
              class="block text-sm font-medium mb-1"
            >Ucapan</label>
            <textarea
              id="message"
              v-model="form.message"
              rows="4"
              required
              placeholder="Tulis doa atau ucapan terbaikmu..."
              class="w-full rounded-xl border border-red-200 focus:ring-2 focus:ring-rose-300 focus:outline-none px-4 py-2 text-red-950 placeholder-red-400 shadow-sm"
            />
          </div>
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full py-3 bg-red-900 text-white font-semibold rounded-xl hover:bg-red-950 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-300 disabled:opacity-50"
          >
            {{ isSubmitting ? 'Mengirim...' : 'Kirim Ucapan' }}
          </button>
        </form>
      </div>

      <!-- Daftar Ucapan -->
      <div class="space-y-6">
        <h3 class="text-3xl font-heading font-semibold text-center text-rose-200">
          Ucapan & Kehadiran
        </h3>
        <div
          v-if="wishes.length === 0"
          class="text-center italic text-rose-300"
        >
          {{ isLoading ? 'Memuat ucapan...' : 'Belum ada ucapan yang masuk.' }}
        </div>
        <ul
          v-else
          class="space-y-4"
        >
          <li
            v-for="(entry, index) in wishes"
            :key="index"
            class="bg-white p-5 rounded-xl shadow border border-red-100 flex items-start gap-3 text-red-950"
          >
            <div class="pt-1">
              <span
                v-if="entry.attending === 'yes'"
                class="text-green-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span
                v-else
                class="text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div>
              <p class="font-semibold">
                {{ entry.name }}
              </p>
              <p class="text-sm italic mt-1">
                "{{ entry.message }}"
              </p>
            </div>
          </li>
        </ul>
      </div>

      <!-- Toast -->
      <transition name="fade">
        <div
          v-if="toast.visible"
          class="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-rose-500 text-white px-6 py-3 rounded-xl shadow-lg text-sm z-50"
        >
          {{ toast.message }}
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useGuestbook } from '~/composables/useGuestbook'

const { wishes, isLoading, isSubmitting, fetchWishes, submitWish } = useGuestbook()

const form = ref({ name: '', attending: '', message: '' })
const toast = ref({ visible: false, message: '' })

const submitForm = async () => {
  const success = await submitWish(form.value)

  if (!success) {
    toast.value = { visible: true, message: 'Gagal mengirim ucapan!' }
    return
  }

  toast.value = { visible: true, message: 'Ucapan berhasil dikirim!' }
  form.value = { name: '', attending: '', message: '' }
}

onMounted(() => {
  fetchWishes()
})
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
