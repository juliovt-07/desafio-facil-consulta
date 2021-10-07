<template>
  <div>
    <b-button :disabled="disabled" :style="'background:'+colorButton+';color:'+colorTitle" @click="next(route)" class="rounded-4">
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
    disabled: {
      type: Boolean
    }
  },
  methods: {
    next(route) {
      this.$router.push({ name: route, params: { form: this.form }})
    }
  }
}
</script>
