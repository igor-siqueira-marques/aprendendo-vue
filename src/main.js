import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

Vue.config.productionTip = false

import router from '@/router'
import store from './store/store'
import './plugins/axios'

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
