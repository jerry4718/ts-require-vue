const fs = require("fs");
const path = require("path");
const config = require("./config.js");
const mkdir = require("./utils/mkdir.js");

const files = {
    // typescript
    "tslib/tslib.js": "ts/tslib.js",

    // require.js and plugins
    "requirejs/require.js": "requirejs/require.js",
    "require-css/css.js": "requirejs/require-css.js",
    "requirejs-text/text.js": "requirejs/require-text.js",

    // vue
    "vue/dist/vue.js": "vue/vue.js",
    "vue-router/dist/vue-router.js": "vue/vue-router.js",
};

for (let filepath in files) {
    let dist = config.support(files[filepath]);
    mkdir(path.dirname(dist));
    fs.copyFileSync(config.root("node_modules", filepath), dist);
}
