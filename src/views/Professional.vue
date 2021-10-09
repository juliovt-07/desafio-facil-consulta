<template>
  <div>
    <h5 class="mb-4">Dados do profissional</h5>
    <b-row align-v="center">
      <b-col cols="12" md="6">
        <validation-observer ref="observer" v-slot="{ invalid }">
          <b-form>
            <validation-provider name="nome" :rules="{ required: true, min: 3, max: 13 }" v-slot="validationContext">
              <b-form-group id="input-group-1">
                <b-input-group class="row align-content-lg-start mb-3" size="sm">
                  <small>Nome completo</small>
                  <b-form-input
                      id="input-1"
                      name="input-1"
                      v-model="form.name"
                      type="text"
                      autofocus
                      class="rounded-2 mt-1"
                      placeholder="Digite o nome completo"
                      :state="getValidationState(validationContext)"
                      aria-describedby="input-1-live-feedback"
                  ></b-form-input>
                  <b-form-invalid-feedback id="input-1-live-feedback">
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-input-group>
              </b-form-group>
            </validation-provider>
            <validation-provider name="cpf" :rules="{ required: true, min: 14 }" v-slot="validationContext">
              <b-form-group id="input-group-2">
                <b-input-group style="max-width: 220px" class="row align-content-lg-start mb-3" size="sm">
                  <small>CPF</small>
                  <b-form-input
                      id="input-2"
                      name="input-2"
                      v-mask="'###.###.###-##'"
                      v-model="form.cpf"
                      type="text"
                      :no-wheel="true"
                      class="rounded-2 mt-1"
                      placeholder="Digite um CPF"
                      :state="getValidationState(validationContext)"
                  ></b-form-input>
                </b-input-group>
              </b-form-group>
            </validation-provider>
            <validation-provider name="celular" :rules="{ required: true, min: 16 }" v-slot="validationContext">
              <b-form-group id="input-group-3">
                <b-input-group style="max-width: 220px" class="row align-content-lg-start mb-3" size="sm">
                  <small>Numero de celular</small>
                  <b-form-input
                      id="input-3"
                      name="input-3"
                      v-mask="'(##) # ####-####'"
                      v-model="form.number"
                      type="text"
                      :no-wheel="true"
                      class="rounded-2 mt-1"
                      placeholder="(00) 0 0000-0000"
                      :state="getValidationState(validationContext)"
                  ></b-form-input>
                </b-input-group>
              </b-form-group>
            </validation-provider>
            <b-row class="mb-3">
              <b-col>
                <b-input-group class="row align-content-lg-start" size="sm">
                  <small>Estado</small>
                  <b-form-select required class="rounded-2 mt-1 p-1 bg-white" v-model="form.state" :options="states" value-field="state" text-field="state"></b-form-select>
                </b-input-group>
              </b-col>
              <b-col>
                <validation-provider name="cidade" :rules="{ required: true }" v-slot="validationContext">
                  <b-form-group id="input-group-4">
                    <b-input-group class="row align-content-lg-start" size="sm">
                      <small>Cidade</small>
                      <b-form-select
                          id="select-1"
                          name="select-1"
                          class="rounded-2 mt-1 p-1 bg-white"
                          v-model="form.city"
                          :options="cities"
                          :state="getValidationState(validationContext)"
                          aria-describedby="select-1-live-feedback"
                      ></b-form-select>
                      <b-form-invalid-feedback id="select-1-live-feedback">
                        {{ validationContext.errors[0] }}
                      </b-form-invalid-feedback>
                    </b-input-group>
                  </b-form-group>
                </validation-provider>
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
            <ButtonDefault :disabled="invalid" route="Attendance" :form="form"/>
          </b-form>
        </validation-observer>
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
    this.form = this.$store.state.form
  },
  computed: {
    cities() {
      let find_state = this.states.find(s => s.state == this.form.state)
      return find_state.cities
    }
  },
  methods: {
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    }
  }
}
</script>
