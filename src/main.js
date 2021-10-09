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
import Vuex from 'vuex'

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

Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    form: {
      name: null,
      cpf: null,
      number: null,
      state: 'Paraná',
      city: null,
      payments: [],
      payment_options: {
        pix: false,
        money: false,
        credit_card: false
      },
      credit_card_option: 1
    },
    states: [
      { state: 'Paraná', cities: ['Londrina', 'Maringá'] },
      { state: 'Rio Grande do Sul', cities: ['Pelotas', 'Porto Alegre'] },
      { state: 'Santa Catarina', cities: ['Florianópolis', 'Joinville'] }
    ],
    editing: false
  },
  mutations: {
    updateForm (state, payload) {
      state.form = payload
    },
    editForm (state) {
      state.editing = true
    },
    addPayment (state, payload) {
      state.form.payments.push(payload)
    },
    removePayment (state, payload) {
      const index = state.form.payments.findIndex(p => p.type == payload.type)
      state.form.payments.splice(index, 1)
    },
    reset (state) {
      state.form = {
        name: null,
        cpf: null,
        number: null,
        state: 'Paraná',
        city: null,
        payments: [],
        payment_options: {
          pix: false,
          money: false,
          credit_card: false
        },
        credit_card_option: 1
      }
      state.editing = false
    }
  },
  actions: {
    updatePayments ({ commit, state }, payload) {
      const find = state.form.payments.find(p => p.type == payload.type)
      if (Boolean(find)) {
        console.log('removido')
        commit('removePayment', payload)
      } else {
        console.log('adicionado')
        commit('addPayment', payload)
      }
    }
  }
})

new Vue({
  router,
  store: store,
  render: function (h) { return h(App) }
}).$mount('#app')
