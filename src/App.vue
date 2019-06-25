<template>
  <div id="app">
    <div>
      <b-nav small>
        <router-link to="/">Home</router-link>
        <router-link to="/pagina">Pagina</router-link>
        <router-link to="/elenco">Elenco</router-link>

      </b-nav>
    </div>
    <main class="App__main">
      <transition
        name="fade"
        mode="out-in"
      >
    <!-- routes will be rendered here -->

        <router-view/>
      </transition>
    </main>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import Home from './components/Home.vue'
import Pagina from './components/Pagina.vue'
import Elenco from './components/Elenco.vue'
import ElementoSingolo from './components/ElementoSingolo.vue'





export default {
  name: 'app',
  components: {
    Home,
    Pagina,
    Elenco,
    ElementoSingolo,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 10px;
}
/* transition */
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}



a {
  margin: 0 10px;
  color: green!important;
}
a:hover {
  text-decoration: none!important;
}
</style>
