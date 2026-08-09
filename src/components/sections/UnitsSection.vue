<script setup>
import { reactive, computed } from 'vue'

// ===== PLACEHOLDER (aktif sekarang, tidak butuh file eksternal) =====
// Setelah foto asli ada di /src/assets/units/, hapus fungsi placeholder ini
// dan uncomment blok import di bawahnya.
function placeholder(label, seed) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
      <rect width="400" height="300" fill="hsl(${seed * 47 % 360}, 12%, 88%)"/>
      <text x="50%" y="50%" font-family="monospace" font-size="16" fill="#666"
            text-anchor="middle" dominant-baseline="middle">${label}</text>
    </svg>
  `.trim()
  return `data:image/svg+xml;base64,${btoa(svg)}`
}

// ===== IMPORT ASLI (aktifkan nanti kalau foto sudah tersedia) =====
// import img01a from '@/assets/units/design-01.jpg'
// import img01b from '@/assets/units/design-02.jpg'
// import img01c from '@/assets/units/design-03.jpg'
// import img02a from '@/assets/units/production-01.jpg'
// import img02b from '@/assets/units/production-02.jpg'
// import img03a from '@/assets/units/installation-01.jpg'
// import img03b from '@/assets/units/installation-02.jpg'
// import img03c from '@/assets/units/installation-03.jpg'
// import img04a from '@/assets/units/manufacturing-01.jpg'
// import img04b from '@/assets/units/manufacturing-02.jpg'

const units = [
  {
    idx: '01',
    title: 'Design Units',
    desc: 'Focusing on engineering product design — from measurement and reconstruction (reverse engineering) and custom designs tailored to client needs, to technical drawings and CAD modeling for analysis and production.',
    images: [placeholder('Design 01', 1), placeholder('Design 02', 2), placeholder('Design 03', 3)],
    // images: [img01a, img01b, img01c], // ← ganti ke ini nanti
  },
  {
    idx: '02',
    title: 'Production Units',
    desc: 'Encompassing product conceptualization, development, and detailed planning for manufacturing — supported by technical analysis to evaluate performance and feasibility at every stage.',
    images: [placeholder('Production 01', 4), placeholder('Production 02', 5)],
    // images: [img02a, img02b],
  },
  {
    idx: '03',
    title: 'Installation & Maintenance',
    desc: 'Handling the installation and maintenance of high-precision systems, ensuring optimal integration of every component for long-term efficiency and performance.',
    images: [placeholder('Installation 01', 6), placeholder('Installation 02', 7), placeholder('Installation 03', 8)],
    // images: [img03a, img03b, img03c],
  },
  {
    idx: '04',
    title: 'Technical Component Manufacturing',
    desc: 'Fabrication of high-precision technical components, from prototyping to small-scale production, with strict quality control at every stage of the process.',
    images: [placeholder('Manufacturing 01', 9), placeholder('Manufacturing 02', 10)],
    // images: [img04a, img04b],
  },
]

const activeSlide = reactive(units.map(() => 0))

function setSlide(unitIndex, slideIndex) {
  activeSlide[unitIndex] = slideIndex
}
</script>

<template>
  <!-- Section head — background navy, terpisah -->
  <section id="units-head" class="units-head-section">
    <div class="wrap">
      <div class="sec-head">
        <h2>Our business units</h2>
        <p>We operate through four specialized business units, each dedicated to delivering comprehensive and innovative solutions to meet your specific industry needs.</p>
      </div>
    </div>
  </section>

  <!-- Section grid unit -->
  <section id="units">
    <div class="wrap">
      <div class="units">
        <div class="unit" v-for="(u, i) in units" :key="u.idx">
          <div class="unit-media">
            <div class="unit-media-frame">
              <img
                v-for="(img, imgIdx) in u.images"
                :key="imgIdx"
                :src="img"
                :alt="`${u.title} ${imgIdx + 1}`"
                class="unit-img"
                :class="{ 'is-active': activeSlide[i] === imgIdx }"
              />
            </div>
            <div class="unit-dots" v-if="u.images.length > 1">
              <button
                v-for="(img, imgIdx) in u.images"
                :key="imgIdx"
                class="dot"
                :class="{ 'is-active': activeSlide[i] === imgIdx }"
                :aria-label="`Lihat foto ${imgIdx + 1}`"
                @click="setSlide(i, imgIdx)"
              ></button>
            </div>
          </div>

          <div class="unit-content">
            <span class="idx">{{ u.idx }}</span>
            <h3>{{ u.title }}</h3>
            <p>{{ u.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ---------- Section head (navy) ---------- */
.units-head-section {
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
  line-height: 1.25;
  margin-bottom: 14px;
  color: #fff;
}
.sec-head p {
  max-width: 560px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14.5px;
}

/* ---------- Units grid section ---------- */
#units {
  background: var(--paper);
  padding: 90px 0;
}

.units {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.unit {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 36px;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 24px;
  transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
}
.unit:hover {
  border-color: var(--blue);
  box-shadow: 0 12px 28px -18px rgba(0, 0, 0, 0.35);
  transform: translateY(-2px);
}

.unit-media {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.unit-media-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 6px;
  overflow: hidden;
  background: var(--line);
}
.unit-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.4s ease;
}
.unit-img.is-active {
  opacity: 1;
}

.unit-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: var(--line);
  padding: 0;
  cursor: pointer;
  transition: background 0.25s, transform 0.25s;
}
.dot:hover {
  background: var(--navy);
}
.dot.is-active {
  background: var(--blue);
  transform: scale(1.2);
}

.unit-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.unit-content .idx {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  color: var(--navy);
  margin-bottom: 16px;
  display: block;
}
.unit-content h3 {
  font-size: 21px;
  margin-bottom: 12px;
}
.unit-content p {
  color: var(--grey);
  font-size: 14.5px;
  line-height: 1.6;
  margin-bottom: 20px;
  max-width: 520px;
}
.unit-content a {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  border-bottom: 1px solid var(--ink);
  padding-bottom: 2px;
  width: fit-content;
}
.unit-content a:hover {
  border-color: var(--blue);
}
.unit-content a .arrow {
  transition: transform 0.25s ease;
}
.unit-content a:hover .arrow {
  transform: translateX(3px);
}

@media (max-width: 900px) {
  .unit {
    grid-template-columns: 1fr;
    padding: 20px;
  }
  .unit-media-frame {
    aspect-ratio: 16 / 9;
  }
}

@media (max-width: 700px) {
  .unit { padding: 18px; }
}
</style>