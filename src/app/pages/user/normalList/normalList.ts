import Vue from 'vue';
import {Component, Model, Prop} from "vue-property-decorator";
/// @ts-ignore
import template = require("text!./normalList.html");
/* import "css!./normalList.css"; */

@Component({
    // name: 'user-normal-list',
    template: template
})
export default class NormalList extends Vue {
    public num: number = 0;

    add() {
        this.num ++;
    }

    sub() {
        this.num --;
    }
}