import Vue from 'vue';
import { Component } from "vue-property-decorator";
/// @ts-ignore
import template = require("text!./roleList.html");
/* import "css!./roleList.css"; */

@Component({
    name: 'RoleList',
    template: template
})
export default class RoleList extends Vue {
}