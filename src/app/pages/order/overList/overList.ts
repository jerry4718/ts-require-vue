import Vue from 'vue';
import Componet from 'vue-class-component';
/// @ts-ignore
import template = require("text!./overList.html");
/* import "css!.overList.css"; */

@Componet({
    template: template
})
export default class OverList extends Vue {
}