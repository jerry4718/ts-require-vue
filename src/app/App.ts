import Vue from "vue";
import VueRouter, {RouteConfig} from "vue-router";
import Main from './components/app-main/app-main.js';

Vue.use(VueRouter);

new Vue({
    el: '#app',
    components: {"main-component": Main},
    template: `
        <main-component class="page-root"></main-component>`,
    router: new VueRouter({
        // mode: "history",
        base: "/",
        routes: [
            {
                path: '/',
                name: 'index-main',
                component: () => import('./pages/index-main/index-main.js')
            },
            {
                path: '/index-main',
                redirect: '/',
            }
        ],
    }),
});