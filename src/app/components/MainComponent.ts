import {VueComponent} from "common/VueComponent";
/// @ts-ignore
import template = require("text!./main.html");
import "css!./main.css";


export default VueComponent({
    template: template,
    created() {},
    destroyed() {},
    methods: {
        async sub() {
            await new Promise(res => setTimeout(res, 500));
            console.log(1);
        }
    },
    watch: {

    },
    computed: {

    },
    data: {

    }
})