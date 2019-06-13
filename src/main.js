import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import Main from './components/Main.vue'
import News from './components/News.vue'
import "./assets/style/normalize.css"
import "./assets/style/style.css"
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate);
Vue.use(VueRouter)
Vue.use(VueAxios, axios)

const routes = [
     { path: '/', component: Main},
     { path: '/adminnews', component: News},
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
