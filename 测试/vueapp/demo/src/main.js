import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
import {SubmitBar,Card,GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn,PullRefresh,List,Row, Col ,Toast,Field, CellGroup,Tab, Tabs ,Button,Icon,NavBar,Tabbar, TabbarItem,Swipe, SwipeItem,Lazyload} from 'vant'
Vue.use(SubmitBar).use(Card).use(GoodsAction).use(GoodsActionBigBtn).use(GoodsActionMiniBtn).use(PullRefresh).use(List).use(Row).use(Col).use(Toast).use(Field).use(CellGroup).use(Button).use(Icon).use(NavBar).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload).use(Tab).use(Tabs)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
