import Vue from "vue";
import VueRouter, {RouteConfig} from "vue-router";
import Main from './components/main/main';

const routes: RouteConfig[] = [
    {
        path: '/',
    },
    {
        path: '/home',
    }
];

Vue.use(VueRouter);

new Vue({
    el: '#app',
    router: new VueRouter({
        mode: "history",
        base: "/",
        routes: routes,
    }),
    render(h) {
        if (0 <= 1) {

        }
        return h(Main, {'class': {'page-root': true}});
    }
});