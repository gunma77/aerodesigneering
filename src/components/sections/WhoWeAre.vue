<script setup>
import truck from '@/assets/truckk.png'

defineProps({
  aboutImage: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <section id="about-hero">
    <div class="wrap about-hero-grid">
      <!-- Kolom Kiri: Gambar dengan Fade Gelap Simpel -->
      <div class="about-hero-media">
        <img :src="truck" alt="About Aero Desain Rekayasa" class="about-hero-img" />
        <div class="dark-overlay"></div>
      </div>

      <!-- Kolom Kanan: Konten Teks -->
      <div class="about-hero-content">
        <h1 class="about-h1">We are<br />Aero Desain<br /><em>Rekayasa</em></h1>
        <p class="lead">
          We believe that innovation takes flight from passion and expertise.
          That our engineering roots empower us to design, create, and deliver beyond boundaries.
          Every challenge is an opportunity to engineer smarter, safer, and stronger solutions.
        </p>
        <!-- <a href="#team" class="btn btn-primary">Discover Our Team <span class="btn-arrow">→</span></a> -->
        <router-link to="/team" class="btn btn-primary">Discover Our Team<span class="btn-arrow">→</span></router-link>
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
  /* border: 1px solid var(--line); */
}

.about-hero-img {
  width: 100%;
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


@media (max-width: 900px) {
  #about-hero { padding-top: 110px; }
  .about-hero-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .about-h1 { font-size: 34px; }
  section { padding: 70px 0; }
}
</style>