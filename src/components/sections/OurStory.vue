<script setup>
import footageImg from '@/assets/footage.jpeg'

defineProps({
  aboutImage: {
    type: String,
    default: '',
  },
})

const milestones = [
  {
    idx: '01 / AWAL MULA',
    title: 'Lahir dari Passion UAV',
    desc: 'Aero Desain Rekayasa (ADR) lahir dari ide beberapa penggemar UAV berlatar belakang Aerospace Engineering yang ingin berkontribusi di industri UAV — diawali dengan jasa sewa operasi drone dan beberapa produk UAV rancangan sendiri.',
  },
  {
    idx: '02 / MASA PANDEMI',
    title: 'Beradaptasi Saat Pandemi',
    desc: 'Tak lama setelah ADR resmi berdiri sebagai PT di 2019, pandemi Covid-19 membuat permintaan jasa operasi UAV menurun drastis. Namun permintaan baru muncul di bidang desain dan analisis engineering.',
  },
  {
    idx: '03 / EKSPANSI BISNIS',
    title: 'Tumbuh Lintas Industri',
    desc: 'Menyadari latar belakang aerospace engineering kami bisa bermanfaat luas, unit bisnis ADR berkembang mencakup desain & produksi, instalasi & maintenance untuk sektor transportasi, pembangkit listrik, process plant, dan oil & gas.',
  },
]
</script>

<template>
  <section id="story" class="grid-bg">
    <div class="wrap">
      <div class="sec-head">
        <h2>Kisah di balik keberhasilan kami</h2>
        <p>Setiap pencapaian punya ceritanya sendiri — berikut perjalanan yang membentuk ADR seperti sekarang.</p>
      </div>
      <div class="milestones">
        <div class="milestone" v-for="m in milestones" :key="m.idx">
          <span class="idx">{{ m.idx }}</span>
          <h3>{{ m.title }}</h3>
          <p>{{ m.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.wrap {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 40px;
}
section {
  padding: 110px 0;
}
h1, h2, h3 {
  font-family: 'Space Grotesk', sans-serif;
  margin: 0;
  font-weight: 600;
  letter-spacing: -0.01em;
}

/* ---------- HERO (about) ---------- */
#about-hero { padding-top: 150px; }

.about-hero-grid {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 60px;
  align-items: center;
}

.about-hero-media {
  position: relative;
  width: 100%;
  max-width: 380px;
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--line);
}

.about-hero-img {
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  display: block;
}

/* Overlay Fade Gelap Halus */
.dark-overlay {
  position: absolute;
  inset: 0;
  background: rgba(16, 20, 43, 0.35); /* Lapisan gelap transparan */
  pointer-events: none;
}

.about-h1 {
  font-size: 52px;
  line-height: 1.06;
  margin-bottom: 26px;
}
.about-h1 em {
  font-style: normal;
  /* color: var(--blue); */
  color: #3B82F6;
}
.lead {
  color: var(--grey);
  font-size: 17px;
  max-width: 700px;
  margin-bottom: 34px;
}

/* ---------- VISION ---------- */
.vision-card {
  border: 1px solid var(--line);
  background-image : url('src/assets/turbinee.jpeg');
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat;

  color: #fff;
  padding: 56px 60px;
  position: relative;
}
.vision-card .idx {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  letter-spacing: .12em;
  color: #8CA0FF;
  display: block;
  margin-bottom: 20px;
}
.vision-card h2 {
  font-size: 28px;
  line-height: 1.35;
  max-width: 780px;
}

/* ---------- SEC HEAD ---------- */
.sec-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 56px;
  gap: 40px;
}
.sec-head h2 { font-size: 36px; max-width: 520px; }
.sec-head p { color: var(--grey); max-width: 340px; font-size: 15px; padding-bottom: 4px; }

/* ---------- MILESTONES ---------- */
.milestones {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
}
.milestone {
  background: var(--paper);
  padding: 38px 34px;
  position: relative;
  transition: background .25s;
}
.milestone:hover { background: var(--paper-2); }
.milestone .idx {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  color: var(--signal);
  margin-bottom: 22px;
  display: block;
}
.milestone h3 { font-size: 21px; margin-bottom: 14px; }
.milestone p { color: var(--grey); font-size: 14.5px; }

@media (max-width: 900px) {
  #about-hero { padding-top: 110px; }
  .about-hero-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .about-h1 { font-size: 34px; }
  .vision-card { padding: 40px 28px; }
  .vision-card h2 { font-size: 22px; }
  .sec-head { flex-direction: column; align-items: flex-start; gap: 16px; }
  .milestones { grid-template-columns: 1fr; }
  section { padding: 70px 0; }
}
</style>