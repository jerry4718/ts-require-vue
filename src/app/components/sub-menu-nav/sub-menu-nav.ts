import Vue from 'vue';
import {Component, Prop} from "vue-property-decorator";
import "css!./sub-menu-nav.css";

@Component({
    name: 'SubMenuNav',
    template: `
        <div class="sub-menu-nav trans-on-.5s"
             :class="{'selected': selected}"
             :title="desc">
            <div class="sub-menu-nav-title">
        <span @click.stop="$emit('select')">
            <i class="trans-on-.5s fa" :class="{'fa-lg': selected}">{{selected ? '&#xf07c;' : '&#xf07b;'}}</i>
            {{name}}
        </span>
            </div>
            <div class="route-menu-bar" v-if="selected">
                <slot></slot>
            </div>
        </div>`
})
export default class SubMenuNav extends Vue {
    @Prop({type: String, required: true}) name!: string;
    @Prop({type: String, required: true}) desc!: string;
    @Prop({type: Boolean, default: false}) selected!: boolean;
}