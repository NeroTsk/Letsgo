import Vue from 'vue'
import App from './App.vue'
import Snotify, { SnotifyPosition } from 'vue-snotify'
const options = {
  toast: {
    position: SnotifyPosition.centerTop
  }
}

Vue.use(Snotify, options)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
