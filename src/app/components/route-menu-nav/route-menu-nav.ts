import Vue from 'vue';
import {Component, Prop} from "vue-property-decorator";
import "css!./route-menu-nav.css";

@Component({
    // name: 'route-menu-nav',
    template: `
<div class="route-menu-nav"
     :class="{'selected': selected}"
     :title="desc">
    <span @click.stop="$emit('select')">{{name}}</span>
</div>`
})
export default class RouteMenuNav extends Vue {
    @Prop({type: String, required: true}) name!: string;
    @Prop({type: String, required: true}) desc!: string;
    @Prop({type: Boolean, default: false}) selected!: boolean;
}