import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('../views/Team.vue'),
    },
    {
      path: '/bussiness-units',
      name: 'bussiness-units',
      component: () => import('../views/BussinessUnits.vue'),
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('../components/sections/ExperienceSection.vue'),
    },
    {
      path: '/experience-detail',
      name: 'experience-detail',
      component: () => import('../components/sections/ExperienceSection2.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // kalau URL punya hash (misal /#about-hero), scroll smooth ke elemen itu
    if (to.hash) {
      return new Promise((resolve) => {
        // sedikit delay, jaga-jaga kalau HomeView butuh waktu render
        // (misal ada gambar besar) sebelum elemen hash-nya siap dicari
        setTimeout(() => {
          resolve({
            el: to.hash,
            behavior: 'smooth',
            top: 80, // offset biar section nggak ketutupan navbar sticky
          })
        }, 200)
      })
    }
    // kalau user pencet tombol back/forward browser, kembalikan posisi scroll sebelumnya
    if (savedPosition) {
      return savedPosition
    }
    // default: halaman baru selalu mulai dari atas
    return { top: 0 }
  },
})

export default router