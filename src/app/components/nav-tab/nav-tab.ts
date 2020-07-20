import Vue from 'vue';
import { Component } from "vue-property-decorator";
/// @ts-ignore
import template = require("text!./nav-tab.html");
/* import "css!./nav-tab.css"; */

@Component({
    name: 'NavTab',
    template: template
})
export default class NavTab extends Vue {
}