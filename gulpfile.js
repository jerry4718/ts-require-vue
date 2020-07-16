const gulp = require("gulp");
const ts = require("gulp-typescript");
const minify = require('gulp-minify');
const rename = require('gulp-rename');
const notify = require('gulp-notify');
const uglify = require('gulp-uglify');
const fs = require("fs");
const config = require("./build/config.js");
const mkdir = require("./build/utils/mkdir.js");
const maps = require("./build/map.project-deps.js");
const tsProject = ts.createProject("tsconfig.json");
const { parallel, series, watch } = gulp;

let depsJsTempDir = config.root('__deps_js_temp');

gulp.task("copy:single", series(function (cb) {
    cb()
}))

function copyDeps(copytype = 'dev') {

    for (let libPath in maps) {
        let source = maps[libPath];
        if (copytype === "src") {
            let src = source['src'];
            let copy_to = path.join(depsJsTempDir, libPath)
            mkdir(path.dirname(copy_to));
            fs.copyFileSync(config.root("node_modules", src), copy_to);
        } else if (copytype === "min") {
            let src = source['src'];
            let copy_to = path.join(depsJsTempDir, libPath)
            mkdir(path.dirname(copy_to));
            fs.copyFileSync(config.root("node_modules", src), copy_to);
        }
        let copyfrom = source[copytype] || source[level[point + 1]];
        let copyto = path.join(support, libPath);
        mkdir(path.dirname(copyto));
        fs.copyFileSync(config.root("node_modules", copyfrom), copyto);
    }
}

gulp.task("copy:deps", function (cb) {

});

gulp.task("copy:deps：min", series(function (cb) {

}));

gulp.task("dist:ts", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js
        .pipe(gulp.dest("dist/app"));
});

gulp.task("dist:ts:uglify", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js
        .pipe(uglify())
        .pipe(gulp.dest("dist/app"));
});

gulp.task("copy:resources", function () {
    return gulp.src([
        "src/**",
        "!src/**/*.@(js|ts|scss)",
    ])
        .pipe(gulp.dest("dist"));
})

gulp.task("copy:lib", function () {
    return gulp.src("src/@libs/**/*.js")
        .pipe(gulp.dest("dist/@libs"));
})

gulp.task("copy:lib:minify", function () {
    return gulp.src("src/@libs/**/*.js")
        .pipe(minify({
            ext: {
                src: '-debug.js',
                min: '.js',
            }
        }))
        .pipe(gulp.dest("dist/@libs"));
})

gulp.task("copy:js", function () {
    return gulp.src([
        "src/**/*.js",
        "!src/@libs/**/*",
    ])
        .pipe(gulp.dest("dist"));
})

gulp.task("copy:js:uglify", function () {
    return gulp.src([
        "src/**/*.js",
        "!src/@libs/**/*",
    ])
        .pipe(uglify())
        .pipe(gulp.dest("dist"));
})

gulp.task('dist:dev', parallel('dist:ts', 'copy:resources', 'copy:js', 'copy:lib'));

gulp.task('dist:pro', parallel('dist:ts:uglify', 'copy:resources', 'copy:js:uglify', "copy:lib:minify"));

gulp.task('watch', function () {
    watch([ "src/**/*.js", "!src/@libs/**/*" ], parallel("copy:js"));
    watch([ "src/**/*.ts" ], parallel("dist:ts"));
    watch([ "src/**", "!src/**/*.@(js|ts|scss)" ], parallel('copy:resources'));
    watch([ "src/@libs/**/*.js" ], parallel('copy:lib'));
})