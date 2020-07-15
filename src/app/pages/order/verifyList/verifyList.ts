import Vue from 'vue';
import Componet from 'vue-class-component';
/// @ts-ignore
import template = require("text!./verifyList.html");
/* import "css!.verifyList.css"; */

@Componet({
    template: template
})
export default class VerifyList extends Vue {
}