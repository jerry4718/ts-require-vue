define(function () {
    require.config({
        paths: {
            'tslib': '@libs/ts/tslib',
            'vue': '@esm.amd/vue.esm',
            'vue-cmd': '@libs/vue/vue',
            'vue-router': '@esm.amd/vue-router.esm',
            'vue-router-cmd': '@libs/vue/vue-router',
            'vue-class-component': '@libs/vue/vue-class-component',
            'vue-property-decorator': '@libs/vue/vue-property-decorator',
        },
        map: {
            '*': {
                'css': '@libs/requirejs/require-css',
                'text': '@libs/requirejs/require-text',
            },
        },
    });
});