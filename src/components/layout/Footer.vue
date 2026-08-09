<script setup>
defineProps({
  logoSrc: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <footer>
    <div class="wrap foot-inner">
      <div class="foot-brand">
        <div class="logo">
          <img :src="logoSrc" alt="Aero Desain Rekayasa" class="foot-logo-img" />
        </div>
        <p class="foot-desc">A precision engineering partner delivering design, manufacturing, installation, and maintenance solutions across diverse industries.</p>
      </div>

      <div class="foot-panel">
        <div class="foot-col">
          <nav class="foot-nav">
            <router-link to="/">Home</router-link>
            <router-link to="/team">Our Team</router-link>
            <router-link to="/bussiness-units">What We Do</router-link>
            <router-link to="/experience-detail">Our Experience</router-link>
          </nav>
        </div>
      </div>
    </div>

    <div class="foot-bottom wrap">
      <span>© 2026 PT Aero Desain Rekayasa</span>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: var(--navy);
  color: #fff;
}

.foot-inner {
  padding: 40px 40px 0;
}

.foot-brand {
  margin-bottom: 32px;
}
.foot-logo-img {
  height: 26px;
  filter: brightness(0) invert(1);
}
.foot-desc {
  max-width: 420px;
  color: var(--grey-on-navy);
  font-size: 13.5px;
  margin-top: 18px;
}

/* ---------- Panel "+ Navigation" ---------- */
.foot-panel {
  border-top: 1px dashed var(--line-on-navy);
  padding: 24px 0 28px;
}
.foot-col .k {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 16px;
}
.foot-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 24px;
}
.foot-nav a {
  font-size: 14px;
  color: #dfe2f2;
  opacity: .85;
  text-decoration: none;
}
.foot-nav a:hover {
  opacity: 1;
}

.foot-bottom {
  padding: 22px 40px;
  display: flex;
  justify-content: space-between;
  font-size: 12.5px;
  color: var(--grey-on-navy);
}

@media (max-width: 900px) {
  .foot-inner {
    padding: 32px 20px 0;
  }
  .foot-bottom {
    padding: 18px 20px;
  }
}
</style>