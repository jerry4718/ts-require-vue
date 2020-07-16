import Vue from 'vue';
import { Component } from "vue-property-decorator";
/// @ts-ignore
import template = require("text!./overList.html");
/* import "css!.overList.css"; */

@Component({
    name: 'order-over-list',
    template: template
})
export default class OverList extends Vue {
}