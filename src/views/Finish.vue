<template>
  <div class="finish">
    <b-row class="py-3" align-v="center">
      <b-col>
        <h1>Dr.ª {{ $store.state.form.name.split(" ", 1)[0] }} cadastrado com sucesso</h1>
        <b-row>
          <img src="../assets/logo.png" class="mx-auto mt-4">
        </b-row>
      </b-col>
    </b-row>
    <div class="text-center mt-4">
      <ButtonDefault :reset="true" title="Novo cadastro" route="Professional"/>
    </div>
  </div>
</template>

<script>
import ButtonDefault from "@/components/ButtonDefault";
export default {
  name: 'Finish',
  components: {
    ButtonDefault
  },
  computed: {
    form() {
      return this.$store.state.form
    }
  }
}
</script>

<style lang="scss">
h1 {
  text-align: center !important;
  color: #483698;
  font-size: 28px !important;
  font-weight: 600 !important;
}
.finish {
  img {
    max-width: 100px;
  }
}
</style>
