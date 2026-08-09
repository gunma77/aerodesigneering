<script setup>
import HeroSection from '../components/sections/HeroSection.vue'
import ExperienceSection from '../components/sections/ExperienceSection.vue'
import ClientsSection from '../components/sections/ClientsSection.vue'
import ContactSection from '../components/sections/ContactSection.vue'
import WhoWeAre from '../components/sections/WhoWeAre.vue'
import BusinessSection from '../components/sections/BussinessSection.vue'

import heroImage from '@/assets/turbine.png'
</script>

<template>
  <div class="home-page">
    <main>
      <HeroSection :hero-image="heroImage" />
      <WhoWeAre />
      <BusinessSection />
      <ExperienceSection />
      <ClientsSection />
      <ContactSection />
    </main>
  </div>
</template>
