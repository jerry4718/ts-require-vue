import Vue from 'vue';
import { Component } from "vue-property-decorator";
/// @ts-ignore
import template = require("text!./normalList.html");
/* import "css!.normalList.css"; */

@Component({
    name: 'order-normal-list',
    template: template
})
export default class NormalList extends Vue {
}