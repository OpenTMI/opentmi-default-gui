import Vue from 'vue'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'
import Cookies from 'js-cookie'
import VuePivottable from 'vue-pivottable'
import moment from 'moment'
import VueMoment from 'vue-moment'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import locale from 'element-ui/lib/locale'
import lang from 'element-ui/lib/locale/lang/en'

import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css
import 'vue-pivottable/dist/vue-pivottable.css'

import App from './App'
import store from './store'
import router from './router'

import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

import * as filters from './filters' // global filters

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
/* if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}*/

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})
Vue.use(VueLodash, { lodash })
Vue.use(VuePivottable)
Vue.use(VueMoment, { moment })

// configure language
locale.use(lang)

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
