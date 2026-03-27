<template>
  <template v-if="comp">
    <section class="detail-hero">
      <h1>Calendoula vs {{ comp.name }}</h1>
      <p>{{ comp.tagline }} — see how they compare, feature by feature.</p>
    </section>

    <!-- Quick stats -->
    <section class="section">
      <div class="container">
        <div class="compare-table-wrap" style="max-width:800px; margin:0 auto;">
          <table class="compare-table">
            <thead>
              <tr>
                <th></th>
                <th class="ours">Calendoula</th>
                <th>{{ comp.name }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Starting price</td>
                <td class="ours" style="font-weight:700;color:#22a867;">$29/month</td>
                <td>{{ comp.pricing }}</td>
              </tr>
              <tr>
                <td>Price for 5 staff</td>
                <td class="ours" style="font-weight:700;color:#22a867;">$79/month</td>
                <td>{{ fiveStaffPrice }}</td>
              </tr>
              <tr>
                <td>Transaction fees</td>
                <td class="ours" style="font-weight:700;color:#22a867;">0%</td>
                <td>{{ txFee }}</td>
              </tr>
              <tr>
                <td>Target market</td>
                <td class="ours">Solo to enterprise</td>
                <td>{{ comp.target }}</td>
              </tr>
              <tr>
                <td>Free trial</td>
                <td class="ours" style="font-weight:700;color:#22a867;">14 days</td>
                <td>{{ trialInfo }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Feature comparison -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-header">
          <h2>Feature-by-feature comparison</h2>
        </div>
        <div class="compare-table-wrap">
          <table class="compare-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th class="ours">Calendoula</th>
                <th>{{ comp.name }}</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="cat in featureCategories" :key="cat.name">
                <tr class="category-row"><td colspan="3">{{ cat.name }}</td></tr>
                <tr v-for="f in cat.features" :key="f.name">
                  <td>{{ f.name }}</td>
                  <td class="ours"><span :class="cellClass(f.ours)">{{ cellText(f.ours) }}</span></td>
                  <td><span :class="cellClass(f[slug])">{{ cellText(f[slug]) }}</span></td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Strengths & Weaknesses -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2>{{ comp.name }}: strengths &amp; weaknesses</h2>
        </div>
        <div class="pros-cons">
          <div class="pros">
            <h4>{{ comp.name }} strengths</h4>
            <ul><li v-for="s in comp.strengths" :key="s">{{ s }}</li></ul>
          </div>
          <div class="cons">
            <h4>{{ comp.name }} weaknesses</h4>
            <ul><li v-for="w in comp.weaknesses" :key="w">{{ w }}</li></ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Verdict -->
    <section class="section section-alt">
      <div class="container">
        <div class="verdict-box">
          <h3>Our verdict</h3>
          <p>{{ comp.verdict }}</p>
        </div>
      </div>
    </section>

    <!-- Other comparisons -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2>Compare against others</h2>
        </div>
        <div class="competitor-grid">
          <router-link
            v-for="(c, key) in otherCompetitors"
            :key="key"
            :to="`/compare/${key}`"
            class="competitor-card"
            style="text-decoration:none;"
          >
            <h3>vs {{ c.name }}</h3>
            <p class="price-note">{{ c.pricing }}</p>
            <span class="btn btn-sm btn-outline" style="margin-top:auto;">Compare</span>
          </router-link>
        </div>
      </div>
    </section>

    <section class="cta-banner">
      <h2>Switch from {{ comp.name }} today</h2>
      <p>Free data migration. No downtime. Start your 14-day free trial.</p>
      <div class="cta-buttons">
        <a href="#" class="btn btn-lg btn-white">Start Free Trial</a>
        <router-link to="/pricing" class="btn btn-lg btn-ghost">View Pricing</router-link>
      </div>
    </section>
  </template>
  <template v-else>
    <section class="detail-hero">
      <h1>Competitor not found</h1>
      <p><router-link to="/compare">View all comparisons</router-link></p>
    </section>
  </template>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { competitors, featureCategories } from '../data/competitors.js'

const route = useRoute()
const slug = computed(() => route.params.competitor)
const comp = computed(() => competitors[slug.value])

const otherCompetitors = computed(() => {
  const result = {}
  for (const [key, val] of Object.entries(competitors)) {
    if (key !== slug.value) result[key] = val
  }
  return result
})

const fiveStaffPrice = computed(() => {
  const prices = {
    mangomint: '$165/month (Essentials)',
    boulevard: '$293/month (Premier)',
    vagaro: '$70–84/month (base + $10/staff)',
    fresha: '$75/month + transaction fees',
    glossgenius: '$48/month (Gold, up to 9)',
    phorest: 'Custom quote (~$99+)',
    meevo: '$179/month (Simple)',
    acuity: '$61/month (Powerhouse, no POS)',
    booksy: '$29.99/month (scheduling only)',
  }
  return prices[slug.value] || 'Contact sales'
})

const txFee = computed(() => {
  const fees = {
    mangomint: 'Varies by processor',
    boulevard: '2.65% + $0.15',
    vagaro: '2.75%',
    fresha: '2.29% + $0.20',
    glossgenius: '2.6%',
    phorest: 'Via PhorestPay/Stripe',
    meevo: 'Via MeevoPay',
    acuity: 'Via Stripe/Square/PayPal',
    booksy: 'Varies by processor',
  }
  return fees[slug.value] || 'Varies'
})

const trialInfo = computed(() => {
  const trials = {
    mangomint: 'Free trial available',
    boulevard: 'Demo only',
    vagaro: '30-day free trial',
    fresha: 'Free tier available',
    glossgenius: '14-day free trial',
    phorest: 'Free trial available',
    meevo: 'Demo only',
    acuity: '7-day free trial',
    booksy: '14-day free trial',
  }
  return trials[slug.value] || 'Contact sales'
})

function cellClass(val) {
  if (val === true) return 'check'
  if (val === false) return 'cross'
  return 'partial'
}

function cellText(val) {
  if (val === true) return '✓'
  if (val === false) return '—'
  return val
}
</script>
