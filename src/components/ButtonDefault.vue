<template>
  <div>
    <b-button :style="'background:'+colorButton+';color:'+colorTitle" @click="next(route)" class="rounded-4">
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
      required: false,
      default: '#483698'
    },
    colorTitle: {
      type: String,
      required: false,
      default: '#FFF'
    },
    route: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true,
      default: 'PRÓXIMO'
    },
    form: {
      type: Object,
      required: false
    }
  },
  methods: {
    next(route) {
      this.$router.push({ name: route })
    }
  }
}
</script>
