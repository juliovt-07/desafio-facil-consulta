<template>
  <div>
    <h5 class="mb-4">Dados do profissional</h5>
    <b-row align-v="center">
      <b-col cols="12" md="6">
        <b-input-group class="row align-content-lg-start mb-3" size="sm">
          <small>Nome completo</small>
          <b-form-input v-model="form.name" min="3" type="text" required autofocus class="rounded-2 mt-1" placeholder="Digite o nome completo"></b-form-input>
        </b-input-group>
        <b-input-group style="max-width: 220px" class="row align-content-lg-start mb-3" size="sm">
          <small>CPF</small>
          <b-form-input v-model="form.cpf" required type="number" :no-wheel="true" class="rounded-2 mt-1" placeholder="Digite um CPF"></b-form-input>
        </b-input-group>
        <b-input-group style="max-width: 220px" class="row align-content-lg-start mb-3" size="sm">
          <small>Numero de celular</small>
          <b-form-input v-model="form.number" required type="number" :no-wheel="true" class="rounded-2 mt-1" placeholder="(00) 0 0000-0000"></b-form-input>
        </b-input-group>
        <b-row class="mb-3">
          <b-col>
            <b-input-group class="row align-content-lg-start" size="sm">
              <small>Estado</small>
              <b-form-select required class="rounded-2 mt-1 p-1 bg-white" v-model="form.state" :options="states" value-field="state" text-field="state"></b-form-select>
            </b-input-group>
          </b-col>
          <b-col>
            <b-input-group class="row align-content-lg-start" size="sm">
              <small>Cidade</small>
              <b-form-select required class="rounded-2 mt-1 p-1 bg-white" v-model="form.city" :options="cities"></b-form-select>
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
        <ButtonDefault route="Attendance" :form="form"/>
      </b-col>
      <b-col md="3">
        <img src="../assets/cartoon-1.png" class="svg" width="360">
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
  },
  data() {
    return {
      form: {
        state: 'Paraná',
        city: null
      },
      states: [
        { state: 'Paraná', cities: ['Londrina', 'Maringá'] },
        { state: 'Rio Grande do Sul', cities: ['Pelotas', 'Porto Alegre'] },
        { state: 'Santa Catarina', cities: ['Florianópolis', 'Joinville'] }
      ]
    }
  },
  mounted() {
    if (this.$route.params.form) {
      this.form = this.$route.params.form
    }
  },
  computed: {
    cities() {
      let find_state = this.states.find(s => s.state == this.form.state)
      return find_state.cities
    }
  }
}
</script>
