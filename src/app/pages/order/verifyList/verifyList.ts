import Vue from 'vue';
import { Component } from "vue-property-decorator";
/// @ts-ignore
import template = require("text!./verifyList.html");
/* import "css!./verifyList.css"; */

@Component({
    // name: 'order-verify-list',
    template: template
})
export default class VerifyList extends Vue {
}