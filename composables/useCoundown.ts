import { ref, onMounted, onUnmounted } from 'vue'

export function useCountdown(targetDate: string) {
  const days = ref(0), hours = ref(0), minutes = ref(0), seconds = ref(0)
  let timer: ReturnType<typeof setInterval>

  function update() {
    const diff = new Date(targetDate).getTime() - Date.now()
    days.value    = Math.floor(diff / 86400000)
    hours.value   = Math.floor((diff % 86400000) / 3600000)
    minutes.value = Math.floor((diff % 3600000) / 60000)
    seconds.value = Math.floor((diff % 60000) / 1000)
  }

  onMounted(() => {
    update()
    timer = setInterval(update, 1000)
  })
  onUnmounted(() => clearInterval(timer))

  return { days, hours, minutes, seconds }
}
