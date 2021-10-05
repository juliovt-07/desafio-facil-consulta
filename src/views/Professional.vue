<template>
  <div>
    <h5 class="mb-4">Dados do profissional</h5>
    <b-row align-v="center">
      <b-col cols="12" md="6">
        <b-input-group class="row align-content-lg-start mb-3" size="sm">
          <small>Nome completo</small>
          <b-form-input class="rounded-2 mt-1" placeholder="Digite o nome completo"></b-form-input>
        </b-input-group>
        <b-input-group style="max-width: 220px" class="row align-content-lg-start mb-3" size="sm">
          <small>CPF</small>
          <b-form-input class="rounded-2 mt-1" placeholder="Digite um CPF"></b-form-input>
        </b-input-group>
        <b-input-group style="max-width: 220px" class="row align-content-lg-start mb-3" size="sm">
          <small>Numero de celular</small>
          <b-form-input class="rounded-2 mt-1" placeholder="(00) 0 0000-0000"></b-form-input>
        </b-input-group>
        <b-row class="mb-3">
          <b-col>
            <b-input-group class="row align-content-lg-start" size="sm">
              <small>Estado</small>
              <b-form-select class="rounded-2 mt-1 p-1 bg-white" :options="['Maranhao']"></b-form-select>
            </b-input-group>
          </b-col>
          <b-col>
            <b-input-group class="row align-content-lg-start" size="sm">
              <small>Cidade</small>
              <b-form-select class="rounded-2 mt-1 p-1 bg-white" :options="['Imperatriz']"></b-form-select>
            </b-input-group>
          </b-col>
        </b-row>
        <b-row align-v="center">
          <b-col cols="9" md="9" xl="9" sm="6">
            <b-progress :value="$route.path == '/' ? 50 : 100" class="mb-3"></b-progress>
          </b-col>
          <b-col class="mb-3">
            {{ $route.path == '/' ? '1' : '2' }} de 2
          </b-col>
        </b-row>
        <ButtonDefault route="Attendance"/>
      </b-col>
      <b-col md="3">
        <img src="../assets/cartoon-1.png" width="360">
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ButtonDefault from "@/components/ButtonDefault";

export default {
  name: 'Professional',
  components: {
    ButtonDefault
  }
}
</script>
