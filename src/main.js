import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import "./assets/style/normalize.css"
import "./assets/style/style.css"

Vue.use(VueRouter)
Vue.use(VueAxios, axios)

const routes = [
     { path: '/', component: App},
]

const router=new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition){
        return {x: 0, y:0}
    }
})

new Vue({
    render: h => h(App),
    el: '#app',
    router
})

