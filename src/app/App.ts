import Vue from "vue";
import VueRouter, {RouteConfig} from "vue-router";
import Main from './components/app-main/app-main';

const routes: RouteConfig[] = [
    {
        path: '/',
        name: 'index-main',
        component: async () => (await import('app/pages/index-main/index-main')).default
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
        if (0 <= 1) {

        }
        return h(Main, {'class': {'page-root': true}});
    }
});