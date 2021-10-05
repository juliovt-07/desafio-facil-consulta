<template>
  <div>
    <h5 class="mb-4">Detalhes do atendimento</h5>
    <b-row align-v="center">
      <b-col cols="12" md="6">
        <b-input-group class="row align-content-lg-start mb-3" size="sm">
          <small>Especialidade principal</small>
          <b-form-input class="rounded-2 mt-1" placeholder="Selecione a especialidade"></b-form-input>
        </b-input-group>
        <b-input-group style="max-width: 220px" class="row align-content-lg-start mb-3" size="sm">
          <small>Informe o preço da consulta</small>
          <b-input-group size="sm" prepend="R$" class="mt-1">
            <b-form-input style="margin-left: -1px;" class="rounded-2" placeholder="Valor"></b-form-input>
          </b-input-group>
        </b-input-group>
        <b-input-group style="max-width: 220px" class="row align-content-lg-start mb-3" size="sm">
          <small>Numero de celular</small>
          <b-form-input class="rounded-2 mt-1" placeholder="(00) 0 0000-0000"></b-form-input>
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
  }
}
</script>
