import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { VueMaskDirective } from 'v-mask'
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize
} from "vee-validate"

import pt_BR from "vee-validate/dist/locale/pt_BR.json"
import * as rules from "vee-validate/dist/rules"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install VeeValidate rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule])
});

localize("pt_BR", pt_BR)

Vue.component("ValidationObserver", ValidationObserver)
Vue.component("ValidationProvider", ValidationProvider)

Vue.directive('mask', VueMaskDirective);

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
