import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueToasted from 'vue-toasted'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
const Moment = require('vue-moment')

Vue.use(BootstrapVue)

Vue.use(Moment)

Vue.use(VueToasted, {
  iconPack: 'fontawesome'
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
