import Vue from 'vue'
import App from './App.vue'

import '@/assets/css/global.styl'
import 'normalize.css'
import 'animate.css'

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')