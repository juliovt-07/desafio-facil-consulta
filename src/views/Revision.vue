<template>
  <div>
    <b-row align-v="center">
      <b-col cols="12" md="6">
        <b-input-group class="row align-content-lg-start mb-1" size="sm">
          <small>Nome completo</small>
          <p>{{ form.name }}</p>
        </b-input-group>
        <b-input-group class="row align-content-lg-start mb-1" size="sm">
          <small>CPF</small>
          <p>{{ form.cpf }}</p>
        </b-input-group>
        <b-input-group class="row align-content-lg-start mb-1" size="sm">
          <small>Numero de celular ou telefone</small>
          <p>{{ form.number }}</p>
        </b-input-group>
        <b-input-group class="row align-content-lg-start mb-1" size="sm">
          <small>Estado/Cidade</small>
          <p>{{ form.state }} - {{ form.city }}</p>
        </b-input-group>
        <b-input-group class="row align-content-lg-start mb-1" size="sm">
          <small>Especialidade Principal</small>
          <p>{{ form.principal }}</p>
        </b-input-group>
        <b-input-group class="row align-content-lg-start mb-1" size="sm">
          <small>Preço da consulta</small>
          <p>R$ {{ parseFloat(form.value).toFixed(2).replace('.', ',') }}</p>
        </b-input-group>
        <b-input-group class="row align-content-lg-start mb-2" size="sm">
          <small>Formas de pagamento da consulta</small>
          <p v-for="(payment, index) in form.payments" :key="index">
            {{ payment.type }} {{ payment.option ? '- '+payment.option+ 'x sem juros' : '' }}
          </p>
        </b-input-group>
        <ButtonDefault route="Finish" class="mb-2" :form="form" title="CADASTRAR PROFISSIONAL" color-button="#f8de40" color-title="#282828"/>
        <ButtonDefault route="Professional" :form="form" title="Editar cadastro" color-button="transparent" color-title="#483698"/>
      </b-col>
      <b-col md="3">
        <img src="../assets/cartoon-3.png" class="svg" width="360">
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ButtonDefault from "@/components/ButtonDefault";

export default {
  name: 'Revision',
  components: {
    ButtonDefault
  },
  data() {
    return {
      form: {}
    }
  },
  mounted() {
    this.form = this.$route.params.form
  }
}
</script>

<style scoped>
p {
  margin-left: 0px !important;
  font-size: 15px;
}
</style>
