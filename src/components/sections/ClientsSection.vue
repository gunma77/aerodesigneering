<script setup>
import logo1 from '@/assets/logos/8m.png'
import logo2 from '@/assets/logos/itb.png'
import logo3 from '@/assets/logos/its.png'
import logo4 from '@/assets/logos/len.png'
import logo5 from '@/assets/logos/nusantara.png'
import logo6 from '@/assets/logos/ptdbm.png'
import logo7 from '@/assets/logos/ptjpp.png'
import logo8 from '@/assets/logos/ptmp.png'
import logo9 from '@/assets/logos/qsg.png'
import logo10 from '@/assets/logos/sgc.png'
import logo11 from '@/assets/logos/si.png'
import logo12 from '@/assets/logos/ske.png'
import logo13 from '@/assets/logos/tdm.png'

const clients = [
  { name: 'PT Turbo Daya Mekanika', logo: logo1 },
  { name: 'PT Semen Jawa SCG', logo: logo2 },
  { name: 'PT Jasa Pemeliharaan Pabrik', logo: logo3 },
  { name: 'Client 04', logo: logo4 },
  { name: 'Client 05', logo: logo5 },
  { name: 'Client 06', logo: logo6 },
  { name: 'Client 07', logo: logo7 },
  { name: 'Client 08', logo: logo8 },
  { name: 'Client 09', logo: logo9 },
  { name: 'Client 10', logo: logo10 },
  { name: 'Client 11', logo: logo11 },
  { name: 'Client 12', logo: logo12 },
  { name: 'Client 13', logo: logo13 },
]

// digandakan 2x biar loop-nya mulus tanpa "putus"
const marqueeClients = [...clients, ...clients]
</script>

<template>
  <section class="clients">
    <div class="wrap">
      <div class="sec-head">
        <h2>Collaboration &amp; Trust</h2>
        <p>We believe that the foundation of every successful partnership lies in genuine collaboration and mutual trust. By working closely with our clients, listening to their needs, and aligning our goals, we build relationships that go beyond projects—creating lasting value and shared success.</p>
      </div>
    </div>

    <div class="logo-marquee">
      <div class="logo-track">
        <div class="logo-item" v-for="(c, i) in marqueeClients" :key="c.name + '-' + i">
          <img :src="c.logo" :alt="c.name" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.clients {
  border-bottom: 1px solid var(--line);
  padding-bottom: 80px;
  background-color: var(--navy);
}
.clients .sec-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 48px;
}
.clients .sec-head h2 {
  max-width: 640px;
  text-align: center;
  color: var(--paper);
  font-size: 52px; 
  line-height: 1.6;
}

.clients .sec-head p {
  max-width: 640px;
  text-align: center;
  color: var(--grey);
  font-size: 16px;
  line-height: 1.6;
}

.logo-marquee {
  position: relative;
  overflow: hidden;
  /* border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line); */
  padding: 34px 0;
}

/* fade halus di tepi kiri-kanan biar transisi masuk/keluar logo nggak keliatan "terpotong" */
.logo-marquee::before,
.logo-marquee::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100px;
  z-index: 2;
  pointer-events: none;
}
.logo-marquee::before {
  left: 0;
  background: linear-gradient(90deg, var(--navy) 0%, transparent 100%);
}
.logo-marquee::after {
  right: 0;
  background: linear-gradient(270deg, var(--navy) 0%, transparent 100%);
}

.logo-track {
  display: flex;
  align-items: center;
  gap: 64px;
  width: max-content;
  animation: scroll-left 35s linear infinite;
}

.logo-marquee:hover .logo-track {
  animation-play-state: paused;
}

.logo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 130px;
  height: 60px; */
  width: 180px;
  height: 110px;
}

.logo-item img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  filter: grayscale(100%) opacity(0.5);
  transition: filter 0.3s ease;
}

.logo-item:hover img {
  filter: grayscale(0%) opacity(1);
}

@keyframes scroll-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@media (max-width: 700px) {
  .logo-marquee { padding: 24px 0; }
  .logo-track { gap: 40px; }
  .logo-item { width: 100px; height: 44px; }
}

@media (prefers-reduced-motion: reduce) {
  .logo-track {
    animation: none;
  }
}
</style>