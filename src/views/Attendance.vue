<template>
  <div>
    <h5 class="mb-4">Detalhes do atendimento</h5>
    <b-row align-v="center">
      <b-col cols="12" md="6">
        <validation-observer ref="observer" v-slot="{ invalid }">
          <b-form>
            <validation-provider name="especialidade" :rules="{ required: true }" v-slot="validationContext">
              <b-form-group id="input-group-5">
                <b-input-group class="row align-content-lg-start mb-3" size="sm">
                  <small>Especialidade principal</small>
                  <b-form-select
                      id="select-2"
                      name="select-2"
                      class="rounded-2 mt-1 p-1 bg-white"
                      v-model="form.principal"
                      :options="especialidades"
                      value-field="state"
                      text-field="state"
                      :state="getValidationState(validationContext)"
                      aria-describedby="select-2-live-feedback"
                  ></b-form-select>
                  <b-form-invalid-feedback id="select-2-live-feedback">
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-input-group>
              </b-form-group>
            </validation-provider>
            <validation-provider name="preço" :rules="{ required: true }" v-slot="validationContext">
              <b-form-group id="input-group-6">
                <b-input-group style="max-width: 220px" class="row align-content-lg-start mb-3" size="sm">
                  <small>Informe o preço da consulta</small>
                  <b-input-group size="sm" prepend="R$" class="mt-1">
                    <b-form-input
                        id="input-4"
                        name="input-4"
                        :no-wheel="true"
                        v-model="form.value"
                        type="number"
                        style="margin-left: -1px;"
                        class="rounded-2"
                        placeholder="Valor"
                        :state="getValidationState(validationContext)"
                        aria-describedby="input-4-live-feedback"
                    ></b-form-input>
                    <b-form-invalid-feedback id="input-4-live-feedback">
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-input-group>
                </b-input-group>
              </b-form-group>
            </validation-provider>
            <validation-provider name="formas de pagamento" :rules="{ required: true }" v-slot="validationContext">
              <b-form-group id="input-group-7">
                <b-input-group style="max-width: 285px" class="row align-content-lg-start mb-3" size="sm">
                  <small>Formas de pagamento da consulta</small>
                  <b-card class="bg-light border-0 rounded-3 shadow-sm mt-2">
                    <b-checkbox @change="updatePayments({ type: 'Pix' })" v-model="form.payment_options.pix"><b>Pix</b></b-checkbox>
                  </b-card>
                  <b-card class="bg-light border-0 rounded-3 shadow-sm mt-2">
                    <b-checkbox @change="updatePayments({ type: 'Dinheiro' })" v-model="form.payment_options.money"><b>Em dinheiro</b></b-checkbox>
                  </b-card>
                  <b-card class="bg-light border-0 rounded-3 shadow-sm mt-2">
                    <b-checkbox @change="updatePayments({ type: 'Cartão de crédito', option: form.credit_card_option })" v-model="form.payment_options.credit_card"><b>Cartão de crédito</b></b-checkbox>
                    <div v-show="form.payment_options.credit_card">
                      <label class="title-radio mt-3">Parcelamento em</label>
                      <b-form-radio-group
                          v-model="form.credit_card_option"
                          :options="credit_card_options"
                      >
                      </b-form-radio-group>
                    </div>
                  </b-card>
                </b-input-group>
              </b-form-group>
            </validation-provider>
            <b-row align-v="center">
              <b-col cols="9" md="9" xl="9" sm="6">
                <b-progress :value="$route.path == '/' ? 50 : 100" class="mb-3"></b-progress>
              </b-col>
              <b-col class="mb-3">
                {{ $route.path == '/' ? '1' : '2' }} de 2
              </b-col>
            </b-row>
            <ButtonDefault :disabled="$store.state.form.payments.length == 0 || invalid" route="Revision" :form="form"/>
          </b-form>
        </validation-observer>
      </b-col>
      <b-col md="3">
        <img src="../assets/cartoon-2.png" class="svg" width="360">
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ButtonDefault from "@/components/ButtonDefault";

export default {
  name: 'Attendance',
  components: {
    ButtonDefault
  },
  data() {
    return {
      form: {
        payment_options: {
          pix: false,
          money: false,
          credit_card: false
        },
        credit_card_option: 1
      },
      credit_card_options: [
        { text: '1x, sem juros', value: 1 },
        { text: '2x, sem juros', value: 2 },
        { text: '3x, sem juros', value: 3 }
      ],
      especialidades: ['Cardiologia', 'Dermatologia', 'Neurologia', 'Oftalmologia', 'Psiquiatria', 'Urologia'],
    }
  },
  mounted() {
    this.form = this.$store.state.form
    this.$store.state.editing = true
  },
  watch: {
    // 'form.payment_options.pix': function (value) {
    //   let index = this.form.payments.findIndex(p => p.type == 'Pix')
    //   let repeat = !Boolean(this.form.payments.filter(p => p.type == 'Pix').length)
    //   console.log(repeat)
    //   if (value) {
    //     this.form.payments.push({ type: 'Pix' })
    //   } else {
    //     this.form.payments.splice(index, 1)
    //   }
    // },
    // 'form.payment_options.money': function (value) {
    //   let index = this.form.payments.findIndex(p => p.type == 'Dinheiro')
    //   let repeat = !Boolean(this.form.payments.filter(p => p.type == 'Dinheiro').length)
    //   console.log(repeat)
    //   if (value) {
    //     this.form.payments.push({ type: 'Dinheiro' })
    //   } else {
    //     this.form.payments.splice(index, 1)
    //   }
    // },
    // 'form.payment_options.credit_card': function (value) {
    //   let index = this.form.payments.findIndex(p => p.type == 'Cartão de crédito')
    //   let repeat = !Boolean(this.form.payments.filter(p => p.type == 'Cartão de crédito').length)
    //   console.log(repeat)
    //   if (value) {
    //     this.form.payments.push({ type: 'Cartão de crédito', option: this.form.credit_card_option })
    //   } else {
    //     this.form.payments.splice(index, 1)
    //   }
    // },
    // 'form.payment_options.pix': function (value) {
    //   if (this.$store.state.editing) {
    //     this.$store.dispatch('updatePayments', { type: 'Pix' })
    //   }
    // },
    'form.credit_card_option': function (value) {
      let index = this.form.payments.findIndex(p => p.type == 'Cartão de crédito')
      this.form.payments[index].option = value
    }
  },
  methods: {
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
    updatePayments(payload) {
      this.$store.dispatch('updatePayments', payload)
    }
  }
}
</script>

<style lang="scss">
.input-group .card {
  margin-left: 12px !important;
  .card-body, .custom-checkbox {
    margin-left: -10px !important;
  }
}
.title-radio {
  margin-left: 45px !important;
  cursor: pointer;
  font-size: 14px;
  user-select: none;
}
.custom-control.custom-control-inline.custom-radio {
  margin-top: 20px !important;
}
.bv-no-focus-ring {
  padding-left: 20px;
}
.bv-no-focus-ring .title-radio {
  font-size: 14px !important;
  margin-left: 30px !important;
}
input:checked {
  color: red !important;
  background: red !important;
}
</style>
