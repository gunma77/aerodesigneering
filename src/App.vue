<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/layout/Navbar.vue';
import Footer from './components/layout/Footer.vue';
import logo from '@/assets/logo.png'
</script>

<template>
  <Navbar :logo-src="logo" />
  <RouterView />
  <Footer :logo-src="logo" />
</template>
