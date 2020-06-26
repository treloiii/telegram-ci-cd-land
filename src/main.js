import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from "@/router";
import vh from 'vue-headful'
import store from './store'
Vue.config.productionTip = false
Vue.component('vue-headful',vh)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

