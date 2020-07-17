import Vue from 'vue';
import { Component } from "vue-property-decorator";
/// @ts-ignore
import template = require("text!./localConfigList.html");
/* import "css!./localConfigList.css"; */

@Component({
    name: 'LocalConfigList',
    template: template
})
export default class LocalConfigList extends Vue {
}