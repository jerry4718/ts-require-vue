import Vue from 'vue';
import Componet from 'vue-class-component';
/// @ts-ignore
import template = require("text!./main.html");
/* import "css!.main.css"; */

@Componet({
    template: template
})
export default class Main extends Vue {
}