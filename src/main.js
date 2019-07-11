import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import router from './router'
import store from './store'

import { i18n } from './plugins/i18n'

import 'normalize.css'
import './assets/scss/base.scss'

Vue.use(Vuelidate)

new Vue({
  el: '#app',
  metaInfo: {
    title: "Frontend разработчик",
    titleTemplate: "%s | Frontend-Life"
  },
  router,
  store,
  i18n,
  render: h => h(App)
})
