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

        function _copy(from, to) {
            if (fs.statSync(from).isDirectory()) {
                mkdir(to);
                let files = fs.readdirSync(from);
                for (let file_name of files) {
                    let file_path = path.join(from, file_name);
                    let stat = fs.statSync(file_path);
                    if (stat.isFile()) {
                        fs.copyFileSync(file_path, path.join(to, file_name));
                    }
                    else if (stat.isDirectory()) {
                        _copy(file_path, path.join(to, file_name))
                    }
                }
            } else {
                mkdir(path.dirname(to));
                fs.copyFileSync(from, to);
            }
        }

        _copy(copy_from, copy_to);
    }
}

module.exports = copy;
copy()