import Vue from 'vue';
import { Component } from "vue-property-decorator";
/// @ts-ignore
import template = require("text!./blackList.html");
/* import "css!./blackList.css"; */

@Component({
    name: 'BlackList',
    template: template
})
export default class BlackList extends Vue {
}