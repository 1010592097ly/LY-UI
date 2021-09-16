import Vue from 'vue'
import App from './App.vue'
import LyButton from './components/button.vue'
import LyDialog from './components/dialog.vue'
import LyInput from './components/input.vue'
Vue.config.productionTip = false


import './assets/fonts/iconfont.css'
//全局注册组件
Vue.component(LyButton.name, LyButton)
Vue.component(LyDialog.name, LyDialog)
Vue.component(LyInput.name, LyInput)
new Vue({
  render: h => h(App),
}).$mount('#app')
