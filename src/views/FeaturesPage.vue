<template>
  <section class="detail-hero">
    <h1>Every feature you need</h1>
    <p>50+ built-in features designed for appointment-based service businesses of every size.</p>
  </section>

  <section class="section" v-for="(cat, i) in featureSections" :key="cat.title" :class="{ 'section-alt': i % 2 === 1 }">
    <div class="container">
      <div class="section-header">
        <h2>{{ cat.title }}</h2>
        <p>{{ cat.subtitle }}</p>
      </div>
      <div class="feature-grid">
        <div class="feature-card" v-for="f in cat.features" :key="f.title">
          <div class="feature-icon">{{ f.icon }}</div>
          <h3>{{ f.title }}</h3>
          <p>{{ f.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="cta-banner">
    <h2>See it in action</h2>
    <p>Start your free 14-day trial and explore every feature.</p>
    <div class="cta-buttons">
      <a href="#" class="btn btn-lg btn-white">Start Free Trial</a>
      <router-link to="/pricing" class="btn btn-lg btn-ghost">View Pricing</router-link>
    </div>
  </section>
</template>

<script setup>
const featureSections = [
  {
    title: 'Scheduling & Booking',
    subtitle: 'A beautiful calendar your team will actually enjoy using.',
    features: [
      { icon: '📅', title: 'Day & Week Calendar', desc: 'Visualize your entire schedule at a glance. Switch between day and week views with configurable hours, zoom levels, and resource columns.' },
      { icon: '🌐', title: 'Online Booking Widget', desc: 'Embeddable booking widget that matches your brand. Clients book 24/7 from your website or landing page with real-time availability.' },
      { icon: '👥', title: 'Group Bookings', desc: 'Clients can book for groups of up to 8 people with per-person service selection and automatic alias management.' },
      { icon: '🔄', title: 'Recurring Appointments', desc: 'Four pattern types (weekly, every N weeks, monthly by date, monthly by weekday) with automatic rolling generation and conflict detection.' },
      { icon: '👨‍👩‍👧', title: 'Multi-Staff Services', desc: 'Services that require multiple providers. Auto-expansion on selection, locked service/time on secondary items, and even price splitting.' },
      { icon: '📊', title: 'Service Capacity', desc: 'Set per-service capacity for group classes. Unlimited or fixed slots with real-time spots-remaining tracking in the booking widget.' },
      { icon: '🏠', title: 'Booking Landing Page', desc: 'A shareable landing page that showcases your services, location, hours, gallery, testimonials, and lets clients book instantly.' },
      { icon: '⏰', title: 'Time Blocks & Overrides', desc: 'Block time for breaks or meetings. Date-specific schedule overrides, closed days, and per-provider shift management.' },
    ],
  },
  {
    title: 'Client Management',
    subtitle: 'Know your clients and keep them coming back.',
    features: [
      { icon: '👤', title: 'Client Profiles', desc: 'Comprehensive profiles with contact info, service history, purchase history, notes, preferences, tags, and custom fields.' },
      { icon: '🏠', title: 'Client Portal', desc: 'Self-service portal where clients view bookings, manage recurring series, purchase packages and memberships, and access their wallet.' },
      { icon: '📋', title: 'Intake Forms', desc: 'Custom form templates with multiple field types. Auto-send based on service, collect in the portal, or share as public standalone forms.' },
      { icon: '💰', title: 'Account Balances', desc: 'Client wallet system with deposits, credits, and full payment history. Use balances at checkout or for tab-style billing.' },
      { icon: '🏷️', title: 'Tags & Segmentation', desc: 'Color-coded client tags for segmentation. Filter client lists and target marketing campaigns by tag.' },
      { icon: '🎯', title: 'Referral Program', desc: 'Built-in referral tracking with custom codes, referee discounts, and referrer rewards (account credit or offer codes).' },
    ],
  },
  {
    title: 'Sales & Commerce',
    subtitle: 'A complete point-of-sale system built for service businesses.',
    features: [
      { icon: '💳', title: 'Point of Sale', desc: 'Full checkout with services, products, tips, discounts, multiple payment methods, and per-provider tip splitting.' },
      { icon: '💸', title: 'Split Payments', desc: 'Group sale support with per-payer tracking, preset split modes (each pays own / one pays all), and per-payer receipts.' },
      { icon: '📱', title: 'Mobile Payment Links', desc: 'Send payment links via SMS for deposits, self-checkout, or pay-via-text. Stripe-powered with tip and pay-in-full options.' },
      { icon: '🎁', title: 'Gift Cards', desc: 'Sell gift cards online and in-store with seasonal promotions, custom artwork, and redemption tracking.' },
      { icon: '📦', title: 'Service Packages', desc: 'Bundle services into packages. Track redemptions, set expiration dates, and sell online through the client portal.' },
      { icon: '🔄', title: 'Memberships', desc: 'Recurring membership plans with Stripe auto-billing, pause/resume, included service allowances, and portal enrollment.' },
      { icon: '🏷️', title: 'Offers & Promotions', desc: 'Percentage or fixed discounts with promo codes. Client-specific ad-hoc promotions with optional stacking.' },
      { icon: '📒', title: 'Transactions Ledger', desc: 'Unified payment and refund ledger with filters, summary totals, and CSV export.' },
    ],
  },
  {
    title: 'Staff & Operations',
    subtitle: 'Empower your team and streamline your operations.',
    features: [
      { icon: '👨‍💼', title: 'Staff Management', desc: 'Full profiles with shifts, flex schedules, services, permissions, performance tracking, and email invite onboarding.' },
      { icon: '🔐', title: 'Permission Groups', desc: 'Granular permissions with 67 keys across 21 sections. 4 built-in groups plus custom groups.' },
      { icon: '⏱️', title: 'Time Clock', desc: 'PIN-based clock in/out with time card management, audit logs, and payroll-ready data.' },
      { icon: '💵', title: 'Payroll', desc: 'Compensation engine with hourly/commission/hybrid models, pay period reports, adjustments, and CSV export for 6 payroll providers.' },
      { icon: '🏖️', title: 'Time Off Requests', desc: 'Staff submit requests, managers approve/deny with automatic conflict detection for existing appointments.' },
      { icon: '🏢', title: 'Multi-Location', desc: 'Manage multiple locations from a single dashboard. Per-location staff, services, hours, tax rates, and reporting.' },
      { icon: '📄', title: 'Staff Documents', desc: 'Per-staff and company-wide document management with S3 storage, labels, and acknowledgment tracking.' },
      { icon: '📊', title: 'Org Chart', desc: 'Visual organization chart with manager assignments and click-to-navigate team hierarchy.' },
    ],
  },
  {
    title: 'Products & Inventory',
    subtitle: 'Full retail product management with smart purchasing.',
    features: [
      { icon: '📦', title: 'Product Catalog', desc: 'Products with categories, suppliers, barcodes, SKUs, cost tracking, and optional per-product tax rate overrides.' },
      { icon: '📉', title: 'Inventory Tracking', desc: 'Real-time stock levels with full change history. Track adjustments, sales deductions, and service usage.' },
      { icon: '🛒', title: 'Purchase Orders', desc: 'Upload invoices (CSV, image, or PDF) with AI-powered parsing. Auto-match to products by SKU, barcode, or name.' },
      { icon: '📋', title: 'Restock Orders', desc: 'Generate restock orders from low-stock products. Fill, void, and export to CSV.' },
    ],
  },
  {
    title: 'Marketing & Communication',
    subtitle: 'Fill your books and keep clients engaged.',
    features: [
      { icon: '📧', title: 'Email Campaigns', desc: 'Drag-and-drop builder with 14 block types including columns, coupons, and video thumbnails. Audience filters and delivery analytics.' },
      { icon: '📱', title: 'SMS Campaigns', desc: 'Bulk SMS with merge tags, per-recipient personalization, character/segment counter, and rate limiting.' },
      { icon: '💬', title: 'SMS Inbox', desc: 'Two-way SMS conversations with clients. Image attachments, location filtering, and real-time WebSocket updates.' },
      { icon: '🗣️', title: 'Team Chat', desc: 'Built-in real-time team messaging with custom channels, DMs, system notifications, and persistent message history.' },
      { icon: '📱', title: 'Multi-Provider SMS', desc: 'Choose your SMS provider (Twilio, Plivo, or Telnyx) with purpose-based phone number routing.' },
      { icon: '📧', title: 'Purpose-Based Email', desc: 'Per-purpose sender addresses (booking, receipt, marketing, automation) with per-location overrides.' },
    ],
  },
  {
    title: 'Automations',
    subtitle: 'Set it and forget it — let your business run itself.',
    features: [
      { icon: '⚡', title: '19 Trigger Types', desc: 'Booking created/confirmed/cancelled/completed, client created/birthday/inactive, sale closed/refunded, membership events, and more.' },
      { icon: '🔀', title: 'Multi-Block Conditions', desc: '10 condition block types with 14 filter types. Match all/any logic with has/doesn\'t have operators for precise targeting.' },
      { icon: '📨', title: '7 Action Types', desc: 'Send email, send SMS, staff SMS, staff email, staff notification, form request, webhook, and create task.' },
      { icon: '🔔', title: 'System Automations', desc: '13 built-in system automations for booking confirmations, cancellations, receipts, and staff notifications — fully customizable.' },
      { icon: '📋', title: 'Automation Tasks', desc: 'Create staff tasks from automations with assignment, due dates, and Team Chat notifications.' },
      { icon: '📊', title: 'Execution Logs', desc: 'Full audit trail of every automation execution with trigger, action, client, and status details.' },
    ],
  },
  {
    title: 'AI-Powered Features',
    subtitle: 'Intelligent analysis and automation powered by your choice of AI provider.',
    features: [
      { icon: '🤖', title: 'Multi-Provider AI', desc: 'Choose from 5 AI providers: Anthropic, OpenAI, Google Gemini, DeepSeek, or Grok. Switch anytime.' },
      { icon: '📊', title: '13 Analysis Types', desc: 'Insights summary, campaign drafts, churn risk, scheduling advice, cancellation patterns, staff coaching, and more.' },
      { icon: '🛒', title: 'AI Invoice Parsing', desc: 'Upload purchase order images or PDFs and let AI extract line items, match products, and populate orders.' },
      { icon: '🏠', title: 'Landing Page AI', desc: 'AI-powered conversion review and per-block copy enhancement for your booking landing page.' },
      { icon: '🗓️', title: 'Schedule Assistant', desc: 'AI-driven resource optimization that suggests room and equipment assignments based on staff rules and global preferences.' },
    ],
  },
  {
    title: 'Reporting & Analytics',
    subtitle: 'Make data-driven decisions with confidence.',
    features: [
      { icon: '📊', title: 'Insights Dashboard', desc: '16 KPIs with trend indicators, 9 chart types, staff rankings, date presets, and previous-period comparison.' },
      { icon: '📋', title: '50+ Report Types', desc: '17 report sections: staff, sales, refunds, offers, client balances, gift cards, packages, memberships, payments, inventory, business, referrals, SMS, automations, recurring, email, and data export.' },
      { icon: '📝', title: 'Activity Log', desc: 'Complete audit trail with 130+ action types. Filter by user, action type, and date range.' },
      { icon: '📈', title: 'Landing Page Analytics', desc: 'Track page views, visitor engagement, widget opens, and booking funnel conversion rates.' },
      { icon: '📤', title: 'Data Export', desc: '17 CSV export types covering clients, staff, appointments, sales, services, products, and more.' },
      { icon: '📥', title: 'Data Import', desc: '6 CSV import types with AI-assisted column mapping, staging preview, row-level editing, and confirmation.' },
    ],
  },
  {
    title: 'Platform & Security',
    subtitle: 'Enterprise-grade infrastructure that scales with your business.',
    features: [
      { icon: '🔒', title: 'Tenant Isolation', desc: 'Each business gets its own isolated database schema. No data leakage between accounts.' },
      { icon: '🔐', title: 'MFA & Device Gating', desc: 'Two-factor authentication, device-specific tokens, and PIN-based shared device elevation.' },
      { icon: '🎓', title: 'Training Mode', desc: 'Clone your business into a sandbox. Train new staff on real-looking data without affecting production.' },
      { icon: '👁️', title: 'View As Staff', desc: 'Instantly preview what any team member sees — test permission setups without switching accounts.' },
      { icon: '♿', title: 'Accessibility Mode', desc: 'Vision impairment accessible mode with semantic HTML tables, ARIA landmarks, screen reader support, and simplified navigation.' },
      { icon: '🎵', title: 'Spotify Integration', desc: 'Per-location music control with playlist scheduling, auto-start/stop, device management, and playback controls.' },
    ],
  },
]
</script>
