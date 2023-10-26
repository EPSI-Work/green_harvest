import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/a-propos-de-nous',
      name: 'a-propos-de-nous',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/conditions-generales-de-vente',
      name: 'conditions-generales-de-vente',
      component: () => import('../views/CgvView.vue')
    },
    {
      path: '/mentions-legales',
      name: 'mentions-legales',
      component: () => import('../views/MentionView.vue')
    },
    {
      path: '/politique-de-confidentialite',
      name: 'politique-de-confidentialite',
      component: () => import('../views/PoliticalView.vue')
    },
    {
      path: '/rejoignez-nous',
      name: 'rejoignez-nous',
      component: () => import('../views/JoinView.vue')
    },
    {
      path: '/jardin/:id',
      name: 'jardin',
      component: () => import('../views/GardenView.vue')
    },
  ]
})

export default router
