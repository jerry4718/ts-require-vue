import Vue from 'vue';
import Componet from 'vue-class-component';
/// @ts-ignore
import template = require("text!./thirdConfigList.html");
/* import "css!.thirdConfigList.css"; */

@Componet({
    template: template
})
export default class ThirdConfigList extends Vue {
}