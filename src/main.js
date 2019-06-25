import Vue from 'vue'
import App from './App.vue'

//bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//bootstrap vue
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

//vue router 
import router from './router'

//ionic
// import '@ionic/core/css/core.css';
// import '@ionic/core/css/ionic.bundle.css';

// import IonicVue from '@ionic/vue';

// Vue.use(IonicVue);

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router
}).$mount('#app')