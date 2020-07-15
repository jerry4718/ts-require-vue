define({
    paths: {
        tslib: '@libs/ts/tslib',
        Vue: '@libs/vue/vue',
        VueRouter: '@libs/vue/vue-router',
        App: 'app/App',
    },
    map: {
        '*': {
            'css': '@libs/requirejs/require-css',
            'text': '@libs/requirejs/require-text',
        },
    },
});