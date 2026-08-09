<script setup>
import Footer from '../components/layout/Footer.vue'
import TeamSection from '../components/sections/TeamSection.vue'
import WhoWeAre from '../components/sections/WhoWeAre.vue'

import heroImage from '@/assets/turbine.png'
</script>

<template>
  <div class="home-page">
    <Navbar :logo-src="logo" />
    <main>
      <TeamSection />
      <!-- <ContactSection /> -->
    </main>
  </div>
</template>
