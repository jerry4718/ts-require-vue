import Vue from 'vue';
import Componet from 'vue-class-component';
/// @ts-ignore
import template = require("text!./accountList.html");
/* import "css!.accountList.css"; */

@Componet({
    template: template
})
export default class AccountList extends Vue {
}