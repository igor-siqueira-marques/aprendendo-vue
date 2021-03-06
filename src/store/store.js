import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import stocks from './modules/stocks'
import portifolio from './modules/portifolio'

export default new Vuex.Store({
    modules: {
        stocks,
        portifolio
    }
})