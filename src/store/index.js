import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

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
                commit('removePayment', payload)
            } else {
                commit('addPayment', payload)
            }
        }
    }
})

Vue.prototype.$store = store;

export default store;
