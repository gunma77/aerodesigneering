<script setup>
import { ref } from 'vue'

// ================================================================
// STATIC IMPORT — foto yang sudah tersedia di src/assets/experience/
// Tinggal uncomment baris di bawah begitu file fotonya sudah ada,
// lalu ganti pemakaian placeholder(...) jadi nama variabel ini
// di dalam array `timeline` (lihat komentar per-item di bawah).
// ================================================================

// --- PT Indonesia Ethanol Industry ---
//import indonesiaEthanol1 from '@/assets/experience/turbinbadag.jpg'
// import indonesiaEthanol2 from '@/assets/experience/indonesia-ethanol-2.jpg'
// import indonesiaEthanol3 from '@/assets/experience/indonesia-ethanol-3.jpg'

// --- PT Kebun Tebu Mas ---
import kebunTebuMas1 from '@/assets/experience/kebunTebuMas.jpg'
// import kebunTebuMas2 from '@/assets/experience/kebun-tebu-mas-2.jpg'
// import kebunTebuMas3 from '@/assets/experience/kebun-tebu-mas-3.jpg'

// --- PT Sugar Labinta ---
// import sugarLabinta1 from '@/assets/experience/sugar-labinta-1.jpg'
// import sugarLabinta2 from '@/assets/experience/sugar-labinta-2.jpg'
// import sugarLabinta3 from '@/assets/experience/sugar-labinta-3.jpg'

// --- PT GMF Aero Asia ---
import gmf1 from '@/assets/experience/gmf1.png'
import gmf2 from '@/assets/experience/gmf2.png'
import gmf3 from '@/assets/experience/gmf3.png'
import gmf4 from '@/assets/experience/gmf4.png'

// --- PT Mesitech Purnabangun ---
import mesitech2 from '@/assets/experience/mesitech2.png'
import mesitech3 from '@/assets/experience/mesitech3.png'
import mesitech4 from '@/assets/experience/mesitech4.png'
import mesitech5 from '@/assets/experience/mesitech5.png'
import mesitech6 from '@/assets/experience/mesitech6.png'
import mesitech7 from '@/assets/experience/mesitech7.png'

// --- Institut Teknologi Sepuluh November ---
// import its1 from '@/assets/experience/its-1.jpg'
// import its2 from '@/assets/experience/its-2.jpg'
// import its3 from '@/assets/experience/its-3.jpg'

// --- PT Semen Jawa SCG ---
// import sgc1 from '@/assets/experience/sgc-1.jpg'
// import sgc2 from '@/assets/experience/sgc-2.jpg'
// import sgc3 from '@/assets/experience/sgc-3.jpg'

// --- PT Jasa Pemeliharaan Pabrik dan Pembangkit ---
import jppp1 from '@/assets/experience/jpp1.jpeg'
import jppp2 from '@/assets/experience/jpp2.jpg'
import jppp3 from '@/assets/experience/jpp3.jpg'
import jppp4 from '@/assets/experience/jpp4.jpg'
import jppp5 from '@/assets/experience/jpp5.jpg'
import jppp6 from '@/assets/experience/jpp6.jpg'
import jppp7 from '@/assets/experience/jpp7.jpg'

// --- PT Turbo Daya Mekanika ---
import tdm1 from '@/assets/experience/tdm1.png'
import tdm2 from '@/assets/experience/tdm2.png'
// import tdm3 from '@/assets/experience/tdm-3.jpg'

// Placeholder SVG — dipakai sementara kalau foto belum ada
function placeholder(label, seed) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
      <rect width="400" height="300" fill="hsl(${seed * 47 % 360}, 12%, 88%)"/>
      <text x="50%" y="50%" font-family="monospace" font-size="14" fill="#666"
            text-anchor="middle" dominant-baseline="middle">${label}</text>
    </svg>
  `.trim()
  return `data:image/svg+xml;base64,${btoa(svg)}`
}

// ================================================================
// CARA PAKAI:
// 1. Taruh foto di: src/assets/experience/
// 2. Uncomment baris import yang sesuai di atas
// 3. Di array `timeline` bawah, ganti placeholder('Label', seed)
//    dengan nama variabel yang sudah di-import (mis. kebunTebuMas1)
// ================================================================

const timeline = [
  {
    slug: 'indonesia-ethanol',
    year: '2025',
    title: 'PT Indonesia Ethanol Industry',
    desc: 'Centrifugal Fan PAF Repair.',
    images: [
      placeholder('PT Indonesia Ethanol 01', 4),
      // indonesiaEthanol1,
      // indonesiaEthanol2,
      // indonesiaEthanol3,
    ],
  },
  {
    slug: 'kebun-tebu-mas',
    year: '2024 & 2025',
    title: 'PT Kebun Tebu Mas',
    desc: 'Replacement and maintenance of evaporator tubes, along with maintenance of a 100 TPH capacity boiler (2024).<br><br>120 TPH Capacity Boiler Maintenance (2025).',
    images: [
      // placeholder('Kebun Tebu Mas 01', 4),
      // placeholder('Kebun Tebu Mas 02', 5),
      // placeholder('Kebun Tebu Mas 03', 6),
      kebunTebuMas1,
      // kebunTebuMas2,
      // kebunTebuMas3,
    ],
  },
  {
    slug: 'sugar-labinta',
    year: '2023–2024',
    title: 'PT Sugar Labinta',
    desc: 'Manufacturing components including grinding gib for 100T boiler impactor, boiler air heater ferrule, and pneumatic fly & bottom ash silo nozzle.',
    images: [
      placeholder('Sugar Labinta 01', 7),
      placeholder('Sugar Labinta 02', 8),
      placeholder('Sugar Labinta 03', 9),
      // sugarLabinta1,
      // sugarLabinta2,
      // sugarLabinta3,
    ],
  },
  {
    slug: 'gmf-aero-asia',
    year: '2023',
    title: 'PT GMF Aero Asia',
    desc: 'Rotor-Dynamic Analysis on OPRA GT OP16-3A.',
    images: [
      // placeholder('GMF Aero Asia 01', 10),
      // placeholder('GMF Aero Asia 02', 11),
      // placeholder('GMF Aero Asia 03', 12),
      gmf1,
      gmf2,
      gmf3,
      gmf4
    ],
  },
  {
    slug: 'mesitech',
    year: '2021',
    title: 'PT Mesitech Purnabangun',
    desc: 'Gearbox Inspection Service – Amarillo Gearbox.',
    images: [
      // placeholder('Mesitech 01', 13),
      // placeholder('Mesitech 02', 14),
      // placeholder('Mesitech 03', 15),
      mesitech2,
      mesitech3,
      mesitech4,
      mesitech5,
      mesitech6,
      mesitech7,
    ],
  },
  {
    slug: 'its',
    year: '2021',
    title: 'Institut Teknologi Sepuluh November',
    desc: 'Design and Analysis Tricycle.<br>Design and Analysis E-Scooter.',
    images: [
      placeholder('ITS 01', 16),
      placeholder('ITS 02', 17),
      placeholder('ITS 03', 18),
      // its1,
      // its2,
      // its3,
    ],
  },
  {
    slug: 'sgc',
    year: '2020',
    title: 'PT Semen Jawa SCG',
    desc: 'Inspection and Service MSV Voyage.<br>Tube Repair AQC Superheat Boiler.',
    images: [
      placeholder('SGC 01', 19),
      placeholder('SGC 02', 20),
      placeholder('SGC 03', 21),
      // sgc1,
      // sgc2,
      // sgc3,
    ],
  },
  {
    slug: 'jppp',
    year: '2020',
    title: 'PT Jasa Pemeliharaan Pabrik dan Pembangkit',
    desc: 'On Site Balancing.',
    images: [
      jppp1,
      jppp2,
      jppp3,
      jppp4,
      jppp5,
      jppp6,
      jppp7,
    ],
  },
  {
    slug: 'tdm',
    year: '2019',
    title: 'PT Turbo Daya Mekanika',
    desc: 'Analysis of the leakage case flow in a 22 MW steam turbine.',
    images: [
      tdm1,
      tdm2,
    ],
  },
]

const activeSlide = ref(timeline.map(() => 0))

function setSlide(cardIndex, slideIndex) {
  activeSlide.value[cardIndex] = slideIndex
}

function goToSlide(cardIndex, direction) {
  const len = timeline[cardIndex].images.length
  const current = activeSlide.value[cardIndex]
  activeSlide.value[cardIndex] = (current + direction + len) % len
}

let touchStartX = 0
let touchDeltaX = 0

function onTouchStart(e) {
  touchStartX = e.touches[0].clientX
  touchDeltaX = 0
}

function onTouchMove(e) {
  touchDeltaX = e.touches[0].clientX - touchStartX
}

function onTouchEnd(cardIndex) {
  const threshold = 40
  if (Math.abs(touchDeltaX) > threshold) {
    goToSlide(cardIndex, touchDeltaX < 0 ? 1 : -1)
  }
  touchDeltaX = 0
}
</script>

<template>
  <!-- Section head — background navy -->
  <section id="experience-head" class="experience-head-section">
    <div class="wrap">
      <div class="sec-head">
        <h2>Our Experience</h2>
        <p>Discover our portfolio of successful projects, where we turn complex engineering challenges into innovative, real-world solutions.</p>
      </div>
    </div>
  </section>

  <!-- Section daftar case study -->
  <section class="experience" id="experience">
    <div class="wrap">
      <div class="case-list">
        <div
          v-for="(t, i) in timeline"
          :key="t.slug"
          class="case-card"
        >
          <div
            class="case-media"
            @touchstart="onTouchStart"
            @touchmove="onTouchMove"
            @touchend="onTouchEnd(i)"
          >
            <div
              class="case-slides"
              :style="{ transform: `translateX(-${activeSlide[i] * 100}%)` }"
            >
              <img
                v-for="(imgSrc, si) in t.images"
                :key="si"
                :src="imgSrc"
                :alt="`${t.title} — foto ${si + 1}`"
                loading="lazy"
              />
            </div>

            <span class="case-index">{{ String(i + 1).padStart(2, '0') }}</span>

            <div class="case-dots" v-if="t.images.length > 1">
              <button
                v-for="(_, si) in t.images"
                :key="si"
                type="button"
                class="dot"
                :class="{ active: activeSlide[i] === si }"
                :aria-label="`Slide ${si + 1}`"
                @click="setSlide(i, si)"
              ></button>
            </div>
          </div>

          <div class="case-body">
            <div class="case-meta">
              <span class="case-year">{{ t.year }}</span>
              <span class="case-dot" aria-hidden="true"></span>
              <span class="case-tag">Case study</span>
            </div>
            <h3 class="case-title">{{ t.title }}</h3>
            <p class="case-desc" v-html="t.desc"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ---------- Section head (navy) ---------- */
.experience-head-section {
  background: var(--navy);
  padding: 90px 0;
}
.sec-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.sec-head h2 {
  font-size: 45px;
  letter-spacing: -0.01em;
  margin-bottom: 14px;
  color: #fff;
}
.sec-head p {
  max-width: 560px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  line-height: 1.6;
}

/* ---------- Case list section ---------- */
.experience {
  background: var(--paper);
  position: relative;
  padding: 90px 0;
}
.case-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* ---------- Case card ---------- */
.case-card {
  display: grid;
  grid-template-columns: 460px 1fr;
  align-items: stretch;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 14px;
  overflow: hidden;
  color: inherit;
  transition: border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.case-card:hover {
  border-color: var(--blue);
  box-shadow: 0 24px 48px -28px rgba(15, 23, 42, 0.28);
}

/* media / carousel */
.case-media {
  position: relative;
  overflow: hidden;
  min-height: 360px;
  background: var(--navy);
  touch-action: pan-y;
  user-select: none;
}
.case-slides {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
}
.case-slides img {
  display: block;
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
  min-height: 360px;
  object-fit: cover;
  pointer-events: none;
}
.case-index {
  position: absolute;
  top: 16px;
  left: 16px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: #fff;
  background: rgba(10, 14, 26, 0.55);
  backdrop-filter: blur(6px);
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 2;
}

/* dots */
.case-dots {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 2;
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  padding: 0;
  background: rgba(255, 255, 255, 0.45);
  cursor: pointer;
  transition: background 0.25s ease, transform 0.25s ease;
}
.dot:hover { background: rgba(255, 255, 255, 0.7); }
.dot.active {
  background: #fff;
  transform: scale(1.25);
}

/* body */
.case-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 44px;
  min-width: 0;
}
.case-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}
.case-year {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--blue);
}
.case-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--line);
}
.case-tag {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--grey);
}
.case-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 26px;
  font-weight: 700;
  line-height: 1.3;
  color: #181818;
  margin-bottom: 12px;
}
.case-desc {
  color: var(--grey);
  font-size: 15px;
  line-height: 1.65;
  margin-bottom: 0;
  max-width: 46ch;
}

/* ---------- Responsive ---------- */
@media (max-width: 860px) {
  .case-card { grid-template-columns: 1fr; }
  .case-media,
  .case-slides img { min-height: 260px; }
  .case-body { padding: 28px 26px; }
  .case-title { font-size: 22px; }
}
@media (max-width: 560px) {
  .sec-head h2 { font-size: 32px; }
}
</style>