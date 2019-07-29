import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://curso-vue-e7de3.firebaseio.com/'
// axios.defaults.headers.common['Authorization'] = 'abc123'
// axios.defaults.headers.get['Accepts'] = 'application/json'
// axios.defaults.headers.common['Postman-token'] = '619a1490-b106-4a53-a00c-8c0d6f740898'

Vue.use({
    install(Vue) {
        // Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'http://localhost:8081/treinamento/v1/users/',
            // headers: {
            //     "Accept": "*/*",
            //     "Cache-Control": "no-cache",
            //     "Postman-Token": "c42a6102-2aa1-43f2-93c6-cbe21486b81b",
            // }
        })
    }
})