import { createApp } from 'vue'
//전역 css 안쓰시면 지워주세요
import './style.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
