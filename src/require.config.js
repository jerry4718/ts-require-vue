define({
    paths: {
        tslib: '@libs/ts/tslib.js',
        Vue: '@libs/vue/vue.js',
        VueRouter: '@libs/vue/vue-router.js',
        App: 'app/App',
    },
    map: {
        '*': {
            'css': '@libs/requirejs/require-css.js',
            'text': '@libs/requirejs/require-text.js',
        },
    },
});