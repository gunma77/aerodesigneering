<script setup>
defineProps({
  heroImage: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section class="hero-photo viewport-photo" id="home">
    <div class="hero-media">
      <img :src="heroImage" alt="Steam turbine rotor sedang diinspeksi di workshop" />
      <div class="hero-scrim"></div>
      <div class="hero-grid-overlay"></div>
    </div>
    <div class="wrap hero-content">
      <div class="eyebrow eyebrow-navy">PT Aero Desain Rekayasa | Since 2019</div>
      <h1 class="hero-h1">We approach<br />engineering <em>differently</em></h1>
      <div class="hero-ctas">
        <a href="#about-hero" class="btn btn-ghost-navy">Who We Are</a>
        <a href="#units" class="btn btn-primary-invert">What We Do <span class="btn-arrow">→</span></a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-photo {
  position: relative;
  min-height: 88vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 0;
}
.hero-media {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.hero-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 35%;
  animation: slowZoom 20s infinite alternate ease-in-out;
}
.hero-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(105deg, rgba(9,12,32,.94) 0%, rgba(9,12,32,.86) 26%,
    rgba(9,12,32,.55) 52%, rgba(9,12,32,.22) 75%, rgba(9,12,32,.32) 100%);
}
.hero-grid-overlay {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(var(--line-on-navy) 1px, transparent 1px),
    linear-gradient(90deg, var(--line-on-navy) 1px, transparent 1px);
  background-size: 44px 44px;
  opacity: .5;
}
.viewport-photo {
  position: relative;
}
.viewport-photo::before, .viewport-photo::after {
  content: "";
  position: absolute;
  z-index: 2;
  width: 26px;
  height: 26px;
}
.viewport-photo::before {
  top: 24px;
  left: 24px;
  border-top: 2px solid rgba(255,255,255,.75);
  border-left: 2px solid rgba(255,255,255,.75);
}
.viewport-photo::after {
  bottom: 24px;
  right: 24px;
  border-bottom: 2px solid rgba(255,255,255,.75);
  border-right: 2px solid rgba(255,255,255,.75);
}

.hero-content {
  position: relative;
  z-index: 1;
  padding: 150px 0 70px;
  max-width: 800px;
}
.hero-h1 {
  font-size: 70px;
  line-height: 1.06;
  margin-bottom: 50px;
  color: #fff;
  opacity: 0;
  will-change: transform, opacity;
  animation: entranceFadeUp 1.2s ease-out forwards, float 5s ease-in-out 1.2s infinite;
}
.hero-h1 em {
  font-style: normal;
  color: #3B82F6;
}
.lead-navy {
  color: #D3D6EC;
  font-size: 17px;
  max-width: 460px;
  margin-bottom: 36px;
}
.hero-ctas {
  display: flex;
  gap: 14px;
  margin-bottom: 64px;
}
.btn-ghost-navy {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  letter-spacing: .08em;
  text-transform: uppercase;
  padding: 11px 22px;
  border-radius: var(--radius);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid var(--navy);
  color: #fff;
  background: var(--navy);
  transition: all .2s;
}
.btn-ghost-navy:hover {
  background: var(--blue);
  border: 1px solid var(--blue);
  color: var(--navy);
}
.btn-primary-invert {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  letter-spacing: .08em;
  text-transform: uppercase;
  padding: 11px 22px;
  border-radius: var(--radius);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--paper);
  transition: all .2s;
  border: 1px solid var(--paper);
}
.btn-primary-invert:hover {
  background: var(--blue);
  border: 1px solid var(--blue);
  color: #fff;
}

@media (max-width: 900px) {
  .hero-photo { min-height: 78vh; }
  .hero-content { padding: 110px 0 50px; }
  .hero-h1 { font-size: 34px; }
  .lead-navy { font-size: 15.5px; }
  .hero-ctas { flex-wrap: wrap; margin-bottom: 40px; }
  .viewport-photo::before, .viewport-photo::after { width: 16px; height: 16px; }
}

@keyframes slowZoom {
  0% { transform: scale(1); }
  100% { transform: scale(1.15); }
}

@keyframes entranceFadeUp {
  0% { opacity: 0; transform: translate3d(0, 40px, 0); }
  100% { opacity: 1; transform: translate3d(0, 0, 0); }
}

@keyframes float {
  0%, 100% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(0, -8px, 0); }
}
</style>