import Vue from 'vue'
import App from './App.vue'
import LyButton from './components/button.vue'
Vue.config.productionTip = false


import './assets/fonts/iconfont.css'
//全局注册button组件
Vue.component(LyButton.name, LyButton)
new Vue({
  render: h => h(App),
}).$mount('#app')
