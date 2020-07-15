import Vue from 'vue';
import Componet from 'vue-class-component';
/// @ts-ignore
import template = require("text!./localConfigList.html");
/* import "css!.localConfigList.css"; */

@Componet({
    template: template
})
export default class LocalConfigList extends Vue {
}