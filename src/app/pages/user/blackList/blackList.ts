import Vue from 'vue';
import { Component } from "vue-property-decorator";
/// @ts-ignore
import template = require("text!./blackList.html");
/* import "css!.blackList.css"; */

@Component({
    name: 'user-black-list',
    template: template
})
export default class BlackList extends Vue {
}