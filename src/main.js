import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// axios.all([axios({
// 	url: 'http://	httpbin.org/'
// }),axios({
// 	url: 'http://httpbin.org/',
// 	method:'get'
// })]).then((res) => {
// 	console.log(res);
// })
