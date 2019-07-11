import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from '../lang/en_US'
import ru from '../lang/ru_RU'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'ru_RU',
  fallbackLocale: 'en_US',
  messages: {en, ru}
})
// Фильтр для добавления префикса локали к URL
Vue.filter('prefixUrl', function (value) {
  if(i18n.locale !== 'ru'){
    value = '/' + i18n.locale + value;
  }
  return value;
})
