import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMq from "vue3-mq"

createApp(App)
.use(store)
.use(router)
.use(VueMq, {
    breakpoints: {
      sm: 450,
      md: 850,
      lg: 1250,
      xl: Infinity,
    }
  })
.mount('#app')
