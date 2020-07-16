import Vue from 'vue';
import { Component } from "vue-property-decorator";
/// @ts-ignore
import template = require("text!./menuList.html");
/* import "css!./menuList.css"; */

@Component({
    // name: 'menu-menu-list',
    template: template
})
export default class MenuList extends Vue {
}