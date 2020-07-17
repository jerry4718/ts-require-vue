import Vue from 'vue';
import { Component } from "vue-property-decorator";
/// @ts-ignore
import template = require("text!./businessList.html");
/* import "css!./businessList.css"; */

@Component({
    name: 'BusinessList',
    template: template
})
export default class BusinessList extends Vue {
}