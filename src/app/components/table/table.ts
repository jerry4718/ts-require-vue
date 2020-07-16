import Vue from 'vue';
import { Component } from "vue-property-decorator";
/// @ts-ignore
import template = require("text!./table.html");
/* import "css!./table.css"; */

@Component({
    // name: 'table',
    template: template
})
export default class Table extends Vue {
}