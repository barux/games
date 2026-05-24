import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import i18n from '@/assets/i18n/main'

import App from './App.vue'

import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'remixicon/fonts/remixicon.css'
import 'toastify-js/src/toastify.css'

const pinia = createPinia()

const app = createApp(App)

app.use(pinia)
app.use(
    createI18n({
        locale: 'it',
        fallbackLocale: 'it',
        messages: i18n,
    })
)
app.mount('#app')
