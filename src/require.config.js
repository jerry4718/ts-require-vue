define({
    paths: {
        'tslib': '@libs/ts/tslib',
        'vue': '@libs/vue/vue',
        'vue-router': '@libs/vue/vue-router',
        'vue-class-component': '@libs/vue/vue-class-component',
        'vue-property-decorator': '@libs/vue/vue-property-decorator',
        'App': 'app/App',
    },
    map: {
        '*': {
            'css': '@libs/requirejs/require-css',
            'text': '@libs/requirejs/require-text',
        },
    },
});