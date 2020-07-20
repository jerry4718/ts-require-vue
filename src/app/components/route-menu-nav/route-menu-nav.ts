import Vue from 'vue';
import {Component, Prop} from "vue-property-decorator";
import "css!./route-menu-nav.css";
import FaIcon from "../fa-icon/fa-icon";

@Component({
    name: 'RouteMenuNav',
    components: {
        FaIcon
    },
    template: `
        <div class="route-menu-nav"
             :class="{'selected': selected}"
             :title="desc">
            <span @click.stop="$emit('select')">
                <FaIcon class="trans-on-.5s" :class="{'fa-lg': selected}" :name="icon"></FaIcon>
                {{name}}
            </span>
        </div>`,
    /*render(h) {
        return h('div', {
                'class': {'route-menu-nav': true, 'selected': this.selected},
                'attrs': {'title': this.desc},
            },
            [
                h('span',
                    {
                        on: {
                            click: e => {
                                this.$emit('select');
                                e.stopPropagation()
                            }
                        }
                    },
                    [this.name]
                )
            ]
        );
    }*/
})
export default class RouteMenuNav extends Vue {
    @Prop({type: String, required: true}) name!: string;
    @Prop({type: String, required: true}) desc!: string;
    @Prop({type: String, required: true}) icon!: string;
    @Prop({type: Boolean, default: false}) selected!: boolean;
}