import Vue from 'vue';
import {Component, Prop} from "vue-property-decorator";
import "css!./sub-menu-nav.css";
import FaIcon from "../fa-icon/fa-icon";

@Component({
    name: 'SubMenuNav',
    components: {
        FaIcon
    },
    template: `
        <div class="sub-menu-nav trans-on-.5s"
             :class="{'selected': selected}"
             :title="desc">
            <div class="sub-menu-nav-title">
        <span @click.stop="$emit('select')">
            <FaIcon class="trans-on-.5s" :class="{'fa-lg': selected}" :name="icon"></FaIcon>
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

    get icon() {
        return this.selected ? 'icon-folder-open' : 'icon-folder-close';
    }
}