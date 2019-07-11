import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import { i18n } from '../plugins/i18n'
import Meta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(Meta)

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  let currentRouteName = to.name;
  let currentRouteArray = currentRouteName.split('__');
  let locale = currentRouteArray[currentRouteArray.length - 1];
  // import(`../lang/${locale}.json`).then((msgs) => {
  //   i18n.setLocaleMessage(locale, msgs);
  //   i18n.locale = locale;
  //   return next();
  // })
  i18n.locale = locale;
  return next();
})

export default router
