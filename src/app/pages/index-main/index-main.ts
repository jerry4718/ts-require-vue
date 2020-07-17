import Vue from 'vue';
import { Component } from "vue-property-decorator";
/// @ts-ignore
import template = require("text!./index-main.html");
/* import "css!./index-main.css"; */

@Component({
    name: 'IndexMain',
    template: template
})
export default class IndexMain extends Vue {
}