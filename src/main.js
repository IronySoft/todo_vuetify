import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
var bus = new Vue();
Vue.prototype.$bus =bus
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
