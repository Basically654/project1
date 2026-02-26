import './assets/main.css'
import { createWebHistory, createRouter } from 'vue-router'

import { createApp } from 'vue'
import Books from './pages/Books.vue'
import Home from './pages/Home.vue'
import Videogames from './pages/Videogames.vue'
import App from './App.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/books', component: Books },
  {path: '/videogames', component: Videogames}
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')

