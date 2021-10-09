<template>
  <div>
    <b-button
        type="submit"
        :disabled="disabled"
        :style="'background:'+colorButton+';color:'+colorTitle"
        class="rounded-4"
        @click="next(route)"
    >
      {{ title }}
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'ButtonDefault',
  props: {
    colorButton: {
      type: String,
      default: '#483698'
    },
    colorTitle: {
      type: String,
      default: '#FFF'
    },
    route: {
      type: String
    },
    title: {
      type: String,
      default: 'PRÓXIMO'
    },
    form: {
      type: Object,
      required: false
    },
    reset: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    }
  },
  methods: {
    next(route) {
      this.$store.commit('updateForm', this.form)
      if (this.reset) {
        this.$store.commit('reset')
      }
      this.$router.push({ name: route })
      console.log(this.$store.state.form)
    }
  }
}
</script>
