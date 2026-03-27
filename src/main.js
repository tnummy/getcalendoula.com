import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

const routes = [
  { path: '/', component: () => import('./views/HomePage.vue') },
  { path: '/pricing', component: () => import('./views/PricingPage.vue') },
  { path: '/features', component: () => import('./views/FeaturesPage.vue') },
  { path: '/compare', component: () => import('./views/ComparePage.vue') },
  { path: '/compare/:competitor', component: () => import('./views/CompareDetailPage.vue') },
  { path: '/use-cases', component: () => import('./views/UseCasesPage.vue') },
  { path: '/use-cases/:usecase', component: () => import('./views/UseCaseDetailPage.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return savedPosition || { top: 0 }
  },
})

createApp(App).use(router).mount('#app')
