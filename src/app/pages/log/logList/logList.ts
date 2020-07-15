import Vue from 'vue';
import Componet from 'vue-class-component';
/// @ts-ignore
import template = require("text!./logList.html");
/* import "css!.logList.css"; */

@Componet({
    template: template
})
export default class LogList extends Vue {
}