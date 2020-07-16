import Vue from 'vue';
import { Component } from "vue-property-decorator";
/// @ts-ignore
import template = require("text!./main.html");
/* import "css!.main.css"; */

@Component({
    name: 'main',
    template: template
})
export default class Main extends Vue {
}