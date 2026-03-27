<template>
  <template v-if="uc">
    <section class="detail-hero">
      <div class="uc-hero-icon">{{ uc.heroIcon }}</div>
      <h1>Calendoula for {{ uc.name }}</h1>
      <p>{{ uc.subtitle }}</p>
    </section>

    <!-- Overview -->
    <section class="section">
      <div class="container">
        <div class="overview-box">
          <h2>{{ uc.headline }}</h2>
          <p>{{ uc.description }}</p>
        </div>
      </div>
    </section>

    <!-- Key Workflows -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-header">
          <h2>How it works for {{ uc.name.toLowerCase() }}</h2>
          <p>The workflows that matter most to your business, handled out of the box.</p>
        </div>
        <div class="workflow-grid">
          <div class="workflow-card" v-for="w in uc.workflows" :key="w.title">
            <div class="workflow-icon">{{ w.icon }}</div>
            <h3>{{ w.title }}</h3>
            <p>{{ w.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Features -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2>Features that matter for {{ uc.name.toLowerCase() }}</h2>
          <p>Every feature below is included — no add-ons, no per-user fees.</p>
        </div>
        <div class="features-checklist">
          <div class="check-item" v-for="f in uc.keyFeatures" :key="f">
            <span class="check-mark">&#10003;</span>
            <span>{{ f }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing nudge -->
    <section class="section section-alt">
      <div class="container">
        <div class="pricing-nudge">
          <h2>Simple pricing for {{ uc.name.toLowerCase() }}</h2>
          <p>Plans start at <strong>$29/month</strong> with no transaction fees and no per-staff charges. Every feature your business needs is included in your plan — not sold as add-ons.</p>
          <div style="margin-top:24px; display:flex; gap:16px; justify-content:center; flex-wrap:wrap;">
            <router-link to="/pricing" class="btn btn-md btn-primary">View Pricing</router-link>
            <router-link to="/features" class="btn btn-md btn-outline">See All Features</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Other use cases -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2>Explore other industries</h2>
        </div>
        <div class="other-grid">
          <router-link
            v-for="key in otherKeys"
            :key="key"
            :to="`/use-cases/${key}`"
            class="other-card"
          >
            <span class="other-icon">{{ usecases[key].heroIcon }}</span>
            <span class="other-name">{{ usecases[key].name }}</span>
          </router-link>
        </div>
      </div>
    </section>

    <section class="cta-banner">
      <h2>Ready to try Calendoula for your {{ uc.name.toLowerCase().replace(/s$/, '') }}?</h2>
      <p>Start your free 14-day trial. No credit card required.</p>
      <div class="cta-buttons">
        <a href="#" class="btn btn-lg btn-white">Start Free Trial</a>
        <router-link to="/use-cases" class="btn btn-lg btn-ghost">All Industries</router-link>
      </div>
    </section>
  </template>

  <template v-else>
    <section class="detail-hero">
      <h1>Use case not found</h1>
      <p><router-link to="/use-cases">View all industries</router-link></p>
    </section>
  </template>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { usecases, usecaseOrder } from '../data/usecases.js'

const route = useRoute()
const slug = computed(() => route.params.usecase)
const uc = computed(() => usecases[slug.value])

const otherKeys = computed(() => usecaseOrder.filter(k => k !== slug.value))
</script>

<style scoped>
.uc-hero-icon {
  font-size: 56px;
  margin-bottom: 16px;
}
.overview-box {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}
.overview-box h2 {
  font-size: 32px;
  margin-bottom: 20px;
  color: #2d3436;
}
.overview-box p {
  font-size: 17px;
  color: #555;
  line-height: 1.8;
}

/* Workflows */
.workflow-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
  max-width: 1000px;
  margin: 0 auto;
}
.workflow-card {
  background: #fff;
  border-radius: 16px;
  padding: 32px;
  border: 1px solid #d4ece8;
  transition: all 0.3s;
}
.workflow-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(74,150,144,0.1);
  border-color: #7fb5b0;
}
.workflow-icon {
  font-size: 28px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e8f4f2;
  border-radius: 10px;
  margin-bottom: 16px;
}
.workflow-card h3 {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
}
.workflow-card p {
  font-size: 14px;
  color: #666;
  line-height: 1.7;
}

/* Feature Checklist */
.features-checklist {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px 40px;
  max-width: 900px;
  margin: 0 auto;
}
.check-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 15px;
  color: #444;
  line-height: 1.5;
}
.check-mark {
  color: #4a9690;
  font-weight: 700;
  font-size: 18px;
  flex-shrink: 0;
  margin-top: 1px;
}

/* Pricing nudge */
.pricing-nudge {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}
.pricing-nudge h2 {
  font-size: 32px;
  margin-bottom: 16px;
}
.pricing-nudge p {
  font-size: 17px;
  color: #555;
  line-height: 1.7;
}

/* Other use cases */
.other-grid {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 900px;
  margin: 0 auto;
}
.other-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  background: #fff;
  border: 1px solid #d4ece8;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  color: #2d3436;
  text-decoration: none;
  transition: all 0.2s;
}
.other-card:hover {
  border-color: #4a9690;
  background: #e8f4f2;
  transform: translateY(-2px);
}
.other-icon {
  font-size: 22px;
}
.other-name {
  font-family: 'Inter', sans-serif;
}

@media (max-width: 768px) {
  .workflow-grid { grid-template-columns: 1fr; }
  .features-checklist { grid-template-columns: 1fr; }
}
</style>
