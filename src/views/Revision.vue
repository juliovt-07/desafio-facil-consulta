<template>
  <div>
    <b-row align-v="center">
      <b-col cols="12" md="6">
        <b-input-group class="row align-content-lg-start mb-1" size="sm">
          <small>Nome completo</small>
          <p>Julio Cesar</p>
        </b-input-group>
        <b-input-group class="row align-content-lg-start mb-1" size="sm">
          <small>CPF</small>
          <p>654.432.675-88</p>
        </b-input-group>
        <b-input-group class="row align-content-lg-start mb-1" size="sm">
          <small>Numero de celular ou telefone</small>
          <p>(99) 94534-5521</p>
        </b-input-group>
        <b-input-group class="row align-content-lg-start mb-1" size="sm">
          <small>Estado/Cidade</small>
          <p>Rio Grande do Sul - Pelotas</p>
        </b-input-group>
        <b-input-group class="row align-content-lg-start mb-1" size="sm">
          <small>Especialidade Principal</small>
          <p>Cardiologia</p>
        </b-input-group>
        <b-input-group class="row align-content-lg-start mb-1" size="sm">
          <small>Preço da consulta</small>
          <p>R$ 200,00</p>
        </b-input-group>
        <b-input-group class="row align-content-lg-start mb-2" size="sm">
          <small>Formas de pagamento da consulta</small>
          <p>Cartao de credito - Parcelamento em 2x sem juros</p>
        </b-input-group>
        <ButtonDefault class="mb-2" title="CADASTRAR PROFISSIONAL" color-button="#f8de40" color-title="#282828"/>
        <ButtonDefault route="Professional" title="Editar cadastro" color-button="transparent" color-title="#483698"/>
      </b-col>
      <b-col md="3">
        <img src="../assets/cartoon-3.png" width="360">
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
  }
}
</script>

<style scoped>
p {
  margin-left: 0px !important;
  font-size: 15px;
}
</style>
