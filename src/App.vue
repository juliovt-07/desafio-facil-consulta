<template>
  <b-container id="app">
    <div id="content" align="left" style="max-width: 50rem;">
      <b-icon-chevron-left @click="back" class="mt-4 mb-3" :class="!iconBack ? 'opacity-0' : ''"/>
      <b-card id="card-content" class="rounded-4 shadow p-md-2">
        <b-card-body>
          <h2 v-if="$route.path !== '/finalizado'" class="mb-4">{{ $route.matched[0].props.default.title }}</h2>
          <router-view></router-view>
        </b-card-body>
      </b-card>
    </div>
  </b-container>
</template>

<script>
export default {
  computed: {
    iconBack() {
      if (this.$route.path == '/' || this.$route.path == '/finalizado') {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    back() {
      if (this.$route.path !== '/' && this.$route.path !== '/finalizado') {
        this.$route.path == '/revisao' ? this.$router.push('/atendimento') : this.$router.push('/')
      }
    },
    next() {
      this.$route.path == '/' ? this.$router.push('/atendimento') : this.$router.push('/revisao')
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500&family=Open+Sans:wght@300;400;500;600&display=swap');
body {
  background-color: #FFE766 !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #282828;
  font-family: 'Open Sans', sans-serif;
  #content {
    margin: auto;
  }
  #card-content {
    margin: auto;
  }
  .b-icon {
    fill: #483698 !important;
    stroke-width: 1.5px;
    stroke: #483698;
    cursor: pointer;
  }
  .rounded-4 {
    border-radius: 20px;
  }
  input, select {
    margin-left: 10px;
    margin-right: 10px;
    border-color: rgba(72, 54, 152, 0.66);
  }
  input:focus, select:focus {
    outline: none;
    border-color: #483698;
  }
  .input-group-text {
    background: #483698;
    color: #FFF;
    border-radius: 5px 0 0 5px;
    margin-right: -1px;
    border: solid 1px #483698;
  }
  h2 {
    color: #483698;
    font-size: 36px;
  }
  small {
    font-weight: 600;
  }
  .progress {
    max-width: 220px !important;
    margin-right: 10px;
    .progress-bar {
      background: #483698;
    }
  }
  .btn {
    width: 300px !important;
    max-width: 80vw;
    padding: 3px;
    border-radius: 12px !important;
    border: none;
    font-size: 14px;
  }
  h2, button {
    font-family: 'Comfortaa', cursive !important;
  }
  img {
    margin-left: -25px;
  }
}
@media screen and (max-width: 767px) {
  .svg {
    display: none;
  }
  .b-icon {
    margin-left: 20px;
  }
  h2 {
    font-size: 22px !important;
  }
  h5 {
    font-size: 16px !important;
  }
  small {
    font-size: 12px !important;
  }
  *::placeholder {
    font-size: 12px !important;
  }
  #card-content {
    min-height: 90vh;
  }
}
@media screen and (max-width: 426px) {
  #app {
    padding: 0;
  }
  #content {
    min-width: 100vw;
  }
  #card-content {
    border-radius: 20px 20px 0 0 !important;
  }
}
</style>
