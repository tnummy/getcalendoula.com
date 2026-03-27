<template>
  <section class="detail-hero">
    <h1>Simple, transparent pricing</h1>
    <p>No transaction fees. No per-staff charges. No hidden costs. Start free for 14 days.</p>
  </section>

  <section class="section">
    <div class="container">
      <div class="pricing-grid">
        <div class="pricing-card" v-for="tier in pricingTiers" :key="tier.name" :class="{ popular: tier.popular }">
          <div v-if="tier.popular" class="pricing-badge">Most Popular</div>
          <h3>{{ tier.name }}</h3>
          <p class="pricing-desc">{{ tier.description }}</p>
          <div class="pricing-price">
            <span class="amount">${{ tier.price }}</span>
            <span class="period">/month</span>
          </div>
          <p class="pricing-desc" style="margin-top:-16px; font-weight:600;">{{ tier.staffLimit }}</p>
          <ul class="pricing-features">
            <li v-for="f in tier.features" :key="f">{{ f }}</li>
          </ul>
          <a href="#" class="btn btn-md" :class="tier.popular ? 'btn-primary' : 'btn-outline'">Start Free Trial</a>
        </div>
      </div>

      <!-- Cost Comparison -->
      <div style="margin-top:80px;">
        <div class="section-header">
          <h2>How our pricing compares</h2>
          <p>See what you'd pay elsewhere for a team of 5 staff members.</p>
        </div>
        <div class="compare-table-wrap">
          <table class="compare-table">
            <thead>
              <tr>
                <th></th>
                <th class="ours">Calendoula</th>
                <th>Mangomint</th>
                <th>Boulevard</th>
                <th>Vagaro</th>
                <th>Fresha</th>
                <th>GlossGenius</th>
                <th>Meevo</th>
                <th>Acuity</th>
                <th>Booksy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monthly cost (5 staff)</td>
                <td class="ours" style="font-weight:800;color:#22a867;">$79</td>
                <td>$165</td>
                <td>$293</td>
                <td>$70–$84</td>
                <td>$75 + fees</td>
                <td>$48</td>
                <td>$179</td>
                <td>$61*</td>
                <td>$30</td>
              </tr>
              <tr>
                <td>Transaction fees</td>
                <td class="ours" style="font-weight:800;color:#22a867;">0%</td>
                <td>Varies</td>
                <td>2.65%+$0.15</td>
                <td>2.75%</td>
                <td>2.29%+$0.20</td>
                <td>2.6%</td>
                <td>Varies</td>
                <td>Via Stripe</td>
                <td>Varies</td>
              </tr>
              <tr>
                <td>Est. monthly total*</td>
                <td class="ours" style="font-weight:800;color:#22a867;">$79</td>
                <td>$165+</td>
                <td>$593+</td>
                <td>$359+</td>
                <td>$533+</td>
                <td>$308+</td>
                <td>$179+</td>
                <td>$61+</td>
                <td>$30+</td>
              </tr>
              <tr>
                <td>Annual savings vs us</td>
                <td class="ours" style="font-weight:800;color:#22a867;">—</td>
                <td style="color:#e55;">-$1,032</td>
                <td style="color:#e55;">-$6,168</td>
                <td style="color:#e55;">-$3,360</td>
                <td style="color:#e55;">-$5,448</td>
                <td style="color:#e55;">-$2,748</td>
                <td style="color:#e55;">-$1,200</td>
                <td style="color:#888;">No POS†</td>
                <td style="color:#888;">No POS†</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style="text-align:center; margin-top:16px; font-size:13px; color:#888;">
          *Estimated total includes subscription + processing fees on $10,000/month in card transactions where applicable. †Acuity and Booksy lack POS, making direct cost comparison incomplete — you'd need additional software.
        </p>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="section section-alt">
    <div class="container">
      <div class="section-header">
        <h2>Frequently asked questions</h2>
      </div>
      <div style="max-width:700px; margin:0 auto;">
        <div v-for="faq in faqs" :key="faq.q" style="margin-bottom:28px;">
          <h4 style="font-family:'Inter',sans-serif; font-size:16px; margin-bottom:8px;">{{ faq.q }}</h4>
          <p style="font-size:14px; color:#666; line-height:1.7;">{{ faq.a }}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="cta-banner">
    <h2>Start your free trial today</h2>
    <p>No credit card required. Set up in under 5 minutes.</p>
    <div class="cta-buttons">
      <a href="#" class="btn btn-lg btn-white">Start Free Trial</a>
    </div>
  </section>
</template>

<script setup>
import { pricingTiers } from '../data/competitors.js'

const faqs = [
  { q: 'Is there really a free trial?', a: 'Yes! Try Calendoula free for 14 days. No credit card required. You get access to all features in your chosen plan.' },
  { q: 'Are there any transaction fees?', a: 'No. Unlike competitors like Fresha (2.29%), Boulevard (2.65%), or GlossGenius (2.6%), we charge zero transaction fees. You keep 100% of your revenue.' },
  { q: 'Can I upgrade or downgrade at any time?', a: 'Absolutely. Change your plan at any time. Upgrades take effect immediately, and downgrades apply at the next billing cycle.' },
  { q: 'How many locations can I have?', a: 'The Business plan supports multi-location management, and Enterprise offers unlimited locations. Starter and Professional are single-location.' },
  { q: 'Do you offer annual billing discounts?', a: 'Yes! Save 20% when you pay annually. That brings the Professional plan down to just $63/month.' },
  { q: 'Can I import my data from another platform?', a: 'Yes. We offer CSV import for 6 data types with AI-assisted column mapping, plus free migration assistance from Mangomint, Boulevard, Vagaro, Fresha, GlossGenius, Phorest, Meevo, and other platforms.' },
  { q: 'Is my data secure?', a: 'Yes. We use industry-standard encryption, tenant-isolated databases, MFA, device gating, and 67 granular permission keys. Each business gets its own isolated database schema with full audit logging.' },
  { q: 'What kind of businesses use Calendoula?', a: 'Any appointment-based service business — wellness studios, medical practices, consulting firms, fitness studios, beauty businesses, tutoring centers, and more. If you book appointments and manage clients, Calendoula is built for you.' },
]
</script>
