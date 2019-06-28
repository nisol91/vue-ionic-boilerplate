<template>
  <div>
    Home!
    <ion-fab vertical="start" horizontal="start" edge slot="fixed">
      <ion-fab-button>
        <ion-icon name="settings"></ion-icon>
      </ion-fab-button>
      <ion-fab-list side="end">
        <ion-fab-button><ion-icon name="logo-vimeo"></ion-icon></ion-fab-button>
      </ion-fab-list>
    </ion-fab>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Home',
  props: {
   
  },
  data() {
    return {
   
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
