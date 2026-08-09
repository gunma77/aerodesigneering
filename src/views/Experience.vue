<script setup>

import Footer from '../components/layout/Footer.vue'
// import HeroSection from '../components/sections/HeroSection.vue'
import UnitsSection from '../components/sections/UnitsSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
// import ExperienceSection from '../components/sections/ExperienceSection.vue'
// import ClientsSection from '../components/sections/ClientsSection.vue'
//import TeamSection from '../components/sections/TeamSection.vue'
// import ContactSection from '../components/sections/ContactSection.vue'
//import WhoWeAre from '../components/sections/WhoWeAre.vue'

import logo from '@/assets/logo.png'
import heroImage from '@/assets/turbine.png'
import ExperienceSection2 from '@/components/sections/ExperienceSection2.vue'
</script>

<template>
  <div class="home-page">
    <Navbar :logo-src="logo" />
    <main>
      <!-- <HeroSection :hero-image="heroImage" /> -->
      <!-- <WhoWeAre /> -->
      <!-- <UnitsSection /> -->
      <!-- <ExperienceSection /> -->
      <!-- <ClientsSection /> -->
      <!-- <TeamSection /> -->
      <!-- <ContactSection /> -->
       <ExperienceSection2/>
    </main>
    
  </div>
</template>
