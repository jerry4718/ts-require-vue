const fs = require("fs");
const path = require("path");
const shelljs = require("shelljs");
const mkdir = require("./utils/mkdir.js");


function copySync(from, to) {
    mkdir(path.dirname(to))
    fs.copyFileSync(from, to);
}

function removeSync(path) {
    shelljs.rm("-rf", path);
}

module.exports = {
    copySync,
    removeSync,
};