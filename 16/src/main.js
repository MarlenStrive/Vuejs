import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './router.js';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes
    //mode: 'history' // 'hash'
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})
