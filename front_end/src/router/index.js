import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

//여기서 라우터 설정을 하시면 됩니다.
const routes = [
  { path: '/', name: 'home', component: HomeView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
