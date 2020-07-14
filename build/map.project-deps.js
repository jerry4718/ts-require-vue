function m(src, min) {
  return { src, min }
}

module.exports = {
  // typescript
  "ts/tslib.js": m("tslib/tslib.js"),

  // require.js and plugins
  "requirejs/require.js": m("requirejs/require.js"),
  "requirejs/require-css.js": m("require-css/css.js", "require-css/css.min.js"),
  "requirejs/require-text.js": m("requirejs-text/text.js"),

  // vue
  "vue/vue.js": m("vue/dist/vue.js", "vue/dist/vue.min.js"),
  "vue/vue-router.js": m("vue-router/dist/vue-router.js", "vue-router/dist/vue-router.min.js"),
};