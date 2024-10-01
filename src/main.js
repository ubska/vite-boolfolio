import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$apiUrl = 'http://localhost:8000/api/posts';

app.use(router)

app.mount('#app')
