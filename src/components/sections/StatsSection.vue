<script setup>
const stats = [
  { num: '2019', label: 'Didirikan' },
  { num: '4', label: 'Unit bisnis terintegrasi' },
  { num: '15+', label: 'Tahun jam terbang engineer senior' },
  { num: '3', label: 'Sektor industri utama dilayani' },
]
</script>

<template>
  <div class="stats">
    <div class="wrap stats-grid">
      <div class="stat" v-for="s in stats" :key="s.label">
        <div class="num">{{ s.num }}</div>
        <div class="label">{{ s.label }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stats {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.stat {
  padding: 30px 0;
  border-left: 1px solid var(--line);
  padding-left: 28px;
}
.stat:first-child {
  border-left: none;
  padding-left: 0;
}
.stat .num {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 34px;
  font-weight: 600;
  color: var(--ink);
}
.stat .label {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  color: var(--grey);
  text-transform: uppercase;
  letter-spacing: .06em;
  margin-top: 6px;
}

@media (max-width: 900px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .stat:nth-child(3) { border-left: none; padding-left: 0; }
}
</style>
