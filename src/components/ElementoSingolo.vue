<template>
  <div>
    elemento singolo
    <div>{{idElemento}}</div>
    <div>{{titoloElemento}}</div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'ElementoSingolo',
  props: {
   
  },
  data() {
    return {
      idElemento: this.$route.params.elementoId,
      titoloElemento: this.$route.params.elementoTitolo,
    }
  },
  created: function () {

  },
  methods: {
   
  },
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
