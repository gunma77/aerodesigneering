<script setup>
defineProps({
  logoSrc: { type: String, required: true },
})

const navLinks = [
  { label: 'Home',       to: '/',              },
  { label: 'About Us',   to: '/#about-hero',    },
  { label: 'Our Service',to: '/#units', },
  { label: 'Experience', to: '/#experience',  },

]
</script>

<template>
  <header class="app-header">
    <nav class="nav wrap">
      <router-link to="/" class="logo">
        <img :src="logoSrc" alt="Aero Desain Rekayasa" class="logo-img" />
        <span class="logo-divider"></span>
        <span class="logo-tag">Aero Desain Rekayasa</span>
      </router-link>

      <div class="navlinks">
        <router-link
          v-for="link in navLinks"
          :key="link.label"
          :to="link.to"
          :active-class="link.exact ? 'is-active' : 'no-active'"
          :exact-active-class="link.exact ? 'is-active' : 'no-active'"
        >
          {{ link.label }}
        </router-link>
      </div>

      <router-link to="/#contact" class="btn btn-primary">Contact us</router-link>
    </nav>
  </header>
</template>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(247, 246, 241, .92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--line);
}
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 40px;
}
.logo {
  display: flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
  color: inherit;
}
.logo-img {
  height: 34px;
  width: auto;
}
.logo-divider {
  width: 1px;
  height: 26px;
  background: var(--line);
  display: inline-block;
}
.logo-tag {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11px;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--grey);
  white-space: nowrap;
}
.navlinks {
  display: flex;
  gap: 34px;
  font-size: 14px;
  font-weight: 500;
}
.navlinks a {
  opacity: .75;
  transition: opacity .2s;
  text-decoration: none;
  color: inherit;
}
.navlinks a:hover {
  opacity: 1;
}
.navlinks a.is-active {
  opacity: 1;
  color: var(--blue);
}

@media (max-width: 900px) {
  .navlinks { display: none; }
  .logo-tag { display: none; }
  .nav { padding: 14px 20px; }
}
</style>