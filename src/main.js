import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import Amplify from 'aws-amplify'
import '@aws-amplify/ui-vue'
import aws_export from './aws-exports'

Amplify.configure(aws_export)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
