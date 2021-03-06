// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/element-ui-edit/overwrite.sass'
// fontawesome
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'
import brands from '@fortawesome/fontawesome-free-brands'
// animate
import animate from 'animate.css'

Vue.use(ElementUI)
Vue.use(animate)
Vue.config.productionTip = false
Vue.prototype.$axios = axios

fontawesome.library.add(solid)
fontawesome.library.add(regular)
fontawesome.library.add(brands)
Vue.component('font-awesome-icon', FontAwesomeIcon)

export const eventBus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
