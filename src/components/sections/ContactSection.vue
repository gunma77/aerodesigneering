<script setup>
function handleSubmit() {
  alert('Terima kasih! Pesan Anda telah terkirim.')
}

const contactInfo = [
  {
    label: 'Address',
    value: '18 Office Park Lt. 25, Suite A2 JI. TB. Simatupang Kav. 18 Pasar Minggu – Jakarta Selatan 12520',
    icon: 'M12 22s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12zM12 13a3 3 0 100-6 3 3 0 000 6z',
  },

  {
    label: 'Phone',
    value: '021-27806577',
    icon: 'M3 5c0-1.1.9-2 2-2h2.5a1 1 0 011 .8l1 4a1 1 0 01-.5 1.1L7.4 9.9a12 12 0 006.7 6.7l1-1.6a1 1 0 011.1-.5l4 1a1 1 0 01.8 1V19a2 2 0 01-2 2h-1C10.7 21 3 13.3 3 6V5z',
  },

  {
    label: 'Email',
    value: 'support@aerodesigneering.com ',
    icon: 'M2 4h20v16H2V4zm0 0l10 8L22 4',
  },
]
</script>

<template>
  <section class="contact" id="contact">
    <div class="wrap contact-grid">
      <div>
        <div class="eyebrow">Get in touch</div>
        <h2>Let's discuss your engineering challenges</h2>
        <p class="lead">Connect with our team for solutions, consultation, and partnership opportunities.</p>

        <div class="contact-info">
          <component
            :is="item.href ? 'a' : 'div'"
            v-for="item in contactInfo"
            :key="item.label"
            :href="item.href"
            class="info-row"
          >
            <span class="info-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                <path :d="item.icon" />
              </svg>
            </span>
            <span class="info-text">
              <span class="info-label">{{ item.label }}</span>
              <span class="info-value">{{ item.value }}</span>
            </span>
          </component>
        </div>
      </div>

      <div>
        <form @submit.prevent="handleSubmit">
          <div class="field">
            <label>Name</label>
            <input type="text" placeholder="Full Name" required />
          </div>
          <div class="field">
            <label>Email</label>
            <input type="email" placeholder="name@company.com" required />
          </div>
          <div class="field">
            <label>Message</label>
            <textarea rows="4" placeholder="Write Your Message Here" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background: var(--paper-2);
}
.contact-grid {
  display: grid;
  grid-template-columns: .85fr 1.15fr;
  gap: 70px;
}
.contact h2 {
  font-size: 38px;
  margin-bottom: 22px;
  max-width: 420px;
}
.contact .lead {
  color: var(--grey);
  margin-bottom: 40px;
  max-width: 400px;
  font-size: 17px;
}

/* ---------- Contact info list ---------- */
.contact-info {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--line);
}

.info-row {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 20px 4px;
  border-bottom: 1px solid var(--line);
  text-decoration: none;
  color: inherit;
  transition: padding-left 0.25s ease, border-color 0.25s ease;
}
a.info-row:hover {
  padding-left: 10px;
  border-color: var(--blue);
}

.info-icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--line);
  border-radius: 50%;
  color: var(--blue);
  transition: background 0.25s ease, border-color 0.25s ease;
}
.info-icon svg {
  width: 18px;
  height: 18px;
}
a.info-row:hover .info-icon {
  background: var(--blue);
  border-color: var(--blue);
  color: #fff;
}

.info-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.info-label {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: .08em;
  color: var(--grey);
}
.info-value {
  font-size: 15px;
  font-weight: 500;
  color: var(--ink);
}

/* ---------- Form ---------- */
form {
  margin-top: 0;
}
.field {
  margin-bottom: 26px;
}
.field label {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: .08em;
  color: var(--grey);
  display: block;
  margin-bottom: 8px;
}
.field input, .field textarea {
  width: 100%;
  border: none;
  border-bottom: 1px solid var(--ink);
  background: transparent;
  padding: 8px 2px;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  color: var(--ink);
  outline: none;
  transition: border-color .2s;
}
.field input:focus, .field textarea:focus {
  border-color: var(--blue);
}
.field textarea {
  resize: vertical;
  min-height: 70px;
}

@media (max-width: 900px) {
  .contact-grid { grid-template-columns: 1fr; gap: 40px; }
}
</style>