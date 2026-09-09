import type { InvitationData } from '~/types/invitation'

export const invitation: InvitationData = {
  seo: {
    title: 'Desti & Reza Wedding - awan-dev.site',
    description: 'Undangan pernikahan resmi Reza & Desti. Temukan informasi acara, RSVP, lokasi, dan hitung mundur pernikahan kami.',
    ogTitle: 'Desti & Reza Wedding - awan-dev.site',
    ogDescription: 'Kami mengundang Anda untuk hadir di hari bahagia kami.',
    ogImage: 'https://undangan-reza.vercel.app/images/1.jpg',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    ogUrl: 'https://undangan-reza.vercel.app',
    twitterCard: 'summary_large_image',
  },
  couple: {
    shortName: 'Desti & Reza',
    title: 'The Wedding Of',
    greeting: {
      title: 'Assalamu\'alaikum Wr. Wb.',
      text: 'Tanpa mengurangi rasa hormat, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami.',
    },
    bride: {
      name: 'Desti',
      fullName: 'Desti Amalia',
      parents: 'Putri Kedua dari Bapak Herianto & Ibu Lili Heriani',
      instagram: '@destiii_amalia',
      instagramUrl: 'https://instagram.com/destiii_amalia',
      photo: '/images/bg-wanita.webp',
    },
    groom: {
      name: 'Reza',
      fullName: 'Reza Saputra',
      parents: 'Putra Keempat dari Bapak Komedi & Ibu Titin Sumarni',
      instagram: '@eza_putranb',
      instagramUrl: 'https://instagram.com/eza_putranb',
      photo: '/images/bg-pria.webp',
    },
    dividerIcon: '/icons/ring.png',
  },
  assets: {
    landingBg: '/images/landing.webp',
    countdownBg: '/images/7.webp',
  },
  countdown: {
    targetDate: '2025-07-26T09:00:00+07:00',
    dateText: 'Sabtu, 26 Juli 2025',
  },
  quote: {
    text: 'Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.',
    source: 'QS. Ar-Rum: 21',
    icon: '/images/dove.png',
  },
  events: [
    {
      id: 'akad-resepsi',
      title: 'Wedding Event',
      subTitle: 'Akad & Resepsi',
      dateText: 'Sabtu, 26 Juli 2025',
      timeText: 'Pukul 09:00 - Selesai',
      locationName: 'Prumnas Muara Siban Desa Indikat Ilir',
      address: 'Prumnas Muara Siban Desa Indikat Ilir',
      googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2856.1721885358133!2d103.50260677497425!3d-3.806453296167383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwNDgnMjMuMiJTIDEwM8KwMzAnMTguNyJF!5e1!3m2!1sid!2sid!4v1750952303597!5m2!1sid!2sid',
    },
  ],
  loveStory: {
    title: 'Love Story',
    timeline: [
      {
        date: 'Pertemuan',
        description: 'Tidak ada yang kebetulan di dunia ini. Semua sudah mempunyai porsi masing2 dan telah disusun rapi oleh sang maha kuasa. Pertemuan kami bermula dari tempat kerja sebuah restoran di kota teh obeng (batam), akhir tahun 2021.',
        icon: '/icons/icon1.png',
      },
      {
        date: 'Pendekatan',
        description: 'Katanya cinta dapat tumbuh dengan kebersamaan, seiring berjalannya waktu kami semakin dekat walau tidak ada kata pacaran dan terus berlanjut.',
        icon: '/icons/icon2.png',
      },
      {
        date: 'Tunangan',
        description: 'Hingga akhirnya di tahun ke-3 (awal tahun 2024) kami memutuskan untuk cuti bersama ke kampung halamanku dan mengenal lebih dekat keluarga besar kami berdua. Di ikat dengan sebuah cincin, kami dan keluarga meresmikan hubungan dengan tujuan ke jenjang yang lebih serius.',
        icon: '/icons/icon3.png',
      },
      {
        date: 'Pernikahan',
        description: 'Alhamdulillah tidak ada usaha yang mengkhianati hasil, dengan penuh perjuangan di tanah perantauan kami mengusahakan untuk bisa mengikrarkan janji suci pernikahan di tahun ini.',
        icon: '/icons/icon4.png',
      },
    ],
  },
  gallery: {
    title: 'Galeri Kami',
    portrait: [
      { src: '/images/2.webp', alt: 'Potret Mempelai' },
      { src: '/images/3.webp', alt: 'Potret Mempelai' },
      { src: '/images/4.webp', alt: 'Potret Mempelai' },
      { src: '/images/5.webp', alt: 'Potret Mempelai' },
      { src: '/images/6.webp', alt: 'Potret Mempelai' },
      { src: '/images/10.webp', alt: 'Potret Mempelai' },
      { src: '/images/13.webp', alt: 'Potret Mempelai' },
      { src: '/images/14.webp', alt: 'Potret Mempelai' },
    ],
    landscape: [
      { src: '/images/1.webp', alt: 'Potret Mempelai' },
      { src: '/images/7.webp', alt: 'Potret Mempelai' },
      { src: '/images/8.webp', alt: 'Potret Mempelai' },
    ],
  },
  gift: {
    title: 'Wedding Gift',
    message: 'Doa dan restu Anda adalah hadiah terbaik. Namun jika berkenan berbagi kasih, berikut adalah informasi rekening kami:',
    banks: [
      {
        name: 'Bank BCA',
        account: '7455190011',
        owner: 'Desti Amalia',
      },
    ],
  },
  audio: {
    src: '/audio/bg-music.mp3',
  },
  closing: {
    title: 'Terima Kasih',
    message: 'Terima kasih atas doa dan restu yang telah diberikan kepada kami. Semoga cinta dan kebahagiaan selalu menyertai langkah kita semua.',
    coupleText: 'Kami yang berbahagia',
    photo: '/images/3.webp',
    musicAttribution: 'Musik: "You\'ll Be in My Heart" - Niki – Phil Collins.\nDigunakan untuk kepentingan non-komersial.',
    iconAttribution: {
      text: 'Ikon oleh',
      author: 'Freepik',
      url: 'https://www.freepik.com',
    },
    developerCredit: {
      text: 'Made with ♥ by',
      author: 'awan-dev.site',
      url: 'https://awan-dev.site',
    },
  },
}
