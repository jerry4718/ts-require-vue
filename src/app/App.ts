import Vue from "vue";
import VueRouter from "vue-router";
import Main from './components/main/main';

const routes = [];

const router = new VueRouter({
    routes,
});

new Vue({
    el: '#app',
    router,
    render(h) {
        if (0 <= 1) {

        }
        return h(Main, {'class': {'page-root': true}});
    }
});