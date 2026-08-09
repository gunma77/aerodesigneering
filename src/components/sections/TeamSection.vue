<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const team = [
  {
    initials: 'KB',
    name: 'Kresna Bayu Aji',
    role: 'Project Engineer — 3D Expert',
    bio: 'An expert in transforming physical products into digital models, particularly in 3D. In addition to being highly skilled in CAD drafting, also highly proficient in performing Computational Fluid Dynamics (CFD) and Finite Element Analysis (FEA), especially in the area of static load analysis for both structural and fluid systems.',
  },
  {
    initials: 'DY',
    name: 'Dony Y. Yahya',
    role: 'Senior Engineer - Manufacturing',
    bio: 'A mechanical engineering professional with over 15 years of experience leading complex engineering projects. Expert in the design, manufacturing, and installation of high-precision systems, as well as improving efficiency and driving innovation in manufacturing processes. Experienced in managing metal component production using advanced machining and casting techniques. Recognized for strong leadership and the ability to deliver projects on time and within budget.',
  },
  {
    initials: 'MA',
    name: 'Mahesa Akbar',
    role: 'Project Engineer — CAE Consultant',
    bio: 'Holds a Ph.D. in Mechanical Engineering, with over 15 years of experience in the engineering industry specializing in Computational Analysis (CAE – Computer Aided Engineering). Has served as a Project Engineer and Project Manager at international companies such as Toshiba and Chevron. Also held academic and research positions at leading Indonesian universities, including ITB and UNHAN.',
  },
  {
    initials: 'JP',
    name: 'Johanes Oloan Pinem',
    role: 'Project Engineer — Boiler Specialist',
    bio: 'With an impressive 19 years of experience in the industry, he is an expert in various areas including steam boilers, installations, thermal oil systems, heat exchangers, air preheaters, and complex piping systems. His career is marked by technical expertise and a commitment to excellence, along with a strong ability to manage complex projects by ensuring optimal integration of critical components for maximum efficiency and performance.',
  },
]

// Ukur tinggi tiap .content, ambil yang paling tinggi, terapkan ke semua avatar
const contentRefs = ref([])
const avatarHeight = ref(null)

function setContentRef(el, index) {
  if (el) contentRefs.value[index] = el
}

function measureTallest() {
  const heights = contentRefs.value
    .filter(Boolean)
    .map((el) => el.offsetHeight)
  if (heights.length) {
    avatarHeight.value = Math.max(...heights)
  }
}

let resizeObserver
onMounted(async () => {
  await nextTick()
  measureTallest()

  // ukur ulang kalau ukuran layar/konten berubah (misal font loading, resize window)
  resizeObserver = new ResizeObserver(() => measureTallest())
  contentRefs.value.forEach((el) => {
    if (el) resizeObserver.observe(el)
  })
})

onUnmounted(() => {
  if (resizeObserver) resizeObserver.disconnect()
})
</script>

<template>
  <!-- Section head — background navy, terpisah -->
  <section id="team-head" class="team-head-section">
    <div class="wrap">
      <div class="sec-head">
        <h2>The team behind every solution.</h2>
        <p>Behind every success is a dedicated team. Meet the people who bring expertise and innovation.</p>
      </div>
    </div>
  </section>

  <!-- Section grid anggota tim -->
  <section id="team">
    <div class="wrap">
      <div class="team-grid">
        <div class="member" v-for="(m, i) in team" :key="m.name">
          <div
            class="avatar"
            :style="avatarHeight ? { height: avatarHeight + 'px' } : {}"
          >
            <span>{{ m.initials }}</span>
          </div>
          <div class="content" :ref="(el) => setContentRef(el, i)">
            <h4>{{ m.name }}</h4>
            <div class="role">{{ m.role }}</div>
            <p class="bio">{{ m.bio }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ---------- Section head (navy) ---------- */
.team-head-section {
  background: var(--navy);
  padding: 90px 0;
}
.sec-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.sec-head h2 {
  font-size: 45px;
  color: #fff;
}
.sec-head p {
  max-width: 560px;
  color: rgba(255, 255, 255, 0.7);
}

/* ---------- Team grid section ---------- */
#team {
  padding: 120px 0;
}
.team-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  max-width: 820px;
  margin: 0 auto;
}
.member {
  display: flex;
  align-items: flex-start;
  gap: 32px;
}
.avatar {
  flex-shrink: 0;
  width: 180px;
  border-radius: 8px;
  background: var(--navy);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #fff;
  transition: height 0.2s ease;
}
.avatar span {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 32px;
  font-weight: 600;
}
.content {
  flex: 1;
  min-width: 0;
  padding-top: 6px;
}
.member h4 {
  font-size: 20px;
  margin-bottom: 6px;
}
.member .role {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  color: var(--signal);
  text-transform: uppercase;
  letter-spacing: .05em;
  margin-bottom: 14px;
}
.member .bio {
  font-size: 14.5px;
  line-height: 1.65;
  color: var(--grey);
  max-width: 640px;
}

@media (max-width: 700px) {
  .member { flex-direction: column; align-items: flex-start; text-align: left; gap: 20px; }
  .avatar { width: 100%; height: 200px !important; }
}

@media (max-width: 480px) {
  .member { align-items: center; text-align: center; }
}
</style>