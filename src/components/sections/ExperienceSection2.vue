<script setup>
import { ref } from 'vue'

const timeline = [
  {
    slug: 'turbo-daya-mekanika',
    year: '2019',
    title: 'PT Turbo Daya Mekanika',
    desc: 'Analisis kasus kebocoran aliran pada steam turbine 22 MW.',
    images: [
      '/images/experience/turbo-daya-mekanika.jpg',
      '/images/experience/turbo-daya-mekanika-2.jpg',
      '/images/experience/turbo-daya-mekanika-3.jpg',
    ],
  },
  {
    slug: 'jasa-pemeliharaan-pabrik',
    year: '2020',
    title: 'PT Jasa Pemeliharaan Pabrik & Pembangkit',
    desc: 'On-site balancing untuk unit pembangkit.',
    images: [
      '/images/experience/jasa-pemeliharaan-pabrik.jpg',
      '/images/experience/jasa-pemeliharaan-pabrik-2.jpg',
      '/images/experience/jasa-pemeliharaan-pabrik-3.jpg',
    ],
  },
]

// current slide index per card
const activeSlide = ref(timeline.map(() => 0))

function setSlide(cardIndex, slideIndex) {
  activeSlide.value[cardIndex] = slideIndex
}

function goToSlide(cardIndex, direction) {
  const len = timeline[cardIndex].images.length
  const current = activeSlide.value[cardIndex]
  activeSlide.value[cardIndex] = (current + direction + len) % len
}

// swipe handling
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
    if (touchDeltaX < 0) {
      goToSlide(cardIndex, 1)
    } else {
      goToSlide(cardIndex, -1)
    }
  }
  touchDeltaX = 0
}
</script>

<template>
  <!-- Section head — background navy, terpisah -->
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
                v-for="(img, si) in t.images"
                :key="si"
                :src="img"
                :alt="t.title"
                loading="lazy"
              />
            </div>

            <span class="case-index">{{ String(i + 1).padStart(2, '0') }}</span>

            <div class="case-dots" v-if="t.images.length > 1">
              <button
                v-for="(img, si) in t.images"
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
            <p class="case-desc">{{ t.desc }}</p>
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
.dot:hover {
  background: rgba(255, 255, 255, 0.7);
}
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
  .case-card {
    grid-template-columns: 1fr;
  }
  .case-media,
  .case-slides img {
    min-height: 260px;
  }
  .case-body {
    padding: 28px 26px;
  }
  .case-title {
    font-size: 22px;
  }
}

@media (max-width: 560px) {
  .sec-head h2 {
    font-size: 32px;
  }
}
</style>