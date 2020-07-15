import Vue from 'vue';
import Componet from 'vue-class-component';
/// @ts-ignore
import template = require("text!./nomalList.html");
/* import "css!.nomalList.css"; */

@Componet({
    template: template
})
export default class NomalList extends Vue {
}