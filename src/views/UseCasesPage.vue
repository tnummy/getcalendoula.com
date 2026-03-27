<template>
  <section class="detail-hero">
    <h1>Built for your industry</h1>
    <p>See how appointment-based businesses across every industry use Calendoula to book, manage, and grow.</p>
  </section>

  <section class="section">
    <div class="container">
      <div class="usecase-grid">
        <router-link
          v-for="key in usecaseOrder"
          :key="key"
          :to="`/use-cases/${key}`"
          class="usecase-card"
          :style="{ borderTopColor: usecases[key].color }"
        >
          <div class="usecase-icon">{{ usecases[key].heroIcon }}</div>
          <h3>{{ usecases[key].name }}</h3>
          <p class="usecase-headline">{{ usecases[key].headline }}</p>
          <p class="usecase-desc">{{ usecases[key].subtitle }}</p>
          <span class="btn btn-sm btn-outline" style="margin-top:auto;">Learn More</span>
        </router-link>
      </div>
    </div>
  </section>

  <section class="cta-banner">
    <h2>Don't see your industry?</h2>
    <p>If your business books appointments and manages clients, Calendoula is built for you. Start your free trial and see for yourself.</p>
    <div class="cta-buttons">
      <a href="#" class="btn btn-lg btn-white">Start Free Trial</a>
      <router-link to="/features" class="btn btn-lg btn-ghost">Explore Features</router-link>
    </div>
  </section>
</template>

<script setup>
import { usecases, usecaseOrder } from '../data/usecases.js'
</script>

<style scoped>
.usecase-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 28px;
  max-width: 1200px;
  margin: 0 auto;
}
.usecase-card {
  background: #fff;
  border-radius: 16px;
  padding: 36px 32px;
  border: 1px solid #d4ece8;
  border-top: 4px solid #4a9690;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
}
.usecase-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(74,150,144,0.12);
  border-color: #7fb5b0;
}
.usecase-icon {
  font-size: 40px;
  margin-bottom: 16px;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e8f4f2;
  border-radius: 14px;
}
.usecase-card h3 {
  font-family: 'Inter', sans-serif;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 8px;
}
.usecase-headline {
  font-size: 15px;
  color: #4a9690;
  font-weight: 600;
  margin-bottom: 12px;
  line-height: 1.5;
}
.usecase-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  flex: 1;
  margin-bottom: 20px;
}
</style>
