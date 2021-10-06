<template>
  <div>
    <h5 class="mb-4">Detalhes do atendimento</h5>
    <b-row align-v="center">
      <b-col cols="12" md="6">
        <b-input-group class="row align-content-lg-start mb-3" size="sm">
          <small>Especialidade principal</small>
          <b-form-select required class="rounded-2 mt-1 p-1 bg-white" v-model="form.principal" :options="especialidades" value-field="state" text-field="state"></b-form-select>
        </b-input-group>
        <b-input-group style="max-width: 220px" class="row align-content-lg-start mb-3" size="sm">
          <small>Informe o preço da consulta</small>
          <b-input-group size="sm" prepend="R$" class="mt-1">
            <b-form-input :no-wheel="true" v-model="form.value" type="number" style="margin-left: -1px;" class="rounded-2" placeholder="Valor"></b-form-input>
          </b-input-group>
        </b-input-group>
        <b-input-group style="max-width: 285px" class="row align-content-lg-start mb-3" size="sm">
          <small>Formas de pagamento da consulta</small>
          <b-card class="bg-light border-0 rounded-3 shadow-sm mt-2">
              <b-checkbox v-model="payments.pix"><b>Pix</b></b-checkbox>
          </b-card>
          <b-card class="bg-light border-0 rounded-3 shadow-sm mt-2">
              <b-checkbox v-model="payments.money"><b>Em dinheiro</b></b-checkbox>
          </b-card>
          <b-card class="bg-light border-0 rounded-3 shadow-sm mt-2">
              <b-checkbox v-model="payments.credit_card"><b>Cartão de crédito</b></b-checkbox>
              <b-form-radio-group v-show="payments.credit_card">
                <label class="title-radio mt-3">Parcelamento em</label>
                <b-form-radio class="mt-3">1x, sem juros</b-form-radio>
                <b-form-radio class="mt-3">2x, sem juros</b-form-radio>
                <b-form-radio class="mt-3">3x, sem juros</b-form-radio>
              </b-form-radio-group>
          </b-card>
        </b-input-group>
      </b-col>
      <b-col md="3">
        <img src="../assets/cartoon-2.png" width="360">
      </b-col>
    </b-row>
    <b-row align-v="center">
      <b-col cols="9" md="5" lg="4" sm="6">
        <b-progress :value="$route.path == '/' ? 50 : 100" class="mb-3"></b-progress>
      </b-col>
      <b-col class="mb-3">
        {{ $route.path == '/' ? '1' : '2' }} de 2
      </b-col>
    </b-row>
    <ButtonDefault route="Revision"/>
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
        payments: []
      },
      especialidades: ['Cardiologia', 'Dermatologia', 'Neurologia', 'Oftalmologia', 'Psiquiatria', 'Urologia'],
      payments: {
        pix: false,
        money: false,
        credit_card: false
      }
    }
  },
  watch: {
    'payments.pix': function (value) {
      let index = this.form.payments.findIndex(p => p == 'Pix')
      if (value && (this.form.payments.length < 2)) {
        this.form.payments.push('Pix')
      } else {
        // this.form.payments.splice(index, 1)
      }
    },
    'payments.money': function (value) {
      let index = this.form.payments.findIndex(p => p == 'Dinheiro')
      if (value && (this.form.payments.length < 2)) {
        this.form.payments.push('Dinheiro')
      } else {
        // this.form.payments.splice(index, 1)
      }
    },
    'payments.credit_card': function (value) {
      let index = this.form.payments.findIndex(p => p == 'Cartão de crédito')
      if (value && (this.form.payments.length < 2)) {
        this.form.payments.push('Cartão de crédito')
      } else {
        // this.form.payments.splice(index, 1)
      }
    },
    'form.payments': function (items) {
      console.log(items)
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
.custom-checkbox .custom-control-label {
  margin-left: 25px !important;
  cursor: pointer;
  user-select: none;
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
