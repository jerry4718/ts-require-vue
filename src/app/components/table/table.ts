import Vue from 'vue';
import Componet from 'vue-class-component';
/// @ts-ignore
import template = require("text!./table.html");
/* import "css!.table.css"; */

@Componet({
    template: template
})
export default class Table extends Vue {
}