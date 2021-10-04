<template>
  <div>
    <h5 class="mb-4">Dados do profissional</h5>
    <b-row align-v="center">
      <b-col cols="12" md="6">
        <b-input-group class="row align-content-lg-start mb-3" size="sm">
          <small>Nome completo</small>
          <b-form-input class="rounded-2 mt-1" placeholder="Digite o nome completo"></b-form-input>
        </b-input-group>
        <b-input-group class="row align-content-lg-start mb-3" size="sm">
          <small>CPF</small>
          <b-form-input class="rounded-2 mt-1" placeholder="Digite um CPF"></b-form-input>
        </b-input-group>
        <b-input-group class="row align-content-lg-start mb-3" size="sm">
          <small>Numero de celular</small>
          <b-form-input class="rounded-2 mt-1" placeholder="(00) 0 0000-0000"></b-form-input>
        </b-input-group>
        <b-row class="mb-3">
          <b-col>
            <b-input-group class="row align-content-lg-start" size="sm">
              <small>Estado</small>
              <b-form-input class="rounded-2 mt-1" placeholder="Selecione"></b-form-input>
            </b-input-group>
          </b-col>
          <b-col>
            <b-input-group class="row align-content-lg-start" size="sm">
              <small>Cidade</small>
              <b-form-input class="rounded-2 mt-1" placeholder="Selecione"></b-form-input>
            </b-input-group>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Professional'
}
</script>
