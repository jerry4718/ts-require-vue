import Vue from 'vue';
import Componet from 'vue-class-component';
/// @ts-ignore
import template = require("text!./blackList.html");
/* import "css!.blackList.css"; */

@Componet({
    template: template
})
export default class BlackList extends Vue {
}