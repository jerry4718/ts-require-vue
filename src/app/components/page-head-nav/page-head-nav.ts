import Vue from 'vue';
import {Component, Prop} from "vue-property-decorator";
import "css!./page-head-nav.css";

@Component({
    name: 'PageHeadNav',
    template: `
        <div class="page-head-nav"
             :class="{'selected': selected}"
             :title="desc">
            <span @click.stop="$emit('select')">{{name}}</span>
        </div>`
})
export default class PageHeadNav extends Vue {
    @Prop({type: String, required: true}) name!: string;
    @Prop({type: String, required: true}) desc!: string;
    @Prop({type: Boolean, default: false}) selected!: boolean;
}