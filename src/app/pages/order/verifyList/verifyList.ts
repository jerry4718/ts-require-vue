import Vue from 'vue';
import { Component } from "vue-property-decorator";
/// @ts-ignore
import template = require("text!./verifyList.html");
/* import "css!./verifyList.css"; */

@Component({
    name: 'VerifyList',
    template: template
})
export default class VerifyList extends Vue {
}