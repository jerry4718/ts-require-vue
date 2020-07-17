const fs = require("fs");
const path = require("path");
const config = require("./config.js");
const mkdir = require("./utils/mkdir.js");
const maps = require("./map.project-deps.js");

const level = ['min', 'src'];

function copy(copy_type = 'src', support = config.support()) {
    let point = level.indexOf(copy_type);

    for (let lib_path in maps) {
        let source = maps[lib_path];
        let copy_from = config.root("node_modules", source[copy_type] || source[level[point + 1]]);
        let copy_to = path.join(support, lib_path);
        if (fs.statSync(copy_from).isDirectory()) {
            mkdir(copy_to);
            let files = fs.readdirSync(copy_from);
            for (let file_name of files) {
                let file_path = path.join(copy_from, file_name);
                if (fs.statSync(file_path).isFile()) {
                    fs.copyFileSync(file_path, path.join(copy_to, file_name));
                }
            }
        } else {
            mkdir(path.dirname(copy_to));
            fs.copyFileSync(copy_from, copy_to);
        }
    }
}

module.exports = copy;
copy()