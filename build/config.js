const path = require('path');

const relDir = '..';
const rootDir = path.join(__dirname, relDir);
const srcDir = path.join(rootDir, 'src');
const distDir = path.join(rootDir, 'dist');
const supportDir = path.join(srcDir, '@libs');

function createJoinFunction(dir) {
    let join = path.join, slice = Array.prototype.slice;
    return function () {
        return join.apply(null, [].concat(dir, slice.apply(arguments)));
    };
}

exports.rel = createJoinFunction(relDir);
exports.root = createJoinFunction(rootDir);
exports.src = createJoinFunction(srcDir);
exports.dist = createJoinFunction(distDir);
exports.support = createJoinFunction(supportDir);

exports.rootDir = rootDir;
exports.srcDir = srcDir;
exports.distDir = distDir;
exports.supportDir = supportDir;
