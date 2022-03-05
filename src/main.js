import Vue from 'vue'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'
import Cookies from 'js-cookie'
import VuePivottable from 'vue-pivottable'
import moment from 'moment'
import VueMoment from 'vue-moment'
import SchemaJsonVue from 'schema-json-vue'
import VueSocketIOExt from 'vue-socket.io-extended'
import io from 'socket.io-client'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { githubId } from '@/api/user'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import locale from 'element-ui/lib/locale'
import lang from 'element-ui/lib/locale/lang/en'

import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css
import 'vue-pivottable/dist/vue-pivottable.css'
import 'schema-json-vue/lib/schema-json-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App'
import store from './store'
import router from './router'

import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

import * as filters from './filters'
import VueAuthenticate from 'vue-authenticate' // global filters

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'development') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

async function initApp() {
  Vue.use(Element, {
    size: Cookies.get('size') || 'medium' // set element-ui default size
  })
  Vue.use(VueLodash, { lodash })
  Vue.use(VuePivottable)
  Vue.use(VueMoment, { moment })
  Vue.use(SchemaJsonVue)
  Vue.use(VueSocketIOExt, io(process.env.VUE_APP_BASE_API, { autoConnect: false }))
  // Install BootstrapVue
  Vue.use(BootstrapVue)
  // Optionally install the BootstrapVue icon components plugin
  Vue.use(IconsPlugin)
  // configure language
  locale.use(lang)

  // register global utility filters
  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
  })

  Vue.config.productionTip = false

  // setup github auth
  let clientID = ''
  try {
    const { data } = await githubId()
    clientID = data.clientID
  } catch (error) {
    console.error(`cannot fetch github clientID: ${error}`)
  }
  const authOption = {
    baseUrl: window.location.origin, // Your API domain
    providers: {
      github: {
        clientId: clientID,
        scope: ['user:email', 'read:user', 'read:org'],
        redirectUri: `${window.location.origin}/auth/github` // Your client app URL
      }
    }
  }
  Vue.use(VueAuthenticate, authOption)
  new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
  })
}

initApp()
