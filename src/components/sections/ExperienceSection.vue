<script setup>
import { ref } from 'vue'

const timeline = [
  {
    slug: 'turbo-daya-mekanika',
    year: '2019',
    title: 'PT Turbo Daya Mekanika',
    desc: 'Flow Leakage Case Analysis on a 22 MW Steam Turbine.',
  },
  {
    slug: 'jasa-pemeliharaan-pabrik',
    year: '2020',
    title: 'PT Jasa Pemeliharaan Pabrik & Pembangkit',
    desc: 'On-site balancing.',
  },
]

const activeSlug = ref(null)

function setActive(slug) {
  activeSlug.value = slug
}
function clearActive() {
  activeSlug.value = null
}
</script>

<template>
  <section class="experience grid-bg-navy" id="experience">
    <div class="wrap">
      <div class="sec-head">
        <h2>Problem solving &amp; innovation</h2>
        <p>For the last two years, we involved in solving numerous problems encountered by various companies.</p>
      </div>

      <div class="timeline">
        <div class="tl-row">
          <router-link
            v-for="t in timeline"
            :key="t.slug"
            :to="`/experience/${t.slug}`"
            class="tl-item"
            :class="{ 'is-active': activeSlug === t.slug }"
            @mouseenter="setActive(t.slug)"
            @mouseleave="clearActive"
            @focus="setActive(t.slug)"
            @blur="clearActive"
          >
            <span class="tl-year">{{ t.year }}</span>
            <h4>{{ t.title }}</h4>
            <p>{{ t.desc }}</p>
          </router-link>

          <router-link
            to="/experience-detail"
            class="tl-item tl-more"
            :class="{ 'is-active': activeSlug === 'experience'}"
            @mouseenter="setActive('experience')"
            @mouseleave="clearActive"
            @focus="setActive('experience')"
            @blur="clearActive"
          >
            <span class="tl-year">&nbsp;</span>
            <h4>More</h4>
            <p>Review our complete projects and experience.</p>
            <span class="tl-link">
              Detail
              <span class="arrow" aria-hidden="true">&rarr;</span>
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience {
  background: var(--paper);
  color: #fff;
  position: relative;
}

/* ---------- Header ---------- */
.experience .sec-head {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
}
.eyebrow {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: #3B82F6;
  margin-bottom: 12px;
}
.experience .sec-head h2 {
  color: #181818;
  letter-spacing: -0.01em;
  font-size: 52px;
}
.experience .sec-head p {
  color: var(--grey);
  font-size: 16px;
  max-width: 520px;
  line-height: 1.6;
  margin-bottom: 30px;
}

/* ---------- Timeline ---------- */
.timeline {
  position: relative;
  padding-top: 16px;
}
.timeline::before {
  content: "";
  position: absolute;
  top: 27px;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--blue);
}

.tl-row {
  counter-reset: tl-counter;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.tl-item {
  display: block;
  position: relative;
  padding: 46px 24px 26px 22px;
  text-decoration: none;
  color: inherit;
  border-radius: 10px;
  border: 1px solid transparent;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              background 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Numbered badge instead of a plain dot */
.tl-item::before {
  counter-increment: tl-counter;
  content: counter(tl-counter, decimal-leading-zero);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11px;
  font-weight: 500;
  color: #fff;
  background: var(--navy);
  border: 1px solid rgba(59, 130, 246, 0.5);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              background 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.tl-item:hover,
.tl-item.is-active {
  transform: translateY(-6px);
  background: #F2F3F5;
  border-color: rgba(59, 130, 246, 0.18);
  box-shadow: 0 20px 40px -16px rgba(0, 0, 0, 0.15);
}
.tl-item:hover::before,
.tl-item.is-active::before {
  transform: scale(1.08);
  background: #3B82F6;
  border-color: #3B82F6;
  box-shadow: 0 0 0 5px rgba(59, 130, 246, 0.18);
}
.tl-item:focus-visible {
  outline: 2px solid #3B82F6;
  outline-offset: 2px;
}

.tl-year {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: #8CA0FF;
  margin-bottom: 12px;
  display: block;
}
.tl-item h4 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.35;
  margin-bottom: 10px;
  color: var(--blue);
}
.tl-item p {
  color: var(--grey);
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 18px;
}

.tl-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--blue);
  opacity: 0;
  transform: translateX(-6px);
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.tl-item:hover .tl-link,
.tl-item.is-active .tl-link,
.tl-item:focus-visible .tl-link {
  opacity: 1;
  transform: translateX(0);
}
.tl-link .arrow {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.tl-item:hover .tl-link .arrow {
  transform: translateX(3px);
}

/* ---------- Card "Selengkapnya" — badge jadi ikon "+" ---------- */
.tl-more::before {
  counter-increment: 0;
  content: "+";
  font-size: 14px;
}
.tl-more h4 {
  color: var(--blue);
}
.tl-more p {
  color: var(--grey);
}

@media (max-width: 900px) {
  .tl-row { grid-template-columns: 1fr; gap: 20px; }
  .timeline::before { display: none; }
}
</style>