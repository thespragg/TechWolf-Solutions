import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMq from "vue3-mq"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLightbulb, faChartBar} from '@fortawesome/free-regular-svg-icons'
import { faUserTie} from '@fortawesome/free-solid-svg-icons'

library.add(faLightbulb, faUserTie, faChartBar)

const app = createApp(App)
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

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
