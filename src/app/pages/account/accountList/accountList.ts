import Vue from 'vue';
import { Component } from "vue-property-decorator";
/// @ts-ignore
import template = require("text!./accountList.html");
/* import "css!.accountList.css"; */

@Component({
    name: 'account-account-list',
    template: template
})
export default class AccountList extends Vue {
}