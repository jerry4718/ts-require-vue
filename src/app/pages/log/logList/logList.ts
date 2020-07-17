import Vue from 'vue';
import { Component } from "vue-property-decorator";
/// @ts-ignore
import template = require("text!./logList.html");
/* import "css!./logList.css"; */

@Component({
    name: 'LogList',
    template: template
})
export default class LogList extends Vue {
}