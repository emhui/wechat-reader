import Vue from 'vue'
import { Drawer, message } from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './lang/index'
import './assets/style/icon.css'
import './assets/style/globe.scss'

Vue.config.productionTip = false

Vue.use(Drawer)

Vue.prototype.$message = message

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
