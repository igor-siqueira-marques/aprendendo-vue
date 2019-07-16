import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home.vue'
import Stocks from '@/components/stocks/Stocks.vue'
import Portifolio from '@/components/portifolio/Portifolio.vue'

import Intention from '@/components/intention/Intention.vue'

Vue.use(Router);


export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/portifolio',
            component: Portifolio
        },
        {
            path: '/stocks',
            component: Stocks
        },
        {
            path: '/intention',
            component: Intention
        }
    ]

})