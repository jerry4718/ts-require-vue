import Vue from 'vue';
import Componet from 'vue-class-component';
/// @ts-ignore
import template = require("text!./menuList.html");
/* import "css!.menuList.css"; */

@Componet({
    template: template
})
export default class MenuList extends Vue {
}