import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
import { Swipe, SwipeItem,Lazyload } from 'vant'
Vue.use(Swipe).use(SwipeItem).use(Lazyload )
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
