import { createApp } from 'vue'
import {createPinia} from 'pinia'
import router from '@/router/index'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import App from './App.vue'

import "bootstrap-icons/font/bootstrap-icons.css"
import 'bootstrap/dist/css/bootstrap.css'

const pinia=createPinia()
pinia.use(piniaPluginPersistedState)

const app=createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')