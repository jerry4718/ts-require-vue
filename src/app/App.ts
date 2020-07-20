import Vue from "vue";
import VueRouter, {RouteConfig} from "vue-router";
/// @ts-ignore
import Main from './components/app-main/app-main.js';

const routes: RouteConfig[] = [
    {
        path: '/',
        name: 'index-main',
        /// @ts-ignore
        component: async () => (await import('app/pages/index-main/index-main.js')).default
    },
    {
        path: '/index-main',
        redirect: '/',
    }
];

Vue.use(VueRouter);

new Vue({
    el: '#app',
    router: new VueRouter({
        // mode: "history",
        base: "/",
        routes: routes,
    }),
    render(h) {
        return h(Main, {'class': {'page-root': true}});
    }
});