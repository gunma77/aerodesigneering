<script setup>
import HeroSection from '../components/sections/HeroSection.vue'
import UnitsSection from '../components/sections/UnitsSection.vue'
import ExperienceSection from '../components/sections/ExperienceSection.vue'
import ClientsSection from '../components/sections/ClientsSection.vue'
import TeamSection from '../components/sections/TeamSection.vue'
import ContactSection from '../components/sections/ContactSection.vue'
import WhoWeAre from '../components/sections/WhoWeAre.vue'
import OurVision from '../components/sections/OurVision.vue'
import BusinessSection from '../components/sections/BussinessSection.vue'
// import OurStory from '../components/sections/OurStory.vue'

// import logo from '@/assets/logo.png'
import heroImage from '@/assets/turbine.png'
</script>

<template>
  <div class="home-page">
    <main>
      <HeroSection :hero-image="heroImage" />
      <WhoWeAre />
      <!-- <OurVision /> -->
      <!-- <OurStory /> -->
      <!-- <UnitsSection /> -->
      <BusinessSection />
      <ExperienceSection />
      <ClientsSection />
      <ContactSection />
    </main>
  </div>
</template>
