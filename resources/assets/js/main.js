import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import VueRouter from 'vue-router/dist/vue-router.common.js'

Vue.use(VueRouter)

import Index from './components/Index.vue'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Example }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
