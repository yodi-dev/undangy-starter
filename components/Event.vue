<template>
  <section id="event-detail" class="font-body py-20 bg-red-950">
    <div class="max-w-4xl mx-auto px-4">
      <div class="bg-white/90 text-red-950 py-12 rounded-xl shadow-lg">
        <h2 class="text-4xl font-bold font-heading text-center tracking-wide mb-8">
          Wedding Event
        </h2>

        <!-- Card Gabungan -->
        <div
          class="p-6 shadow-sm md:flex md:items-start md:space-x-6 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02] rounded-lg"
          data-aos="fade-up">
          <!-- Info dan Map -->
          <div class="md:w-1/2 space-y-4">
            <h3 class="text-2xl font-semibold">Akad & Resepsi</h3>

            <p class="flex items-center gap-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                class="w-5 h-5 text-rose-500">
                <path d="M5.75 2a.75...Z" /> <!-- kalender -->
              </svg>
              Sabtu, 26 Juli 2025
            </p>

            <p class="flex items-center gap-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                class="w-5 h-5 text-rose-500">
                <path d="M10 18a8...Z" /> <!-- jam -->
              </svg>
              Pukul 09:00 - Selesai
            </p>

            <p class="flex items-start gap-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                class="w-5 h-5 text-rose-500">
                <path d="M9.69 18...Z" /> <!-- lokasi -->
              </svg>
              Prumnas Muara Siban Desa Indikat Ilir
            </p>
          </div>

          <div class="mt-6 md:mt-0 md:w-1/2 overflow-hidden rounded-lg shadow-md border border-rose-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2856.1721885358133!2d103.50260677497425!3d-3.806453296167383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwNDgnMjMuMiJTIDEwM8KwMzAnMTguNyJF!5e1!3m2!1sid!2sid!4v1750952303597!5m2!1sid!2sid"
              width="100%" height="260" style="border:0;" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>