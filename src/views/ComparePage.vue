<template>
  <section class="detail-hero">
    <h1>How we compare</h1>
    <p>An honest, feature-by-feature comparison against every major scheduling and business management platform.</p>
  </section>

  <!-- Master comparison table -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>Feature comparison matrix</h2>
        <p>Every feature, every competitor, at a glance.</p>
      </div>
      <div class="compare-table-wrap">
        <table class="compare-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th class="ours">Calendoula</th>
              <th>Mangomint</th>
              <th>Boulevard</th>
              <th>Vagaro</th>
              <th>Fresha</th>
              <th>GlossGenius</th>
              <th>Phorest</th>
              <th>Meevo</th>
              <th>Acuity</th>
              <th>Booksy</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="cat in featureCategories" :key="cat.name">
              <tr class="category-row">
                <td :colspan="11">{{ cat.name }}</td>
              </tr>
              <tr v-for="f in cat.features" :key="f.name">
                <td>{{ f.name }}</td>
                <td class="ours"><span :class="cellClass(f.ours)">{{ cellText(f.ours) }}</span></td>
                <td><span :class="cellClass(f.mangomint)">{{ cellText(f.mangomint) }}</span></td>
                <td><span :class="cellClass(f.boulevard)">{{ cellText(f.boulevard) }}</span></td>
                <td><span :class="cellClass(f.vagaro)">{{ cellText(f.vagaro) }}</span></td>
                <td><span :class="cellClass(f.fresha)">{{ cellText(f.fresha) }}</span></td>
                <td><span :class="cellClass(f.glossgenius)">{{ cellText(f.glossgenius) }}</span></td>
                <td><span :class="cellClass(f.phorest)">{{ cellText(f.phorest) }}</span></td>
                <td><span :class="cellClass(f.meevo)">{{ cellText(f.meevo) }}</span></td>
                <td><span :class="cellClass(f.acuity)">{{ cellText(f.acuity) }}</span></td>
                <td><span :class="cellClass(f.booksy)">{{ cellText(f.booksy) }}</span></td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- Individual competitor cards -->
  <section class="section section-alt">
    <div class="container">
      <div class="section-header">
        <h2>Detailed comparisons</h2>
        <p>Dive deep into how we compare against each specific competitor.</p>
      </div>
      <div class="competitor-grid">
        <router-link v-for="(c, key) in competitors" :key="key" :to="`/compare/${key}`" class="competitor-card" style="text-decoration:none;">
          <h3>Calendoula vs {{ c.name }}</h3>
          <p class="tagline">{{ c.tagline }}</p>
          <p class="price-note">Their pricing: {{ c.pricing }}</p>
          <p class="summary">{{ c.summary.slice(0, 180) }}...</p>
          <span class="btn btn-sm btn-outline" style="margin-top:auto;">Full Comparison</span>
        </router-link>
      </div>
    </div>
  </section>

  <section class="cta-banner">
    <h2>Ready to make the switch?</h2>
    <p>Free data migration from any platform. Start your trial today.</p>
    <div class="cta-buttons">
      <a href="#" class="btn btn-lg btn-white">Start Free Trial</a>
      <router-link to="/pricing" class="btn btn-lg btn-ghost">View Pricing</router-link>
    </div>
  </section>
</template>

<script setup>
import { featureCategories, competitors } from '../data/competitors.js'

function cellClass(val) {
  if (val === true) return 'check'
  if (val === false) return 'cross'
  return 'partial'
}

function cellText(val) {
  if (val === true) return '✓'
  if (val === false) return '—'
  return val // 'addon', 'paid', etc.
}
</script>
