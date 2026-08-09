<script setup>
import turbinBg from '@/assets/turbinbadag.jpg'
</script>

<template>
  <section id="units" :style="{ backgroundImage: `url(${turbinBg})` }">
    <div class="wrap">
      <div class="sec-head">
        <h2>Four unit business, <br>One precision standard</h2>
        <p>We deliver precision engineering for today’s toughest demands.
We integrate design, production, and maintenance with unmatched expertise.
And we pioneer solutions that drive progress across industries.</p>
<router-link to="/bussiness-units" class="btn btn-primary">Bussiness Units<span class="btn-arrow">→</span></router-link>
      </div>

    </div>
  </section>
</template>

<style scoped>
#units {
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 140px 0;
  overflow: hidden;
}

#units::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.72);
}

.wrap {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
}

.sec-head {
  max-width: 780px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.sec-head h2 {
  font-size: 52px;
  line-height: 1.2;
  letter-spacing: -0.01em;
  margin-bottom: 20px;
  color: #f4f2ea;
  max-width: 640px;
}
.sec-head p {
  color: rgba(244, 242, 234, 0.8);
  font-size: 16px;
  line-height: 1.6;
  max-width: 520px;
  margin: 0 auto;
}

@media (max-width: 700px) {
  #units { padding: 90px 0; }
  .sec-head h2 { font-size: 30px; }
  .sec-head p { font-size: 14.5px; }
}
</style>