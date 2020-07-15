import Vue from 'vue';
import Componet from 'vue-class-component';
/// @ts-ignore
import template = require("text!./businessList.html");
/* import "css!.businessList.css"; */

@Componet({
    template: template
})
export default class BusinessList extends Vue {
}