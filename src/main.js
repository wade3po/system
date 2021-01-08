import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "@/components/global/global.js"
import "@/utils/directives.js"
import "@/plugins/element/element.js"
import "@/assets/css/reset.scss"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
