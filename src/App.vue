<template>
  <b-container id="app">
    <div id="content" align="left" style="max-width: 50rem;">
      <b-icon-chevron-left @click="back" class="mt-4 mb-3" :class="$route.path == '/' ? 'opacity-0' : ''"/>
      <b-card id="card-content" class="rounded-4 shadow p-md-2">
        <b-card-body>
          <h2 class="mb-4">{{ $route.matched[0].props.default.title }}</h2>
          <router-view></router-view>
          <b-row class="mt-3" v-show="$route.path !== '/revisao'">
            <b-col>
              <b-row>
                <b-col cols="8" md="5" xl="4" sm="6">
                  <b-progress :value="$route.path == '/' ? 50 : 100" class="mb-3"></b-progress>
                </b-col>
                <b-col>
                  {{ $route.path == '/' ? '1' : '2' }} de 2
                </b-col>
              </b-row>
              <b-button @click="next" class="rounded-4">PRÓXIMO</b-button>
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>
    </div>
  </b-container>
</template>

<script>
export default {
  methods: {
    back() {
      this.$route.path == '/revisao' ? this.$router.push('/atendimento') : this.$router.push('/')
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
  color: #2c3e50;
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
  input {
    margin-left: 11px;
    border-color: rgba(72, 54, 152, 0.66);
  }
  input:focus {
    outline: none;
    border-color: #483698;
  }
  h2 {
    color: #483698;
    font-size: 36px;
  }
  .progress {
    max-width: 200px !important;
    .progress-bar {
      background: #483698;
    }
  }
  .btn {
    width: 300px !important;
    max-width: 70vw;
    padding: 3px;
    border-radius: 12px !important;
    background-color: #483698;
  }
  h2, button {
    font-family: 'Comfortaa', cursive !important;
  }
}
</style>
