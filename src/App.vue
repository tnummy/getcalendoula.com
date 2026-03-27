<template>
  <div class="app">
    <nav class="nav" :class="{ scrolled: scrolled }">
      <div class="nav-inner">
        <router-link to="/" class="logo"><img src="/logo.png" alt="Calendoula" /><span class="logo-text">Calen<b>d</b>oula</span></router-link>
        <div class="nav-links" :class="{ open: menuOpen }">
          <router-link to="/features" @click="menuOpen = false">Features</router-link>
          <router-link to="/pricing" @click="menuOpen = false">Pricing</router-link>
          <router-link to="/compare" @click="menuOpen = false">Compare</router-link>
          <router-link to="/use-cases" @click="menuOpen = false">Industries</router-link>
          <a href="#" class="btn btn-sm btn-outline" @click.prevent="menuOpen = false">Login</a>
          <a href="#" class="btn btn-sm btn-primary" @click.prevent="menuOpen = false">Start Free Trial</a>
        </div>
        <button class="hamburger" @click="menuOpen = !menuOpen" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
    <router-view />
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="logo"><img src="/logo.png" alt="Calendoula" /><span class="logo-text">Calen<b>d</b>oula</span></div>
            <p>Your small business calendar doula. All-in-one scheduling, POS, and business management platform.</p>
          </div>
          <div>
            <h4>Product</h4>
            <router-link to="/features">Features</router-link>
            <router-link to="/pricing">Pricing</router-link>
            <router-link to="/compare">Compare</router-link>
            <router-link to="/use-cases">Industries</router-link>
          </div>
          <div>
            <h4>Compare</h4>
            <router-link to="/compare/mangomint">vs Mangomint</router-link>
            <router-link to="/compare/boulevard">vs Boulevard</router-link>
            <router-link to="/compare/vagaro">vs Vagaro</router-link>
            <router-link to="/compare/fresha">vs Fresha</router-link>
          </div>
          <div>
            <h4>Compare</h4>
            <router-link to="/compare/glossgenius">vs GlossGenius</router-link>
            <router-link to="/compare/phorest">vs Phorest</router-link>
            <router-link to="/compare/meevo">vs Meevo</router-link>
            <router-link to="/compare/acuity">vs Acuity</router-link>
            <router-link to="/compare/booksy">vs Booksy</router-link>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; {{ new Date().getFullYear() }} Calendoula. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)

function onScroll() { scrolled.value = window.scrollY > 20 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
