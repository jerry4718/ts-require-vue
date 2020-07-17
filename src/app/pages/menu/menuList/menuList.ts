import Vue from 'vue';
import { Component } from "vue-property-decorator";
/// @ts-ignore
import template = require("text!./menuList.html");
/* import "css!./menuList.css"; */

@Component({
    name: 'MenuList',
    template: template
})
export default class MenuList extends Vue {
}