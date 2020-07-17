import Vue from 'vue';
import {Component} from "vue-property-decorator";
/// @ts-ignore
import template = require("text!./thirdConfigList.html");
/* import "css!./thirdConfigList.css"; */

@Component({
    name: 'ThirdConfigList',
    template: template
})
export default class ThirdConfigList extends Vue {
    public num: number = 0;

    add() {
        this.num++;
    }

    sub() {
        this.num--;
    }
}