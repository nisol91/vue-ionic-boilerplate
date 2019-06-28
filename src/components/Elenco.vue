<template>
  <div>
    Elenco
    <div v-for="elemento in elementi" :key="elemento.id">
      <router-link :to="{ name: 'ElementoSingolo', params: { elementoId: elemento.id, elementoTitolo: elemento.title } }">

        {{elemento.title}}
        {{elemento.id}}

      </router-link>
    </div>
    <ion-fab vertical="start" horizontal="start" edge slot="fixed">
      <ion-fab-button>
        <ion-icon name="settings"></ion-icon>
      </ion-fab-button>
      <ion-fab-list side="end">
        <!-- <router-link to="/"> -->
          <ion-fab-button><ion-icon name="logo-vimeo"></ion-icon></ion-fab-button>
        <!-- </router-link> -->
      </ion-fab-list>
    </ion-fab>
  </div>
</template>

<script>
  /* eslint-disable */
  export default {
    name: 'Pagina',
    props: {

    },
    data() {
      return {
        elementi: [],
      }
    },
    created: function () {
      this.getDataFromAPI()
    },
    methods: {
      async getDataFromAPI() {
        try {
          const req = await fetch('https://jsonplaceholder.typicode.com/todos')

          this.elementi = await req.json()
          console.log(this.elementi);

        } catch (e) {
          console.error(`Error: ${e}`)
        }
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .active {
    color: red;
  }
</style>