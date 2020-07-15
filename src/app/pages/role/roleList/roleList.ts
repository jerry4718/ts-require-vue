import Vue from 'vue';
import Componet from 'vue-class-component';
/// @ts-ignore
import template = require("text!./roleList.html");
/* import "css!.roleList.css"; */

@Componet({
    template: template
})
export default class RoleList extends Vue {
}