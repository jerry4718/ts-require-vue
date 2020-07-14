import Vue from "vue";
import VueRouter from "vue-router";
import MainComponent from "./components/MainComponent";

const routes = [];

const router = new VueRouter({
    routes,
});

new Vue({
    el: '#app',
    router,
    render(h) {
        return h(MainComponent, {'class': {'page-root': true}});
    }
});