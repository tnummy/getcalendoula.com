<template>
  <!-- Hero -->
  <section class="hero">
    <div class="container">
      <img src="/logo.png" alt="Calendoula" class="hero-logo" />
      <h1>The all-in-one platform to <span>run your business</span></h1>
      <p class="subtitle">
        Scheduling, POS, CRM, marketing, staff management, automations, AI insights, and more — everything you need to run your appointment-based business, starting at just $29/month.
      </p>
      <div class="hero-buttons">
        <a href="#" class="btn btn-lg btn-primary">Start Free 14-Day Trial</a>
        <router-link to="/pricing" class="btn btn-lg btn-outline">View Pricing</router-link>
      </div>
      <div class="hero-badges">
        <div class="badge"><div class="badge-number">50+</div><div class="badge-label">Built-in features</div></div>
        <div class="badge"><div class="badge-number">4</div><div class="badge-label">Flexible plans</div></div>
        <div class="badge"><div class="badge-number">0%</div><div class="badge-label">Transaction fees</div></div>
        <div class="badge"><div class="badge-number">14</div><div class="badge-label">Day free trial</div></div>
      </div>
    </div>
  </section>

  <!-- Core Features -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>Everything you need, nothing you don't</h2>
        <p>Built for service businesses of every size. No bloat, no hidden fees.</p>
      </div>
      <div class="feature-grid">
        <div class="feature-card" v-for="f in coreFeatures" :key="f.title">
          <div class="feature-icon">{{ f.icon }}</div>
          <h3>{{ f.title }}</h3>
          <p>{{ f.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Unique Selling Points -->
  <section class="section section-unique">
    <div class="container">
      <div class="section-header">
        <h2>Features only we offer</h2>
        <p>Capabilities you won't find in Mangomint, Boulevard, Vagaro, or any other competitor.</p>
      </div>
      <div class="feature-grid">
        <div class="feature-card" v-for="f in uniqueCards" :key="f.title">
          <div class="feature-icon">{{ f.icon }}</div>
          <h3>{{ f.title }}</h3>
          <p>{{ f.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Pricing Preview -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>Simple, transparent pricing</h2>
        <p>No transaction fees. No hidden costs. No per-staff charges.</p>
      </div>
      <div class="pricing-grid">
        <div class="pricing-card" v-for="tier in pricingTiers" :key="tier.name" :class="{ popular: tier.popular }">
          <div v-if="tier.popular" class="pricing-badge">Most Popular</div>
          <h3>{{ tier.name }}</h3>
          <p class="pricing-desc">{{ tier.description }}</p>
          <div class="pricing-price">
            <span class="amount">${{ tier.price }}</span>
            <span class="period">/month</span>
          </div>
          <p class="pricing-desc" style="margin-top:-16px;">{{ tier.staffLimit }}</p>
          <ul class="pricing-features">
            <li v-for="f in tier.features" :key="f">{{ f }}</li>
          </ul>
          <a href="#" class="btn btn-md" :class="tier.popular ? 'btn-primary' : 'btn-outline'">Start Free Trial</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Compare CTA -->
  <section class="section section-teal">
    <div class="container">
      <div class="section-header">
        <h2>See how we stack up</h2>
        <p>We've compared Calendoula against every major competitor so you can make an informed decision.</p>
      </div>
      <div class="competitor-grid">
        <router-link v-for="(c, key) in competitors" :key="key" :to="`/compare/${key}`" class="competitor-card" style="text-decoration:none;">
          <h3>vs {{ c.name }}</h3>
          <p class="tagline">{{ c.tagline }}</p>
          <p class="price-note">{{ c.pricing }}</p>
          <p class="summary">{{ c.summary.slice(0, 150) }}...</p>
          <span class="btn btn-sm btn-outline" style="margin-top:auto;">See Full Comparison</span>
        </router-link>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-banner">
    <h2>Ready to switch?</h2>
    <p>Start your free 14-day trial today. No credit card required. Cancel anytime.</p>
    <div class="cta-buttons">
      <a href="#" class="btn btn-lg btn-white">Start Free Trial</a>
      <router-link to="/features" class="btn btn-lg btn-ghost">Explore Features</router-link>
    </div>
  </section>
</template>

<script setup>
import { pricingTiers, competitors } from '../data/competitors.js'

const coreFeatures = [
  { icon: '📅', title: 'Smart Scheduling', desc: 'Day and week calendar views, online booking widget, recurring appointments, multi-staff services, service capacity, and resource management.' },
  { icon: '👥', title: 'Client CRM', desc: 'Full client profiles, timeline history, account balances, tags, intake forms, referral tracking, and a self-service client portal.' },
  { icon: '💳', title: 'Point of Sale', desc: 'Checkout with services, products, gift cards, packages, memberships, offers, split payments, tips, and mobile payment links.' },
  { icon: '📦', title: 'Products & Inventory', desc: 'Product catalog with categories, suppliers, stock tracking, inventory changes, purchasing with AI invoice parsing, and restock orders.' },
  { icon: '👨‍💼', title: 'Staff Management', desc: 'Permissions, time clock, payroll, shifts, flex schedules, self-service scheduling, time off requests, documents, org chart, and staff invites.' },
  { icon: '📊', title: 'Reports & Insights', desc: 'Visual dashboard with 16 KPIs, 9 chart types, 17 report sections covering 50+ individual reports, and AI-powered analysis.' },
  { icon: '📧', title: 'Marketing & Automations', desc: 'Email and SMS campaigns with drag-and-drop builder, event-driven automations with 19 trigger types, and audience segmentation.' },
  { icon: '🎁', title: 'Gift Cards & Packages', desc: 'Gift card sales with seasonal promotions, service packages with redemption tracking, and membership plans with recurring billing.' },
  { icon: '💬', title: 'Team Chat & Inbox', desc: 'Real-time internal team chat with channels, SMS client inbox with image attachments, and unified notification system.' },
]

const uniqueCards = [
  { icon: '🤖', title: 'AI-Powered Insights', desc: '13 AI analysis types including scheduling advice, churn prediction, staff coaching, cancellation patterns, and landing page review.' },
  { icon: '⚡', title: 'Event-Driven Automations', desc: '19 trigger types, multi-block conditions, 7 action types including webhooks, task creation, and form requests.' },
  { icon: '🏠', title: 'Client Portal', desc: 'Self-service portal where clients view bookings, sales, wallet, gift cards, packages, memberships, and recurring series.' },
  { icon: '💬', title: 'Built-in Team Chat', desc: 'Real-time WebSocket team communication with custom channels — no Slack or third-party tool needed.' },
  { icon: '🎓', title: 'Training Mode', desc: 'Sandbox environment that clones your data for risk-free staff training and onboarding.' },
  { icon: '♿', title: 'Accessibility Mode', desc: 'Vision impairment accessible mode with semantic HTML, screen reader support, and simplified navigation.' },
  { icon: '📋', title: 'Activity Log', desc: 'Full audit trail of every action with 130+ action types — who did what, when, across your entire business.' },
  { icon: '🎵', title: 'Spotify Integration', desc: 'Per-location music control with playlist scheduling, device management, and playback controls — built right in.' },
  { icon: '👁️', title: 'View As Staff', desc: 'Instantly preview what any team member sees — test permissions without logging out.' },
]
</script>
