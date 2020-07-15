const fs = require("fs");
const path = require("path");
const config = require("./config.js");
const mkdir = require("./utils/mkdir.js");
const maps = require("./map.project-deps.js");

const level = ['min', 'src'];

function copy(copytype = 'src', support = config.support()) {
    let point = level.indexOf(copytype);

    for (let libpath in maps) {
        let source = maps[libpath];
        let copyfrom = source[copytype] || source[level[point + 1]];
        let copyto = path.join(support, libpath);
        mkdir(path.dirname(copyto));
        fs.copyFileSync(config.root("node_modules", copyfrom), copyto);
    }
}

module.exports = copy;