# Competitive Research — Calendoula vs Salon/Spa Management Software

*Last updated: March 2026*

---

## Table of Contents
- [Our Feature Set](#our-feature-set)
- [Feature Gaps](#feature-gaps)
- [Our Unique Advantages](#our-unique-advantages)
- [Proposed Pricing Tiers](#proposed-pricing-tiers)
- [Cost Comparison (5 Staff)](#cost-comparison-5-staff)
- [Competitor Profiles](#competitor-profiles)
  - [Mangomint](#mangomint)
  - [Boulevard](#boulevard)
  - [Vagaro](#vagaro)
  - [Fresha](#fresha)
  - [GlossGenius](#glossgenius)
  - [Phorest](#phorest)
  - [Meevo](#meevo)
- [Master Feature Comparison Matrix](#master-feature-comparison-matrix)

---

## Our Feature Set

### Scheduling & Booking
- Calendar (day & week views with configurable start day, day range, hour height)
- Online booking widget (embeddable, slide-out panel)
- Booking landing page (shareable, public-facing)
- Group bookings (1–8 people, per-person service selection)
- Schedule overrides (date-specific working/not-working)
- Time blocks (breaks, meetings; recurring with series management)
- Returning client rebook flow (OTP login → rebook last 3 appointments)

### Client Management
- Client profiles (contact, history, preferences, notes)
- Client portal (self-service: bookings, sales, wallet, gift cards, packages, memberships, forms)
- Client timeline / history
- Account balances / wallet (deposits, credits, payments)
- Book for someone else (with client alias management)
- Intake forms & waivers (custom templates, multiple field types)
- Smart search (instant search by name, phone, email)

### Sales & Commerce
- Point of sale (services, products, tips, discounts, multi-payment)
- Gift cards (online + in-store, custom artwork)
- Gift card promotions (seasonal campaigns, reorderable)
- Service packages (bundle, track redemptions, expiration)
- Memberships (auto-billing, pause/resume/cancel, included services)
- Offers & promo codes (percentage/fixed discounts, validation)
- Products & inventory (categories, suppliers, stock tracking, change history)

### Staff & Operations
- Staff management (profiles, shifts, services, permissions)
- Permission groups (4 built-in, 40 keys across 14 sections)
- Time clock (PIN-based clock in/out, time cards)
- Time off requests (submit, approve/deny, conflict detection)
- Staff-service assignments (with override permissions)
- Org chart (manager assignments, visual hierarchy)
- Resources (rooms & equipment, resource groups)
- Multi-location support
- Shared device mode (PIN elevation, activity attribution)

### Marketing & Communication
- Email campaigns (drag-and-drop builder, 7 block types, 9 audience filter rule types)
- SMS inbox (two-way conversations, real-time WebSocket)
- Team chat (built-in real-time internal messaging)
- Active promotions view (consolidated: offers, GC promos, packages, memberships)
- Real-time SSE updates (calendar, bookings, inbox push to all devices)

### Reporting & Insights
- Insights dashboard (15 KPIs, trends, staff rankings, 8 chart types)
- 10+ report types (client balances, usage, deposits, inventory, offers, packages, memberships, staff, days off)
- Activity log (full audit trail, filter by user/action/date)
- View as staff member (preview permissions without logging out)

### Advanced / Unique
- Training mode (sandbox cloning for staff onboarding)
- Platform admin (multi-tenant management dashboard)
- Vanity URLs (custom slugs for booking pages)
- Configurable sidebar navigation (drag-and-drop reorder)
- Tenant selection at login (multi-tenant user support)
- Elevation tokens (shared user security model)

---

## Feature Gaps

Features competitors offer that we currently do not:

| Feature | Who Has It | Priority |
|---------|-----------|----------|
| **Integrated payment processing** | All 7 competitors | Critical |
| **Waitlist management** | Mangomint, Boulevard, Fresha, GlossGenius, Phorest, Meevo | High |
| **Recurring appointments** | Mangomint, Boulevard, Vagaro, Fresha, Meevo | High |
| **Automated marketing flows** (trigger-based sequences) | All 7 competitors | High |
| **Commission management** | All 7 competitors | High |
| **Client review/reputation management** | All 7 competitors | Medium |
| **Automated appointment reminders** (SMS/email) | All 7 competitors | Medium |
| **Loyalty/rewards program** | Vagaro, Fresha, Phorest | Medium |
| **Branded mobile app** (native iOS/Android) | All 7 competitors | Medium |
| **HIPAA compliance** | Mangomint, Boulevard, Fresha, Meevo | Medium |
| **Purchase orders** (supplier ordering) | Mangomint, Meevo | Medium |
| **Self check-in kiosk** | Meevo | Low |
| **Client marketplace** (discovery/acquisition) | Vagaro, Fresha | Low |
| **AI-powered features** | Fresha (Gemini), GlossGenius (Analyst), Meevo (Convobar) | Low |
| **Shopify integration** | Mangomint, Boulevard | Low |
| **Photo management** (before/after) | Phorest, Meevo | Low |
| **Website builder** | Vagaro | Low |
| **Payroll integrations** (QuickBooks, Xero, Gusto) | Vagaro | Low |

---

## Our Unique Advantages

Features that **no competitor offers**:

1. **Client portal** — Full self-service portal (bookings, sales, wallet, gift cards, packages, memberships, forms)
2. **Built-in team chat** — Real-time WebSocket internal messaging, no Slack needed
3. **Training mode** — Sandbox environment cloning production data for risk-free staff training
4. **View as staff member** — Instantly preview any team member's permission-restricted view
5. **Full activity log** — Complete audit trail of every action with user attribution
6. **Book for someone else** — Clients book for family/friends with automatic alias management
7. **Gift card promotions** — Dedicated promotional campaigns for gift card sales
8. **Org chart** — Visual organization hierarchy with manager assignments
9. **Real-time SSE updates** — Server-sent events push changes to all connected clients instantly
10. **Platform admin** — Multi-tenant management dashboard for SaaS operators
11. **Shared device mode** — PIN-based elevation with full activity attribution for front desk stations
12. **Drag-and-drop email builder** — 7 block types with visual campaign construction

---

## Proposed Pricing Tiers

| Plan | Monthly Price | Annual Price (20% off) | Staff Limit | Target Customer |
|------|-------------|----------------------|-------------|----------------|
| **Starter** | $29/mo | $23/mo | 1 staff member | Solo practitioners, booth renters |
| **Professional** | $79/mo | $63/mo | Up to 5 staff | Small teams (most popular) |
| **Business** | $149/mo | $119/mo | Up to 15 staff | Growing salons & spas |
| **Enterprise** | $249/mo | $199/mo | Unlimited staff | Large teams, multi-location |

### Starter ($29/mo)
- Online booking widget
- Calendar (day & week view)
- Client management (CRM)
- Point of sale & checkout
- Gift cards
- Basic reports
- Client portal
- Booking landing page
- Email support

### Professional ($79/mo) — Most Popular
- Everything in Starter, plus:
- Staff scheduling & permissions
- Time clock & payroll reports
- Products & inventory
- Packages & memberships
- Offers & promotions
- Forms & intake waivers
- SMS inbox
- Activity log
- Priority email support

### Business ($149/mo)
- Everything in Professional, plus:
- Multi-location support
- Marketing email campaigns
- Insights dashboard & analytics
- Group bookings
- Resources (rooms & equipment)
- Time off management
- Permission groups
- Team chat
- Schedule overrides
- Org chart
- Phone & email support

### Enterprise ($249/mo)
- Everything in Business, plus:
- Unlimited locations
- Training mode (sandbox)
- Shared device management
- Platform admin dashboard
- Vanity URLs / custom branding
- Custom permission groups
- Advanced reporting
- API access
- Dedicated account manager

---

## Cost Comparison (5 Staff)

What a salon with 5 staff members processing $10,000/month in card transactions would pay:

| Platform | Subscription | Transaction Fees | Est. Monthly Total | Annual Difference vs Us |
|----------|-------------|-----------------|-------------------|------------------------|
| **Calendoula** | **$79/mo** | **$0** | **$79** | **—** |
| GlossGenius | $48/mo | $260 (2.6%) | $308 | -$2,748 more/yr |
| Vagaro | $70–84/mo | $275 (2.75%) | $359 | -$3,360 more/yr |
| Mangomint | $165/mo | Varies | $165+ | -$1,032 more/yr |
| Meevo | $179/mo | Varies | $179+ | -$1,200 more/yr |
| Fresha | $75/mo | $249 (2.29%+$0.20) | $533 | -$5,448 more/yr |
| Boulevard | $293/mo | $280 (2.65%+$0.15) | $593 | -$6,168 more/yr |
| Phorest | ~$99+/mo | Via Stripe | $99+ | Varies |

---

## Competitor Profiles

### Mangomint

- **Founded**: 2017
- **Pricing**: $165 Essentials (≤10 staff) | $245 Standard (≤20) | $375 Unlimited
- **Add-ons**: Connect (phone/SMS/chat) $75/mo
- **Target**: Mid-size salons & spas that value UX and automation
- **Rating**: 4.9/5 on Capterra (#1 in category)

**Strengths:**
- Top-rated UX and speed (sub-100ms interactions)
- Express Booking for rapid checkout
- Automated marketing flows with trigger-based sequences
- Two-way SMS, phone, and web chat (Connect add-on)
- HIPAA compliant for medical spas
- Strong Shopify inventory integration
- $35M Series B funding (2025)

**Weaknesses:**
- Starts at $165/month — expensive for small teams
- No client portal for self-service
- No group booking support
- No built-in team chat
- No training/sandbox mode
- No activity log or audit trail
- Connect (communications) costs extra $75/month

**Our Verdict:** Mangomint is excellent software, but its $165+ starting price puts it out of reach for many small salons. We deliver comparable scheduling, CRM, and reporting features at a fraction of the cost, plus unique features like client portal, team chat, training mode, and group bookings that Mangomint doesn't offer.

---

### Boulevard

- **Founded**: 2016
- **Pricing**: $176 Essentials (≤5 staff) | $293 Premier (unlimited) | $410 Prestige
- **Transaction fees**: 2.65% + $0.15 per transaction
- **Target**: Established salons, med spas, and multi-location chains

**Strengths:**
- Precision Scheduling AI optimizes provider calendars
- HIPAA compliant for medical aesthetics
- Resource scheduling (rooms, equipment)
- Shopify inventory integration
- Walk-in and check-in management
- Strong reporting and analytics
- ~15% of U.S. medspa market

**Weaknesses:**
- Starts at $176/month per location — most expensive option
- Essential plan limited to 5 staff
- Forms only available in $410/month Prestige tier
- No client portal
- No team chat
- No training/sandbox mode
- Limited SMS included (100/month on Essentials)
- No built-in email campaign builder

**Our Verdict:** Boulevard is built for established, premium businesses willing to pay a premium price. At $176-$410/month per location with no multi-location discounts, it's the most expensive option. We offer comparable features at dramatically lower prices, with unique capabilities Boulevard lacks.

---

### Vagaro

- **Founded**: 2009
- **Pricing**: $30 base + $10/additional staff + add-on fees
- **Transaction fees**: 2.75%
- **Target**: Solo stylists, booth renters, and small salons
- **Scale**: 220,000+ businesses

**Strengths:**
- Low entry price ($30/month for 1 provider)
- Client marketplace for new customer acquisition
- Branded mobile app available
- AI-powered email/SMS marketing content
- Website builder included
- QuickBooks, Xero, Gusto payroll integrations
- 30-day free trial

**Weaknesses:**
- Add-on fees add up quickly ($10/staff, $20+ for SMS marketing, etc.)
- No client portal for self-service
- No team chat
- No group bookings
- No training/sandbox mode
- No intake forms in base plan
- No resource management (rooms/equipment)
- No activity log
- Limited permission customization

**Our Verdict:** Vagaro's low starting price is appealing, but costs escalate quickly with per-staff fees and add-ons. A 5-person salon easily pays $80-120/month. Our Professional plan ($79/mo) includes 5 staff with packages, memberships, forms, inventory, and SMS inbox — all features Vagaro charges extra for.

---

### Fresha

- **Founded**: 2015
- **Pricing**: $19.95 Independent | $14.95/staff Team
- **Transaction fees**: 2.29% + $0.20 per card payment + 20% on new marketplace clients
- **Target**: Solo practitioners and small salons globally
- **Scale**: 450,000+ professionals, 120+ countries, 30M+ appointments/month

**Strengths:**
- Low per-staff pricing ($14.95/staff/month)
- Marketplace with 9x median ROI on client acquisition
- AI-powered booking via Google Gemini integration
- Unlimited free SMS appointment reminders
- Present in 120+ countries
- 0% commission on repeat marketplace clients

**Weaknesses:**
- Transaction fees on every payment (2.29% + $0.20)
- 20% commission on new marketplace clients
- No client portal
- No team chat
- No group bookings
- No training mode
- No drag-and-drop email builder
- No activity log
- Resource management costs extra
- No built-in org chart or permission groups

**Our Verdict:** Fresha looks affordable upfront but takes a cut of every payment. A salon processing $20,000/month in card payments pays ~$500 in transaction fees alone — more than any competitor's subscription fee. We charge a flat monthly fee with no transaction costs, making us dramatically cheaper for busy salons.

---

### GlossGenius

- **Founded**: 2015
- **Pricing**: $24 Standard (≤2 users) | $48 Gold (≤9) | $148 Platinum (unlimited)
- **Transaction fees**: 2.6% flat rate
- **Target**: Independent beauty professionals and small salons

**Strengths:**
- Beautiful, mobile-first design
- Low starting price ($24/month)
- Flat 2.6% payment processing rate
- Same-day payment transfers
- AI Analyst for business questions (new 2026)
- Reserve with Google integration
- Built-in email & SMS marketing (no extra charge)

**Weaknesses:**
- Standard plan limited to 2 users
- No week view on calendar
- No group bookings
- No client portal
- No team chat
- No training mode
- No resource management (rooms/equipment)
- No products or inventory management
- No time off management
- Limited reporting (advanced requires Gold/Platinum)
- No multi-location support
- No activity log
- No intake forms on Standard plan

**Our Verdict:** GlossGenius is a great choice for solo operators who want simplicity and beautiful design. But it's limited for teams — no multi-location, no resources, no inventory, no group bookings. Our Professional plan ($79/mo) serves teams of 5 with full inventory, packages, forms, and permissions that GlossGenius can't match even on its $148 Platinum tier.

---

### Phorest

- **Founded**: 2003
- **Pricing**: Custom/quote-based (~$99+/month estimated)
- **Target**: Mid-size salons focused on growth and retention
- **Scale**: 155,000+ professionals worldwide

**Strengths:**
- Dedicated Salon Success Manager for every account
- Strong marketing ROI tools ($5M+ generated for users)
- Treatcard digital loyalty program
- PhorestPay integrated payments via Stripe (335% revenue boost)
- Excellent reporting praised by users
- PhorestGo mobile app for staff
- Group booking support

**Weaknesses:**
- Opaque, quote-based pricing
- No client portal
- No team chat
- No training/sandbox mode
- No booking landing page builder
- No drag-and-drop email builder
- No activity log
- Limited API (doesn't expose card payments)
- Some features have hidden additional costs

**Our Verdict:** Phorest's dedicated success managers are a strong differentiator, but the opaque pricing makes it hard to compare value. We provide transparent pricing with comparable features, plus unique capabilities like client portal, team chat, training mode, and a full activity log that Phorest doesn't offer.

---

### Meevo

- **Founded**: 2000 (Millennium Systems International)
- **Pricing**: $139 Basic | $179 Simple | $269 Pro | $419 Pro 1 | $529 Pro 2
- **Target**: Mid to large salons, med spas, and multi-location chains
- **Scale**: 350,000+ salons, spas, and med spas

**Strengths:**
- 150+ built-in reports (industry-leading analytics depth)
- Convobar AI voice assistant (patented — U.S. Patent No. 11,176,523)
- HIPAA and PCI compliant
- Self check-in kiosk
- Online membership sales platform
- Strong multi-location management
- Family profile linking
- 98.5% positive support rating

**Weaknesses:**
- Starts at $139/month — mid-range pricing
- No public API for integrations
- No client portal
- No team chat
- No training/sandbox mode
- No drag-and-drop email builder
- No activity log / audit trail
- No booking landing page builder
- Dated UI compared to modern alternatives
- Higher tiers needed for full feature access

**Our Verdict:** Meevo is a solid enterprise choice with impressive reporting depth (150+ reports) and the unique Convobar voice assistant. But at $139-529/month, it's priced for larger operations. Our Business plan ($149/mo) delivers comparable team management features with a modern UI, plus unique features like team chat, training mode, and client portal.

---

## Master Feature Comparison Matrix

### Scheduling & Booking

| Feature | Calendoula | Mangomint | Boulevard | Vagaro | Fresha | GlossGenius | Phorest | Meevo |
|---------|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Online booking widget | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Calendar (day view) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Calendar (week view) | ✓ | ✓ | ✓ | ✓ | ✓ | — | ✓ | ✓ |
| Group bookings | ✓ | — | ✓ | — | — | — | ✓ | ✓ |
| Booking landing page | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — | ✓ |
| Schedule overrides | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Time blocks / breaks | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Waitlist management | — | ✓ | ✓ | — | ✓ | ✓ | ✓ | ✓ |
| Recurring appointments | — | ✓ | ✓ | ✓ | ✓ | — | — | ✓ |

### Client Management

| Feature | Calendoula | Mangomint | Boulevard | Vagaro | Fresha | GlossGenius | Phorest | Meevo |
|---------|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Client profiles & CRM | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Client portal | ✓ | ✓ | — | — | — | — | — | — |
| Client timeline / history | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Account balances / wallet | ✓ | ✓ | ✓ | ✓ | ✓ | — | ✓ | ✓ |
| Book for someone else | ✓ | — | — | — | — | — | — | — |
| Client aliases | ✓ | — | — | — | — | — | — | — |
| Intake forms & waivers | ✓ | ✓ | ✓ | Add-on | ✓ | Paid | ✓ | ✓ |
| Loyalty / rewards program | — | — | — | ✓ | ✓ | — | ✓ | — |

### Sales & Payments

| Feature | Calendoula | Mangomint | Boulevard | Vagaro | Fresha | GlossGenius | Phorest | Meevo |
|---------|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Point of sale | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Gift cards | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Gift card promotions | ✓ | — | — | — | — | — | — | — |
| Packages | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Memberships | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Offers & promo codes | ✓ | — | ✓ | ✓ | ✓ | — | ✓ | ✓ |
| Products & inventory | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Integrated payment processing | — | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

### Staff & Operations

| Feature | Calendoula | Mangomint | Boulevard | Vagaro | Fresha | GlossGenius | Phorest | Meevo |
|---------|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Staff management | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Permission groups | ✓ | ✓ | Paid | ✓ | ✓ | Paid | ✓ | ✓ |
| Time clock | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Time off requests | ✓ | ✓ | ✓ | ✓ | ✓ | — | ✓ | ✓ |
| Staff-service assignments | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Org chart | ✓ | — | — | — | — | — | — | — |
| Resources (rooms & equipment) | ✓ | ✓ | ✓ | — | Add-on | — | ✓ | ✓ |
| Multi-location support | ✓ | ✓ | ✓ | ✓ | ✓ | — | ✓ | ✓ |
| Commission management | — | ✓ | ✓ | ✓ | ✓ | Paid | ✓ | ✓ |

### Marketing & Communication

| Feature | Calendoula | Mangomint | Boulevard | Vagaro | Fresha | GlossGenius | Phorest | Meevo |
|---------|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Email campaigns | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Drag & drop email builder | ✓ | — | — | ✓ | — | — | ✓ | — |
| SMS inbox / two-way texting | ✓ | Add-on | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Team chat (internal) | ✓ | — | — | — | — | — | — | — |
| Automated marketing flows | — | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Client review requests | — | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Client marketplace | — | — | — | ✓ | ✓ | — | — | — |

### Reporting & Insights

| Feature | Calendoula | Mangomint | Boulevard | Vagaro | Fresha | GlossGenius | Phorest | Meevo |
|---------|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Business reports | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Insights dashboard with charts | ✓ | ✓ | ✓ | ✓ | ✓ | Paid | ✓ | ✓ |
| Staff performance tracking | ✓ | ✓ | ✓ | ✓ | ✓ | Paid | ✓ | ✓ |
| Activity log / audit trail | ✓ | — | — | — | — | — | — | — |
| Inventory reports | ✓ | ✓ | ✓ | ✓ | ✓ | — | ✓ | ✓ |

### Advanced & Unique

| Feature | Calendoula | Mangomint | Boulevard | Vagaro | Fresha | GlossGenius | Phorest | Meevo |
|---------|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Training mode (sandbox) | ✓ | — | — | — | — | — | — | — |
| Shared device / kiosk mode | ✓ | — | — | — | — | — | — | ✓ |
| Vanity URLs | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — |
| Real-time SSE updates | ✓ | — | — | — | — | — | — | — |
| View as staff member | ✓ | — | — | — | — | — | — | — |
| Platform admin (multi-tenant) | ✓ | — | — | — | — | — | — | — |
| AI assistant / voice commands | — | — | — | — | ✓ | ✓ | — | ✓ |
| Branded mobile app | — | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| HIPAA compliance | — | ✓ | ✓ | — | ✓ | — | — | ✓ |

---

## Summary

**Our competitive position:**
- **Price leader** for feature-rich plans (especially Professional at $79/mo for 5 staff)
- **Zero transaction fees** — unique among competitors that also process payments
- **12 unique features** no competitor offers (client portal, team chat, training mode, etc.)
- **Key gaps to address**: integrated payments (critical), waitlist, recurring appointments, automated flows, commission management, review requests, mobile app
- **Strongest against**: Boulevard (price), Mangomint (price + unique features), Meevo (modern UX + price)
- **Most vulnerable against**: Fresha (marketplace/scale), Vagaro (marketplace + low entry), GlossGenius (mobile-first design)
